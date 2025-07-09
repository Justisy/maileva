import { Middleware } from "openapi-fetch";
import { authenticationApi } from "../api";
import { jwtDecode } from "jwt-decode";
import { components } from "../types/authentication";

export class AuthenticationError extends Error {
  constructor(
    message?: string,
    readonly errors?: components["schemas"]["Errors"],
  ) {
    super(message);
  }
}

export interface AccessTokenPayload {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  sid: string;
  acr: string;
  "allowed-origins": Array<string>;
  realm_access: {
    roles: Array<string>;
  };
  resource_access: {
    account: {
      roles: Array<string>;
    };
  };
  scope: string;
  email_verified: boolean;
  context: {
    profile: string;
    user: {
      code_client: string;
      account_user_id: string;
      contract_id: string;
      roles: string;
      last_name: string;
      company_reference: string;
      id: string;
      login: string;
      first_name: string;
      contract_demo: boolean;
      email: string;
    };
    client_id: string;
  };
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
}

export class Jwt<PayloadT extends { exp: number }> {
  constructor(
    readonly token: string,
    readonly payload: PayloadT,
  ) {}

  isExpired(delta = 10) {
    return this.payload.exp < Math.floor(Date.now() / 1_000) - delta;
  }

  static fromToken<PayloadT extends { exp: number }>(token: string) {
    const payload = jwtDecode(token) as PayloadT;
    return new Jwt(token, payload);
  }
}

export interface BearerAuthMiddlewareInit {
  authenticationClient: ReturnType<typeof authenticationApi.createClient>;
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  jwt?: Jwt<AccessTokenPayload>;
}

export const bearerAuthMiddleware = ({
  authenticationClient: authentifcationClient,
  clientId,
  clientSecret,
  password,
  username,
  jwt,
}: BearerAuthMiddlewareInit) => {
  let jwtPromise: Promise<Jwt<AccessTokenPayload>> | undefined;

  if (jwt) {
    jwtPromise = Promise.resolve(jwt);
  }

  const getToken = async () => {
    const { data, error } = await authentifcationClient.POST("/token", {
      body: {
        grant_type: "password",
        client_id: clientId,
        client_secret: clientSecret,
        username,
        password,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (data == null) {
      throw new AuthenticationError("Authentication failed", error);
    }
    const { access_token } = data;
    if (access_token == null) throw new Error("Missing access token");
    return Jwt.fromToken<AccessTokenPayload>(access_token);
  };

  return {
    onRequest: async ({ request }) => {
      if (jwtPromise == null) {
        jwtPromise = getToken();
      }
      let jwt = await jwtPromise;
      if (jwt.isExpired()) {
        jwtPromise = getToken();
        jwt = await jwtPromise;
      }
      request.headers.set("Authorization", `bearer ${jwt.token}`);
    },
  } satisfies Middleware;
};
