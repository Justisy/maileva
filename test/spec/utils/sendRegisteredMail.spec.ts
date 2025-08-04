import { describe, test, beforeEach, vi, expect } from "vitest";
import { sendRegisteredMail } from "@/utils/functions";

const createMockApi = () => {
  return {
    POST: vi.fn(),
    DELETE: vi.fn(),
  };
};

const createMockClient = () => {
  return {
    registeredMail: createMockApi(),
  };
};

describe("sendRegisteredMail", () => {
  let client: ReturnType<typeof createMockClient>;

  const mockSending = { id: "sending-id" };
  const mockDocument = { id: "document-id" };
  const mockRecipient = { id: "recipient-id" };

  const param = {
    document: new File(["part"], "file.txt"),
    recipient: {
      country_code: "FR",
      address_line_6: "3 rue du test",
    },
    sending: {
      name: "Registered mail",
      acknowledgement_of_receipt: true,
      postage_type: "FAST",
      reference_to_print_enabled: false,
      returned_mail_scanning: false,
      archiving_duration: 1,
      color_printing: false,
      duplex_printing: false,
      optional_address_sheet: false,
      print_sender_address: true,
    },
  } satisfies Parameters<typeof sendRegisteredMail>[1];

  beforeEach(() => {
    client = createMockClient();
  });

  test("it should call all API endpoints", async () => {
    client.registeredMail.POST.mockResolvedValueOnce({ data: mockSending })
      .mockResolvedValueOnce({ data: mockRecipient })
      .mockResolvedValueOnce({ data: mockDocument })
      .mockResolvedValueOnce({});

    await sendRegisteredMail(client as any, param);

    expect(client.registeredMail.POST).toHaveBeenCalledTimes(4);

    expect(client.registeredMail.POST).toHaveBeenNthCalledWith(1, "/sendings", {
      body: param.sending,
    });

    expect(client.registeredMail.POST).toHaveBeenNthCalledWith(
      2,
      "/sendings/{sending_id}/recipients",
      {
        params: { path: { sending_id: "sending-id" } },
        body: param.recipient,
      },
    );

    expect(client.registeredMail.POST).toHaveBeenNthCalledWith(
      3,
      "/sendings/{sending_id}/documents",
      {
        params: { path: { sending_id: "sending-id" } },
        bodySerializer: expect.anything(),
        body: {
          metadata: { name: "file.txt", priority: 1 },
          document: param.document,
        },
      },
    );

    expect(client.registeredMail.POST).toHaveBeenNthCalledWith(
      4,
      "/sendings/{sending_id}/submit",
      { params: { path: { sending_id: "sending-id" } } },
    );
  });

  test("it should DELETE the registeredMail if other API calls fail", async () => {
    client.registeredMail.POST.mockResolvedValueOnce({
      data: mockSending,
    }).mockResolvedValueOnce({ error: "mock error" });

    await expect(sendRegisteredMail(client as any, param)).rejects.toThrow(
      "mock error",
    );

    expect(client.registeredMail.POST).toHaveBeenCalledTimes(2);
    expect(client.registeredMail.DELETE).toHaveBeenCalledTimes(1);

    expect(client.registeredMail.POST).toHaveBeenNthCalledWith(1, "/sendings", {
      body: param.sending,
    });

    expect(client.registeredMail.POST).toHaveBeenNthCalledWith(
      2,
      "/sendings/{sending_id}/recipients",
      {
        params: { path: { sending_id: "sending-id" } },
        body: param.recipient,
      },
    );

    expect(client.registeredMail.DELETE).toHaveBeenNthCalledWith(
      1,
      "/sendings/{sending_id}",
      { params: { path: { sending_id: "sending-id" } } },
    );
  });
});
