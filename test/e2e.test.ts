import { describe, test, beforeEach, expect, afterEach } from "vitest";
import { createMailevaClient, Maileva } from "../src/client";
import { env } from "process";

describe("MailevaClient", () => {
  let client: Maileva<"Sandbox">;

  beforeEach(() => {
    client = createMailevaClient({
      server: "Sandbox",
      credentials: {
        clientId: env.MAILEVA_CLIENT_ID!,
        clientSecret: env.MAILEVA_CLIENT_SECRET!,
        username: env.MAILEVA_USERNAME!,
        password: env.MAILEVA_PASSWORD!,
      },
    });
  });

  describe("mail", () => {
    let sendingId: undefined | string;

    afterEach(async () => {
      if (!sendingId) return;
      const { data, error } = await client.mail.DELETE(
        "/sendings/{sending_id}",
        {
          params: { path: { sending_id: sendingId } },
        },
      );
    });

    test("Send simple mail", async () => {
      // Sending

      const sendingResponse = await client.mail.POST("/sendings", {
        body: {
          name: "Test sending",
          archiving_duration: 0,
          color_printing: false,
          duplex_printing: false,
          optional_address_sheet: false,
          print_sender_address: false,
          treat_undelivered_mail: false,
        },
      });
      expect(sendingResponse.data).toBeDefined();
      const sendingData = sendingResponse.data!;
      sendingId = sendingData.id as string;

      // Recipient

      const recipientBody = {
        country_code: "FR" as const,
        address_line_1: "Maileva",
        address_line_2: "Mr Unit Test",
        address_line_3: "Résidence du test",
        address_line_4: "42 rue du test",
        address_line_5: "BP 1337",
        address_line_6: "75000 Paris",
      };
      const recipientResponse = await client.mail.POST(
        "/sendings/{sending_id}/recipients",
        {
          params: { path: { sending_id: sendingId } },
          body: recipientBody,
        },
      );
      expect(recipientResponse.data).toEqual({
        ...recipientBody,
        id: expect.any(String),
        status: "DRAFT",
      });

      // Document

      const documentContent = "Test content";
      const documentResponse = await client.mail.POST(
        "/sendings/{sending_id}/documents",
        {
          params: { path: { sending_id: sendingId } },
          bodySerializer: (body) => {
            const fd = new FormData();
            if (body) {
              if (body.metadata) {
                fd.append("metadata", JSON.stringify(body.metadata));
              }
              if (body.document) {
                fd.append("document", body.document);
              }
            }
            return fd;
          },
          body: {
            metadata: { name: "test.txt", priority: 1 },
            document: new File([documentContent], "test.txt", {
              type: "text/plain",
            }) as any,
          },
        },
      );
      expect(documentResponse.data).toEqual({
        id: expect.any(String),
        name: "test.txt",
        priority: 1,
        type: "text/plain",
        size: documentContent.length,
        converted_size: 0,
        pages_count: 0,
        sheets_count: 0,
      });

      // Submit

      const submitResponse = await client.mail.POST(
        "/sendings/{sending_id}/submit",
        {
          params: {
            path: { sending_id: sendingId },
          },
        },
      );
      expect(submitResponse.response.ok).toBeTruthy();
      sendingId = undefined;
    });
  });
});
