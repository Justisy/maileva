import { Maileva, MailevaServer } from "../client";
import { components as MailComponents } from "../types/mail";

const unwrap = <DataT>(response: { data?: DataT; error?: unknown }) => {
  if (response.error != null) {
    throw response.error;
  }
  return response.data as DataT;
};

export interface SendMailParam {
  sending: MailComponents["schemas"]["sending_creation"];
  recipient: MailComponents["schemas"]["recipient_creation"];
  document: File;
}

export const sendMail = async <T extends MailevaServer>(
  maileva: Maileva<MailevaServer>,
  param: SendMailParam,
) => {
  const sending = unwrap(
    await maileva.mail.POST("/sendings", {
      body: param.sending,
    }),
  );

  if (sending.id == null) {
    throw new Error("Missing id on sending");
  }

  let recipient: MailComponents["schemas"]["recipient_response"];
  let document: MailComponents["schemas"]["document_response"];

  try {
    recipient = unwrap(
      await maileva.mail.POST("/sendings/{sending_id}/recipients", {
        params: { path: { sending_id: sending.id } },
        body: param.recipient,
      }),
    );

    document = unwrap(
      await maileva.mail.POST("/sendings/{sending_id}/documents", {
        params: { path: { sending_id: sending.id } },
        bodySerializer: (body) => {
          const form = new FormData();
          form.append("metadata", JSON.stringify(body.metadata));
          form.append("document", body.document as any);
          return form;
        },
        body: {
          metadata: { name: param.document.name },
          document: param.document as any,
        },
      }),
    );

    unwrap(
      await maileva.mail.POST("/sendings/{sending_id}/submit", {
        params: { path: { sending_id: sending.id } },
      }),
    );
  } catch (e) {
    await maileva.mail.DELETE("/sendings/{sending_id}", {
      params: { path: { sending_id: sending.id } },
    });
    throw e;
  }

  return {
    sending,
    recipient,
    document,
  };
};
