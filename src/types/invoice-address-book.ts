export interface paths {
    "/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des contacts
         * @description Permet d'obtenir une liste des contacts dans le carnet d'adresses.
         *       La recherche se fait sur les champs suivants
         *       - Nom / Prénom
         *       - Raison sociale
         *       - SIRET
         *       - Code service exécutant
         *       - Numéro engagement juridique
         *       - Adresse email
         *
         *     Le filtrage et le tri se font sur les champs suivants
         *       - Mode d'envoie
         *       - Identifiant unique du contact chez le client
         *       - Nom
         *       - Prénom
         *       - Raison sociale du contact
         *       - Siret
         *       - Identifiant du template email associé
         *       - Date de création
         *       - Login de l'utilisateur qui a créé le contact
         *       - Date de dernière modification
         *       - Login de l'utilisateur qui a fait la dernière modification sur le contact
         *
         */
        get: {
            parameters: {
                query?: {
                    /** @description Chaine de caractères à rechercher */
                    q?: components["parameters"]["search"];
                    /** @description Le premier élément à retourner */
                    start_index?: components["parameters"]["paging_start_index"];
                    /** @description Le nombre d'élément à retourner */
                    count?: components["parameters"]["paging_count"];
                    /** @description Champs, dans l'ordre, sur lesquels il y a un tri */
                    sort?: components["parameters"]["sort"];
                    /** @description Champs sur lesquels il y a un tri descendant */
                    desc?: components["parameters"]["desc"];
                    /** @description Modes d'envoi */
                    sending_mode?: components["parameters"]["sending_mode"];
                    /** @description Identifiant */
                    identifier?: components["parameters"]["identifier_filter"];
                    /** @description Prénom */
                    first_name?: components["parameters"]["first_name"];
                    /** @description Nom */
                    last_name?: components["parameters"]["last_name"];
                    /** @description Raison sociale */
                    company_name?: components["parameters"]["company_name"];
                    /** @description Siret */
                    siret?: components["parameters"]["siret"];
                    /** @description Code pays */
                    country_code?: components["parameters"]["country_code"];
                    /** @description Id du template email associé au contact */
                    email_template_id?: components["parameters"]["email_template_id"];
                    /** @description Fin de l'intervalle de la date de création du contact */
                    "created_by.end_date"?: components["parameters"]["created_by.end_date"];
                    /** @description Login de l'utilisateur qui a réalisé une création de contact */
                    "created_by.user_login"?: components["parameters"]["created_by.user_login"];
                    /** @description Début de l'intervalle de la date de modification du contact */
                    "modified_by.start_date"?: components["parameters"]["modified_by.start_date"];
                    /** @description Fin de l'intervalle de la date de modification du contact */
                    "modified_by.end_date"?: components["parameters"]["modified_by.end_date"];
                    /** @description Login de l'utilisateur qui a réalisé une modification de contact */
                    "modified_by.user_login"?: components["parameters"]["modified_by.user_login"];
                };
                header?: {
                    /** @description Début de l'intervalle de la date de création du contact */
                    "created_by.start_date"?: components["parameters"]["created_by.start_date"];
                };
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
                        "application/json": components["schemas"]["contacts_response_with_pagination"];
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
         * Création d'un contact
         * @description Permet de créer un contact.
         *
         *     Un contact est défini par les champs suivants. Certains champs sont facultatifs
         *
         *     - Nom (facultatif)
         *     - Prénom (facultatif)
         *     - Raison sociale ou nom de l’entité publique (obligatoire)
         *     - Email du contact (obligatoire si mode d’envoi Email ou Portail de publication)
         *     - Identifiant client du contact (obligatoire)
         *     - Siret (obligatoire si mode d’envoi Chorus ou Portail de publication)
         *     - Canal de distribution (Courrier, email, Chorus, Portail de publication) (obligatoire)
         *     - Numéro d’engagement juridique (facultatif)
         *     - Code service exécutant (facultatif)
         *     - Adresse_lines_1 (Adresse_lines_1 ou Adresse_lines_2 obligatoire si
         *     mode d’envoi Courrier et Portail de publication)
         *     - Adresse_lines_2 (Adresse_lines_1 ou Adresse_lines_2 obligatoire si
         *     mode d’envoi Courrier et Portail de publication)
         *     - Adresse_lines_3 (facultatif)
         *     - Adresse_lines_4 (facultatif)
         *     - Adresse_lines_5 (facultatif)
         *     - Adresse_lines_6 (obligatoire si mode d’envoi Courrier et Portail de publication)
         *     - Le code pays (obligatoire si mode d’envoi Courrier et Portail de publication)
         *     - Identifiant du template email associé au contact (facultatif)
         *
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
                    "application/json": components["schemas"]["contact_creation"];
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
                        "application/json": components["schemas"]["contact_response"];
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
        /** Suppression de tous les contacts d'un carnet d'adresses. */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
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
        patch?: never;
        trace?: never;
    };
    "/contacts/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ajout de un ou plusieurs contacts au carnet d'adresses
         * @description Permet d'ajouter un ou plusieurs contacts au carnet d'adresses.</br>
         *     L'import d'un contact avec un identifiant (identifier) qui existe déjà dans la base permet de mettre à jour les informations du contact.
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
                    "application/json": components["schemas"]["import_contacts"];
                };
            };
            responses: {
                /** @description Successful operation */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["import_response"];
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
    "/contacts/{contact_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un contact
         * @description Permet de récupérer le détail d'un contact à partir de son identifiant.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un contact */
                    contact_id: components["parameters"]["contact_id"];
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
                        "application/json": components["schemas"]["contact_response"];
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
         * Suppression d'un contact
         * @description Permet de supprimer un contact.
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un contact */
                    contact_id: components["parameters"]["contact_id"];
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
         * Modification partielle d'un contact
         * @description Permet de modifier un contact.
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un contact */
                    contact_id: components["parameters"]["contact_id"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/merge-patch+json": components["schemas"]["contact_creation"];
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
                        "application/json": components["schemas"]["contact_response"];
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
    "/templates/{template_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Associer un template email à plusieurs contacts
         * @description Associer un template email à plusieurs contacts en fournissant une liste d'identifiants.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un template email */
                    template_id: components["parameters"]["template_id"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["contact_ids_list"];
                };
            };
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
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/templates/{template_id}/unlink_all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Supprimer le lien template email à tous les contacts liés a un template_id
         * @description Supprimer le lien template email à tous les contacts liés a un template_id.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un template email */
                    template_id: components["parameters"]["template_id"];
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
        /** @description contact */
        contact_creation: {
            sending_mode: components["schemas"]["sending_mode"];
            /**
             * @description Identifiant unique du contact chez le client
             * @example recip1234
             */
            identifier: string;
            /**
             * @description Prénom du contact
             * @example Jean
             */
            first_name?: string;
            /**
             * @description Nom du contact
             * @example DUPOND
             */
            last_name?: string;
            /**
             * Format: email
             * @description adresse email du contact
             * @example recip@domain.com
             */
            email?: string;
            /**
             * @description Code Service Exécutant
             * @example PRFPLTF974
             */
            department_code?: string;
            /**
             * @description Numéro d’engagement juridique
             * @example 18OAG0027886
             */
            legal_commitment_number?: string;
            /**
             * @description Raison sociale du contact
             * @example Ministère de l'interieur
             */
            company_name: string;
            /**
             * @description SIRET du contact
             * @example 49337600800030
             */
            siret?: string;
            /**
             * @description Ligne d'adresse n°1 (Société)
             * @example La Poste
             */
            address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom)
             * @example Me Eva DUPONT
             */
            address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiement ...)
             * @example Résidence des Peupliers
             */
            address_line_3?: string;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie)
             * @example 33 avenue de Paris
             */
            address_line_4?: string;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...)
             * @example BP 356
             */
            address_line_5?: string;
            /**
             * @description Ligne d'adresse n°6 (Code postal et ville)
             * @example 75000 Paris
             */
            address_line_6?: string;
            country_code?: components["schemas"]["country_code"];
            /**
             * @description Identifiant du template email associé au contact
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            email_template_id?: string;
        };
        /** @description contact */
        contact_response: {
            /**
             * @description Identifiant du contact
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id?: string;
            sending_mode?: components["schemas"]["sending_mode"];
            /**
             * @description Identifiant unique du contact
             * @example recip1234
             */
            identifier?: string;
            /**
             * @description Prénom du contact
             * @example Jean
             */
            first_name?: string;
            /**
             * @description Nom du contact
             * @example DUPOND
             */
            last_name?: string;
            /**
             * Format: email
             * @description adresse email du contact
             * @example recip@domain.com
             */
            email?: string;
            /**
             * @description Code Service Exécutant
             * @example PRFPLTF974
             */
            department_code?: string;
            /**
             * @description Numéro d’engagement juridique
             * @example 18OAG0027886
             */
            legal_commitment_number?: string;
            /**
             * @description Raison sociale du contact
             * @example Ministère de l'interieur
             */
            company_name?: string;
            /**
             * @description SIRET du contact
             * @example 49337600800030
             */
            siret?: string;
            /**
             * @description Ligne d'adresse n°1 (Société)
             * @example La Poste
             */
            address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom)
             * @example Me Eva DUPONT
             */
            address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiement ...)
             * @example Résidence des Peupliers
             */
            address_line_3?: string;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie)
             * @example 33 avenue de Paris
             */
            address_line_4?: string;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...)
             * @example BP 356
             */
            address_line_5?: string;
            /**
             * @description Ligne d'adresse n°6 (Code postal et ville)
             * @example 75000 Paris
             */
            address_line_6?: string;
            /**
             * @description Identifiant du template email associé au contact
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            email_template_id?: string;
            country_code?: components["schemas"]["country_code"];
            created_by?: components["schemas"]["crud_operation"];
            modified_by?: components["schemas"]["crud_operation"];
        };
        /** @description les contacts avec pagination */
        contacts_response_with_pagination: {
            contacts: components["schemas"]["contact_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /** @description les contacts */
        contacts_response: {
            contacts?: components["schemas"]["contact_response"][];
        };
        /** @description le contact à importer */
        contact_import: {
            /**
             * @description Identifiant du contact à modifier
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            readonly id?: string;
        } & components["schemas"]["contact_creation"];
        /** @description les contacts à importer */
        import_contacts: {
            import_contacts: components["schemas"]["contact_import"][];
        };
        /** @description réponse de l'import de contacts */
        import_response: {
            accepted_contacts?: components["schemas"]["contact_response"][];
            rejected_contacts?: components["schemas"]["rejected_contact"][];
        };
        /** @description le contact à importer */
        import_response_with_validity: {
            /**
             * @description Validité du résultat de l'import
             * @example true
             */
            valid?: boolean;
        } & components["schemas"]["import_response"];
        /** @description contact rejeté lors de l'import */
        rejected_contact: {
            contact?: components["schemas"]["contact_response"];
            errors?: components["schemas"]["error_response"][];
        };
        /** @description décrire une opération de création ou de modification d'un objet */
        crud_operation: {
            /**
             * @description login de l'utilisateur qui a réalisé l'opération
             * @example user_login
             */
            user_login?: string;
            /**
             * @description Identifiant de l'application
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            application_id?: string;
            /**
             * Format: datetime
             * @description Date de l'opération
             * @example 2018-03-14T07:21:40.757Z
             */
            date?: string;
        };
        /**
         * @description Mode d'envoi de la facture <br/> <table border="1">
         *       <tr bgcolor="lightgrey">
         *         <th>Code</th>
         *         <th>Description</th>
         *       </tr>
         *       <tr><td>MAIL</td><td>Par Courrier (Editique)</td></tr>
         *       <tr><td>EMAIL</td><td>Par E-mail</td></tr>
         *       <tr><td>CHORUS</td><td>Par Chorus Pro</td></tr>
         *       <tr><td>PORTAL</td><td>Par Portail de publication</td></tr>
         *     </table>
         * @enum {string}
         */
        sending_mode: "MAIL" | "EMAIL" | "CHORUS" | "PORTAL";
        /**
         * @description Code du pays (Code ISO-3166)
         * @example FR
         * @enum {string}
         */
        country_code: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TP" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "YU" | "ZA" | "ZM" | "ZR" | "ZW";
        /**
         * @description Attribut mappé
         * @example first_name
         * @enum {string}
         */
        contact_field: "id" | "sending_mode" | "identifier" | "first_name" | "last_name" | "email" | "department_code" | "legal_commitment_number" | "company_name" | "siret" | "address_line_1" | "address_line_2" | "address_line_3" | "address_line_4" | "address_line_5" | "address_line_6" | "country_code" | "email_template_id";
        /** @description Liste des imports par fichier créé par les utilisateurs de l'organisation */
        file_imports: {
            file_imports?: components["schemas"]["file_import"][];
        };
        /** @description Description de l'import par fichier */
        file_import: {
            /**
             * @description Identifiant du contact
             * @example c3200456-d63a-4e2f-ad36-3633b2ec6a0e
             */
            id: string;
            /**
             * @description login de l'utilisateur qui a initié l'import
             * @example user_login
             */
            user_login: string;
            /**
             * Format: datetime
             * @description Date de création de l'import
             * @example 2018-03-14T07:21:40.757Z
             */
            creation_date: string;
            /**
             * @description Validité du résultat de l'import
             * @example true
             */
            valid: boolean;
            /**
             * @description Url permettant de confirmer l'envoi (verbe HTTP GET)
             * @example https://api.maileva.com/invoice_address_book/v1/contacts/import_file/c3200456-d63a-4e2f-ad36-3633b2ec6a0e
             */
            result_link?: string;
            /**
             * @description Url permettant de confirmer l'envoi (verbe HTTP POST)
             * @example https://api.maileva.com/invoice_address_book/v1/contacts/import_file/c3200456-d63a-4e2f-ad36-3633b2ec6a0e/confirm
             */
            confirm_link?: string;
            /**
             * @description Url permettant de confirmer l'envoi (verbe HTTP POST)
             * @example https://api.maileva.com/invoice_address_book/v1/contacts/import_file/c3200456-d63a-4e2f-ad36-3633b2ec6a0e/cancel
             */
            cancel_link?: string;
            /**
             * @description Url permettant de confirmer l'envoi (verbe HTTP POST)
             * @example https://api.maileva.com/invoice_address_book/v1/contacts/import_file/c3200456-d63a-4e2f-ad36-3633b2ec6a0e/revalidate
             */
            revalidate_link?: string;
        };
        errors_response: {
            errors?: components["schemas"]["error_response"][];
        };
        /** @description Description de l'erreur */
        error_response: {
            /** @description <table border="1">
             *       <tr bgcolor="lightgrey">
             *         <th>Code</th>
             *         <th>Description</th>
             *       </tr>
             *       <tr><td>ADDRESS_LINE_1_TOO_LONG</td><td>La ligne d'adresse n°1 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_2_TOO_LONG</td><td>La ligne d'adresse n°2 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_3_TOO_LONG</td><td>La ligne d'adresse n°3 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_4_TOO_LONG</td><td>La ligne d'adresse n°4 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_5_TOO_LONG</td><td>La ligne d'adresse n°5 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_TOO_LONG</td><td>La ligne d'adresse n°6 est limitée à 38 caractères</td></tr>
             *       <tr><td>INVALID_ADDRESS_LINE_6</td><td>Le champ address_line_6 doit avoir le format [CODE_POSTAL] [VILLE], avec CODE_POSTAL sur 5 chiffres, lorsque le code pays vaut "FR"</td></tr>
             *       <tr><td>COUNTRY_CODE_TOO_LONG</td><td>Le code pays est limité à 2 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_1_OR_ADDRESS_LINE_2_MANDATORY</td><td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td></tr>
             *       <tr><td>ADDRESS_LINE_6_MANDATORY</td><td>La ligne d'adresse n°6 doit être renseignée</td></tr>
             *       <tr><td>COUNTRY_CODE_MANDATORY</td><td>La ligne d'adresse n°6 doit être renseignée</td></tr>
             *       <tr><td>INVALID_COUNTRY_CODE</td><td>Le code pays n'est pas autorisé</td></tr>
             *       <tr><td>INVALID_EMAIL</td><td>L'email est invalide.</td></tr>
             *       <tr><td>INVALID_TEMPLATE_ID</td><td>L'identifiant du template email est invalide.</td></tr>
             *       <tr><td>EMAIL_MANDATORY</td><td>L'email est obligatoire.</td></tr>
             *       <tr><td>EMAIL_TEMPLATE_NOT_FOUND</td><td>Le template email n'a pas été trouvé en utilisant l'identifiant fourni.</td></tr>
             *       <tr><td>SIRET_MANDATORY</td><td>Le siret est obligatoire.</td></tr>
             *       <tr><td>IDENTIFIER_MANDATORY</td><td>L'identifiant est obligatoire.</td></tr>
             *       <tr><td>COMPANY_NAME_MANDATORY</td><td>La raison sociale est obligatoire.</td></tr>
             *       <tr><td>FORBIDDEN_RECIPIENT_SENDING_MODE_WITH_TEMPLATE_USAGE</td><td>Le mode d'envoi du contact n'est pas compatible avec les usages du template email.</td></tr>
             *       <tr><td>SENDING_MODE_MANDATORY</td><td>Le mode d'envoi est obligatoire.</td></tr>
             *       <tr><td>CONTACT_NOT_FOUND</td><td>Le contact n'a pas été trouvé en utilisant l'identifiant fourni.</td></tr>
             *       <tr><td>IDENTIFIER_ALREADY_EXISTS</td><td>L'identifiant doit être unique.</td></tr>
             *       <tr><td>IMPORT_IN_PROGRESS</td><tr><tr><td>Un import est en cours, il est nécessaire de le confirmer ou l'annuler pour continuer.</td><tr>
             *     </table> */
            code: string;
            message: string;
        };
        /** @description Pagination des résultats */
        paging_response: {
            /** @description Page suivante */
            next?: string;
            /** @description Page précédente */
            prev?: string;
            /**
             * Format: int32
             * @description Nombre de résultats
             */
            total_results?: number;
        };
        /** @description Identifiants uniques de contacts dans le carnet d'adresses */
        identifier_list: {
            /** @example [
             *       "recipient1",
             *       "recipient2",
             *       "recipient3"
             *     ] */
            identifiers?: string[];
        };
        /** @description Identifiants techniques de contacts dans le carnet d'adresses */
        contact_ids_list: {
            /** @example [
             *       "5e49c621-8ec9-4195-acf4-2d64d2786de5",
             *       "b971e98c-5421-43c5-89e0-0eafb0dd7dca",
             *       "18c3d724-b0e6-4419-857f-7e2c085b20b8"
             *     ] */
            contact_ids: string[];
        };
        import_mapping: {
            /** @default ; */
            delimiter: string;
            mapping: components["schemas"]["mapping_model"];
        };
        mapping_model: {
            /**
             * @description Ligne de début (avec ou sans ligne d'entête)
             * @default 0
             */
            start_row: number;
            data?: components["schemas"]["import_mapping_item"][];
        };
        import_mapping_item: {
            field: components["schemas"]["contact_field"];
            /** @description colonne du fichier contenant la valeur de l'attribut */
            column: number[];
        };
        /**
         * @default created_by.date
         * @example created_by.date
         * @enum {string}
         */
        sort_attribute: "sending_mode" | "identifier" | "first_name" | "last_name" | "company_name" | "siret" | "country_code" | "email_template_id" | "created_by.date" | "created_by.user_login" | "modified_by.date" | "modified_by.user_login";
    };
    responses: never;
    parameters: {
        /** @description Le premier élément à retourner */
        paging_start_index: number;
        /** @description Le nombre d'élément à retourner */
        paging_count: number;
        /** @description Identifiant d'un contact */
        contact_id: string;
        /** @description Champs, dans l'ordre, sur lesquels il y a un tri */
        sort: components["schemas"]["sort_attribute"][];
        /** @description Champs sur lesquels il y a un tri descendant */
        desc: components["schemas"]["sort_attribute"][];
        /** @description Identifiant d'un template email */
        template_id: string;
        /** @description Identifiant d'une opération d'import de contacts */
        import_id: string;
        /** @description Identifiant unique du contact dans le carnet d'adresses */
        identifier: string;
        /**
         * @description Identifiant du contrat du client
         * @example 5DD440B2-197A-4AB7-B742-11CE25C9F2AB
         */
        contract_id: string;
        /**
         * @description Identifiant de l'application
         * @example d905a65e-aa46-4f37-8480-260c4600c810
         */
        application_id: string;
        /**
         * @description login de l'utilisateur
         * @example testclient
         */
        user_login: string;
        /** @description Chaine de caractères à rechercher */
        search: string;
        /** @description Modes d'envoi */
        sending_mode: components["schemas"]["sending_mode"][];
        /** @description Identifiant */
        identifier_filter: string;
        /** @description Prénom */
        first_name: string;
        /** @description Nom */
        last_name: string;
        /** @description Raison sociale */
        company_name: string;
        /** @description Siret */
        siret: string;
        /** @description Code pays */
        country_code: components["schemas"]["country_code"];
        /** @description Id du template email associé au contact */
        email_template_id: string;
        /** @description Début de l'intervalle de la date de création du contact */
        "created_by.start_date": string;
        /** @description Fin de l'intervalle de la date de création du contact */
        "created_by.end_date": string;
        /** @description Login de l'utilisateur qui a réalisé une création de contact */
        "created_by.user_login": string;
        /** @description Début de l'intervalle de la date de modification du contact */
        "modified_by.start_date": string;
        /** @description Fin de l'intervalle de la date de modification du contact */
        "modified_by.end_date": string;
        /** @description Login de l'utilisateur qui a réalisé une modification de contact */
        "modified_by.user_login": string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
