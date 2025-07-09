import * as types from "./types";
import createClient, { ClientOptions } from "openapi-fetch";
  
export const authenticationApi = {
  version: "2-1b",
  servers: {["Production"]: "https://connexion.maileva.com/auth/realms/services/protocol/openid-connect", ["Sandbox"]: "https://connexion.sandbox.maileva.net/auth/realms/services/protocol/openid-connect"},
  security: [],
  createClient({
    baseUrl = "https://connexion.maileva.com/auth/realms/services/protocol/openid-connect",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.AuthenticationPaths>({...options, baseUrl});
  }
};

export const billingApi = {
  version: "1-5",
  servers: {["Production"]: "https://api.maileva.com/billing/v1"},
  security: ["bearerAuth", "oAuth2PasswordProduction", "oAuth2PasswordSandbox"],
  createClient({
    baseUrl = "https://api.maileva.com/billing/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.BillingPaths>({...options, baseUrl});
  }
};

export const electronicConsentsApi = {
  version: "1-9-1",
  servers: {["Production"]: "https://api.maileva.com/electronic_consents/v1", ["Sandbox"]: "https://api.sandbox.maileva.net/electronic_consents/v1"},
  security: [],
  createClient({
    baseUrl = "https://api.maileva.com/electronic_consents/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.ElectronicConsentsPaths>({...options, baseUrl});
  }
};

export const electronicMailEmitterApi = {
  version: "1-48b",
  servers: {["Production"]: "https://api.maileva.com/electronic_mail_emitter/v1", ["Sandbox"]: "https://api.sandbox.maileva.net/electronic_mail_emitter/v1"},
  security: [],
  createClient({
    baseUrl = "https://api.maileva.com/electronic_mail_emitter/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.ElectronicMailEmitterPaths>({...options, baseUrl});
  }
};

export const electronicQualifiedRegisteredMailApi = {
  version: "1-3",
  servers: {["Production"]: "https://api.maileva.com/electronic_qualified_registered_mail/v1", ["Sandbox"]: "https://api.sandbox.maileva.net/electronic_qualified_registered_mail/v1"},
  security: [],
  createClient({
    baseUrl = "https://api.maileva.com/electronic_qualified_registered_mail/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.ElectronicQualifiedRegisteredMailPaths>({...options, baseUrl});
  }
};

export const emailTemplatesApi = {
  version: "1-14",
  servers: {["Sandbox"]: "https://api.sandbox.maileva.net/email_templates/v1", ["Production"]: "https://api.maileva.com/email_templates/v1"},
  security: ["bearerAuth"],
  createClient({
    baseUrl = "https://api.maileva.com/email_templates/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.EmailTemplatesPaths>({...options, baseUrl});
  }
};

export const flowApi = {
  version: "1-26b",
  servers: {["Sandbox"]: "https://api.sandbox.maileva.net/flow/v1", ["Production"]: "https://api.maileva.com/flow/v1"},
  security: ["bearerAuth", "oAuth2PasswordProduction", "oAuth2PasswordSandbox"],
  createClient({
    baseUrl = "https://api.maileva.com/flow/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.FlowPaths>({...options, baseUrl});
  }
};

export const healthApi = {
  version: "1-1",
  servers: {["Sandbox"]: "https://api.sandbox.maileva.net/health/v1", ["Production"]: "https://api.maileva.com/health/v1"},
  security: ["bearerAuth", "oAuth2PasswordProduction", "oAuth2PasswordSandbox"],
  createClient({
    baseUrl = "https://api.maileva.com/health/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.HealthPaths>({...options, baseUrl});
  }
};

export const invoiceApi = {
  version: "1-20",
  servers: {["Sandbox"]: "https://api.sandbox.maileva.net/invoices/v1", ["Production"]: "https://api.maileva.com/invoices/v1"},
  security: ["bearerAuth"],
  createClient({
    baseUrl = "https://api.maileva.com/invoices/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.InvoicePaths>({...options, baseUrl});
  }
};

export const invoiceAddressBookApi = {
  version: "1-38",
  servers: {["Sandbox"]: "https://api.sandbox.maileva.net/invoice_address_book/v1", ["Production"]: "https://api.maileva.com/invoice_address_book/v1"},
  security: ["bearerAuth"],
  createClient({
    baseUrl = "https://api.maileva.com/invoice_address_book/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.InvoiceAddressBookPaths>({...options, baseUrl});
  }
};

export const mailApi = {
  version: "2-9b",
  servers: {["Sandbox"]: "https://api.sandbox.maileva.net/mail/v2", ["Production"]: "https://api.maileva.com/mail/v2"},
  security: ["bearerAuth", "oAuth2PasswordProduction", "oAuth2PasswordSandbox"],
  createClient({
    baseUrl = "https://api.maileva.com/mail/v2",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.MailPaths>({...options, baseUrl});
  }
};

export const notificationCenterApi = {
  version: "2-8",
  servers: {["Sandbox"]: "https://api.sandbox.maileva.net/notification_center/v2", ["Production"]: "https://api.maileva.com/notification_center/v2"},
  security: ["bearerAuth", "oAuth2PasswordProduction", "oAuth2PasswordSandbox"],
  createClient({
    baseUrl = "https://api.maileva.com/notification_center/v2",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.NotificationCenterPaths>({...options, baseUrl});
  }
};

export const realEstateApi = {
  version: "1-37",
  servers: {["Production"]: "https://api.maileva.com/real_estate/v1", ["Sandbox"]: "https://api.sandbox.maileva.net/real_estate/v1"},
  security: [],
  createClient({
    baseUrl = "https://api.maileva.com/real_estate/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.RealEstatePaths>({...options, baseUrl});
  }
};

export const registeredMailApi = {
  version: "4-9",
  servers: {["Sandbox"]: "https://api.sandbox.maileva.net/registered_mail/v4", ["Production"]: "https://api.maileva.com/registered_mail/v4"},
  security: ["bearerAuth", "oAuth2PasswordProduction", "oAuth2PasswordSandbox"],
  createClient({
    baseUrl = "https://api.maileva.com/registered_mail/v4",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.RegisteredMailPaths>({...options, baseUrl});
  }
};

export const securedElectronicMailApi = {
  version: "1-0",
  servers: {["Production"]: "https://api.maileva.com/secured_electronic_mail/v1", ["Sandbox"]: "https://api.sandbox.maileva.net/secured_electronic_mail/v1"},
  security: ["bearerAuth", "oAuth2PasswordProduction", "oAuth2PasswordSandbox"],
  createClient({
    baseUrl = "https://api.maileva.com/secured_electronic_mail/v1",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.SecuredElectronicMailPaths>({...options, baseUrl});
  }
};
