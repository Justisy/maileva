export interface paths {
    "/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des factures
         * @description Permet de récupérer la liste des factures du compte client de l'utilisateur connecté
         *
         */
        get: {
            parameters: {
                query?: {
                    /** @description Indique le premier élément à retourner */
                    start_index?: components["parameters"]["start_index"];
                    /** @description Indique le nombre d'éléments maximum à retourner */
                    count?: components["parameters"]["count"];
                    /** @description liste des champs a trier ASC séparé par une virgule */
                    sort?: components["parameters"]["sort"];
                    /** @description liste des champs a trier DESC séparé par une virgule, ils doivent être dans le paramètre 'sort' */
                    desc?: components["parameters"]["desc"];
                    /** @description liste des champs à afficher */
                    fields?: components["parameters"]["fields"];
                    /** @description Date de début de facturation. Premier jour du mois précédent par défaut. */
                    start_date?: components["parameters"]["start_date"];
                    /** @description Date de fin de facturation. Dernier jour du mois précédent par défaut. */
                    end_date?: components["parameters"]["end_date"];
                    /** @description Date de facturation */
                    date?: components["parameters"]["date"];
                    /** @description Numéro de facture */
                    reference?: components["parameters"]["reference"];
                    /** @description Type de facture */
                    type?: components["parameters"]["invoice_type"];
                    /** @description Montant HT en euros */
                    amount?: components["parameters"]["amount"];
                    /** @description Identifiant */
                    id?: components["parameters"]["id"];
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["invoices"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
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
    "/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des lignes de facturation (détaillées par envoi)
         * @description Permet de récupérer les lignes de facturation détaillées du compte client de l'utilisateur connecté
         *
         */
        get: {
            parameters: {
                query?: {
                    /** @description Indique le premier élément à retourner */
                    start_index?: components["parameters"]["start_index"];
                    /** @description Indique le nombre d'éléments maximum à retourner */
                    count?: components["parameters"]["count"];
                    /** @description liste des champs a trier ASC séparé par une virgule */
                    sort?: components["parameters"]["sort"];
                    /** @description liste des champs a trier DESC séparé par une virgule, ils doivent être dans le paramètre 'sort' */
                    desc?: components["parameters"]["desc"];
                    /** @description liste des champs à afficher */
                    fields?: components["parameters"]["fields"];
                    /** @description Date de début de valorisation. Premier jour du mois précédent par défaut. */
                    start_valorization_date?: components["parameters"]["start_valorization_date"];
                    /** @description Date de fin de valorisation. Dernier jour du mois précédent par défaut. */
                    end_valorization_date?: components["parameters"]["end_valorization_date"];
                    /** @description Type de l'item */
                    type?: components["parameters"]["item_type"];
                    /** @description Date de facturation (format AAAA-MM-JJ) */
                    invoice_date?: components["parameters"]["invoice_date"];
                    /** @description Date de valorisation (format AAAA-MM-JJ) */
                    valorization_date?: components["parameters"]["valorization_date"];
                    /** @description Reférence de l'utilisateur */
                    user_reference?: components["parameters"]["user_reference"];
                    /** @description Reférence de la demande */
                    request_reference?: components["parameters"]["request_reference"];
                    /** @description quantité */
                    quantity?: components["parameters"]["quantity"];
                    /** @description prix unitaire HT */
                    unit_price?: components["parameters"]["unit_price"];
                    /** @description Montant HT en euros */
                    amount?: components["parameters"]["amount"];
                    /** @description code article */
                    code?: components["parameters"]["code"];
                    /** @description libellé du code article */
                    label?: components["parameters"]["label"];
                    /** @description Catégorie du code article */
                    category?: components["parameters"]["category"];
                    /** @description Numéro de facture */
                    invoice_reference?: components["parameters"]["invoice_reference"];
                    /** @description Identifiant */
                    id?: components["parameters"]["id"];
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["items"];
                        "text/csv": string;
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
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
    "/items/exports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Export des lignes de facturation (détaillées par envoi)
         * @description Permet de demander l'export les lignes de facturation détaillées dans un fichier
         *
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
                    "application/json": components["schemas"]["items_export_input"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["items_export"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
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
    "/items/exports/{export_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un export de lignes de facturation (détaillées par envoi)
         * @description Permet de récupérer le détail d'un export de fichier
         *
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'export */
                    export_id: components["parameters"]["export_id"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["items_export"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
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
                        "application/json": components["schemas"]["Errors"];
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
    "/recipient_items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des lignes de facturation (détaillées par destinataire)
         * @description Permet de récupérer les lignes de facturation détaillées du compte client de l'utilisateur connecté
         *
         */
        get: {
            parameters: {
                query?: {
                    /** @description Date de début de valorisation. Premier jour du mois précédent par défaut. */
                    start_valorization_date?: components["parameters"]["start_valorization_date"];
                    /** @description Date de fin de valorisation. Dernier jour du mois précédent par défaut. */
                    end_valorization_date?: components["parameters"]["end_valorization_date"];
                    /** @description Indique le premier élément à retourner */
                    start_index?: components["parameters"]["start_index"];
                    /** @description Indique le nombre d'éléments maximum à retourner */
                    count?: components["parameters"]["count"];
                    /** @description liste des champs a trier ASC séparé par une virgule */
                    sort?: components["parameters"]["sort"];
                    /** @description liste des champs a trier DESC séparé par une virgule, ils doivent être dans le paramètre 'sort' */
                    desc?: components["parameters"]["desc"];
                    /** @description liste des champs à afficher */
                    fields?: components["parameters"]["fields"];
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["items"];
                        "text/csv": string;
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
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
    "/recipient_items/exports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Export des lignes de facturation (détaillées par destinataire)
         * @description Permet de demander l'export les lignes de facturation détaillées dans un fichier
         *
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
                    "application/json": components["schemas"]["items_export_input"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["items_export"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
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
    "/recipient_items/exports/{export_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un export de lignes de facturation (détaillées par destinataire)
         * @description Permet de récupérer le détail d'un export de fichier
         *
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'export */
                    export_id: components["parameters"]["export_id"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["items_export"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
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
                        "application/json": components["schemas"]["Errors"];
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
    "/invoice_documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des documents de facturation
         * @description Permet de récupérer les fichiers de facturation
         *
         */
        get: {
            parameters: {
                query?: {
                    /** @description Indique le premier élément à retourner */
                    start_index?: components["parameters"]["start_index"];
                    /** @description Indique le nombre d'éléments maximum à retourner */
                    count?: components["parameters"]["count"];
                    /** @description liste des champs a trier ASC séparé par une virgule */
                    sort?: components["parameters"]["sort"];
                    /** @description liste des champs a trier DESC séparé par une virgule, ils doivent être dans le paramètre 'sort' */
                    desc?: components["parameters"]["desc"];
                    /** @description liste des champs à afficher */
                    fields?: components["parameters"]["fields"];
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["invoice_documents"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
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
    "/invoice_documents/{invoice_document_id}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Téléchargement d'un document de facturation
         * @description Permet de générer un lien public de téléchargement du fichier de facturation
         *
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant du fichier de facturation */
                    invoice_document_id: components["parameters"]["invoice_document_id"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["invoice_documents_download"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
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
    "/invoice_documents/exports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Export des documents de facturation
         * @description Permet de générer un lien public de téléchargement d'un zip contenant plusieurs factures
         *
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
                    "application/json": components["schemas"]["invoice_documents_export_input"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["invoice_documents_export"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
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
        /** @description Liste de factures */
        invoices: {
            invoices?: components["schemas"]["invoice"][];
            paging?: components["schemas"]["paging"];
        };
        /** @description Facture */
        invoice: {
            /**
             * Format: UUID
             * @description identifiant de la facture
             */
            id?: string;
            /**
             * Format: date
             * @description Date de facturation
             */
            date?: string;
            /** @description Numéro de facture */
            reference?: string;
            /**
             * @description Type de facture
             * @enum {string}
             */
            type?: "CREDIT" | "CLE" | "MBF" | "MLV_LRE_SERVICE" | "MLV_SERVICE" | "POP_SERVICE" | "POP_LRE_SERVICE" | "SIGNATURE" | "POP_LRE_POSTAGE" | "POP_POSTAGE" | "MLV_POSTAGE" | "MLV_LRE_POSTAGE";
            /** @description Montant hors taxe en euros */
            amount?: number;
            /** @description Lien vers la liste des lignes de facturation */
            items_href?: string;
        };
        /** @description Liste des lignes de facturation */
        items: {
            items?: components["schemas"]["item"][];
            paging?: components["schemas"]["paging"];
        };
        /** @description Ligne de facturation */
        item: {
            /** @description Identifiant de l'item */
            id?: string;
            /**
             * @description Type de l'item
             * @enum {string}
             */
            type?: "USER_REQUEST" | "ACCOUNT_REQUEST" | "DISCOUNT" | "SUBSCRIPTION" | "CREDIT" | "DIFFERENCE" | "OTHER";
            /** @description Code du client */
            customer_code?: string;
            /**
             * Format: date
             * @description Date de facturation (format AAAA-MM-JJ)
             */
            invoice_date?: string;
            /**
             * Format: date
             * @description Date de valorisation (format AAAA-MM-JJ)
             */
            valorization_date?: string;
            /** @description Reférence de l'utilisateur */
            user_reference?: string;
            /** @description Login de l'utilisateur */
            user_login?: string;
            /** @description Reférence de la demande */
            request_reference?: string;
            /** @description Nom de la demande (nom de campagne) */
            request_name?: string;
            /** @description quantité */
            quantity?: number;
            /** @description prix unitaire HT */
            unit_price?: number;
            /** @description Montant HT en euros */
            amount?: number;
            /** @description code article */
            code?: string;
            /** @description libellé du code article */
            label?: string;
            /** @description Catégorie du code article */
            category?: string;
            /** @description Numéro de facture */
            invoice_reference?: string;
        };
        /** @description Paramètres de l'export de fichier */
        items_export_input: {
            mime_type: components["schemas"]["items_mime_type"];
            /** @description Nom du fichier généré */
            file_name?: string;
            /**
             * Format: integer
             * @description Nombre de téléchargements maximum
             * @default 1
             */
            max_download: number;
            /**
             * Format: integer
             * @description Durée de disponibilité du fichier en secondes
             * @default 3600
             */
            life_duration: number;
            /**
             * @description Encodage du fichier d'export
             * @default ANSI
             * @enum {string}
             */
            charset_encoding: "ANSI" | "UTF-8";
            filters?: components["schemas"]["filters"];
        };
        /** @description Paramètres de l'export des factures */
        invoice_documents_export_input: {
            /**
             * Format: integer
             * @description Nombre de téléchargement maximum
             * @default 1
             */
            max_download: number;
            /**
             * Format: integer
             * @description Durée de disponibilité du fichier en secondes
             * @default 3600
             */
            life_duration: number;
            filters?: components["schemas"]["filters_invoice_documents"];
        };
        /** @description Export de factures */
        invoice_documents_export: {
            /**
             * Format: UUID
             * @description Identifiant de l'export de factures
             */
            id?: string;
            /** @enum {string} */
            mime_type?: "application/zip";
            /**
             * Format: integer
             * @description Nombre de téléchargement maximum
             * @default 1
             */
            max_download: number;
            /**
             * Format: integer
             * @description Nombre de téléchargement
             */
            downloading_count?: number;
            /**
             * Format: integer
             * @description Durée de disponibilité du fichier en secondes
             * @default 3600
             */
            life_duration: number;
            status?: components["schemas"]["export_status"];
            /**
             * Format: datetime
             * @description Date du statut
             */
            status_date?: string;
            /**
             * Format: datetime
             * @description Date de création
             */
            creation_date?: string;
            /**
             * Format: URL
             * @description Lien de téléchargement du fichier
             */
            download_href?: string;
            filters?: components["schemas"]["filters_invoice_documents"];
        };
        filters_invoice_documents: components["schemas"]["invoice_document"] & {
            /**
             * Format: date
             * @description Date de début de facturation
             */
            start_invoice_date?: string;
            /**
             * Format: date
             * @description Date de fin de facturation
             */
            end_invoice_date?: string;
        };
        /** @description Export de fichier */
        items_export: {
            /**
             * Format: UUID
             * @description Identifiant de l'export de fichier
             */
            id?: string;
            mime_type?: components["schemas"]["items_mime_type"];
            /** @description Nom du fichier généré */
            file_name?: string;
            /**
             * Format: integer
             * @description Nombre de téléchargement maximum
             * @default 1
             */
            max_download: number;
            /**
             * Format: integer
             * @description Nombre de téléchargement
             */
            downloading_count?: number;
            /**
             * Format: integer
             * @description Durée de disponibilité du fichier en secondes
             * @default 3600
             */
            life_duration: number;
            status?: components["schemas"]["export_status"];
            /**
             * Format: datetime
             * @description Date du statut
             */
            status_date?: string;
            /**
             * Format: datetime
             * @description Date de création
             */
            creation_date?: string;
            /** @description Login qui a généré l'export */
            user_login?: string;
            /**
             * Format: URL
             * @description Lien de téléchargement du fichier
             */
            download_href?: string;
            filters?: components["schemas"]["filters"];
        };
        filters: components["schemas"]["item"] & {
            /**
             * Format: date
             * @description Date de début de valorisation
             */
            start_valorization_date?: string;
            /**
             * Format: date
             * @description Date de fin de valorisation
             */
            end_valorization_date?: string;
            /**
             * Format: date
             * @description Date de début de facturation
             */
            start_invoice_date?: string;
            /**
             * Format: date
             * @description Date de fin de facturation
             */
            end_invoice_date?: string;
        };
        /**
         * @description Type de fichier
         * @enum {string}
         */
        items_mime_type: "text/csv";
        /**
         * @description Statut de l'export de fichier
         * @enum {string}
         */
        export_status: "IN_PROGRESS" | "AVAILABLE" | "MAX_DOWNLOAD_REACHED" | "EXPIRED" | "ERROR";
        /** @description Fichier de facturation */
        invoice_document: {
            /**
             * Format: UUID
             * @description Identifiant
             */
            id?: string;
            /** @description Code client */
            customer_code?: string;
            /**
             * Format: date
             * @description Date de facturation
             */
            invoice_date?: string;
            /** @description Numéro de factures */
            invoice_reference?: string;
        };
        /** @description Liste de fichiers de facturation */
        invoice_documents: {
            invoice_documents?: components["schemas"]["invoice_document"][];
            paging?: components["schemas"]["paging"];
        };
        /** @description Lien de téléchargement du fichier de facturation */
        invoice_documents_download: {
            /**
             * Format: UUID
             * @description Identifiant du lien du fichier de facturation
             */
            id?: string;
            /** @enum {string} */
            mime_type?: "application/pdf";
            /**
             * Format: integer
             * @description Nombre de téléchargement maximum
             * @default 1
             */
            max_download: number;
            /**
             * Format: integer
             * @description Nombre de téléchargement
             */
            downloading_count?: number;
            /**
             * Format: integer
             * @description Durée de disponibilité du fichier en secondes
             * @default 3600
             */
            life_duration: number;
            status?: components["schemas"]["export_status"];
            /**
             * Format: datetime
             * @description Date du statut
             */
            status_date?: string;
            /**
             * Format: datetime
             * @description Date de création
             */
            creation_date?: string;
            /**
             * Format: URL
             * @description Lien de téléchargement du fichier
             */
            download_href?: string;
        };
        /** @description Pagination des résultats */
        paging: {
            /** @description Page suivante */
            next?: string;
            /** @description Page précédente */
            prev?: string;
            /** @description Nombre de résultats */
            total_results?: number;
        };
        /** @description Description de l'erreur */
        Error: {
            code?: string;
            message?: string;
        };
        /** @description Liste des erreurs */
        Errors: {
            errors?: components["schemas"]["Error"][];
        };
    };
    responses: never;
    parameters: {
        /** @description liste des champs à afficher */
        fields: string;
        /** @description Identifiant de l'opération */
        operation_id: string;
        /** @description Identifiant de l'export */
        export_id: string;
        /** @description Identifiant du fichier de facturation */
        invoice_document_id: string;
        /** @description valeur du champ a filter */
        filtres: string;
        /** @description liste des champs a trier ASC séparé par une virgule */
        sort: string;
        /** @description liste des champs a trier DESC séparé par une virgule, ils doivent être dans le paramètre 'sort' */
        desc: string;
        /** @description Indique le premier élément à retourner */
        start_index: number;
        /** @description Indique le nombre d'éléments maximum à retourner */
        count: number;
        /** @description Date de début de facturation. Premier jour du mois précédent par défaut. */
        start_date: string;
        /** @description Date de fin de facturation. Dernier jour du mois précédent par défaut. */
        end_date: string;
        /** @description Date de début de facturation. Premier jour du mois précédent par défaut. */
        start_invoice_date: string;
        /** @description Date de fin de facturation. Dernier jour du mois précédent par défaut. */
        end_invoice_date: string;
        /** @description Date de début de valorisation. Premier jour du mois précédent par défaut. */
        start_valorization_date: string;
        /** @description Date de fin de valorisation. Dernier jour du mois précédent par défaut. */
        end_valorization_date: string;
        /** @description Type de l'item */
        item_type: "USER_REQUEST" | "ACCOUNT_REQUEST" | "DISCOUNT" | "SUBSCRIPTION" | "CREDIT" | "DIFFERENCE" | "OTHER";
        /** @description Date de facturation (format AAAA-MM-JJ) */
        invoice_date: string;
        /** @description Date de valorisation (format AAAA-MM-JJ) */
        valorization_date: string;
        /** @description Reférence de l'utilisateur */
        user_reference: string;
        /** @description Login de l'utilisateur */
        user_login: string;
        /** @description Reférence de la demande */
        request_reference: string;
        /** @description Nom de la demande (nom de campagne) */
        request_name: string;
        /** @description quantité */
        quantity: number;
        /** @description prix unitaire HT */
        unit_price: number;
        /** @description Montant HT en euros */
        amount: number;
        /** @description code article */
        code: string;
        /** @description libellé du code article */
        label: string;
        /** @description Catégorie du code article */
        category: string;
        /** @description Numéro de facture */
        invoice_reference: string;
        /** @description Date de facturation */
        date: string;
        /** @description Numéro de facture */
        reference: string;
        /** @description Type de facture */
        invoice_type: "CREDIT" | "CLE" | "MBF" | "MLV_LRE_SERVICE" | "MLV_SERVICE" | "POP_SERVICE" | "POP_LRE_SERVICE" | "SIGNATURE" | "POP_LRE_POSTAGE" | "POP_POSTAGE" | "MLV_POSTAGE" | "MLV_LRE_POSTAGE";
        /** @description Identifiant */
        id: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
