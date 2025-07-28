import { Maileva, MailevaServer } from "../client";

export type MailevaUtilsFn<ParamT, ReturnT> = <ServerT extends MailevaServer>(
  maileva: Maileva<ServerT>,
  param: ParamT,
) => Promise<ReturnT>;
