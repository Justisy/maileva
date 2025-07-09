import { describe, expect, test } from "vitest";
import {
  AccessTokenPayload,
  bearerAuthMiddleware,
  BearerAuthMiddlewareInit,
  Jwt,
} from "../src/auth/middleware";
import { authenticationApi } from "../src/api";
import { env } from "process";
import { MiddlewareCallbackParams } from "openapi-fetch";

describe("bearerAuthMiddleware", async () => {
  const createMiddleware = (options?: Partial<BearerAuthMiddlewareInit>) => {
    const authenticationClient = authenticationApi.createClient({
      baseUrl: authenticationApi.servers["Sandbox"],
    });

    return bearerAuthMiddleware({
      ...options,
      authenticationClient,
      clientId: env.MAILEVA_CLIENT_ID!,
      clientSecret: env.MAILEVA_CLIENT_SECRET!,
      username: env.MAILEVA_USERNAME!,
      password: env.MAILEVA_PASSWORD!,
    });
  };

  test("fetch token", async () => {
    let mockParam = {
      request: { headers: new Headers() },
    } as MiddlewareCallbackParams;

    const middleware = createMiddleware();

    await middleware.onRequest(mockParam);

    expect(mockParam.request.headers.get("Authorization")).to.match(
      /^bearer .+$/,
    );
  });

  test("provided token", async () => {
    let mockParam = {
      request: { headers: new Headers() },
    } as MiddlewareCallbackParams;

    const middleware = createMiddleware({
      jwt: new Jwt("TEST_TOKEN", {
        exp: Math.floor(Date.now() / 1_000) + 60,
      } as AccessTokenPayload),
    });

    await middleware.onRequest(mockParam);

    expect(mockParam.request.headers.get("Authorization")).to.eq(
      "bearer TEST_TOKEN",
    );
  });

  test("expired token", async () => {
    let mockParam = {
      request: { headers: new Headers() },
    } as MiddlewareCallbackParams;

    const middleware = createMiddleware({
      jwt: new Jwt("TEST_TOKEN", {
        exp: Math.floor(Date.now() / 1_000) - 60_000,
      } as AccessTokenPayload),
    });

    await middleware.onRequest(mockParam);

    expect(mockParam.request.headers.get("Authorization")).not.to.eq(
      "bearer TEST_TOKEN",
    );
  });
});
