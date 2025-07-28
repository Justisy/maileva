import { describe, test, beforeEach, vi, expect } from "vitest";
import { sendMail } from "../../../src/utils";
import { SendMailParam } from "../../../src/utils/sendMail";

const createMockApi = () => {
  return {
    POST: vi.fn(),
    DELETE: vi.fn(),
  };
};

const createMockClient = () => {
  return {
    mail: createMockApi(),
  };
};

describe("sendMail", () => {
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
      archiving_duration: 1,
      color_printing: false,
      duplex_printing: false,
      optional_address_sheet: false,
      print_sender_address: true,
      treat_undelivered_mail: false,
    },
  } satisfies SendMailParam;

  beforeEach(() => {
    client = createMockClient();
  });

  test("it should call all API endpoints", async () => {
    client.mail.POST.mockResolvedValueOnce({ data: mockSending })
      .mockResolvedValueOnce({ data: mockRecipient })
      .mockResolvedValueOnce({ data: mockDocument })
      .mockResolvedValueOnce({});

    await sendMail(client as any, param);

    expect(client.mail.POST).toHaveBeenCalledTimes(4);

    expect(client.mail.POST).toHaveBeenNthCalledWith(1, "/sendings", {
      body: param.sending,
    });

    expect(client.mail.POST).toHaveBeenNthCalledWith(
      2,
      "/sendings/{sending_id}/recipients",
      {
        params: { path: { sending_id: "sending-id" } },
        body: param.recipient,
      },
    );

    expect(client.mail.POST).toHaveBeenNthCalledWith(
      3,
      "/sendings/{sending_id}/documents",
      {
        params: { path: { sending_id: "sending-id" } },
        bodySerializer: expect.anything(),
        body: {
          metadata: { name: "file.txt" },
          document: param.document,
        },
      },
    );

    expect(client.mail.POST).toHaveBeenNthCalledWith(
      4,
      "/sendings/{sending_id}/submit",
      { params: { path: { sending_id: "sending-id" } } },
    );
  });

  test("it should DELETE the mail if other API calls fail", async () => {
    client.mail.POST.mockResolvedValueOnce({
      data: mockSending,
    }).mockResolvedValueOnce({ error: "mock error" });

    await expect(sendMail(client as any, param)).rejects.toThrow("mock error");

    expect(client.mail.POST).toHaveBeenCalledTimes(2);
    expect(client.mail.DELETE).toHaveBeenCalledTimes(1);

    expect(client.mail.POST).toHaveBeenNthCalledWith(1, "/sendings", {
      body: param.sending,
    });

    expect(client.mail.POST).toHaveBeenNthCalledWith(
      2,
      "/sendings/{sending_id}/recipients",
      {
        params: { path: { sending_id: "sending-id" } },
        body: param.recipient,
      },
    );

    expect(client.mail.DELETE).toHaveBeenNthCalledWith(
      1,
      "/sendings/{sending_id}",
      { params: { path: { sending_id: "sending-id" } } },
    );
  });
});
