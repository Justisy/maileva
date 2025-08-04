import { describe, test, beforeEach, vi, expect } from "vitest";
import * as sendMailModule from "@/utils/functions/sendMail";
import * as sendRegisteredMailModule from "@/utils/functions/sendRegisteredMail";
import { send } from "@/utils/functions";
import {
  SendMailParam,
  SendParamType,
  SendRegisteredMailParam,
} from "@/utils/types/send";

describe("send", () => {
  let client: any;

  beforeEach(() => {
    client = "client";
  });

  test("it should call sendMail when using MAIL type", async () => {
    let sendMailMock = vi.spyOn(sendMailModule, "sendMail");
    sendMailMock.mockImplementationOnce(() =>
      Promise.resolve("sendMailResult" as any),
    );
    const param = {
      type: SendParamType.MAIL,
    } as SendMailParam;
    const result = await send(client, param);
    expect(sendMailMock).toHaveBeenCalledExactlyOnceWith(client, param);
    expect(result).toEqual("sendMailResult");
  });

  test("it should call sendMail when using REGISTERED_MAIL type", async () => {
    let sendRegisteredMailMock = vi.spyOn(
      sendRegisteredMailModule,
      "sendRegisteredMail",
    );
    sendRegisteredMailMock.mockImplementationOnce(() =>
      Promise.resolve("sendRegisteredMailResult" as any),
    );
    const param = {
      type: SendParamType.REGISTERED_MAIL,
    } as SendRegisteredMailParam;
    const result = await send(client, param);
    expect(sendRegisteredMailMock).toHaveBeenCalledExactlyOnceWith(
      client,
      param,
    );
    expect(result).toEqual("sendRegisteredMailResult");
  });
});
