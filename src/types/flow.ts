export interface paths {
    "/sendings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des envois d'un flux
         * @description Permet d'obtenir la liste des envois.
         *
         *     Il est possible de rajouter un attribut dans les paramètres afin de filtrer la liste des envois. La liste des envois peut être paginée. Par défaut, la pagination est de 50 résultats. Elle peut être modifiée pour atteindre jusqu'à 500 résultats.
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
                        "application/json": components["schemas"]["sendings_response"];
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
         * Création d'un envoi de flux
         * @description Permet de créer un envoi de flux. Avant de procéder à la création de l'envoi, il est nécessaire de créer d'avoir créé une règle en amont et de récupérer son identifiant.
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
                    "application/json": components["schemas"]["sending_creation"];
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
                        "application/json": components["schemas"]["sending_response"];
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
    "/sendings/{sending_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un envoi de flux
         * @description Permet de récupérer un envoi de flux à partir de son identifiant.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
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
                        "application/json": components["schemas"]["sending_response"];
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
         * Suppression d'un envoi de flux
         * @description Permet de supprimer un envoi de flux.
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
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
         * Modification des options d'envoi
         * @description Permet de modifier le nom de l'envoi ou la règle associée à l'envoi.
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/merge-patch+json": components["schemas"]["sending_modification"];
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
                        "application/json": components["schemas"]["sending_response"];
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
    "/sendings/{sending_id}/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Finalisation d'un envoi
         * @description Permet de valider l'envoi et de déclencher ainsi la demande de production. Avant la soumission de l'envoi il est important de vérifier le statut du document pour s'assurer de son bon traitement.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des documents
         * @description Permet de récupérer la liste des documents associés à l'envoi afin de vérifier l'état du traitement des documents.
         *     La liste des documents d'un envoi peut être paginée. Par défaut et au maximum, la pagination est de 50 résultats.
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
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
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
                        "application/json": components["schemas"]["documents_response"];
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
        /**
         * Ajout d'un document à l'envoi.
         * @description Permet d'ajouter un document PDF à l'envoi.
         *     Seuls les fichier PDF sont autorisés. Le document ajouté ne doit pas dépasser 50 Mo.
         *     Le document doit être transmis en mutipart ainsi que la metadata. La metadata est constituée de *hcode* (s'il est présent, cela permet de demander la vérification du md5) et de *name* (permet de donner un nom au fichier). Il important de suivre le statut du document avant de soumettre l'envoi pour s'assurer de son traitement.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "multipart/form-data": {
                        /**
                         * Format: binary
                         * @description binaire du document en multipart
                         */
                        document: string;
                        metadata: {
                            /**
                             * @description Nom du document
                             * @example template_facture_standard
                             */
                            name: string;
                            /**
                             * @description Empreinte MD5 du document. Si ce champ est présent alors une vérification sera faite.
                             * @example c628e5f1d622d72a9d4557888c14bcb9
                             */
                            hcode?: string;
                            /**
                             * @description Priorité du document. Ce document sera associé à la règle d'analyse ayanty la même priorité.
                             * @example 1
                             */
                            priority: number;
                            /**
                             * @description Permet de connaître la limite d'un type de document lors de l'envoi
                             * @enum {string}
                             */
                            type: "MAIN_DOCUMENT" | "ANNEX";
                            /**
                             * @description Permet de choisir le redimensionnement de mon document
                             * @default true
                             */
                            shrink?: boolean;
                        };
                    };
                };
            };
            responses: {
                /** @description Successful operation */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["document_response"];
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/documents/{document_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un document
         * @description Permet de récupérer le détail d'un document utilisé pour lors de l'envoi.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
                    /** @description Identifiant du document */
                    document_id: components["parameters"]["document_id"];
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
                        "application/json": components["schemas"]["document_response"];
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
         * Suppression d'un document
         * @description Permet de supprimer un document d'un envoi avant sa soumission.
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
                    /** @description Identifiant du document */
                    document_id: components["parameters"]["document_id"];
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
         * Modification d'un document
         * @description Permet de modifier un document d'un envoi avant sa soumission.
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
                    /** @description Identifiant du document */
                    document_id: components["parameters"]["document_id"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/merge-patch+json": components["schemas"]["document_modification"];
                };
            };
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["document_response"];
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
    "/contract_options/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Information sur le nombre de règles et les plafonds
         * @description Permet d'avoir l'information sur le nombre de règles et les plafonds.
         */
        get: {
            parameters: {
                query?: never;
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
                        "application/json": components["schemas"]["contract_option_public"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Format: double
         * @description Numéro de vesrion de la règle
         * @example 1.000000
         */
        version: number;
        /**
         * Format: date-time
         * @description Date et heure de création
         * @example 2018-03-14T07:21:40.757Z
         */
        creation_date: string;
        /**
         * Format: date-time
         * @description Date et heure de modification
         * @example 2018-03-14T07:21:40.757Z
         */
        modification_date: string;
        /**
         * @description Code du pays (Code ISO-3166)
         * @example FR
         * @enum {string}
         */
        country_code: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TP" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "YU" | "ZA" | "ZM" | "ZR" | "ZW";
        /**
         * @description traitement de regroupement
         * @default false
         * @example false
         */
        grouping: boolean;
        /**
         * @description Impression couleur
         * @default true
         * @example true
         */
        color_printing: boolean;
        /**
         * @description Impression recto verso
         * @default true
         * @example true
         */
        duplex_printing: boolean;
        /**
         * @description L’option impression de la référence destinataire (ou référence du pli)
         * @default false
         */
        print_recipient_custom_id: boolean;
        /**
         * @description Feuille porte adresse optionnelle (payante)
         * @example false
         */
        optional_address_sheet: boolean;
        /**
         * @description E-mail du destinataire des notifications
         * @example jean.dupont@mycompany.com
         */
        notification_email: string;
        /**
         * @description Gestion électronique des PND
         * @example false
         */
        treat_undelivered_mail: boolean;
        /**
         * @description Liste des emails de notification des PND
         * @example [
         *       "email@domain.com",
         *       "email_bis@domain.com"
         *     ]
         */
        notification_treat_undelivered_mail: string[];
        /**
         * @description Impression de l'adresse expéditeur (false par défaut)
         * @example false
         */
        print_sender_address: boolean;
        /**
         * @description enveloppe simple ou double fenêtre (si format C6)
         * @example SIMPLE
         * @enum {string}
         */
        envelope_windows_type: "SIMPLE" | "DOUBLE";
        /**
         * @description Type d'affranchissement d'un envoi. FAST >> pour J+3, ECONOMIC >> pour J+4
         * @enum {string}
         */
        postage_type_mail: "FAST" | "ECONOMIC";
        /**
         * @description Avis de réception (AR)
         * @example true
         */
        acknowledgement_of_receipt: boolean;
        /**
         * @description Gestion électronique des avis de réception (AR). Cette option indique que Maileva doit recevoir, numériser, mettre en ligne l’image et archiver physiquement les Avis de Réception. Pour cela, la première ligne de l’adresse de l’expéditeur sera conservée, mais les 5 autres lignes et le pays seront remplacés par l’adresse de Maileva. Cette option nécessite que l’option avis de réception soit activée.
         * @example false
         */
        acknowledgement_of_receipt_scanning: boolean;
        /**
         * @description Type d'affranchissement d'un envoi pour Maileva LREL. FAST >> pour J+3, URGENT >> pour J+2
         * @enum {string}
         */
        postage_type_registered_mail_v4: "FAST" | "URGENT";
        /**
         * @description Gestion électronique des PND et des AR residuels
         * @default false
         * @example false
         */
        returned_mail_scanning: boolean;
        /**
         * @description L’option impression de la référence destinataire (ou référence du pli)
         * @default false
         */
        reference_to_print_enabled: boolean;
        /**
         * @description Types de notifications
         * @example [
         *       "ALL_MAILEVA",
         *       "ALL_LAPOSTE"
         *     ]
         */
        notification_types: components["schemas"]["notification_type"][];
        /**
         * @description Référence de la règle
         * @example RE81060000T
         */
        sending_rule_reference: string;
        /** @description Liste du partage de la règle */
        sharings: components["schemas"]["sharing"][];
        /** @description partage de la règle */
        sharing: {
            /**
             * Format: uuid
             * @description Identifiant du partage
             * @example 157b8204-1e63-4c36-a198-f49466b041aa
             */
            id?: string;
            /**
             * @description login du destinataire à partager
             * @example testclient
             */
            target_user_login?: string;
            creation_date?: components["schemas"]["creation_date"];
            /**
             * @description Niveau de partage
             * @enum {string}
             */
            share_level?: "USE";
        };
        /**
         * @description Type de document. MAIN_DOCUMENT=chaque découpage de ce document donnera lieu à un destinataire, ANNEX=ce document sera rattaché à tous les destinataires du document principal
         * @example MAIN_DOCUMENT
         * @enum {string}
         */
        document_type: "MAIN_DOCUMENT" | "ANNEX";
        /** @description Les documents d'un envoi */
        documents_response: {
            documents: components["schemas"]["document_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /** @description Description de l'erreur */
        error_response: {
            /** @description Description de l'erreur
             *
             *       <table border="1">
             *         <tr bgcolor="lightgrey">
             *           <th>Code</th>
             *           <th>Description</th>
             *         </tr>
             *         <tr>
             *           <td>DOCUMENT_NOT_FOUND</td>
             *           <td>Le document est introuvable</td>
             *         </tr>
             *         <tr>
             *           <td>DOCTYPE_NOT_ACCEPTED</td>
             *           <td>Le type de document n'est pas accepté (.pdf, .doc, .docx, .rtf, .txt, .xls, .xlsx autorisés)</td>
             *         </tr>
             *         <tr>
             *           <td>EMPTY_DOCUMENT</td>
             *           <td>Le document est vide</td>
             *         </tr>
             *         <tr>
             *           <td>EMPTY_FILE_ID</td>
             *           <td>L'identifiant de fichier est vide</td>
             *         </tr>
             *         <tr>
             *           <td>EMPTY_METADATA</td>
             *           <td>Les méta-données sont vides</td>
             *         </tr>
             *         <tr>
             *           <td>EMPTY_PRIORITY</td>
             *           <td>Le champ priority est vide</td>
             *         </tr>
             *         <tr>
             *           <td>EMPTY_SENDING_NAME</td>
             *           <td>Aucun nom d'envoi n'a été transmis</td>
             *         </tr>
             *         <tr>
             *           <td>INVALID_DOCUMENTS_NUMBER</td>
             *           <td>Erreur lorsque l'on tente d'ajouter plus de 30 documents dans un envoi</td>
             *         </tr>
             *         <tr>
             *           <td>INVALID_DOCUMENT_SIZE</td>
             *           <td>La taille du document transmis dépasse les 10 Mo</td>
             *         </tr>
             *         <tr>
             *           <td>INVALID_TOTAL_SENDING_SIZE</td>
             *           <td>La somme des tailles de l'ensemble des documents dépasse 20 Mo</td>
             *         </tr>
             *         <tr>
             *           <td>LINE1_OR_LINE2_EMPTY</td>
             *           <td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td>
             *         </tr>
             *         <tr>
             *           <td>LINE6_EMPTY</td>
             *           <td>La ligne d'adresse n°6 doit être renseignée</td>
             *         </tr>
             *         <tr>
             *           <td>LONGER_SENDING_NAME_ERROR</td>
             *           <td>Le nom de l'envoi est trop long  (256 caractères max)</td>
             *         </tr>
             *         <tr>
             *           <td>META_DATA_WRONG_FORMAT</td>
             *           <td>Le paramètre metadata n'est pas correct</td>
             *         </tr>
             *         <tr>
             *           <td>MORE_ONE_PARAMETRE_DOCUMENT</td>
             *           <td>Plusieurs documents ont été envoyés en multipart alors que le service limite à un document.</td>
             *         </tr>
             *         <tr>
             *           <td>MORE_ONE_PARAMETRE_METADATA</td>
             *           <td>Le paramètre metadata a été transmis plusieurs fois</td>
             *         </tr>
             *         <tr>
             *           <td>NOTIFICATION_EMAIL_NOT_ACCEPTED</td>
             *           <td>L'email est invalide.</td>
             *         </tr>
             *         <tr>
             *           <td>NULL_PRIORITY</td>
             *           <td>Le champ PRIORITY est nul</td>
             *         </tr>
             *         <tr>
             *           <td>RECIPIENT_NOT_FOUND</td>
             *           <td>Ressource RECIPIENT introuvable</td>
             *         </tr>
             *         <tr>
             *           <td>SENDING_NOT_FOUND</td>
             *           <td>Ressource SENDING introuvable</td>
             *         </tr>
             *         <tr>
             *           <td>SENDING_STATUS_PERMISSION_ADD</td>
             *           <td>Erreur quand on essaie d'ajouter un document ou un destinataire dans un envoi qui n'est pas en état draft</td>
             *         </tr>
             *         <tr>
             *           <td>SENDING_STATUT_PERMISSION_DELETE</td>
             *           <td>Erreur quand on essaie de supprimer un envoi qui n'est pas en état draft</td>
             *         </tr>
             *         <tr>
             *           <td>SENDING_STATUT_PERMISSION_SUBMIT</td>
             *           <td>Erreur quand on essaie de soumettre un envoi qui n'est pas en état draft</td>
             *         </tr>
             *         <tr>
             *           <td>SENDING_STATUS_PERMISSION_UPDATE_OPTION</td>
             *           <td>Erreur quand on essaie de modifier une option d'un envoi qui n'est pas en état draft</td>
             *         </tr>
             *         <tr>
             *           <td>ZIP_CODE_WRONG_FORMAT</td>
             *           <td>Erreur quand le code pays est à NULL ou quand le code pays vaut "FR" et que le code postal n'est pas sur 5 chiffres et que le champs address_line_6 n'est pas formaté en [CODE POSTAL] [VILLE]</td>
             *         </tr>
             *         <tr>
             *           <td>LINE1_TOO_LONG</td>
             *           <td>La ligne d'adresse n°1 est limitée à 38 caractères</td>
             *         </tr>
             *         <tr>
             *           <td>LINE2_TOO_LONG</td>
             *           <td>La ligne d'adresse n°2 est limitée à 38 caractères</td>
             *         </tr>
             *         <tr>
             *           <td>LINE3_TOO_LONG</td>
             *           <td>La ligne d'adresse n°3 est limitée à 38 caractères</td>
             *         </tr>
             *         <tr>
             *           <td>LINE4_TOO_LONG</td>
             *           <td>La ligne d'adresse n°4 est limitée à 38 caractères</td>
             *         </tr>
             *         <tr>
             *           <td>LINE5_TOO_LONG</td>
             *           <td>La ligne d'adresse n°5 est limitée à 38 caractères</td>
             *         </tr>
             *         <tr>
             *           <td>LINE6_TOO_LONG</td>
             *           <td>La ligne d'adresse n°6 est limitée à 38 caractères</td>
             *         </tr>
             *         <tr>
             *           <td>COUNTRY_CODE_TOO_LONG</td>
             *           <td>Le code pays est limité à 2 caractères</td>
             *         </tr>
             *         <tr>
             *           <td>COUNTRY_CODE_UNAVAILABLE</td>
             *           <td>Le code pays n'est pas autorisé</td>
             *         </tr>
             *         <tr>
             *           <td>DUPLICATE_PRIORITY</td>
             *           <td>Plusieurs documents ont la même priorité</td>
             *         </tr>
             *         <tr>
             *           <td>INVALID_RECIPIENTS_NUMBER</td>
             *           <td>Le nombre de destinataires est atteint</td>
             *         </tr>
             *         <tr>
             *           <td>NO_MAJOR_VERSION_SENDING_RULE_ID</td>
             *           <td>La version majeur n'existe pas</td>
             *         </tr>
             *         <tr>
             *           <td>CONTRACT_ID_MANDATORY</td>
             *           <td>Le contrat du client est requis</td>
             *         </tr>
             *         <tr>
             *           <td>MAX_SENDING_RULES_MANDATORY</td>
             *           <td>Le nombre maximum de règles est requis</td>
             *         </tr>
             *         <tr>
             *           <td>UNAUTHORIZED_MODIFICATION</td>
             *           <td>La modification du plafond de règle n'est pas autorisée</td>
             *         </tr>
             *         <tr>
             *         <td>LIMIT_ALREADY_EXISTS_FOR_CONTRACT_ID</td>
             *           <td>La limite du plafond existe déjà pour ce contrat</td>
             *         </tr>
             *         <td>INVALID_CONTRACT_OPTION_ID</td>
             *           <td>L'option du contrat est invalide</td>
             *         </tr>
             *         <td>INVALID_CUSTOMER_OPTION_ID</td>
             *           <td>L'option du client est invalide</td>
             *         </tr>
             *         <td>INVALID_MAX_SENDING_RULES</td>
             *           <td>Le paramètre max_sending_rules est invalide</td>
             *         </tr>
             *         <td>MAX_SENDING_RULES_MANDATORY</td>
             *           <td>Le paramètre max_sending_rules est requis</td>
             *         </tr>
             *         <td>NO_PARAMETER</td>
             *           <td>Au moins un paramètre est requis</td>
             *         </tr>
             *         </tr>
             *         <td>CONTRACT_OPTION_NOT_FOUND</td>
             *           <td>L'option du contrat est introuvable</td>
             *         </tr>
             *       </table> */
            code: string;
            message: string;
        };
        /** @description Liste de descriptions d'erreurs */
        errors_response: {
            errors?: components["schemas"]["error_response"][];
        };
        /** @description Pagination des résultats */
        paging_response: {
            /** @description Page suivante */
            next?: string;
            /** @description Page précédente */
            prev?: string;
            /**
             * @description Nombre de résultats
             * @example 1
             */
            total_results?: number;
        };
        /** @description Envoi */
        sending_creation: {
            name?: components["schemas"]["sending_name"];
            sending_rule_id?: components["schemas"]["sending_rule_id"];
            /**
             * Format: date
             * @description Date et heure de planification (l'heure est optionnelle pour les envois de courrier)
             * @example 2018-03-14
             */
            scheduled_date?: string;
            reject_on_failed_grouping_recipient?: components["schemas"]["reject_on_failed_grouping_recipient"];
            custom_id?: components["schemas"]["sending_custom_id"];
            /**
             * @description Information libre fournie par le client
             * @example order_1234
             */
            custom_data?: string;
        } & components["schemas"]["sender_address"];
        /** @description Modification d'un envoi */
        sending_modification: components["schemas"]["sending_creation"] & {
            notification_email?: components["schemas"]["notification_email"];
            notification_treat_undelivered_mail?: components["schemas"]["notification_treat_undelivered_mail"];
            notification_language?: components["schemas"]["notification_language"];
            /**
             * @description Gestion électronique des PND et des AR residuels
             * @default false
             * @example false
             */
            returned_mail_scanning: boolean;
            notification_types?: components["schemas"]["notification_types"];
            pre_notification?: components["schemas"]["pre_notification"];
            message?: components["schemas"]["message"];
            additional_sender_name?: components["schemas"]["additional_sender_name"];
            page_background?: components["schemas"]["page_background"];
        };
        /** @description Détail d'un envoi */
        sending_response: {
            /**
             * Format: uuid
             * @description Identifiant d'un envoi
             * @example 110e8400-e29b-11d4-a716-446655440000
             */
            id?: string;
            name?: components["schemas"]["sending_name"];
            status?: components["schemas"]["sending_status"];
            /**
             * @description Détail d'un statut (cause du rejet)
             * @example SCHEDULE_DATE_WRONG_PARAMETER
             */
            status_detail?: string;
            sending_rule_id?: components["schemas"]["sending_rule_id"];
            sending_rule_version?: components["schemas"]["version"];
            creation_date?: components["schemas"]["creation_date"];
            modification_date?: components["schemas"]["modification_date"];
            /**
             * Format: date-time
             * @description Date et heure de soumission
             * @example 2018-03-14T07:21:40.757Z
             */
            submission_date?: string;
            /**
             * Format: date
             * @description Date et heure de planification
             * @example 2018-03-14
             */
            scheduled_date?: string;
            custom_id?: components["schemas"]["sending_custom_id"];
            /**
             * @description Nombre de destinataires
             * @example 10
             */
            recipients_count?: number;
            /**
             * @description Nombre de documents
             * @example 1
             */
            documents_count?: number;
            /**
             * @description Poids total des documents (en octets)
             * @example 1032356
             */
            documents_size?: number;
            product?: components["schemas"]["product"];
            grouping?: components["schemas"]["grouping"];
            /**
             * @description il y a au moins un destinataire regroupable et non regroupé est en erreur
             * @example false
             */
            has_failed_grouping_recipient?: boolean;
            product_id?: components["schemas"]["product_id"];
            /**
             * @description URL de l'envoi lié au produit concerné
             * @example https://api.maileva.com/mail/v2/sendings/d5fb0158-4189-4637-859f-ee479f0c8ea8
             */
            product_href?: string;
            /**
             * @description URL de la dernière simulation ayant servi à l'envoi. Lorsque l'envoi a été soumis, cette simulation contient la liste des destinataires dont ceux en erreur.
             * @example https://api.maileva.com/flow/v1/sendings/e20430c7-2b4a-4d1d-8f32-ffab783dbfc7/simulations/a31d7c69-eb6b-45e5-94b9-52085d377f41
             */
            last_simulation_href?: string;
            /**
             * @description statut de l'envoi
             * @example false
             */
            valid?: boolean;
            /** @description liste des codes d'erreur retournés pour l'envoi */
            product_errors?: {
                /**
                 * @description code d'erreur retourné pour l'envoi
                 * @example ZIP_CODE_WRONG_FORMAT
                 */
                code?: string;
                /**
                 * @description message d'erreur retourné pour l'envoi
                 * @example For French addresses, the address line 6 must contain a ZIP code of 5 digits, followed by a space, followed by a city.
                 */
                message?: string;
            }[];
            color_printing?: components["schemas"]["color_printing"];
            duplex_printing?: components["schemas"]["duplex_printing"];
            optional_address_sheet?: components["schemas"]["optional_address_sheet"];
            print_sender_address?: components["schemas"]["print_sender_address"];
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur
             * @example MyCompany
             */
            sender_address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...) de l'expéditeur
             * @example Batiment B
             */
            sender_address_line_3?: string;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie) de l'expéditeur
             * @example 10 avenue Charles de Gaulle
             */
            sender_address_line_4?: string;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...) de l'expéditeur
             * @example
             */
            sender_address_line_5?: string;
            /**
             * @description Ligne d'adresse n°6 (Code postal et ville) de l'expéditeur
             * @example 94673 Charenton-Le-Pont
             */
            sender_address_line_6?: string;
            sender_country_code?: components["schemas"]["country_code"];
            acknowledgement_of_receipt?: components["schemas"]["acknowledgement_of_receipt"];
            acknowledgement_of_receipt_scanning?: components["schemas"]["acknowledgement_of_receipt_scanning"];
            reference_to_print_enabled?: components["schemas"]["reference_to_print_enabled"];
            returned_mail_scanning?: components["schemas"]["returned_mail_scanning"];
            notification_types?: components["schemas"]["notification_types"];
            /**
             * @description Durée d'archivage en années
             * @example 3
             * @enum {integer}
             */
            archiving_duration?: 0 | 1 | 3 | 6 | 10;
            envelope_windows_type?: components["schemas"]["envelope_windows_type"];
            postage_type?: components["schemas"]["postage_type_mail"];
            notification_email?: components["schemas"]["notification_email"];
            pre_notification?: components["schemas"]["pre_notification"];
            message?: components["schemas"]["message"];
            additional_sender_name?: components["schemas"]["additional_sender_name"];
            notification_language?: components["schemas"]["notification_language"];
            treat_undelivered_mail?: components["schemas"]["treat_undelivered_mail"];
            notification_treat_undelivered_mail?: components["schemas"]["notification_treat_undelivered_mail"];
            return_envelope?: components["schemas"]["return_envelope"];
            page_background?: components["schemas"]["page_background"];
            page_insertion?: components["schemas"]["page_insertion"];
            print_recipient_custom_id?: components["schemas"]["print_recipient_custom_id"];
            /**
             * @description Modes d'envoi
             * @example [
             *       "MAIL",
             *       "EMAIL",
             *       "CHORUS",
             *       "PORTAL"
             *     ]
             */
            sending_modes?: components["schemas"]["sending_mode"][];
            sender_tax_number?: components["schemas"]["sender_tax_number"];
            sender_siret?: components["schemas"]["sender_siret"];
            sender_company_name?: components["schemas"]["sender_company_name"];
            portal_options?: components["schemas"]["invoice_portal_options"];
            email_options?: components["schemas"]["invoice_email_options"];
            mail_options?: components["schemas"]["invoice_mail_options"];
        };
        /** @description Liste d'envois */
        sendings_response: {
            sendings: components["schemas"]["sending_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /**
         * @description Nom de l'envoi
         * @example Envoi de factures
         */
        sending_name: string;
        /**
         * @description Statut d'un envoi : <table border="1"> <tr><td>DRAFT</td>
         *       <td>L'envoi est au statut de brouillon, non validé par l’utilisateur</td></tr>
         *     <tr><td>PENDING</td>
         *       <td>L'envoi a été soumis mais il est en attente que la création de l'envoi produit</td></tr>
         *     <tr><td>SUBMITTED</td>
         *       <td>L'envoi a été soumis et l'envoi produit a été crée et tous les destinataires étaient valides</td></tr>
         *     <tr><td>SUBMITTED_WITH_ERRORS</td>
         *       <td>L'envoi a été soumis et l'envoi produit a été crée mais certains destinataires n’étaient pas valides</td></tr>
         *     <tr><td>REJECTED</td>
         *       <td>L'envoi est refusé</td></tr>
         *     <tr><td>SAVED</td>
         *       <td>L'envoi a été sauvegardé comme exemple</td> </tr>
         *     </table>
         * @example DRAFT
         * @enum {string}
         */
        sending_status: "DRAFT" | "PENDING" | "SUBMITTED" | "SUBMITTED_WITH_ERRORS" | "REJECTED" | "SAVED";
        sender_address: {
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur
             * @example MyCompany
             */
            sender_address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...) de l'expéditeur
             * @example Batiment B
             */
            sender_address_line_3?: string;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie) de l'expéditeur
             * @example 10 avenue Charles de Gaulle
             */
            sender_address_line_4?: string;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...) de l'expéditeur
             * @example
             */
            sender_address_line_5?: string;
            /**
             * @description Ligne d'adresse n°6 (Code postal et ville) de l'expéditeur
             * @example 94673 Charenton-Le-Pont
             */
            sender_address_line_6?: string;
            sender_country_code?: components["schemas"]["country_code"];
        };
        /** @description Document */
        document_response: {
            /**
             * Format: uuid
             * @description id du document
             * @example 4cd97ac3-0e18-46db-897b-906365cd60a9
             */
            id?: string;
            /**
             * @description Nom du fichier
             * @example template_facture_standard
             */
            name?: string;
            /**
             * @description Empreinte MD5 du document
             * @example 15fc6eed5ed024bfb86c4130f998dde437f528ee
             */
            hcode?: string;
            /**
             * @description Priorité donnée dans la règle d'analyse
             * @example 1
             */
            priority?: number;
            /**
             * @description Nombre de pages
             * @example 3
             */
            pages_count?: number;
            /**
             * @description Poids du document en octets
             * @example 139071
             */
            size?: number;
            status?: components["schemas"]["document_status"];
            /**
             * @description Poids du document convertis en octets
             * @example 139071
             */
            converted_size?: number;
            /**
             * @description Permet de connaître la limite d'un type de document lors de l'envoi
             * @enum {string}
             */
            type?: "MAIN_DOCUMENT" | "ANNEX";
            creation_date?: components["schemas"]["creation_date"];
            modification_date?: components["schemas"]["modification_date"];
            /** @description Choix du redimensionnement de mon document */
            shrink?: boolean;
        };
        /**
         * @description Statut du document.
         *     <table> <tr> <td>PENDING</td> <td>le document n'a été ni traité, ni rejeté</td> </tr> <tr> <td>PROCESSED</td> <td>le document a été traité</td> </tr> <tr> <td>REJECTED</td> <td>le document n'est pas valide</td> </tr> </table>
         * @example PROCESSED
         * @enum {string}
         */
        document_status: "PENDING" | "PROCESSED" | "REJECTED";
        /** @description Document */
        document_modification: {
            /**
             * @description Nom du fichier
             * @example template_facture_standard
             */
            name?: string;
            /**
             * @description Priorité donnée dans la règle d'analyse
             * @example 1
             */
            priority?: number;
            /**
             * @description Permet de connaître la limite d'un type de document lors de l'envoi
             * @enum {string}
             */
            type?: "MAIN_DOCUMENT" | "ANNEX";
        };
        /** @description Options Courrier pour l'envoi */
        invoice_mail_options: {
            /**
             * @description Durée d'archivage optionnelle pour envoi papier (en années)
             * @default 0
             * @example 0
             * @enum {integer}
             */
            archiving_duration: 0 | 11;
            color_printing: components["schemas"]["color_printing"];
            duplex_printing: components["schemas"]["duplex_printing"];
            envelope_windows_type?: components["schemas"]["envelope_windows_type"];
            notification_treat_undelivered_mail?: components["schemas"]["notification_treat_undelivered_mail"];
            optional_address_sheet: components["schemas"]["optional_address_sheet"];
            postage_type?: components["schemas"]["postage_type_mail"];
            print_sender_address?: components["schemas"]["print_sender_address"];
            return_envelope?: components["schemas"]["return_envelope"];
            treat_undelivered_mail?: components["schemas"]["treat_undelivered_mail"];
            /**
             * @description Redimensionnement des marges des documents pour facture envoi papier
             * @default false
             * @example false
             */
            shrink: boolean;
        };
        /** @description Options E-mail pour l'envoi */
        invoice_email_options: {
            /**
             * Format: uuid
             * @description Identifiant du template d'e-mail
             * @example 59e081d8-20ee-4336-9a1b-fd37ad9a76c1
             */
            recipient_notification_template?: string;
            /**
             * @description Nom libre associé à l’adresse email de l’émetteur des factures dématérialisées
             * @example Jean DUPONT
             */
            recipient_notification_from: string;
            /**
             * @description Adresse email de retour
             * @example jean.dupont@gmail.com
             */
            recipient_notification_reply_to: string;
        };
        /** @description Options Portail pour l'envoi */
        invoice_portal_options: {
            /**
             * Format: uuid
             * @description Identifiant du template de portail
             * @example 59e081d8-20ee-4336-9a1b-fd37ad9a76c1
             */
            recipient_notification_template?: string;
            /**
             * @description Nom libre associé à l’adresse email de l’émetteur des factures dématérialisées
             * @example Jean DUPONT
             */
            recipient_notification_from: string;
            /**
             * @description Adresse email de retour
             * @example jean.dupont@gmail.com
             */
            recipient_notification_reply_to: string;
            /**
             * @description Envoyer attachment
             * @default false
             * @example false
             */
            send_attachment: boolean;
        };
        /**
         * @description ALL_MAILEVA toutes les notification de Maileva, ALL_LAPOSTE toutes les notifications de La Poste
         * @enum {string}
         */
        notification_type: "ALL_MAILEVA" | "ALL_LAPOSTE";
        /**
         * @description Si false on envoie les plis non regroupés partiellement valides à l’api produit, si c’est true on envoie aucun pli non regroupé si il y a un pli non valide donc on le retrouve pas dans l’api produit
         * @default false
         * @example false
         */
        reject_on_failed_grouping_recipient: boolean;
        /**
         * @description statut de la règle. ENABLED=règle active, DISABLED=règle désactivée, LOCKED=règle vérouillée, DRAFT=règle brouillon, TO_VALIDATE=règle à valider, REFUSED=règle refusée par le client
         * @enum {string}
         */
        sending_rule_status: "DRAFT" | "ENABLED" | "DISABLED" | "TO_VALIDATE" | "LOCKED" | "REFUSED";
        /**
         * @description Type de produit. MAIL=courrier simple, REGISTERED_MAIL=courrier recommandé, INVOICE=facture, REGISTERED_MAIL_V4=Maileva courrier recommandé, ELECTRONIC_QUALIFIED_REGISTERED_MAIL=Lettres Recommandées Electroniques
         * @enum {string}
         */
        product: "MAIL" | "REGISTERED_MAIL" | "INVOICE" | "ELECTRONIC_QUALIFIED_REGISTERED_MAIL" | "REGISTERED_MAIL_V4";
        /**
         * @description Numéro de TVA intra-communautaire de l’émetteur
         * @example FR89493376008
         */
        sender_tax_number: string;
        /**
         * @description Siret de l’émetteur
         * @example 49337600800030
         */
        sender_siret: string;
        /**
         * @description Raison sociale de l’émetteur
         * @example Société DURAND
         */
        sender_company_name: string;
        /** @description Id de l'expéditeur */
        sender_id: string;
        /**
         * @description Type de destinataire
         * @enum {string}
         */
        legal_status: "PROFESSIONAL" | "INDIVIDUAL";
        /**
         * @description Langue d'envoi des notifications e-mail aux destinataires (valeurs possibles EN pour anglais, NL pour néerlandais et FR pour français)
         * @default FR
         * @enum {string}
         */
        notification_language: "FR" | "EN" | "NL";
        /**
         * @description prénotification au destinataire de l'envoi d'une LREQ
         * @example true
         */
        pre_notification: boolean;
        /**
         * @description Nom de l'expediteur défini par le client ajouté après le nom de l'expediteur
         * @example Nom & Prénom pour le compte de Maileva
         */
        additional_sender_name: string;
        /**
         * @description Message libre défini par le client transmis aux destinataires lors de l'ouverture de son courrier
         * @example Message personnalisé
         */
        message: string;
        /**
         * Format: uuid
         * @description ID de l'envoi lié au produit concerné
         * @example d5fb0158-4189-4637-859f-ee479f0c8ea8
         */
        product_id: string;
        /**
         * Format: uuid
         * @description ID de la règle d'envoi utilisée
         * @example 110e8400-e29b-11d4-a716-446655440000
         */
        sending_rule_id: string;
        /**
         * @description Identifiant de l'envoi fourni par le client
         * @example Référence de l'envoi
         */
        sending_custom_id: string;
        /**
         * @description Mode d'envoi de la facture <br/> <table border="1"> <tr bgcolor="lightgrey"> <th>Code</th> <th>Description</th> </tr> <tr><td>MAIL</td><td>Par Courrier (Editique)</td></tr> <tr><td>EMAIL</td><td>Par E-mail</td></tr> <tr><td>CHORUS</td><td>Par Chorus Pro</td></tr> <tr><td>PORTAL</td><td>Par portail de réception</td></tr> </table>
         * @enum {string}
         */
        sending_mode: "MAIL" | "EMAIL" | "CHORUS" | "PORTAL";
        /** @description Enveloppe retour. Si l'enveloppe retour est une enveloppe T (postréponse) et si un destinataire n'est pas en France métropolitaine ou dans un DOM, alors le pli partira sans enveloppe T. Cette option ajoute un délai d'un jour de production supplémentaire */
        return_envelope: {
            /**
             * @description Type d'enveloppe retour. FRANKING_ENVELOPE : Enveloppe à affranchir, PREPAID_ENVELOPE : Enveloppe T
             * @enum {string}
             */
            type?: "FRANKING_ENVELOPE" | "PREPAID_ENVELOPE";
            /**
             * Format: uuid
             * @description Identifiant de l'enveloppe retour
             */
            id?: string;
        };
        /** @description Fonds de page */
        page_background: {
            /**
             * @description Identifiant du fichier
             * @example 6dfe84bc-3428-43db-90b5-ff9ac3b68ac2
             */
            asset_id?: string;
            /**
             * @description Position du fond de page
             * @example ALL_PAGES
             * @enum {string}
             */
            position?: "FIRST_PAGE" | "LAST_PAGE" | "ALL_PAGES";
        };
        /** @description Page à insérer */
        page_insertion: {
            /**
             * @description Identifiant du fichier
             * @example 6dfe84bc-3428-43db-90b5-ff9ac3b68ad6
             */
            asset_id?: string;
            /**
             * @description Position de la page à insérer
             * @example AFTER_ALL_PAGES
             * @enum {string}
             */
            position?: "AFTER_FIRST_PAGE" | "AFTER_LAST_PAGE" | "AFTER_ALL_PAGES";
        };
        /** @description Détail d'un contract_option */
        contract_option_public: {
            /** @description id de la ressource contract_option */
            readonly id?: string;
            /**
             * @description Nombre de règles maximum du contrat
             * @example 50
             */
            contract_max_sending_rules?: number;
            /**
             * @description Nombre de règles maximum autorisé (peut être supérieur à la valeur dans le contrat)
             * @example 50
             */
            max_sending_rules?: number;
            /**
             * @description Nombre de règles activées
             * @example 10
             */
            readonly sending_rules_count?: number;
        };
    };
    responses: never;
    parameters: {
        /** @description Identifiant du document */
        document_id: string;
        /** @description Le premier élément à retourner */
        paging_start_index: number;
        /** @description Le nombre d'élément à retourner */
        paging_count: number;
        /** @description Identifiant du destinataire */
        recipient_id: string;
        /** @description Identifiant d'un envoi */
        sending_id: string;
        /** @description L'ID du BAT */
        preview_id: string;
        /** @description L'ID de la demande du BAT */
        picture_request_id: string;
        /** @description L'ID de l'image du BAT */
        picture_id: string;
        /** @description L'ID du flux */
        file_id: string;
        /** @description L'ID de l'extraction */
        extraction_id: string;
        /** @description L'ID de la rupture */
        split_id: string;
        /** @description L'ID du découpage par contenu changeant */
        split_on_changing_content_id: string;
        /** @description L'ID du découpage par contenu trouvé */
        split_on_content_found_id: string;
        /** @description L'ID de la règle d'extraction */
        extraction_rule_id: string;
        /** @description L'ID de la zone d'extraction */
        extraction_definition_id: string;
        /** @description L'ID de la simulation */
        simulation_id: string;
        /** @description L'ID de la règle de découpage */
        split_rule_id: string;
        /** @description L'ID de la règle d'envoi */
        sending_rule_id: string;
        /** @description L'ID du document attendu */
        analysis_rule_id: string;
        /** @description L'ID de l'exemple du document */
        document_example_id: string;
        /** @description Numéro de page pour le document PDF */
        page_number: string;
        /** @description L'ID du BAT */
        final_proof_id: string;
        /** @description Permet de trier les règles d'extraction par un champs par ordre croissant (asc) */
        paging_sort: string;
        /** @description Permet de trier les règles d'extraction par un champs par ordre décroissant (desc) */
        paging_desc: string;
        /** @description Permet de filtrer tous les champs */
        paging_filters: {
            /**
             * @description Nom de la règle d'extraction
             * @example Extraction name
             */
            name?: string;
        };
        /** @description id de la ressource */
        contract_option_id: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
