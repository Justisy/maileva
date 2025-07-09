export interface paths {
    "/subscriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des abonnements
         * @description Permet d'obtenir la liste des abonnements.
         *
         *      Il est possible de rajouter un attribut dans les paramètres afin de filtrer la liste des envois. La liste des envois peut être paginée. Par défaut, la pagination est de 50 résultats. Elle peut être modifiée pour atteindre jusqu'à 500 résultats.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Le premier élément à retourner */
                    start_index?: components["parameters"]["paging_start_index"];
                    /** @description Le nombre d'élément à retourner */
                    count?: components["parameters"]["paging_count"];
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["subscriptions_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
            };
        };
        put?: never;
        /**
         * Création d'un abonnement
         * @description Permet de s'abonner aux notifications de suivi d'une ressource.
         *
         *     Indiquer le type d'évènement, le type de ressource, ainsi que votre URL de callback.
         *
         *     L'abonnement sera créé pour l'application (client_id) et l'utilisateur avec lesquels vous vous êtes authentifié.
         *
         *     Lorque l'évènement se produit sur une ressource du type indiqué et que cette ressource a été créée
         *     avec votre application et votre utilisateur, alors votre URL de callback sera appelée selon les
         *     spécifications figurant dans l'onglet "Callbacks" ci-dessous.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["subscription_creation"];
                };
            };
            responses: {
                /** @description Successful operation */
                201: {
                    headers: {
                        /** @description URL vers le détail de la ressource */
                        Location?: string;
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["subscription_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/{subscription_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un abonnement
         * @description Permet de récupérer le détail d'un abonnement à partir de son identifiant.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'abonnement */
                    subscription_id: components["parameters"]["subscription_id"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["subscription_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Suppression d'un abonnement
         * @description Permet de supprimer un abonnement.
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'abonnement */
                    subscription_id: components["parameters"]["subscription_id"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful operation */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /**
         * Modification d'un abonnement
         * @description Permet de modifier une abonnement :
         *     - L'URL de callback
         *     - l'authentification
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'abonnement */
                    subscription_id: components["parameters"]["subscription_id"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/merge-patch+json": components["schemas"]["subscription_modification"];
                };
            };
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        /** @description URL vers le détail de la ressource */
                        Location?: string;
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["subscription_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des notifications
         * @description Permet d'obtenir la liste des notifications.
         *
         *      Il est possible de rajouter un attribut dans les paramètres afin de filtrer la liste des notifications. La liste des notifications peut être paginée. Par défaut, la pagination est de 50 résultats. Elle peut être modifiée pour atteindre jusqu'à 500 résultats.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Le premier élément à retourner */
                    start_index?: components["parameters"]["paging_start_index"];
                    /** @description Le nombre d'élément à retourner */
                    count?: components["parameters"]["paging_count"];
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["notifications_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications/{notification_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'une notification
         * @description Cette API permet de récupérer une notification à partir de son identifiant.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la notification */
                    notification_id: components["parameters"]["notification_id"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["notification_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications/{notification_id}/content": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Contenu d'une notification
         * @description Cette API permet de récupérer le contenu d'une notification à partir de son identifiant.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la notification */
                    notification_id: components["parameters"]["notification_id"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["notification_content_creation"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications/{notification_id}/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Rejoue des notifications
         * @description Permet de rejouer les notifications.
         *
         *     En cas d'échec lors de la première tentative de notification,
         *     Maileva fera jusqu'à 10 autres tentatives :
         *     - 2ème tentative : 10 min après la 1ère tentative
         *     - 3ème tentative : 10 min après la 2ème tentative
         *     - 4ème tentative : 20 min après la 3ème tentative
         *     - 5ème tentative : 30 min après la 4ème tentative
         *     - 6ème tentative : 50 min après la 5ème tentative
         *     - 7ème tentative : 80 min après la 6ème tentative
         *     - 8ème tentative : 130 min après la 7ème tentative
         *     - 9ème tentative : 210 min après la 8ème tentative
         *     - 10ème tentative : 340 min après la 9ème tentative
         *
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la notification */
                    notification_id: components["parameters"]["notification_id"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        /** @description URL vers le détail de la ressource */
                        Location?: string;
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["notification_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["errors_response"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
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
        /** @description Paramètres d'authentification à l'URL de callback (si nécessaire). */
        authentication: {
            basic?: components["schemas"]["basic"];
            oauth2?: components["schemas"]["oauth2"];
        };
        basic: {
            /**
             * @description ID de l'utilisateur
             * @example company.name
             */
            login?: string;
            /**
             * @description Mot de passe de l'utilisateur
             * @example Company2020!
             */
            password?: string;
        };
        /**
         * @description Type d'évènement
         * @example ON_STATUS_ACCEPTED
         * @enum {string}
         */
        event_type: "ON_STATUS_ACCEPTED" | "ON_STATUS_REJECTED" | "ON_STATUS_PROCESSED" | "ON_STATUS_PROCESSED_WITH_ERRORS" | "ON_DEPOSIT_PROOF_RECEIVED" | "ON_GLOBAL_DEPOSIT_PROOF_RECEIVED" | "ON_CONTENT_PROOF_RECEIVED" | "ON_ACKNOWLEDGEMENT_OF_RECEIPT_RECEIVED" | "ON_STATUS_ARCHIVED" | "ON_DELIVERY_STATUS_MAIL_INVOICE_UNDELIVERED" | "ON_DELIVERY_STATUS_PORTAL_INVOICE_RECEIVED" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_SENT" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_RECEIVED" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_RECIPIENT_UNSUBSCRIBED" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_BLOCKED" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_HARD_BOUNCED" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_INVALID_DOMAIN" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_COMPLAINT" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_SOFT_BOUNCED" | "ON_DELIVERY_STATUS_EMAIL_INVOICE_INVALID_RECIPIENT" | "ON_DELIVERY_STATUS_CHORUS_INVOICE_DEPOSITED" | "ON_DELIVERY_STATUS_CHORUS_INVOICE_RECEIVED" | "ON_DELIVERY_STATUS_CHORUS_INVOICE_INVALID_RECIPIENT" | "ON_DELIVERY_STATUS_CHORUS_INVOICE_REJECTED" | "ON_DELIVERY_STATUS_CHORUS_INVOICE_SUSPENDED" | "ON_DELIVERY_STATUS_CHORUS_INVOICE_ACCOUNTANT_RECEIVED" | "ON_DELIVERY_STATUS_CHORUS_INVOICE_PAYMENT" | "ON_DELIVERY_STATUS_CHORUS_INVOICE_INCOMPLETE" | "ON_UNDELIVERED_MAIL_RECEIVED" | "ON_MAIN_DELIVERY_STATUS_FIRST_PRESENTATION" | "ON_MAIN_DELIVERY_STATUS_DELIVERED" | "ON_MAIN_DELIVERY_STATUS_UNDELIVERED";
        /** @description Description de l'erreur */
        error_response: {
            code: string;
            message: string;
        };
        errors_response: {
            errors?: components["schemas"]["error_response"][];
        };
        /** @description notification */
        notification_content_creation: {
            /**
             * @description Source de la notification
             * @example api.maileva.com
             */
            source?: string;
            /**
             * @description Identifiant de l'utilisateur à qui appartient la ressource
             * @example 12345678-c014-4923-9bb9-497addd5e901
             */
            user_id?: string;
            /**
             * @description Identifiant de l'application qui a permis de créer la ressource
             * @example f5e22e36-c014-4923-9bb9-497addd5e901
             */
            client_id?: string;
            event_type?: components["schemas"]["event_type"];
            /**
             * @description Type de ressource
             * @example mail/v2/sendings
             */
            resource_type?: string;
            /**
             * Format: date-time
             * @description Date de l'événement
             * @example 2017-10-02T10:23:31.137Z
             */
            event_date?: string;
            /**
             * @description Lieu de l'événement
             * @example FR
             */
            event_location?: string;
            /**
             * @description Identifiant de la ressource
             * @example e6118f29-89c3-41e5-82e8-00cb0b7b1b0c
             */
            resource_id?: string;
            /**
             * @description URL vers la ressource
             * @example https://api.maileva.com/mail/v2/sendings/e6118f29-89c3-41e5-82e8-00cb0b7b1b0c
             */
            resource_location?: string;
            /**
             * @description Identifiant de la ressource défini par le client
             * @example order1234
             */
            resource_custom_id?: string;
            /**
             * @description Information spécifique définie avec le client
             * @example my_data
             */
            resource_custom_data?: string;
        };
        oauth2: {
            /**
             * @description URL d'authentification
             * @example https:/api.mycompany.com/authentication/oauth2/token
             */
            oauth2_server?: string;
            /**
             * @description ID de l'application cliente
             * @example 1e47f791d11f66008e770bf7fac91420
             */
            client_id?: string;
            /**
             * @description Mot de passe de l'application cliente
             * @example 49ac03ec6d50039268e61681aab7299b
             */
            client_secret?: string;
            /**
             * @description Type d'authentification
             * @example client_credentials
             * @enum {string}
             */
            grant_type?: "client_credentials";
        };
        /** @description Pagination des résultats */
        paging_response: {
            /** @description Page suivante */
            next?: string;
            /** @description Page précédente */
            prev?: string;
            /** @description Nombre de résultats */
            total_results?: number;
        };
        /**
         * @description Type de ressource
         * @example mail/v2/sendings
         * @enum {string}
         */
        resource_type: "mail/v2/sendings" | "mail/v2/recipients" | "registered_mail/v4/sendings" | "registered_mail/v4/recipients" | "registered_mail/v2/sendings" | "registered_mail/v2/recipients" | "invoices/v1/sendings" | "invoices/v1/recipients";
        subscription_creation: {
            event_type?: components["schemas"]["event_type"];
            resource_type?: components["schemas"]["resource_type"];
            /**
             * @description URL du client pour le callback
             * @example https://api.mycompany.com/callback
             */
            callback_url?: string;
            authentication?: components["schemas"]["authentication"];
        };
        subscription_response: {
            /**
             * @description ID de l'abonnement
             * @example a26d3c9f-9e21-4653-ab42-5589cd366523
             */
            id?: string;
            /**
             * @description Type d'événement sur la ressource
             * @example ON_STATUS_ACCEPTED
             */
            event_type?: string;
            /**
             * @description Type de ressource
             * @example mail/v2/sendings
             */
            resource_type?: string;
            /**
             * @description URL du client pour le callback
             * @example https://api.mycompany.com/callback
             */
            callback_url?: string;
            authentication?: components["schemas"]["authentication"];
        };
        /** @description Les abonnements aux notifications */
        subscriptions_response: {
            subscriptions?: components["schemas"]["subscription_response"][];
            paging?: components["schemas"]["paging_response"];
        };
        subscription_modification: {
            /**
             * @description URL du client pour le callback
             * @example https://api.mycompany.com/callback
             */
            callback_url?: string;
            authentication?: components["schemas"]["authentication"];
        };
        notification_response: {
            /**
             * @description Identifiant de la notification
             * @example 6122ef17-de76-467d-a44b-b7cdb8656808
             */
            id?: string;
            /**
             * @description Identifiant de l'abonnement
             * @example 6122ef17-de76-467d-a44b-b7cdb8656909
             */
            subscription_id?: string;
            /**
             * @description Statut de la notification
             *       <table border="1">
             *         <tr bgcolor="lightgrey">
             *           <th>&nbsp; <strong>Valeurs</strong></th>
             *           <th>&nbsp; <strong>Détails</strong></th>
             *         </tr>
             *         <tr>
             *           <td>"PENDING"</td>
             *           <td>Tentatives d'envoi en cours</td>
             *         </tr>
             *         <tr>
             *           <td>"SENT"</td>
             *           <td>Notification envoyée</td>
             *         </tr>
             *         <tr>
             *           <td>"MAX_RETRY"</td>
             *           <td>Notification échouée. Le nombre maximum de tentatives a été atteint.</td>
             *         </tr>
             *       </table>
             * @example SENT
             * @enum {string}
             */
            status?: "PENDING" | "SENT" | "MAX_RETRY";
            /**
             * @description Nombre de tentatives
             * @example 2
             */
            attempt_count?: number;
            /**
             * Format: date-time
             * @description Date de la première tentative
             * @example 2017-10-02T10:23:31.137Z
             */
            first_attempt_date?: string;
            /**
             * Format: date-time
             * @description Date de la dernière tentative
             * @example 2017-10-02T10:23:31.137Z
             */
            last_attempt_date?: string;
            /**
             * @description Code HTTP retourné par le callback
             * @example 200
             */
            last_response_code?: number;
            /**
             * @description Type de ressource
             * @example mail/v1/sendings
             */
            resource_type?: string;
            /**
             * @description Identifiant de la ressource
             * @example e6118f29-89c3-41e5-82e8-00cb0b7b1b0c
             */
            resource_id?: string;
            /**
             * @description Identifiant de la ressource défini par le client
             * @example order1234
             */
            resource_custom_id?: string;
            /**
             * @description Information spécifique définie avec le client
             * @example my_data
             */
            resource_custom_data?: string;
        };
        notifications_response: {
            notifications?: components["schemas"]["notification_response"][];
            paging?: components["schemas"]["paging_response"];
        };
    };
    responses: never;
    parameters: {
        /** @description Identifiant de l'abonnement */
        subscription_id: string;
        /** @description Identifiant de la notification */
        notification_id: string;
        /** @description Le premier élément à retourner */
        paging_start_index: number;
        /** @description Le nombre d'élément à retourner */
        paging_count: number;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
