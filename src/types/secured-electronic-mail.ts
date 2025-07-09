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
         * @description Permet de créer un envoi. Avant soumission, l'envoi est au statut DRAFT"
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
         * @description Permet de modifier les options liées à l'envoi d'un ERE simple. Ce dernier doit être en DRAFT
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
         * @description Permet d'ajouter un document à l'envoi. Tous les types de documents sont autorisés. Les documents ajoutés pour un envoi ne doivent pas dépasser 256Mo au total. Le nombre total de documents est illimité. Le document doit être transmis en mutipart ainsi que la metadata. La metadata est constituée de name (permet de donner un nom au fichier) et de hcode  (s'il est présent, cela permet de demander la vérification du md5).
         */
        post: operations["createDocument"];
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
         * @description Permet d'ajouter un destinataire à l'envoi. Le nombre de destinataires est limité à 30 000. Si le destinataire est un particulier, le nom et prénom sont obligatoires. Si le destinataire est un professionnel, le nom de la société est obligatoire et le nom et prénom sont facultatifs.
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
         * Ajout d'un ou plusieurs destinataires à un envoi
         * @description
         *     Permet d'ajouter un ou plusieurs destinataires à un envoi.
         *     Le nombre de destinataires à l'importation est limité à 30 000.
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
        delete?: never;
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
         * Téléchargement de la preuve de dépôt d'un destinataire
         * @description Permet de télécharger la preuve de dépôt d'un destinataire
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
         * Téléchargement du justificatif de réception d'un destinataire
         * @description Permet de télécharger au format PDF le justificatif de réception du destinataire (accusé de réception, refus ou non réclamation).
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
    "/sendings/{sending_id}/recipients/{recipient_id}/download_package": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Téléchargement de l'ensemble des documents d'un destinataire
         * @description Permet de télécharger l'ensemble des documents relatifs à un destinataire (document envoyé, preuve de dépôt et justificatif de réception).
         */
        get: operations["downloadPackage"];
        put?: never;
        post?: never;
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
    "/sendings/{sending_id}/documents/{document_id}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Téléchargement d'un document
         * @description Permet de télécharger un document d'un envoi
         */
        get: operations["downloadattachments"];
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
        ErrorDto: {
            code?: string;
            message?: string;
        };
        ErrorsDto: components["schemas"]["ErrorDto"][];
        DocumentResponse: {
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
             * @description Poids du document en octets
             * @example 139071
             */
            size?: number;
            creation_date?: components["schemas"]["creation_date"];
            modification_date?: components["schemas"]["modification_date"];
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
        delivery_proof: {
            /**
             * Format: date-time
             * @description Date de la preuve
             * @example 2018-03-14T07:21:40.757Z
             */
            date?: string;
            /**
             * @description Type de la preuve
             * @example DEPOSIT_PROOF
             * @enum {string}
             */
            type?: "REFUSAL_PROOF" | "UNDELIVERED_PROOF" | "ACKNOWLEDGMENT_OF_RECEIPT" | "NOT_CLAIMED_PROOF";
            /** @description Lien de téléchargement de la preuve */
            href?: string;
        };
        /** @description Preuve de dépôt */
        deposit_proof: {
            /**
             * Format: date-time
             * @description Date de création de la preuve
             * @example 2018-03-14T07:21:40.757Z
             */
            date?: string;
            /** @description Lien de téléchargement de la preuve */
            href?: string;
        };
        recipient_draft_response: {
            /**
             * @description Identifiant du destinataire
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id?: string;
            custom_id?: components["schemas"]["recipient_custom_id"];
            custom_data?: components["schemas"]["custom_data"];
            legal_status?: components["schemas"]["legal_status"];
            first_name?: components["schemas"]["first_name"];
            last_name?: components["schemas"]["last_name"];
            email?: components["schemas"]["email"];
            company?: components["schemas"]["company"];
            status?: components["schemas"]["recipient_status"];
        };
        /**
         * @description Statut de production du destinataire : <table border="1"> <tr><td>DRAFT</td>
         *       <td>Le destinataire est au statut brouillon, non validé par l’utilisateur</td></tr>
         *     <tr><td>PENDING</td>
         *       <td>Le destinataire est en attente de validation</td></tr>
         *     <tr><td>ACCEPTED</td>
         *       <td>Le destinataire est en attente de dépôt</td></tr>
         *     <tr><td>BLOCKED</td>
         *       <td>L'envoi auquel est rattaché le destinataire est bloqué pour dépassement de l'encours. </td></tr>
         *     <tr><td>PROCESSED</td>
         *       <td>Le dépôt pour le destinataire est réussi</td></tr>
         *     <tr><td>REJECTED</td>
         *       <td>Le dépôt pour le destinataire a échoué</td></tr>
         *     <tr><td>SENDING_REJECTED</td> <td>l'envoi auquel est rattaché le destinataire est rejeté, par conséquent le destinataire également</td></tr> </table>
         * @example DRAFT
         * @enum {string}
         */
        recipient_status: "DRAFT" | "PENDING" | "BLOCKED" | "SENDING_REJECTED" | "ACCEPTED" | "REJECTED" | "PROCESSED";
        /**
         * @description Statut de distribution du destinataire. : <table border="1"> <tr><td>DELIVERING</td>
         *       <td>L'envoi du destinataire est en cours de distribution. (EV)</td></tr>
         *     <tr><td>DELIVERED</td>
         *       <td>Le destinataire a reçu et ouvert son courrier.</td></tr>
         *     <tr><td>UNDELIVERED</td>
         *       <td>L'envoi du destinataire n'a pas pu être distribué, refusé ou non réclamé</td></tr>
         *     </table>
         * @example UNDELIVERED
         * @enum {string}
         */
        recipient_delivery_status: "DELIVERING" | "DELIVERED" | "UNDELIVERED";
        /** @description Historique des statuts de distribution */
        recipient_delivery_statuses: {
            /**
             * Format: date-time
             * @description Date du statut
             */
            date?: string;
            /**
             * @description Code du statut
             * @example UNDELIVERED
             */
            code?: string;
            detail?: components["schemas"]["delivery_detail"];
        }[];
        /**
         * @description Detail du statut de production
         * @example INVALID_DATA
         */
        status_detail: string;
        /**
         * @description Detail du statut de distribution
         * @example BOUNCED
         * @enum {string}
         */
        delivery_detail: "BOUNCED" | "NOT_CLAIMED" | "REFUSED";
        RecipientResponse: {
            /**
             * @description Identifiant du destinataire
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id?: string;
            custom_id?: components["schemas"]["recipient_custom_id"];
            custom_data?: components["schemas"]["custom_data"];
            legal_status?: components["schemas"]["legal_status"];
            first_name?: components["schemas"]["first_name"];
            last_name?: components["schemas"]["last_name"];
            /**
             * @description Adresse email du destinataire
             * @example jean.dupont@gmail.com
             */
            email?: string;
            company?: components["schemas"]["company"];
            status?: components["schemas"]["recipient_status"];
            status_detail?: components["schemas"]["status_detail"];
            /** @description Statut */
            statuses?: {
                /**
                 * Format: date-time
                 * @description Date du statut
                 */
                date?: string;
                detail?: components["schemas"]["status_detail"];
                /** @description Code du statut */
                code?: string;
            };
            delivery_status?: components["schemas"]["recipient_delivery_status"];
            delivery_status_detail?: components["schemas"]["delivery_detail"];
            delivery_statuses?: components["schemas"]["recipient_delivery_statuses"];
            delivery_proof?: components["schemas"]["delivery_proof"];
            deposit_proof?: components["schemas"]["deposit_proof"];
            /**
             * @description référence maileva du destinataire
             * @example RE24C000000000001
             */
            reference?: string;
        };
        RecipientsResponse: {
            recipients?: components["schemas"]["RecipientResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        RecipientCreation: {
            custom_id?: components["schemas"]["recipient_custom_id"];
            custom_data?: components["schemas"]["custom_data"];
            legal_status: components["schemas"]["legal_status"];
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
            email: components["schemas"]["email"];
            company?: components["schemas"]["company"];
        };
        RecipientUpdate: {
            custom_id?: components["schemas"]["recipient_custom_id"];
            custom_data?: components["schemas"]["custom_data"];
            legal_status?: components["schemas"]["legal_status"];
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
            email?: components["schemas"]["email"];
            company?: components["schemas"]["company"];
        };
        RecipientsCounts: {
            /**
             * Format: int32
             * @description Nombre de destinataires au statut DARFT
             */
            draft?: number;
            /**
             * Format: int32
             * @description Nombre de destinataires au statut BLOCKED
             */
            blocked?: number;
            /**
             * Format: int32
             * @description Nombre de destinataires au statut ACCEPTED
             */
            accepted?: number;
            /**
             * Format: int32
             * @description Nombre de destinataires au statut REJECTED
             */
            rejected?: number;
            /**
             * Format: int32
             * @description Nombre de destinataires au statut PROCESSED
             */
            processed?: number;
            /**
             * Format: int32
             * @description Nombre de destinataires au statut SENDING REJECTED
             */
            sending_rejected?: number;
            /**
             * Format: int32
             * @description Nombre total de destinataires
             */
            total?: number;
        };
        SendingResponse: {
            /**
             * @description Id de l'envoi
             * @example 110e8400-e29b-11d4-a716-446655440000
             */
            id?: string;
            sender_id: components["schemas"]["sender_id"];
            name: components["schemas"]["sending_name"];
            custom_id?: components["schemas"]["sending_custom_id"];
            custom_data?: components["schemas"]["custom_data"];
            notification_language?: components["schemas"]["notification_language"];
            additional_sender_name?: components["schemas"]["additional_sender_name"];
            message?: components["schemas"]["message"];
            status?: components["schemas"]["sending_status"];
            /** @description Historique des statuts de production */
            statuses?: {
                /**
                 * Format: date-time
                 * @description Date du statut
                 */
                date?: string;
                /**
                 * @description Code du statut
                 * @example ACCEPTED
                 */
                code?: string;
            }[];
            /** @description Détail du statut lorsque celui est REJECTED ou UNDELIVRED */
            status_detail?: string;
            creation_date?: components["schemas"]["creation_date"];
            modification_date?: components["schemas"]["modification_date"];
            submission_date?: components["schemas"]["submission_date"];
            processed_date?: components["schemas"]["processed_date"];
            recipients_counts?: components["schemas"]["RecipientsCounts"];
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
        };
        SendingsResponse: {
            sendings?: components["schemas"]["SendingResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        SendingCreation: {
            sender_id: components["schemas"]["sender_id"];
            name: components["schemas"]["sending_name"];
            custom_id?: components["schemas"]["sending_custom_id"];
            custom_data?: components["schemas"]["custom_data"];
            notification_language?: components["schemas"]["notification_language"];
            additional_sender_name?: components["schemas"]["additional_sender_name"];
            message?: components["schemas"]["message"];
        };
        SendingUpdate: {
            sender_id?: components["schemas"]["sender_id"];
            name?: components["schemas"]["sending_name"];
            custom_id?: components["schemas"]["sending_custom_id"];
            custom_data?: components["schemas"]["custom_data"];
            notification_language?: components["schemas"]["notification_language"];
            additional_sender_name?: components["schemas"]["additional_sender_name"];
            message?: components["schemas"]["message"];
        };
        /** @description L'import des destinataires */
        import_recipients: {
            addresses_import_id?: string;
            import_recipients?: components["schemas"]["RecipientCreation"][];
        };
        /** @description Les destinataires d'un envoi */
        recipients_import_response: {
            accepted_import: components["schemas"]["accepted_import"][];
            rejected_import: components["schemas"]["rejected_import"][];
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
        rejected_import: components["schemas"]["RecipientCreation"] & {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example 4f89b0f7-30fb-47f5-8be6-111111111111
             */
            correlation_id?: string;
            errors?: components["schemas"]["ErrorsDto"][];
        };
        /**
         * Format: uuid
         * @description Id de l'expéditeur
         */
        sender_id: string;
        /**
         * @description Nom de l'envoi
         * @example Résiliation d'un abonnement téléphonique
         */
        sending_name: string;
        /** @description Identifiant de l'envoi défini par le client */
        sending_custom_id: string;
        /**
         * @description Information libre fournie par le client
         * @example ref_dossier
         */
        custom_data: string;
        /**
         * @description Identifiant du destinataire fourni par le client
         * @example custom
         */
        recipient_custom_id: string;
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
        company: string;
        /**
         * @description Langue d'envoi des notifications e-mail aux destinataires (valeurs possibles EN pour anglais, NL pour néerlandais et FR pour français)
         * @default FR
         * @enum {string}
         */
        notification_language: "FR" | "EN" | "NL";
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
         * @description Statut d'un envoi : <table border="1"> <tr><td>DRAFT</td>
         *       <td>L'envoi est à l'état brouillon, non soumis par l’utilisateur</td></tr>
         *     <tr><td>PENDING</td>
         *       <td>L'envoi est soumis et est en attente de dépôt </td></tr>
         *     <tr><td>BLOCKED</td>
         *       <td>L'envoi est bloqué pour dépassement de l'envours client autorisé.</td></tr>
         *     <tr><td>ACCEPTED</td>
         *       <td>Tous les contrôles sont validés, l'envoi va être traité. </td></tr>
         *     <tr><td>PROCESSED_WITH_ERRORS</td> <td>Le dépôt est KO pour au moins un destinataire de l'envoi</td></tr>
         *       <td></td></tr>
         *     <tr><td>PROCESSED</td>
         *       <td>Le dépôt est OK pour tous les destinataires de l'envoi</td></tr>
         *     <tr><td>REJECTED</td>
         *       <td>Le dépôt est KO pour tous les destinataires de l'envoi.</td></tr>
         *     </table>
         * @enum {string}
         */
        sending_status: "DRAFT" | "PENDING" | "BLOCKED" | "ACCEPTED" | "PROCESSED" | "PROCESSED_WITH_ERRORS" | "REJECTED";
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
         * Format: date-time
         * @description Date et heure de soumission
         * @example 2018-03-14T07:21:40.757Z
         */
        submission_date: string;
        /**
         * Format: date-time
         * @description Date et heure du dépot du derniere destinataire
         * @example 2018-03-14T07:21:40.757Z
         */
        processed_date: string;
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
                /** @description q description */
                q?: string;
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
            /** @description Forbidden* */
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
                    };
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
                    "application/json": components["schemas"]["recipient_draft_response"];
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
                    "application/json": components["schemas"]["recipient_draft_response"];
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
    downloadPackage: {
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
                    "application/zip": string;
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
    downloadattachments: {
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
