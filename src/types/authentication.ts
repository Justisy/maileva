export interface paths {
    "/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * demande de jeton d'authentification
         * @description Permet d'obtenir un jeton d'authentification OAuth2 utilisant le mode d'authentification `Ressource Owner Password Credentials` de demander un `rafraichisssement de jeton`.
         *     Il est aussi possible de faire un `échange de jeton` à condition de demander les droits nécessaires aupès du service client.
         *
         *     Mode `Ressource Owner Password Credentials`
         *     Le paramètre *grant_type* doit être positionné à *password*.
         *     Les paramètres *username*,  *password*, *client_id* et *client_secret* sont obligatoires.
         *
         *
         *     Mode `token exchange`
         *     Cela se passe en trois étapes :
         *
         *     #### Appel 1 : demander un jeton en tant qu’admin ####
         *
         *     ```
         *     curl --location 'https://connexion.maileva.com/auth/realms/services/protocol/openid-connect/token' \
         *          --header 'Content-Type: application/x-www-form-urlencoded' \
         *          --data-urlencode 'grant_type=password' \
         *          --data-urlencode 'client_id=appli.123' \
         *          --data-urlencode 'client_secret=mdp123' \
         *          --data-urlencode 'username=login_admin' \
         *          --data-urlencode 'password=mdp_admin'
         *     ```
         *
         *     #### Appel 2 : demander à faire du "token exchange" en fournissant le jeton de l’appel 1. ####
         *     ```
         *     curl --location 'https://connexion.maileva.com/auth/realms/services/protocol/openid-connect/token' \
         *          --header 'Content-Type: application/x-www-form-urlencoded' \
         *          --data-urlencode 'grant_type=urn:ietf:params:oauth:grant-type:token-exchange' \
         *          --data-urlencode 'client_id=appli.123' \
         *          --data-urlencode 'client_secret=mdp123' \
         *          --data-urlencode 'subject_token=token_issu_de_appel_1' \
         *          --data-urlencode 'subject_token_type=urn:ietf:params:oauth:token-type:access_token'
         *     ```
         *
         *     #### Appel 3 : préciser l’utilisateur sur lequel se substituer en fournissant le jeton de l’appel 2 ainsi que le login de l'utilisateur ####
         *     ```
         *     curl --location 'https://connexion.maileva.com/auth/realms/services/protocol/openid-connect/token' \
         *          --header 'Content-Type: application/x-www-form-urlencoded' \
         *          --data-urlencode 'grant_type=urn:ietf:params:oauth:grant-type:token-exchange' \
         *          --data-urlencode 'client_id=appli.123' \
         *          --data-urlencode 'client_secret=mdp123' \
         *          --data-urlencode 'subject_token=token_issu_de_appel_2' \
         *          --data-urlencode 'requested_token_type=urn:ietf:params:oauth:token-type:access_token' \
         *          --data-urlencode 'requested_subject=jean.dupont'
         *     ```
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/x-www-form-urlencoded": {
                        /**
                         * @description Mode d’authentification
                         *     <table border="1">
                         *       <tr bgcolor="lightgrey">
                         *         <th>grant_type</th>
                         *         <th>description</th>
                         *       </tr>
                         *       <tr>
                         *         <td>password</td>
                         *         <td><a href="https://auth0.com/docs/flows/resource-owner-password-flow" target="_blank">Resource Owner Password</a></td>
                         *       </tr>
                         *       <tr>
                         *         <td>client_credentials</td>
                         *         <td><a href="https://auth0.com/docs/flows/client-credentials-flow" target="_blank">Client Credentials</a>
                         *           <br /><font color="red">Non implémenté pour Maileva</font></td>
                         *       </tr>
                         *       <tr>
                         *         <td>implicit</td>
                         *         <td><a href="https://auth0.com/docs/flows/implicit-flow-with-form-post" target="_blank">Implicit</a>
                         *           <br /><font color="red">Non implémenté pour Maileva</font></td>
                         *       </tr>
                         *       <tr>
                         *         <td>authorization_code</td>
                         *         <td><a href="https://auth0.com/docs/flows/authorization-code-flow" target="_blank">Authorization Code</a>
                         *           <br /><font color="red">Non implémenté pour Maileva</font></td>
                         *
                         *       </tr>
                         *       <tr>
                         *         <td>refresh_token</td>
                         *         <td><a href="https://auth0.com/docs/tokens/refresh-tokens/use-refresh-tokens" target="_blank">Refresh Token</a></td>
                         *       </tr>
                         *       <tr>
                         *         <td>urn:ietf:params:oauth:grant-type:token-exchange</td>
                         *         <td>Token Exchange</td>
                         *       </tr>
                         *     </table>
                         * @enum {string}
                         */
                        grant_type: "password" | "client_credentials" | "implicit" | "authorization_code" | "refresh_token" | "urn:ietf:params:oauth:grant-type:token-exchange";
                        /**
                         * @description Identifiant de l’utilisateur Maileva
                         * @example jean.dupont
                         */
                        username?: string;
                        /**
                         * @description Mot de passe de l’utilisateur Maileva
                         * @example test123
                         */
                        password?: string;
                        /**
                         * @description Identifiant de l'application
                         * @example appli.123
                         */
                        client_id?: string;
                        /**
                         * @description Mot de passe de l'application
                         * @example mdp123
                         */
                        client_secret?: string;
                        /**
                         * @description Jeton utilisé pour faire du "token exchange"
                         * @example todo
                         */
                        subject_token?: string;
                        /**
                         * @description Indiquer 'urn:ietf:params:oauth:token-type:access_token' pour du "token exchange"
                         * @example urn:ietf:params:oauth:token-type:access_token
                         */
                        subject_token_type?: string;
                        /**
                         * @description Indiquer 'urn:ietf:params:oauth:token-type:access_token' pour du "token exchange"
                         * @example urn:ietf:params:oauth:token-type:access_token
                         */
                        requested_token_type?: string;
                        /**
                         * @description Utilisateur pour lequel on demande un "token exchange"
                         * @example jean.dupont
                         */
                        requested_subject?: string;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Token_Response"];
                    };
                };
                /** @description (Bad request) */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description (Unauthorized) les identifiants de l'application cliente ou les  identifiants de l'utilisateur sont invalides */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description (Forbidden) l'application cliente n'est pas autorisée ou n'est pas enregistrée sur le mode `Ressource Owner Password Credentials` ou `Client Credentials` */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description (Bad Request) un des paramètres requis est manquant */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Description de l'erreur */
        Error: {
            code?: string;
            message?: string;
        };
        /** @description Liste des erreurs */
        Errors: {
            errors?: components["schemas"]["Error"][];
        };
        Token_Response: {
            /** @description Jeton d'accès à utiliser lors des appels API */
            access_token?: string;
            /** @description Délai d'expiration du token (en secondes) */
            expires_in?: number;
            /** @description Délai d'expiration du token de rafraichissement (en secondes) */
            refresh_expires_in?: number;
            /** @description Jeton de rafraichissement à utiliser quand le jeton d'accès est expiré et avant que le jeton de rafraichissement soit expiré */
            refresh_token?: string;
            /** @description Type de jeton (toujours Bearer pour Maileva) */
            token_type?: string;
            /** @description Usage interne */
            id_token?: string;
            /** @description Usage interne */
            "not-before-policy"?: number;
            /** @description Usage interne */
            "session_state scope"?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
