export interface paths {
    "/sendings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des envois
         * @description Permet d'obtenir la liste des envois.
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
         * Création d'un envoi
         * @description Permet de créer un envoi. Cet envoi sera en état de brouillon (DRAFT), il faudra soummettre cet envoi pour qu'il soit envoyé en production.
         *
         *     Les principales options sont :
         *     - Le coloris d'impression : couleur ou noir et blanc,
         *     - Le format d'impression : recto-verso ou recto seul,
         *     - L'ajout d'une page porte-adresse,
         *     - Le type d'enveloppe est choisi automatiquement. 1 à 5 feuilles (feuille porte-adresse et enveloppe retour incluses) : enveloppe DL. 6 à 45 feuilles (hors feuille porte-adresse, enveloppe retour incluse) : enveloppe C4.
         *     - Le type de fenêtre sur l'enveloppe : simple ou double fenêtre
         *     - Le type d'affranchissement : urgent, rapide ou économique
         *     - e-mail de notification,
         *     - Impression de l'adresse expéditeur,
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
         * Détail d'un envoi
         * @description Permet de récupérer le détail d'un envoi à partir de son identifiant.
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
         * Suppression d'un envoi
         * @description Permet de supprimer un envoi.
         *
         *     Seuls les envois en état de brouillon (DRAFT) peuvent être supprimés.
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
         * Modification partielle d'un envoi
         * @description Permet de modifier un envoi.
         *
         *     Seuls les envois en état de brouillon (DRAFT) peuvent être modifiés.
         *
         *     Seuls les paramètres pour lesquels une valeur est fournie sont modifiés.
         *
         *     Si votre système ne permet pas d'utiliser le verbe PATCH, il est possible d'utiliser le verbe POST.
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
                    "application/merge-patch+json": components["schemas"]["sending_update"];
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
         * @description Permet de soumettre l'envoi et de déclencher ainsi la demande de
         *     production.
         *
         *     Un envoi soumis ne peut pas être annulé.
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
         * Liste des documents d'un envoi
         * @description Permet de récupérer la liste des documents associés à l'envoi.
         *     La liste des documents d'un envoi peut être paginée. Par défaut et au maximum, la pagination est de 30 résultats.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Le premier élément à retourner */
                    start_index?: components["parameters"]["paging_start_index"];
                    /** @description Le nombre d'élément à retourner */
                    count?: components["parameters"]["paging_documents_count"];
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
         * @description Permet d'ajouter un document à l'envoi.
         *     Les types de documents autorisés sont :
         *       - Adobe (.pdf)
         *       - Word (.doc, .docx et .rtf)
         *       - Texte (.txt)
         *       - Excel (.xls, .xlsx)
         *
         *     Le document ajouté ne doit pas dépasser 20 Mo.
         *     Le nombre total de documents est limité à 30 par envoi.
         *     Le document doit être transmis en mutipart ainsi que la metadata. La metadata est constituée de *priority* (permet de définir l'ordre d'impression des documents) et de *name* (permet de donner un nom au fichier).
         *     La première page du document est positionnée systématiquement sur le recto de la feuille.
         *
         *     Le  nombre de feuille d’un envoi ne doit pas dépasser la capacité de l’enveloppe
         *
         *       - Enveloppe grand format C4 (210x300 mm, Double fenêtre) : 45 feuilles maximum (hors feuille porte-adresse, enveloppe retour incluse)
         *
         *       - Enveloppe petit format DL (114x229 mm Simple ou Double-fenêtre) : 5 feuilles maximum (feuille porte-adresse et enveloppe retour incluses)
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
                        /** Format: binary */
                        document?: string;
                        metadata?: {
                            priority?: number;
                            name?: string;
                        };
                    };
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
         * @description Permet de récupérer le détail d'un document utilisé lors de l'envoi.
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
         * @description Permet de supprimer un document d'un envoi.
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
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/documents/{document_id}/set_priority": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Classement des documents
         * @description Permet d'ordonner les documents d'un envoi.
         *
         *     Les documents seront imprimés et mis sous pli dans l'ordre choisi.
         */
        post: {
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
                    "application/json": components["schemas"]["priority"];
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
    "/sendings/{sending_id}/recipients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des destinataires d'un envoi
         * @description Permet de récupérer la liste des destinataires d'un envoi.
         *     Cette liste peut être paginée. Par défaut, la pagination est de 50 résultats. Elle peut atteindre 500 au maximum.
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
                        "application/json": components["schemas"]["recipients_response"];
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
         * Ajout d'un destinataire à l'envoi
         * @description Permet d'ajouter un destinataire à l'envoi.
         *     Le nombre de destinataires est limité à 30 000.
         *
         *     Chaque ligne d’adresse doit contenir au plus 38 caractères.
         *     La ligne d’adresse 1 ou 2 doit être définie.
         *     La ligne d’adresse 6 doit être définie.
         *     Pour les adresses françaises, la ligne d’adresse 6 doit contenir un code
         *     postal sur 5 chiffres, suivi d’un espace, suivi d’une ville.
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
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["recipient_creation"];
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
                        "application/json": components["schemas"]["recipient_response"];
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
        /**
         * Suppression de tous les destinataires
         * @description Permet de supprimer tous les destinataires d'un envoi.
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
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/recipients/{recipient_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un destinataire
         * @description Permet d'obtenir le détail d'un destinataire d'un envoi.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
                    /** @description Identifiant du destinataire */
                    recipient_id: components["parameters"]["recipient_id"];
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
                        "application/json": components["schemas"]["recipient_response"];
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
         * Suprression d'un destinataire
         * @description Permet de supprimer un destinataire d'un envoi.
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un envoi */
                    sending_id: components["parameters"]["sending_id"];
                    /** @description Identifiant du destinataire */
                    recipient_id: components["parameters"]["recipient_id"];
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
         * Modification partielle d'un destinataire
         * @description Permet de modifier partiellement un destinataire
         */
        patch: operations["patchRecipient"];
        trace?: never;
    };
    "/sendings/{sending_id}/recipients/imports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ajout d'un ou de plusieurs destinataires à un envoi
         * @description
         *     Permet d'ajouter un ou plusieurs destinataires à un envoi. Le nombre de destinataires à l'importation est limité à 30 000.
         *
         *     Chaque ligne d’adresse doit contenir au plus 38 caractères. La ligne d’adresse 1 ou 2 doit être définie. La ligne d’adresse 6 doit être définie. Pour les adresses françaises, la ligne d’adresse 6 doit contenir  un code postal sur 5 chiffres, suivi d’un espace, suivi d’une ville.
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
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["import_recipients"];
                };
            };
            responses: {
                /** @description Successful operation */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["recipients_import_response"];
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * @description Code du pays (Code ISO-3166)
         * @example FR
         * @enum {string}
         */
        country_code: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TP" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "YU" | "ZA" | "ZM" | "ZR" | "ZW";
        /** @description Les documents importés pour l'envoi */
        document_response: {
            /**
             * @description Identifiant du document
             * @example cbb7a0f3-bf9b-4179-9a46-c0f28d839e8d
             */
            id: string;
            /**
             * @description Ordre d'impression du document
             * @example 1
             */
            priority: number;
            /**
             * @description Nom du document
             * @example Lettre_résiliation.pdf
             */
            name: string;
            /**
             * @description Type du document
             * @example application/pdf
             */
            type: string;
            /**
             * @description Nombre de pages (disponible à partir du statut ACCEPTED)
             * @example 3
             */
            pages_count?: number;
            /**
             * @description Nombre de feuilles (disponible à partir du statut ACCEPTED)
             * @example 2
             */
            sheets_count?: number;
            /**
             * @description Poids du document en octets
             * @example 139071
             */
            size: number;
            /**
             * @description Poids du document convertis en octets
             * @example 139072
             */
            converted_size?: number;
        };
        /** @description Les documents d'un envoi */
        documents_response: {
            documents: components["schemas"]["document_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /**
         * @description Type de l'envelope
         * @example DL
         * @enum {string}
         */
        envelope_type: "DL" | "C4";
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
             *       <tr><td>ADDRESS_LINE_6_WRONG_FORMAT</td><td>Le champ address_line_6 doit avoir le format [CODE_POSTAL] [VILLE], avec CODE_POSTAL sur 5 chiffres, lorsque le code pays vaut "FR"</td></tr>
             *       <tr><td>COUNTRY_CODE_TOO_LONG</td><td>Le code pays est limité à 2 caractères</td></tr>
             *       <tr><td>CUSTOM_ID_EMPTY</td><td>Le custom id est vide</td></tr>
             *       <tr><td>CUSTOM_ID_WRONG_FORMAT</td><td>Le custom id n'est pas au bon format</td></tr>
             *       <tr><td>DOCUMENT_NOT_FOUND</td><td>Le document est introuvable</td></tr>
             *       <tr><td>DOCUMENT_TYPE_NOT_ACCEPTED</td><td>Le type de document n'est pas accepté (.pdf, .doc, .docx, .rtf, .txt, .xls, .xlsx autorisés)</td></tr>
             *       <tr><td>DUPLICATE_PRIORITY</td><td>Plusieurs documents ont la même priorité</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_1_OR_ADDRESS_LINE_2</td><td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_6</td><td>La ligne d'adresse n°6 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_DOCUMENT</td><td>Le document est vide</td></tr>
             *       <tr><td>EMPTY_FILE_ID</td><td>L'identifiant de fichier est vide</td></tr>
             *       <tr><td>EMPTY_PRODUCTION_CENTER</td><td>Le centre de production est vide</td></tr>
             *       <tr><td>EMPTY_METADATA</td><td>Les méta-données sont vides</td></tr>
             *       <tr><td>EMPTY_NAME</td><td>Aucun nom d'envoi n'a été transmis</td></tr>
             *       <tr><td>EMPTY_PRIORITY</td><td>Le champ priority est vide</td></tr>
             *       <tr><td>EMPTY_SCHEDULED_DATE</td><td>La date d'engagement de remise en poste est manquante</td></tr>
             *       <tr><td>INVALID_COUNTRY_CODE</td><td>Le code pays n'est pas autorisé</td></tr>
             *       <tr><td>INVALID_DOCUMENTS_COUNT</td><td>Erreur lorsque l'on tente d'ajouter plus de 30 documents dans un envoi</td></tr>
             *       <tr><td>INVALID_DOCUMENT_SIZE</td><td>La taille du document transmis dépasse les 20 Mo</td></tr>
             *       <tr><td>INVALID_PRIORITY</td><td>Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRODUCTION_CENTER</td><td>Le centre de production est inconnu</td></tr>
             *       <tr><td>INVALID_NOTIFICATION_EMAIL</td><td>L'email est invalide.</td></tr>
             *       <tr><td>INVALID_RECIPIENTS_COUNT</td><td>Le nombre de destinataires est atteint</td></tr>
             *       <tr><td>INVALID_SCHEDULED_DATE</td><td>La date d'engagement de remise en poste est invalide</td></tr>
             *       <tr><td>INVALID_TOTAL_SENDING_SIZE</td><td>La somme des tailles de l'ensemble des documents dépasse 20 Mo</td></tr>
             *       <tr><td>METADATA_WRONG_FORMAT</td><td>Le paramètre metadata n'est pas correct</td></tr>
             *       <tr><td>NAME_TOO_LONG</td><td>Le nom de l'envoi est trop long (256 caractères max)</td></tr>
             *       <tr><td>RECIPIENT_NOT_FOUND</td><td>Ressource RECIPIENT introuvable</td></tr>
             *       <tr><td>SENDING_NOT_FOUND</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>SENDING_STATUS_IS_NOT_DRAFT</td><td>Erreur quand on essaie d'ajouter un document ou un destinataire dans un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de soumettre un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de modifier une option d'un envoi qui n'est pas en état draft</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_DOCUMENT</td><td>Plusieurs documents ont été envoyés en multipart alors que le service limite à un document.</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_METADATA</td><td>Le paramètre metadata a été transmis plusieurs fois</td></tr>
             *       <tr><td>CORRUPTED_DOCUMENT</td><td>Le document est corrompu</td></tr>
             *     </table> */
            code: string;
            message: string;
        };
        errors_response: {
            errors?: components["schemas"]["error_response"][];
        };
        /** @description Les destinataires d'un envoi */
        import_recipients: {
            import_recipients?: components["schemas"]["recipient_creation_import"][];
        };
        /** @description Bribe de document (plage de pages) */
        documents_override_item: {
            /**
             * @description Identifiant du document
             * @example 6dfe84bc-3428-43db-90b5-ff9ac3b68ac2
             */
            document_id?: string;
            /**
             * @description Première page. Page 1 du document par défaut.
             * @example 1
             */
            start_page?: number;
            /**
             * @description Dernière page. Dernière page du document par défaut.
             * @example 3
             */
            end_page?: number;
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
        priority: {
            /**
             * @description Ordre d'impression du document
             * @example 1
             */
            priority: number;
        };
        recipient_creation: {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
            /**
             * @description Information libre fournie par le client
             * @example order_1234
             */
            custom_data?: string;
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
            address_line_6: string;
            country_code: components["schemas"]["country_code"];
            /** @description Liste de bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associé à l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste de
             *     bribes de documents indiquées (dans l'ordre des éléments du tableau). */
            documents_override?: components["schemas"]["documents_override_item"][];
        };
        recipient_creation_import: {
            /**
             * @description Identifiant du destinataire pour la référence
             * @example 4f89b0f7-30fb-47f5-8be6-111111111111
             */
            correlation_id?: string;
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
            /**
             * @description Information libre fournie par le client
             * @example order_1234
             */
            custom_data?: string;
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
            address_line_6: string;
            country_code: components["schemas"]["country_code"];
            /** @description Liste de bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associé à l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste de
             *     bribes de documents indiquées (dans l'ordre des éléments du tableau). */
            documents_override?: components["schemas"]["documents_override_item"][];
        };
        /**
         * @description Catégorie de l'affranchissement
         * @example PRIORITY
         * @enum {string}
         */
        recipient_postage_class: "PRIORITY" | "PRIORITY_INDUSTRIAL" | "ECONOMY" | "ECONOMY_INDUSTRIAL" | "GREEN_LETTER";
        /** @description Les destinataires importés pour l'envoi */
        recipient_response: {
            /**
             * @description Identifiant du destinataire
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id: string;
            /** @description Identifiant du destinataire fourni par le client */
            custom_id?: string;
            /**
             * @description Information libre fournie par le client
             * @example order_1234
             */
            custom_data?: string;
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
            address_line_6: string;
            country_code: components["schemas"]["country_code"];
            /** @description Liste de bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associé à l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste de
             *     bribes de documents indiquées (dans l'ordre des éléments du tableau). */
            documents_override?: components["schemas"]["documents_override_item"][];
            postage_class?: components["schemas"]["recipient_postage_class"];
            status: components["schemas"]["recipient_status"];
            /** @description Détail d'un statut (cause du rejet) */
            status_detail?: string;
            /**
             * Format: float
             * @description Coût de l'affranchissement en euros
             */
            postage_price?: number;
            /**
             * @description Nombre de pages. Ce nombre de pages inclut l'éventuelle page porte-adresse (payante ou obligatoire) mais n'inclut pas les pages blanches ajoutées au verso par Maileva.
             * @example 3
             */
            pages_count?: number;
            /**
             * @description Nombre de pages facturées (disponible à partir du statut ACCEPTED). Ce nombre de pages inclut la page porte-adresse payante (DL) mais n'inclut pas la page porte-adresse obligatoire (C4) ni les pages blanches ajoutées au verso par Maileva.
             * @example 3
             */
            billed_pages_count?: number;
            /**
             * @description Nombre de feuilles (disponible à partir du statut ACCEPTED). Ce nombre de feuilles inclut la page porte-adresse éventuelle (payante ou obligatoire).
             * @example 2
             */
            sheets_count?: number;
        };
        /**
         * @description Statut du destinataire.
         *     <table>
         *       <tr>
         *         <td>DRAFT</td>
         *         <td>le destinataire a été ajouté à l'envoi qui est au statut draft</td>
         *       </tr>
         *       <tr>
         *         <td>PENDING</td>
         *         <td>le destinataire a été ni traité, ni rejeté</td>
         *       </tr>
         *       <tr>
         *         <td>PROCESSED</td>
         *         <td>le destinataire a été mis sous pli</td>
         *       </tr>
         *       <tr>
         *         <td>REJECTED</td>
         *         <td>le destinataire n'est pas valide</td>
         *       </tr>
         *     </table>
         * @example PENDING
         * @enum {string}
         */
        recipient_status: "DRAFT" | "PENDING" | "PROCESSED" | "REJECTED";
        recipients_counts: {
            /**
             * @description Nombre de destinataires au statut DRAFT
             * @example 0
             */
            draft?: number;
            /**
             * @description Nombre de destinataires au statut PENDING
             * @example 1
             */
            pending?: number;
            /**
             * @description Nombre de destinataires au statut PROCESSED
             * @example 0
             */
            processed?: number;
            /**
             * @description Nombre de destinataires au statut REJECTED
             * @example 0
             */
            rejected?: number;
            /**
             * @description Nombre de destinataires total
             * @example 1
             */
            total?: number;
        };
        /** @description Les destinataires d'un envoi */
        recipients_response: {
            recipients: components["schemas"]["recipient_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /**
         * @description Type d'affranchissement demandé.
         * @enum {string}
         */
        postage_type: "FAST" | "ECONOMIC" | "URGENT";
        sending_creation: components["schemas"]["sending_update"];
        /** @description un envoi */
        sending_update: {
            /**
             * @description Nom de l'envoi
             * @example Résiliation d'un abonnement téléphonique
             */
            name?: string;
            /**
             * @description Identifiant de l'envoi défini par le client
             * @example order_1234
             */
            custom_id?: string;
            /**
             * @description Information libre fournie par le client
             * @example order_1234
             */
            custom_data?: string;
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
             * @description Feuille porte adresse optionnelle
             * @default false
             * @example false
             */
            optional_address_sheet: boolean;
            /**
             * @description E-mail du destinataire des notifications
             * @example do_not_reply@maileva.com
             */
            notification_email?: string;
            /**
             * @description Impression de l'adresse expéditeur
             * @default false
             * @example false
             */
            print_sender_address: boolean;
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur
             * @example Société Durand
             */
            sender_address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiement ...) de l'expéditeur
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
            /**
             * @description enveloppe simple ou double fenêtre (si format DL)
             * @example SIMPLE
             * @enum {string}
             */
            envelope_windows_type?: "SIMPLE" | "DOUBLE";
            postage_type?: components["schemas"]["postage_type"];
        };
        /** @description Un envoi de courrier */
        sending_response: {
            /**
             * @description Identifiant d'un envoi
             * @example 110e8400-e29b-11d4-a716-446655440000
             */
            id?: string;
            /**
             * @description Nom d'un envoi
             * @example Résiliation d'un abonnement téléphonique
             */
            name?: string;
            /**
             * @description Identifiant de l'envoi défini par le client
             * @example order_1234
             */
            custom_id?: string;
            /**
             * @description Information libre fournie par le client
             * @example order_1234
             */
            custom_data?: string;
            status?: components["schemas"]["sending_status"];
            /** @description Détail d'un statut (cause du rejet) */
            status_detail?: string;
            /**
             * Format: date-time
             * @description Date et heure de création
             * @example 2018-03-14T07:21:40.757Z
             */
            creation_date?: string;
            /**
             * Format: date-time
             * @description Date et heure de soumission
             * @example 2018-03-14T07:21:40.757Z
             */
            submission_date?: string;
            /**
             * Format: date-time
             * @description Date et heure de planification
             * @example 2018-03-14T07:21:40.757Z
             */
            scheduled_date?: string;
            /**
             * Format: date-time
             * @description Date et heure de production
             * @example 2018-03-14T07:21:40.757Z
             */
            processed_date?: string;
            /**
             * @description Nombre de documents dans l'envoi
             * @example 1
             */
            documents_count?: number;
            /** @description Poids du document (en octets) */
            documents_weight?: number;
            /**
             * @description Somme du nombre de pages de chaque destinataire. Ce nombre de pages inclut les pages porte-adresse (payantes ou obligatoires) mais n'inclut pas les pages blanches ajoutées au verso par Maileva.
             * @example 3
             */
            pages_count?: number;
            /**
             * @description Nombre de pages facturées (disponible à partir du statut ACCEPTED). Ce nombre de pages inclut les pages porte-adresse payantes (DL) mais n'inclut pas les pages porte-adresse obligatoires (C4) ni les pages blanches ajoutées au verso par Maileva.
             * @example 3
             */
            billed_pages_count?: number;
            /**
             * @description Somme du nombre de feuilles de chaque destinataire (disponible à partir du statut ACCEPTED). Ce nombre de feuilles inclut les pages porte-adresse (payantes ou obligatoires).
             * @example 2
             */
            sheets_count?: number;
            recipients_counts?: components["schemas"]["recipients_counts"];
            /**
             * @description Impression couleur
             * @example true
             */
            color_printing?: boolean;
            /**
             * @description Impression recto verso
             * @example true
             */
            duplex_printing?: boolean;
            /**
             * @description Feuille porte adresse optionnnelle (payante)
             * @example false
             */
            optional_address_sheet?: boolean;
            /**
             * @description Feuille porte adresse imposée (gratuite)
             * @example false
             */
            system_address_sheet?: boolean;
            /**
             * @description Email de notification
             * @example do_not_reply@maileva.com
             */
            notification_email?: string;
            envelope_type?: components["schemas"]["envelope_type"];
            /**
             * @description enveloppe simple ou double fenêtre (si format DL)
             * @example SIMPLE
             * @enum {string}
             */
            envelope_windows_type?: "SIMPLE" | "DOUBLE";
            postage_type?: components["schemas"]["postage_type"];
            /**
             * @description Impression de l'adresse expéditeur (false par défaut)
             * @example false
             */
            print_sender_address?: boolean;
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur
             * @example Société Durand
             */
            sender_address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiement ...) de l'expéditeur
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
        /** @description Les envois */
        sendings_response: {
            sendings: components["schemas"]["sending_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /**
         * @description Statut d'un envoi : <table border=1>
         *       <tr>
         *         <td>DRAFT</td>
         *         <td>L'envoi est au statut de brouillon, non validé par l’utilisateur</td>
         *       </tr>
         *       <tr>
         *         <td>PENDING</td>
         *         <td>Le client a fait un envoi, mais il n’a pas encore été analysé par le système ou l'envoi a été reçu mais il n’a pas encore été analysé</td>
         *       </tr>
         *       <tr>
         *         <td>ACCEPTED</td>
         *         <td>L'envoi a été accepté et il sera traité</td>
         *       </tr>
         *       <tr>
         *         <td>REJECTED</td>
         *         <td>L'envoi est refusé</td>
         *       </tr>
         *       <tr>
         *         <td>PROCESSED</td>
         *         <td>L'envoi a été traité et tous les destinataires étaient valides</td>
         *       </tr>
         *       <tr>
         *         <td>PROCESSED_WITH_ERRORS</td>
         *         <td>L'envoi a été traité mais certains destinataires n’étaient pas valides</td>
         *       </tr>
         *     </table>
         * @example PENDING
         * @enum {string}
         */
        sending_status: "DRAFT" | "PENDING" | "ACCEPTED" | "REJECTED" | "PROCESSED" | "PROCESSED_WITH_ERRORS";
        rejected_import: {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example 4f89b0f7-30fb-47f5-8be6-111111111111
             */
            correlation_id?: string;
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
             * @example 75 Paris
             */
            address_line_6: string;
            country_code: components["schemas"]["country_code"];
            errors?: components["schemas"]["error_response"][];
            documents_override?: components["schemas"]["documents_override_item"][];
        };
        accepted_import: {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example 4f89b0f7-30fb-47f5-8be6-111111111111
             */
            correlation_id?: string;
            /**
             * @description Identifiant du destinataire généré par api
             * @example 6dfe84bc-3428-43db-90b5-ff9ac3b68ac2
             */
            id?: string;
        };
        /** @description Les destinataires d'un envoi */
        recipients_import_response: {
            accepted_import: components["schemas"]["accepted_import"][];
            rejected_import: components["schemas"]["rejected_import"][];
        };
    };
    responses: never;
    parameters: {
        /** @description Identifiant du document */
        document_id: string;
        /** @description Identifiant de l'import */
        import_recipients_id: string;
        /** @description Le premier élément à retourner */
        paging_start_index: number;
        /** @description Le nombre d'élément à retourner */
        paging_count: number;
        /** @description Le nombre d'élément à retourner */
        paging_documents_count: number;
        /** @description Identifiant du destinataire */
        recipient_id: string;
        /** @description Identifiant d'un envoi */
        sending_id: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    patchRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant d'un envoi */
                sending_id: components["parameters"]["sending_id"];
                /** @description Identifiant du destinataire */
                recipient_id: components["parameters"]["recipient_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["recipient_creation"];
            };
        };
        responses: {
            /** @description Successful operation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["recipient_response"];
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
}
