import { components as MailComponents } from "../../types/mail";
import { components as RegisteredMailComponents } from "../../types/registered-mail";

export enum SendParamType {
  MAIL,
  REGISTERED_MAIL,
}

export interface SendMailParam {
  type: SendParamType.MAIL;
  sending: MailComponents["schemas"]["sending_creation"];
  recipient: MailComponents["schemas"]["recipient_creation"];
  document: File;
}

export interface SendRegisteredMailParam {
  type: SendParamType.REGISTERED_MAIL;
  sending: RegisteredMailComponents["schemas"]["sending_creation"];
  recipient: RegisteredMailComponents["schemas"]["recipient_creation"];
  document: File;
}

export type SendParam = SendMailParam | SendRegisteredMailParam;
