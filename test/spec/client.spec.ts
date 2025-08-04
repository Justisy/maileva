import { describe, expect, test } from "vitest";
import createMailevaClient from "@/client";

describe("createMailevaClient", () => {
  const credentials = {
    clientId: "MOCK_CLIENT_ID",
    clientSecret: "MOCK_CLIENT_SECRET",
    username: "MOCK_USERNAME",
    password: "MOCK_PASSWORD",
  };

  test("it should have the required sandbox APIs", () => {
    const client = createMailevaClient({
      server: "Sandbox",
      credentials,
    });

    expect(client.authentication).toBeDefined();
    expect((client as any).billing).toBeUndefined();
    expect(client.electronicConsents).toBeDefined();
    expect(client.electronicMailEmitter).toBeDefined();
    expect(client.electronicQualifiedRegisteredMail).toBeDefined();
    expect(client.emailTemplates).toBeDefined();
    expect(client.flow).toBeDefined();
    expect(client.invoiceAddressBook).toBeDefined();
    expect(client.invoice).toBeDefined();
    expect(client.mail).toBeDefined();
    expect(client.notificationCenter).toBeDefined();
    expect(client.realEstate).toBeDefined();
    expect(client.registeredMail).toBeDefined();
    expect(client.securedElectronicMail).toBeDefined();
  });

  test("it should have the required production APIs", () => {
    const client = createMailevaClient({
      server: "Production",
      credentials,
    });

    expect(client.authentication).toBeDefined();
    expect(client.billing).toBeDefined();
    expect(client.electronicConsents).toBeDefined();
    expect(client.electronicMailEmitter).toBeDefined();
    expect(client.electronicQualifiedRegisteredMail).toBeDefined();
    expect(client.emailTemplates).toBeDefined();
    expect(client.flow).toBeDefined();
    expect(client.invoiceAddressBook).toBeDefined();
    expect(client.invoice).toBeDefined();
    expect(client.mail).toBeDefined();
    expect(client.notificationCenter).toBeDefined();
    expect(client.realEstate).toBeDefined();
    expect(client.registeredMail).toBeDefined();
    expect(client.securedElectronicMail).toBeDefined();
  });
});
