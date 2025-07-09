export interface paths {
    "/consents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Récupérer la liste des demandes de consentement
         * @description Permet de récupérer les demande de consentements. Il est possible de rajouter un attribut dans les paramètres afin de filtrer la liste des consentements. La liste des consentements peut être paginée. Par défaut, la pagination est de 50 résultats. Elle peut être modifiée pour atteindre jusqu''à 500 résultats.'
         */
        get: {
            parameters: {
                query?: {
                    /** @description Le premier élément à retourner */
                    start_index?: number;
                    /** @description Le nombre d'élément à retourner */
                    count?: number;
                    sort?: string;
                    desc?: string;
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
                        "application/json": components["schemas"]["consent_asks_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        put?: never;
        /**
         * Créer une demande de consentement
         * @description Permet de créer une demande de consentement
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
                    "application/json": components["schemas"]["consent_ask_creation"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["consent_ask_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
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
    "/consents/{consent_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Récupérer une demande de consentement
         * @description Permet de récupérer une demande de consentement
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la demande de consentement */
                    consent_id: string;
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
                        "application/json": components["schemas"]["consent_ask_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Supprimer la demande de consentement
         * @description Permet de supprimer la demande de consentement
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la demande de consentement */
                    consent_id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description No content */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/consents/{consent_id}/answers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Récupérer les réponses des consentements recueillis
         * @description Permet de récupérer les réponses d'une demande de consentement
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la demande de consentement */
                    consent_id: string;
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
                        "application/json": components["schemas"]["answers_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        put?: never;
        /**
         * Créer une réponse à une demande de consentement
         * @description Permet de créer une réponse à demande de consentement
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la demande de consentement */
                    consent_id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["answer_creation"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["answer_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
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
    "/consents/{consent_id}/requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Récupérer les réponses d'une demande de consentement
         * @description Permet de récupérer les réponses d'une demande de consentement
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la demande de consentement */
                    consent_id: string;
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
                        "application/json": components["schemas"]["requests_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        put?: never;
        /**
         * Soumettre une demande de consentement
         * @description Permet de soumettre une demande de consentement
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de la demande de consentement */
                    consent_id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["request_response"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
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
    "/consents/{consent_id}/download_proof": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Télécharger la preuve de consentement du destinataire
         * @description Permet de télécharger au format PDF le justificatif de consentement du destinataire.
         */
        get: operations["downloadDeliveryProof"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/consents_imports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Récupérer l'état d'un import étape par étape
         * @description Permet de récupérer l'état de l'import étape par étape
         */
        get: {
            parameters: {
                query?: {
                    /** @description Le premier élément à retourner */
                    start_index?: number;
                    /** @description Le nombre d'élément à retourner */
                    count?: number;
                    sort?: string;
                    desc?: string;
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
                        "application/json": components["schemas"]["ImportConsentsResponse"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        put?: never;
        /**
         * Démarrer un import étape par étape
         * @description Permet de démarrer un import étape par étape en upload un fichier de destinataires avec son mapping
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
                    "application/json": components["schemas"]["consent_asks_import_input"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportConsentResponse"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
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
    "/consents_imports/{consent_import_id}/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Valider la liste des destinataires des consentements
         * @description
         *     Permet de soumettre la liste des destinataires des consentements et de spécifier si une demande de consenement doit leur être envoyée
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'envoi */
                    consent_import_id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful operation */
                202: {
                    headers: {
                        /** @description URL vers le détail de la ressource */
                        Location?: string;
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
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
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
    "/consents_imports/{consent_import_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Récupérer l'état d'un import étape par étape
         * @description Permet de récupérer l'état de l'import étape par étape
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    consent_import_id: string;
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
                        "application/json": components["schemas"]["ImportConsentResponse"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Supprimer l'import étape par étape
         * @description Permer de supprimer l'import étape par étape
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    consent_import_id: string;
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
                    content?: never;
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/consents_imports/{consent_import_id}/recipients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail des destinataires
         * @description Permet de lister les destinataire d'un import étape par étape
         */
        get: {
            parameters: {
                query?: {
                    /** @description Le premier élément à retourner */
                    start_index?: number;
                    /** @description Le nombre d'élément à retourner */
                    count?: number;
                    sort?: string;
                    desc?: string;
                };
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    consent_import_id: string;
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
                        "application/json": components["schemas"]["consent_asks_imports_recipients"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Supprimer tous les destinataires
         * @description Permet de supprimer tous les destinataires
         */
        delete: {
            parameters: {
                query?: {
                    /** @description statut des destinataires importés */
                    status?: string;
                };
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    consent_import_id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description No content */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/consents_imports/{consent_import_id}/recipients/{recipient_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un destinataire
         * @description Permet de lister les données d'un destinataire d'un import étape par étape
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    consent_import_id: string;
                    /** @description Identifiant du destinataire */
                    recipient_id: string;
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
                        "application/json": components["schemas"]["consent_asks_imports_recipient"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Suppression d'un destinataire
         * @description Permet de supprimer un destinataire d'un import.
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    consent_import_id: string;
                    /** @description Identifiant du destinataire */
                    recipient_id: string;
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
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /**
         * Modification partielle d'un destinataire
         * @description Permet de modifier partiellement un destinataire
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    consent_import_id: string;
                    /** @description Identifiant du destinataire */
                    recipient_id: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["consent_asks_imports_recipient_update"];
                };
            };
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["consent_asks_imports_recipient"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ErrorsDto"];
                    };
                };
            };
        };
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ErrorDto: {
            code?: string;
            message?: string;
        };
        ErrorsDto: {
            errors?: components["schemas"]["ErrorDto"][];
        };
        Paging: {
            prev?: string;
            next?: string;
            /** Format: int64 */
            total_results?: number;
        };
        Event: {
            id_mail?: string;
            new_state?: string;
            proof_url?: string;
            view_date?: string;
            refused_date?: string;
            negligence_date?: string;
            id_consent?: string;
        };
        /** @description Mapping du fichier */
        mapping: {
            /**
             * @description Première ligne de données
             * @example 2
             */
            start_row?: number;
            /** @description Mapping des colonnes */
            data?: {
                column?: number[];
                /**
                 * @description champ du destinataire
                 * @enum {string}
                 */
                field?: "FIRST_NAME" | "LAST_NAME" | "EMAIL" | "COMPANY" | "WAITING_DURATION" | "CONSENT_STATUS" | "RESPONSE_DATE";
            }[];
        };
        /** @description ID de l'import à relier à l'envoi */
        ask_consents: {
            sender_id: string;
        };
        /** @description Destinataire de l'import */
        consent_asks_imports_recipient_update: {
            /**
             * @description Prénom du destinataire
             * @example jean
             */
            first_name?: string;
            /**
             * @description Nom du destinataire
             * @example Dupont
             */
            last_name?: string;
            /**
             * @description Adresse email du destinataire
             * @example jean.dupont@gmail.com
             */
            email?: string;
            /** @description Société du destinataire */
            company?: string;
            /**
             * @description Statut du consentement si to_ask est false
             * @enum {string}
             */
            consent_status?: "ACCEPTED" | "REFUSED";
            /** @description Date d'obtention du consentement */
            response_date?: string;
        };
        /** @description Destinataire de l'import */
        consent_asks_imports_recipient: {
            /**
             * @description Identifiant du destinataire
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id?: string;
            /**
             * @description Type de destinataire
             * @enum {string}
             */
            legal_status?: "PROFESSIONAL" | "INDIVIDUAL";
            /**
             * @description Prénom du destinataire
             * @example jean
             */
            first_name?: string;
            /**
             * @description Nom du destinataire
             * @example Dupont
             */
            last_name?: string;
            /**
             * @description Adresse email du destinataire
             * @example jean.dupont@gmail.com
             */
            email?: string;
            /** @description Société du destinataire */
            company?: string;
            /** @enum {string} */
            status?: "VALID" | "INVALID";
            /**
             * @description Statut du consentement si to_ask est false
             * @enum {string}
             */
            consent_status?: "ACCEPTED" | "REFUSED";
            /** @description Date d'obtention du consentement */
            response_date?: string;
            pages_range?: {
                start_page?: number;
                end_page?: number;
            };
            /** @description Erreurs trouvées sur l'adresse du destinataire */
            errors?: components["schemas"]["ErrorsDto"][];
            custom_fields?: {
                name?: string;
                value?: string;
            }[];
        };
        /** @description Les imports de destinataires */
        consent_asks_imports: {
            addresses_imports: components["schemas"]["consent_asks_import"][];
            paging: components["schemas"]["Paging"];
        };
        /** @description Destinataire de l'import */
        consent_asks_imports_recipients: {
            recipients?: components["schemas"]["consent_asks_imports_recipient"][];
            paging?: components["schemas"]["Paging"];
        };
        /** @description Import étape par étape de destinataire */
        consent_asks_import_input: {
            /** @description Séparateur pour les fichiers type TXT/CSV */
            delimiter?: string;
            /** @description Savoir s'il s'agit d'un consentement à demander */
            to_ask?: boolean;
            mapping?: components["schemas"]["mapping"];
        };
        /** @description Import étape par étape de destinataire */
        consent_asks_import: {
            /** @description nom du fichier fourni */
            filename?: string;
            /** @description separateur */
            delimiter?: string;
            mapping?: components["schemas"]["mapping"];
            /**
             * @description Statut de l'import
             * @enum {string}
             */
            status?: "ERROR" | "IN_PROGRESS" | "DONE";
            /** @description Nombre de destinataires total de l'import */
            consents_count?: number;
            /** @description Nombre de destinataires valides de l'import */
            valid_consents_count?: number;
            /** @description Nombre de destinataires invalides de l'import */
            invalid_consents_count?: number;
        };
        /** @description Import étape par étape de destinataire */
        ImportConsentResponse: {
            /**
             * @description Identifiant de l'import
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id?: string;
            /** @description nom du fichier fourni */
            file_name?: string;
            /** @description separateur */
            delimiter?: string;
            /**
             * @description Identifiant du sender
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            sender_id?: string;
            mapping?: components["schemas"]["mapping"];
            /**
             * @description Statut de l'import
             * @enum {string}
             */
            status?: "ERROR" | "IN_PROGRESS" | "DONE";
            /** @description Nombre de destinataires total de l'import */
            consents_count?: number;
            /** @description Nombre de destinataires valides de l'import */
            valid_consents_count?: number;
            /** @description Nombre de destinataires invalides de l'import */
            invalid_consents_count?: number;
        };
        ImportConsentsResponse: {
            consents_imports?: components["schemas"]["ImportConsentResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        /** @description Création de consentement */
        consent_ask_creation: {
            /** @description ID de l'expéditeur */
            sender_id: string;
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
            /** @description nom du destinataire de la demande */
            last_name: string;
            /** @description prénom du destinataire de la demande */
            first_name: string;
            /** @description email du destinataire de la demande */
            email: string;
            /** @description nom de société du destinataire si administration */
            company?: string;
            /** @description Nombre de jour avant de considérer qu'un consentement est refusé. Par défaut, le délai est de 7 jours. Possible de 1 à 30 jours. (sur api seulement, sur le front, 7 par défaut). */
            waiting_duration?: number;
            /**
             * @description Type de produit électronique souhaité. Par défaut, le type est ELECTRONIC_QUALIFIED_REGISTERED_MAIL. En fonction du type de produit électronique indiqué, la notification email reçue par le destinataire est personnalisée.
             * @enum {string}
             */
            notifying_product?: "ELECTRONIC_NOTICE" | "ELECTRONIC_QUALIFIED_REGISTERED_MAIL";
        };
        /** @description Détail d'une demande de consentement */
        consent_ask_response: {
            /** @description Id de l'expediteur */
            sender_id?: string;
            /** @description Id de la demande */
            id?: string;
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
            /** @description Date de création de la demande */
            creation_date?: string;
            /** @description nom du destinataire de la demande */
            last_name?: string;
            /** @description prénom du destinataire de la demande */
            first_name?: string;
            /** @description email du destinataire de la demande */
            email?: string;
            /** @description nom de société du destinataire si administration */
            company?: string;
            /** @description Nombre de jour avant de considérer qu'un consentement est refusé. Par défaut, le délai est de 7 jours. Possible de 1 à 30 jours. (sur api seulement, sur le front, 7 par défaut). */
            waiting_duration?: number;
            /**
             * @description Type de produit électronique souhaité. Par défaut, le type est ELECTRONIC_QUALIFIED_REGISTERED_MAIL. En fonction du type de produit électronique indiqué, la notification email reçue par le destinataire est personnalisée.
             * @enum {string}
             */
            notifying_product?: "ELECTRONIC_NOTICE" | "ELECTRONIC_QUALIFIED_REGISTERED_MAIL";
            last_answer?: components["schemas"]["answer_response"];
            last_request?: components["schemas"]["request_response"];
        };
        /** @description Création d'une réponse à une demande de consentement */
        answer_creation: {
            /** @description date de la réponse */
            date?: string;
            /** @enum {string} */
            status?: "ACCEPTED" | "REFUSED";
        };
        /** @description réponse à une demande de consentement */
        answer_response: {
            /** @description id de la réponse */
            id?: string;
            /** @description date de la réponse */
            date?: string;
            /** @enum {string} */
            declared_by?: "SENDER" | "RECIPIENT";
            /** @enum {string} */
            status?: "ACCEPTED" | "REFUSED";
            /** @description url du PDF de preuve de consentement */
            proof_href?: string;
        };
        /** @description envoi d'une demande de consentement */
        request_response: {
            /** @description date de l'envoi de la demande */
            date?: string;
            /** @description id de l'expediteur */
            created_by?: string;
            /** @enum {string} */
            status?: "ANSWERED" | "ASKED" | "EXPIRED";
        };
        consent_asks_response: {
            consents?: components["schemas"]["consent_ask_response"][];
            paging?: components["schemas"]["Paging"];
        };
        answers_response: {
            consents?: components["schemas"]["answer_response"][];
            paging?: components["schemas"]["Paging"];
        };
        requests_response: {
            consents?: components["schemas"]["request_response"][];
            paging?: components["schemas"]["Paging"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    downloadDeliveryProof: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de la demande de consentement */
                consent_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/pdf": string;
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorsDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorsDto"];
                };
            };
        };
    };
}
