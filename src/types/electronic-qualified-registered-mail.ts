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
         * @description Permet d'obtenir la liste des envois. Il est possible de rajouter un attribut dans les paramètres afin de filtrer la liste des envois. La liste des envois peut être paginée. Par défaut, la pagination est de 50 résultats. Elle peut être modifiée pour atteindre jusqu'à 500 résultats.
         */
        get: operations["findSendings"];
        put?: never;
        /**
         * Création d'un envoi
         * @description Permet de créer un envoi.
         */
        post: operations["createSender"];
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
         * @description Permet de récupérer un envoi à partir de son identifiant.
         */
        get: operations["getSending"];
        put?: never;
        post?: never;
        /**
         * Suppression d'un envoi
         * @description Permet de supprimer un envoi. Ce dernier doit être en DRAFT.
         */
        delete: operations["deleteSender"];
        options?: never;
        head?: never;
        /**
         * Modification des options d'envoi
         * @description Permet de modifier les options liées à l'envoi d'une LREQ. Ce dernier doit être en DRAFT
         */
        patch: operations["updateSender"];
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
         * @description Permet de valider l'envoi et de déclencher ainsi la demande de production.
         */
        post: operations["submitSending"];
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
         * @description Permet de récupérer la liste des destinataires d'un envoi. Cette liste peut être paginée. Par défaut, la pagination est de 50 résultats. Elle peut atteindre 500 au maximum.
         */
        get: operations["getRecipients"];
        put?: never;
        /**
         * Ajout d'un destinataire à l'envoi
         * @description Permet d'ajouter un destinataire à l'envoi. Le nombre de destinataires est limité à 30 000.
         */
        post: operations["createDocument_2"];
        /**
         * Suppression de tous les destinataires
         * @description Permet de supprimer tous les destinataires d'un envoi.
         */
        delete: operations["deleteAllRecipients"];
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
         * @description Permet de lister les données d'un destinataire d'un envoi.
         */
        get: operations["getRecipient"];
        put?: never;
        post?: never;
        /**
         * Suppression d'un destinataire
         * @description Permet de supprimer un destinataire d'un envoi.
         */
        delete: operations["deleteRecipient"];
        options?: never;
        head?: never;
        /**
         * Modification partielle d'un destinataire
         * @description Permet de modifier partiellement un destinataire
         */
        patch: operations["updateRecipient"];
        trace?: never;
    };
    "/sendings/{sending_id}/recipients/{recipient_id}/download_deposit_proof": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Télécharger la preuve de dépot du destinataire
         * @description Permet de télécharger la preuve de dépôt du destinataire
         */
        get: operations["downloadDepositProof"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/recipients/{recipient_id}/download_delivery_proof": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Télécharger le justificatif de réception du destinataire (accusé de reception, refus ou non réclamation)
         * @description Permet de télécharger au format PDF le justificatif de réception du destinataire.
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
         * Ajout d'un ou de plusieurs destinataire(s) à l'envoi via un import déjà réalisé
         * @description Permet d'ajouter un ou plusieurs destinataire(s) à l'envoi. Le nombre de destinataires à l'importation est limité à 30 000.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'envoi */
                    sending_id: string;
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
                        /** @description URL vers le détail de la ressource */
                        Location?: string;
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["import_recipients_response"];
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
         * @description Permet de récupérer la liste des documents associés à l'envoi. La liste des documents d'un envoi peut être paginée. Par défaut et au maximum, la pagination est de 30 résultats.
         */
        get: operations["getDocuments"];
        put?: never;
        /**
         * Ajout d'un document à l'envoi.
         * @description Permet d'ajouter un document à l'envoi. Tous les types de documents sont autorisés. Les documents ajoutés pour un envoi ne doivent pas dépasser 256Mo au total. Le nombre total de documents est illimité. Le document doit être transmis en mutipart ainsi que la metadata. La metadata est constituée de name (permet de donner un nom au fichier).
         */
        post: operations["createDocument"];
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
        get: operations["getDocument"];
        put?: never;
        post?: never;
        /**
         * Suppression d'un document
         * @description Permet de supprimer un document d'un envoi.
         */
        delete: operations["getDocument_1"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/addresses_imports": {
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
                        "application/json": components["schemas"]["addresses_imports"];
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
                    "application/json": components["schemas"]["addresses_import_input"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["addresses_import"];
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
    "/addresses_imports/{addresses_import_id}": {
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
                    addresses_import_id: string;
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
                        "application/json": components["schemas"]["addresses_import"];
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
         * Supprime l'import étape par étape
         * @description Permet de supprimer l'import étape par étape
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    addresses_import_id: string;
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
    "/addresses_imports/{addresses_import_id}/recipients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un destinataire
         * @description Permet de lister les destinataire d'un import étape par étape
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    addresses_import_id: string;
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
                        "application/json": components["schemas"]["addresses_imports_recipients"];
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
         * Supprime tous les destinataires
         * @description Permet de supprimer tous les destinataires
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant de l'import */
                    addresses_import_id: string;
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
    "/addresses_imports/{addresses_import_id}/recipients/{recipient_id}": {
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
                    addresses_import_id: string;
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
                        "application/json": components["schemas"]["addresses_imports_recipient"];
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
                    addresses_import_id: string;
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
                    addresses_import_id: string;
                    /** @description Identifiant du destinataire */
                    recipient_id: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["addresses_imports_recipient_update"];
                };
            };
            responses: {
                /** @description Successful operation */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RecipientResponse"];
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
        DocumentResponse: {
            id?: string;
            name?: string;
            /** Format: int64 */
            size?: number;
        };
        DocumentsResponse: {
            documents?: components["schemas"]["DocumentResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        Paging: {
            prev?: string;
            next?: string;
            /** Format: int64 */
            total_results?: number;
        };
        /** @description Preuve de dépôt */
        RecipientProofResource: {
            /**
             * @description Identifiant de la preuve
             * @example d905a65e-aa46-4f37-8480-260c4600c818
             */
            id?: string;
            /**
             * @description Type de preuve
             * @example DEPOSIT_PROOF
             * @enum {string}
             */
            type?: "DEPOSIT_PROOF" | "REFUSAL_PROOF" | "ACKNOWLEDGMENT_OF_RECEIPT" | "NOT_CLAIMED_PROOF";
            /**
             * @description Date de création de la preuve
             * @example 2018-03-14T07:21:40.757Z
             */
            creation_date?: string;
            /** @description Lien de téléchargement de la preuve */
            href?: string;
        };
        RecipientResponse: {
            /**
             * @description Identifiant du destinataire
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id?: string;
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
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
            /**
             * @description Statut du destinataire.
             * @example WAITING
             * @enum {string}
             */
            status?: "DRAFT" | "PENDING" | "PROCESSED" | "CANCELED" | "REJECTED" | "ACCEPTED" | "REFUSED" | "NOT_CLAIMED" | "ERROR" | "TO_UPDATE";
            /** @description Détail d'un statut (cause du rejet) */
            status_detail?: string;
            /**
             * Format: date-time
             * @description Date du statut de l'envoi
             * @example 2018-03-14T07:21:40.757Z
             */
            status_date?: string;
            delivery_proof?: components["schemas"]["RecipientProofResource"];
            deposit_proof?: components["schemas"]["RecipientProofResource"];
        };
        RecipientsResponse: {
            recipients?: components["schemas"]["RecipientResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        RecipientCreation: {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
            /**
             * @description Type de destinataire
             * @enum {string}
             */
            legal_status: "PROFESSIONAL" | "INDIVIDUAL";
            /**
             * @description Prénom du destinataire
             * @example jean
             */
            first_name: string;
            /**
             * @description Nom du destinataire
             * @example Dupont
             */
            last_name: string;
            /**
             * @description Adresse email du destinataire
             * @example jean.dupont@gmail.com
             */
            email: string;
            /** @description Société du destinataire */
            company?: string;
        };
        RecipientUpdate: {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
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
        };
        RecipientsCounts: {
            /** Format: int32 */
            draft?: number;
            /** Format: int32 */
            pending?: number;
            /** Format: int32 */
            processed?: number;
            /** Format: int32 */
            rejected?: number;
            /** Format: int32 */
            accepted?: number;
            /** Format: int32 */
            refused?: number;
            /** Format: int32 */
            not_claimed?: number;
            /** Format: int32 */
            error?: number;
            /** Format: int32 */
            to_update?: number;
            /** Format: int32 */
            total?: number;
        };
        SendingResponse: {
            /** @description Id de l'expéditeur */
            sender_id: string;
            /**
             * @description Nom de l'envoi
             * @example Résiliation d'un abonnement téléphonique
             */
            name: string;
            /**
             * @description Identifiant de l'envoi défini par le client
             * @example ref client
             */
            custom_id?: string;
            /**
             * @description nformation libre fournie par le client
             * @example ref_dossier
             */
            custom_data?: string;
            /**
             * @description Nom de l'expediteur défini par le client ajouté après le nom de l'expediteur
             * @example Nom & Prénom pour le compte de Maileva
             */
            additional_sender_name?: string;
            /**
             * @description Message libre défini par le client transmis aux destinataires lors de l'ouverture de son courrier
             * @example Message personnalisé
             */
            message?: string;
            /**
             * @description prénotification au destinataire de l'envoi d'une LREQ
             * @example true
             */
            pre_notification?: boolean;
            id?: string;
            /** @enum {string} */
            status?: "DRAFT" | "PENDING" | "ACCEPTED" | "REJECTED" | "PROCESSED" | "PROCESSED_WITH_ERRORS";
            creation_date?: string;
            submission_date?: string;
            processed_date?: string;
            recipients_counts?: components["schemas"]["RecipientsCounts"];
            /** Format: int32 */
            documents_count?: number;
        };
        Event: {
            id_mail?: string;
            new_state?: string;
            proof_url?: string;
            view_date?: string;
            refused_date?: string;
            negligence_date?: string;
            ts_ev_date?: string;
            id_consent?: string;
        };
        SendingsResponse: {
            sendings?: components["schemas"]["SendingResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        SendingCreation: {
            /** @description Id de l'expéditeur */
            sender_id: string;
            /**
             * @description Nom de l'envoi
             * @example Résiliation d'un abonnement téléphonique
             */
            name: string;
            /**
             * @description Identifiant de l'envoi défini par le client
             * @example ref client
             */
            custom_id?: string;
            /**
             * @description nformation libre fournie par le client
             * @example ref_dossier
             */
            custom_data?: string;
            /**
             * @description Nom de l'expediteur défini par le client ajouté après le nom de l'expediteur
             * @example Nom & Prénom pour le compte de Maileva
             */
            additional_sender_name?: string;
            /**
             * @description Message libre défini par le client transmis aux destinataires lors de l'ouverture de son courrier
             * @example Message personnalisé
             */
            message?: string;
            /**
             * @description prénotification au destinataire de l'envoi d'une LREQ
             * @example true
             */
            pre_notification?: boolean;
        };
        SendingUpdate: {
            /** @description Id de l'expéditeur */
            sender_id?: string;
            /**
             * @description Nom de l'envoi
             * @example Résiliation d'un abonnement téléphonique
             */
            name?: string;
            /**
             * @description Identifiant de l'envoi défini par le client
             * @example ref client
             */
            custom_id?: string;
            /**
             * @description nformation libre fournie par le client
             * @example ref_dossier
             */
            custom_data?: string;
            /**
             * @description Nom de l'expediteur défini par le client ajouté après le nom de l'expediteur
             * @example Nom & Prénom pour le compte de Maileva
             */
            additional_sender_name?: string;
            /**
             * @description Message libre défini par le client transmis aux destinataires lors de l'ouverture de son courrier
             * @example Message personnalisé
             */
            message?: string;
            /**
             * @description prénotification au destinataire de l'envoi d'une LREQ
             * @example true
             */
            pre_notification?: boolean;
        };
        /** @description Import étape par étape de destinataire */
        addresses_import_input: {
            /** @description Séparateur pour les fichiers type TXT/CSV */
            delimiter?: string;
            mapping?: components["schemas"]["mapping"];
        };
        /** @description Import étape par étape de destinataire */
        addresses_import: {
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
            recipients_count?: number;
            /** @description Nombre de destinataires valides de l'import */
            valid_recipients_count?: number;
            /** @description Nombre de destinataires invalides de l'import */
            invalid_recipients_count?: number;
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
                field?: "LEGAL_STATUS" | "FIRST_NAME" | "LAST_NAME" | "EMAIL" | "COMPANY";
            }[];
        };
        /** @description Les imports de destinataires */
        addresses_imports: {
            addresses_imports: components["schemas"]["addresses_import"][];
            paging: components["schemas"]["Paging"];
        };
        /** @description Destinataire de l'import */
        addresses_imports_recipients: {
            recipients?: components["schemas"]["addresses_imports_recipient"][];
            paging?: components["schemas"]["Paging"];
        };
        /** @description Destinataire de l'import */
        addresses_imports_recipient: {
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
        /** @description ID de l'import à relier à l'envoi */
        import_recipients: {
            import_recipients_id?: string;
        };
        /** @description Destinataire de l'import */
        addresses_imports_recipient_update: {
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
        };
        /** @description Objet contenant l'id du destinataire crée suite a l'import */
        import_recipient_response: {
            id?: string;
        };
        /** @description Liste des id de destinataires crées suite a l'import */
        import_recipients_response: {
            accepted_import?: components["schemas"]["import_recipient_response"][];
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
    findSendings: {
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
            /** @description ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendingsResponse"];
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
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createSender: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Nouvel envoi */
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendingCreation"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description url resource */
                    Location?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendingResponse"];
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
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getSending: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
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
                    "application/json": components["schemas"]["SendingResponse"];
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
                content?: never;
            };
        };
    };
    deleteSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
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
                    "application/json": components["schemas"]["ErrorsDto"];
                };
            };
        };
    };
    updateSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendingUpdate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendingResponse"];
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
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    submitSending: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    /** @description url resource */
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
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getRecipients: {
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
                sending_id: string;
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
                    "application/json": components["schemas"]["RecipientsResponse"];
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
    createDocument_2: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
            };
            cookie?: never;
        };
        /** @description Nouveau destinataire */
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecipientCreation"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description url resource */
                    Location?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecipientResponse"];
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
    deleteAllRecipients: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description ok */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecipientsResponse"];
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
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorsDto"];
                };
            };
            /** @description NotFound */
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
    getRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
                /** @description Identifiant du destinataire */
                recipient_id: string;
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
                    "application/json": components["schemas"]["RecipientResponse"];
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
                content?: never;
            };
        };
    };
    deleteRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
                /** @description Identifiant du destinataire */
                recipient_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description ok */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecipientsResponse"];
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
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorsDto"];
                };
            };
            /** @description NotFound */
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
    updateRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
                /** @description Identifiant du destinataire */
                recipient_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecipientUpdate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendingResponse"];
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
            /** @description Forbidden */
            403: {
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
    downloadDepositProof: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
                /** @description Identifiant du destinataire */
                recipient_id: string;
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
    downloadDeliveryProof: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
                /** @description Identifiant du destinataire */
                recipient_id: string;
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
    getDocuments: {
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
                /** @description Identifiant de l'envoi */
                sending_id: string;
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
                    "application/json": components["schemas"]["DocumentsResponse"];
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
                content?: never;
            };
        };
    };
    createDocument: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** Format: binary */
                    document?: string;
                    name?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description url resource */
                    Location?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DocumentResponse"];
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
    getDocument: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
                /** @description Identifiant du document */
                document_id: string;
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
                    "application/json": components["schemas"]["DocumentResponse"];
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
                content?: never;
            };
        };
    };
    getDocument_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'envoi */
                sending_id: string;
                /** @description Identifiant du document */
                document_id: string;
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
                content?: never;
            };
            /** @description Forbidden */
            403: {
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
}
