# 📦 Maileva · TypeScript SDK

> Client TypeScript non-officiel pour interagir avec l’ensemble des APIs Maileva à partir des spécifications OpenAPI. Basé sur [`openapi-fetch`](https://openapi-ts.dev/openapi-fetch).

## ✨ Fonctionnalités

- ✅ Support complet des **APIs Maileva** (mail, billing, registered mail, etc.)
- 🔐 Authentification OAuth2 automatique via `client_credentials` et `password`
- 🧪 Typage strict basé sur les schémas OpenAPI
- 🌍 Gestion multi-environnement : Sandbox & Production
- ⚙️ Middleware `bearerAuth` injecté automatiquement sur les APIs protégées

---

## 🛠️ Installation

```bash
npm install maileva
```

---

## 🚀 Utilisation

### Initialisation

```ts
import { createMailevaClient } from "maileva";

const client = createMailevaClient({
  server: "Sandbox", // ou "Production"
  credentials: {
    clientId: process.env.MAILEVA_CLIENT_ID!,
    clientSecret: process.env.MAILEVA_CLIENT_SECRET!,
    username: process.env.MAILEVA_USERNAME!,
    password: process.env.MAILEVA_PASSWORD!,
  },
});
```

### Exemple : envoi d’un courrier (API `mail`)

```ts
const sending = await client.mail.POST("/sendings", {
  body: {
    name: "Test",
    color_printing: false,
    duplex_printing: false,
    archiving_duration: 0,
    optional_address_sheet: false,
    print_sender_address: false,
    treat_undelivered_mail: false,
  },
});

const sendingId = sending.data?.id;

await client.mail.POST("/sendings/{sending_id}/recipients", {
  params: { path: { sending_id: sendingId! } },
  body: {
    country_code: "FR",
    address_line_1: "Maileva",
    address_line_2: "Mr Unit Test",
    address_line_3: "Résidence du test",
    address_line_4: "42 rue du test",
    address_line_5: "BP 1337",
    address_line_6: "75000 Paris",
  },
});

await client.mail.POST("/sendings/{sending_id}/documents", {
  params: { path: { sending_id: sendingId! } },
  bodySerializer: (body) => {
    const form = new FormData();
    form.append("metadata", JSON.stringify(body.metadata));
    form.append("document", body.document);
    return form;
  },
  body: {
    metadata: { name: "test.txt", priority: 1 },
    document: new File(["Hello"], "test.txt", { type: "text/plain" }) as any,
  },
});

await client.mail.POST("/sendings/{sending_id}/submit", {
  params: { path: { sending_id: sendingId! } },
});
```

---

## 📚 APIs disponibles

Le client expose automatiquement les APIs compatibles avec l’environnement (`Sandbox` ou `Production`). Voici la liste :

| Nom du client (`client.XXX`)        | API Maileva                          |
| ----------------------------------- | ------------------------------------ |
| `authentication`                    | Authentification OAuth2              |
| `billing`                           | Facturation                          |
| `electronicConsents`                | Consentements électroniques          |
| `electronicMailEmitter`             | Envoi de mails électroniques simples |
| `electronicQualifiedRegisteredMail` | Courrier recommandé qualifié         |
| `emailTemplates`                    | Modèles d’emails                     |
| `flow`                              | Workflows documentaires              |
| `health`                            | Monitoring & disponibilité           |
| `invoice`                           | Factures émises                      |
| `invoiceAddressBook`                | Carnet d’adresses de facturation     |
| `mail`                              | Courrier postal                      |
| `notificationCenter`                | Centre de notifications              |
| `realEstate`                        | Immobilier                           |
| `registeredMail`                    | Courrier recommandé électronique     |
| `securedElectronicMail`             | Email sécurisé                       |

---

## 🧪 Tests

Le projet utilise [`vitest`](https://vitest.dev/) pour les tests unitaires.

```bash
npm run test
```

Un test de bout en bout de l’envoi d’un courrier via `mail` est fourni dans `tests/client.test.ts`.

---

## ⚙️ Authentification

Le SDK utilise automatiquement un middleware `bearerAuth` injecté sur toutes les APIs nécessitant un jeton. Le token est obtenu via l’API d’authentification Maileva.

---

## 📁 Structure interne

```ts
createMailevaClient({
  server: "Sandbox",
  credentials: { ... }
}) => {
  authentication: ...,
  mail: ...,
  billing: ...,
  ...
}
```

Chaque propriété correspond à une API Maileva, typée à partir de son OpenAPI et instanciée avec `openapi-fetch`.

---

## 🔒 Sécurité

Les APIs qui requièrent un jeton OAuth2 sont automatiquement protégées via le middleware `bearerAuth`. Si une API ne supporte pas `Sandbox`, elle ne sera tout simplement pas exposée.

---

## 📄 Licence

MIT
