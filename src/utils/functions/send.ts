import { Maileva, MailevaServer } from "../../client";
import { SendParam, SendParamType } from "../../utils/types/send";
import { sendMail } from "./sendMail";
import { sendRegisteredMail } from "./sendRegisteredMail";

export const send = (maileva: Maileva<MailevaServer>, param: SendParam) => {
  switch (param.type) {
    case SendParamType.MAIL:
      return sendMail(maileva, param);
    case SendParamType.REGISTERED_MAIL:
      return sendRegisteredMail(maileva, param);
  }
};
