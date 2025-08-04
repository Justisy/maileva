import { ClientOptions } from "openapi-fetch";
import * as apis from "./api";
import * as utils from "./utils/functions";
import {
  bearerAuthMiddleware,
  BearerAuthMiddlewareInit,
} from "./auth/middleware";

const apiSuffix = "Api";

type Apis = typeof apis;

type ApiSuffix = typeof apiSuffix;

export type MailevaServer<T extends keyof Apis = keyof Apis> = {
  [KeyT in T]: keyof Apis[KeyT]["servers"];
}[T];

type Utils = typeof utils;

export type Maileva<ServerT extends MailevaServer> = {
  [KeyT in keyof Apis as ServerT extends MailevaServer<KeyT>
    ? KeyT extends `${infer NameT}${ApiSuffix}`
      ? NameT
      : never
    : never]: ReturnType<Apis[KeyT]["createClient"]>;
} & {
  utils: {
    [KeyT in keyof Utils]: Utils[KeyT] extends (
      maileva: any,
      param: infer ParamT,
    ) => infer ReturnT
      ? (param: ParamT) => ReturnT
      : never;
  };
};

export interface MailevaInit<ServerT extends MailevaServer> {
  server: ServerT;
  credentials: Pick<
    BearerAuthMiddlewareInit,
    "clientId" | "clientSecret" | "username" | "password"
  >;
}

export const createMailevaClient = <ServerT extends MailevaServer>(
  { server, credentials }: MailevaInit<ServerT>,
  options?: ClientOptions,
): Maileva<ServerT> => {
  let clientApis: Record<
    string,
    ReturnType<Apis[keyof Apis]["createClient"]>
  > = {};

  const filteredApis: Record<string, Apis[keyof Apis]> = {};
  for (let [key, api] of Object.entries(apis)) {
    if (!key.endsWith(apiSuffix)) continue;
    if (!Object.keys(api.servers).includes(server)) continue;
    const shortKey = key.slice(0, key.length - apiSuffix.length);
    filteredApis[shortKey] = api;
  }

  for (let [key, api] of Object.entries(filteredApis)) {
    const apiClient = api.createClient({
      baseUrl: api.servers[server as keyof typeof api.servers],
      ...options,
    });
    clientApis[key] = apiClient;
  }

  const authenticationClient = clientApis.authentication as ReturnType<
    Apis["authenticationApi"]["createClient"]
  >;
  const middleware = bearerAuthMiddleware({
    ...credentials,
    authenticationClient,
  });

  for (let [key, { security }] of Object.entries(filteredApis)) {
    if (security == null || !(security as string[]).includes("bearerAuth")) {
      continue;
    }
    clientApis[key].use(middleware);
  }

  const clientUtils = {} as Maileva<ServerT>["utils"];

  const client = {
    ...clientApis,
    utils: clientUtils,
  } as Maileva<ServerT>;

  for (let [key, utilsFn] of Object.entries(utils)) {
    clientUtils[key as keyof typeof clientUtils] = ((param: unknown) => {
      return (utilsFn as any)(client, param);
    }) as any;
  }

  return client;
};

export default createMailevaClient;
