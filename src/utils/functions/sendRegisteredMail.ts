import { Maileva, MailevaServer } from "../../client";
import { components as RegisteredMailComponents } from "../../types/registered-mail";
import { unwrap } from "../../utils/lib";
import { SendRegisteredMailParam } from "../../utils/types/send";

export const sendRegisteredMail = async (
  maileva: Maileva<MailevaServer>,
  param: Omit<SendRegisteredMailParam, "type">,
) => {
  const sending = unwrap(
    await maileva.registeredMail.POST("/sendings", {
      body: param.sending,
    }),
  );
  if (sending.id == null) {
    throw new Error("Missing id on sending");
  }

  let recipient: RegisteredMailComponents["schemas"]["recipient_response"];
  let document: RegisteredMailComponents["schemas"]["document_response"];

  try {
    recipient = unwrap(
      await maileva.registeredMail.POST("/sendings/{sending_id}/recipients", {
        params: { path: { sending_id: sending.id } },
        body: param.recipient,
      }),
    );

    document = unwrap(
      await maileva.registeredMail.POST("/sendings/{sending_id}/documents", {
        params: { path: { sending_id: sending.id } },
        bodySerializer: (body) => {
          const form = new FormData();
          form.append("metadata", JSON.stringify(body.metadata));
          form.append("document", body.document as any);
          return form;
        },
        body: {
          metadata: { name: param.document.name, priority: 1 },
          document: param.document as any,
        },
      }),
    );

    unwrap(
      await maileva.registeredMail.POST("/sendings/{sending_id}/submit", {
        params: { path: { sending_id: sending.id } },
      }),
    );
  } catch (e) {
    await maileva.registeredMail.DELETE("/sendings/{sending_id}", {
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
