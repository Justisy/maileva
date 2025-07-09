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
        get: operations["get-all-sendings"];
        put?: never;
        /**
         * Création d'un envoi
         * @description Permet de créer un envoi. Cet envoi sera en état de brouillon (DRAFT), il faudra soummettre cet envoi pour qu'il soit envoyé en production.
         *
         *     Les principales options sont :
         *     - L'avis de réception (AR) : oui ou non,
         *     - Le coloris d'impression : couleur ou noir et blanc,
         *     - Le format d'impression : recto-verso ou recto seul,
         *     - L'ajout d'une page porte-adresse,
         *     - Le type d'enveloppe est choisi automatiquement. 1 à 5 feuilles (feuille porte-adresse et enveloppe retour incluses) : enveloppe DL. 6 à 44 feuilles (hors feuille porte-adresse, enveloppe retour incluse) : enveloppe C4.
         *     - Numérisation des plis non distribuables (PND) : oui ou non,
         *     - Durée d'archivage : 3 ans, 6 ans ou 10 ans,
         *     - Notifications par e-mail : adresse e-mail à laquelle la preuve de dépôt et les notifications doivent être envoyées
         */
        post: operations["post-sending"];
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
        get: operations["get-sending"];
        put?: never;
        post?: never;
        /**
         * Suppression d'un envoi
         * @description Permet de supprimer un envoi.
         *
         *     Seuls les envois en état de brouillon (DRAFT) peuvent être supprimés.
         */
        delete: operations["delete-sending"];
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
        patch: operations["update-sending"];
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
         *     Un envoi soumis ne peut pas être annulé.
         */
        post: operations["submit-sending"];
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
        get: operations["get-all-documents-of-sending"];
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
         *     Le poids total des documents ajoutés ne doit pas dépasser 20 Mo par envoi.
         *     Le nombre total de documents est limité à 30 par envoi.
         *     Le document doit être transmis en mutipart ainsi que la metadata. La metadata est constituée de *priority* (permet de définir l'ordre d'impression des documents) et de *name* (permet de donner un nom au fichier).
         *     La première page du document est positionnée systématiquement sur le recto de la feuille.
         *
         *     Le  nombre de feuilles d’un envoi ne doit pas dépasser la capacité de l’enveloppe
         *
         *       - Enveloppe grand format C4 (210x300 mm, Double fenêtre) : 45 feuilles maximum (hors feuille porte-adresse, enveloppe retour incluse)
         *
         *       - Enveloppe petit format DL (114x229 mm Simple ou Double-fenêtre) : 5 feuilles maximum (feuille porte-adresse et enveloppe retour incluses)
         */
        post: operations["post-document-of-sending"];
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
        get: operations["get-document-of-sending"];
        put?: never;
        post?: never;
        /**
         * Suppression d'un document
         * @description Permet de supprimer un document d'un envoi.
         */
        delete: operations["delete-document-of-sending"];
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
        post: operations["set-document-priority-of-sending"];
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
        get: operations["get-all-recipients-of-sending"];
        put?: never;
        /**
         * Ajout d'un destinataire à l'envoi
         * @description Permet d'ajouter un destinataire à l'envoi.
         *     Le nombre de destinataires est limité à 5000.
         *
         *
         *     Chaque ligne d’adresse doit contenir au plus 38 caractères.
         *     La ligne d’adresse 1 ou 2 doit être définie.
         *     La ligne d’adresse 6 doit être définie.
         *     Pour les adresses françaises, la ligne d’adresse 6 doit contenir un code
         *     postal sur 5 chiffres, suivi d’un espace, suivi d’une ville.
         */
        post: operations["create-recipient-of-sending"];
        /**
         * Suppression de tous les destinataires
         * @description Permet de supprimer tous les destinataires d'un envoi.
         */
        delete: operations["delete-all-recipients-of-sending"];
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
        get: operations["get-recipient-of-sending"];
        put?: never;
        post?: never;
        /**
         * Suppression d'un destinataire
         * @description Permet de supprimer un destinataire d'un envoi.
         */
        delete: operations["delete-recipient-of-sending"];
        options?: never;
        head?: never;
        /**
         * Modification partielle d'un destinataire
         * @description Permet de modifier partiellement un destinataire
         */
        patch: operations["patch-recipient-of-sending"];
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
         * @description Permet d'ajouter un ou plusieurs destinataires à un envoi. Le nombre de destinataires à l'importation est limité à 5000.
         *
         *     Chaque ligne d’adresse doit contenir au plus 38 caractères. La ligne d’adresse 1 ou 2 doit être définie. La ligne d’adresse 6 doit être définie. Pour les adresses françaises, la ligne d’adresse 6 doit contenir  un code postal sur 5 chiffres, suivi d’un espace, suivi d’une ville.
         */
        post: operations["submit-recipients-import-of-sending"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/recipients/{recipient_id}/download_acknowledgement_of_receipt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Télécharger l'avis de réception archivé du destinataire
         * @description Cette API permet de télécharger au format PDF l'avis de réception archivé du destinataire.
         */
        get: operations["download-acknowledgement-of-receipt-of-recipient-of-sending"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/recipients/{recipient_id}/download_undelivered_mail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Téléchargement de l'image du pli retourné
         * @description Permet de télécharger au format PDF l'image du pli retourné.
         */
        get: operations["download-archived-undelivered_mail-of-recipient-of-sending"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
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
         * Télécharger la preuve de dépôt du destinataire
         * @description Cette API permet de télécharger au format PDF la preuve de dépôt archivée du destinataire.
         */
        get: operations["download-deposit-proof-of-recipient-of-sending"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/recipients/{recipient_id}/download_content_proof": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Télécharger la preuve de contenu du destinataire
         * @description Cette API permet de télécharger au format PDF la preuve de contenu archivée du destinataire.
         */
        get: operations["download-content-proof-of-recipient-of-sending"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/recipients/{recipient_id}/content_proof/download_embedded_document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Télécharger le document contenu dans la preuve de contenu
         * @description Cette API permet de télécharger au format PDF le document contenu dans la preuve de contenu archivée du destinataire.
         */
        get: operations["download-embedded-document-of-recipient-of-sending"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/global_deposit_proofs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des preuves de dépôt globales
         * @description Cette API permet de lister les preuves de dépôt globales
         */
        get: operations["get-all-global-deposit-proofs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/global_deposit_proofs/{global_deposit_proof_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'une preuve de dépôt globale
         * @description Permet d'obtenir le détail d'une preuve de preuve de dépôt globale
         */
        get: operations["get-global-deposit-proof"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/global_deposit_proofs/{global_deposit_proof_id}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Télécharger une preuve de dépôt globale
         * @description Cette API permet de télécharger au format PDF une preuve de dépôt globale
         */
        get: operations["download-global_deposit_proof"];
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
         * @description Code du pays (Code ISO-3166). Codes autorisés FR, MC, RE, YT, MQ, GP, MF, BL, GF
         * @example FR
         */
        country_code: string;
        /**
         * @description ALL_MAILEVA toutes les notification de Maileva, ALL_LAPOSTE toutes les notifications de La Poste
         * @enum {string}
         */
        notification_type: "ALL_MAILEVA" | "ALL_LAPOSTE";
        /**
         * postage_class
         * @description Classe d'affranchissement
         * @enum {string}
         */
        postage_class: "REGISTERED_MAIL_J3" | "REGISTERED_MAIL_J2" | "REGISTERED_MAIL_J3_AR" | "REGISTERED_MAIL_J2_AR";
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
             * @description Type du document
             * @enum {string}
             */
            category?: "ANNEX";
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
             * @description Poids du document converti en octets
             * @example 139072
             */
            converted_size?: number;
            status?: components["schemas"]["document_status"];
            /** @description Détail d'un statut (cause du rejet) */
            status_detail?: string;
        };
        /** @description Statut */
        statuses: {
            /**
             * Format: date-time
             * @description Date du statut
             * @example 2018-03-14T07:21:40.757Z
             */
            date?: string;
            /**
             * @description Code du statut. La liste des codes est indiquée dans le champ 'status'
             * @example PENDING
             */
            code?: string;
            /** @description Statut détaillé */
            details?: string;
        };
        /**
         * @description Statut du document
         *
         *     <table border="1">
         *       <tr bgcolor="lightgrey">
         *         <th>Code</th>
         *         <th>Libellé</th>
         *       </tr>
         *       <tr>
         *         <td>PENDING</td>
         *         <td>le document n'a été ni traité, ni rejeté</td>
         *       </tr>
         *       <tr>
         *         <td>PROCESSED</td>
         *         <td>le document a été traité</td>
         *       </tr>
         *       <tr>
         *         <td>REJECTED</td>
         *         <td>le document n'est pas valide</td>
         *       </tr>
         *     </table>
         * @example PENDING
         * @enum {string}
         */
        document_status: "PENDING" | "PROCESSED" | "REJECTED";
        /** @description Les documents d'un envoi */
        documents_response: {
            documents: components["schemas"]["document_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /**
         * @description Type de l'enveloppe
         * @example DL
         * @enum {string}
         */
        envelope_type: "DL" | "C4" | "DL,C4";
        /** @description Description de l'erreur */
        error_response: {
            /** @description <table border="1">
             *       <tr bgcolor="lightgrey">
             *         <th>Code</th>
             *         <th>Description</th>
             *       </tr>
             *       <tr><td>ADDRESS_LINE_1_OR_ADDRESS_LINE_2_MANDATORY</td><td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td></tr>
             *       <tr><td>ADDRESS_LINE_1_TOO_LONG</td><td>La ligne d'adresse n°1 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_2_TOO_LONG</td><td>La ligne d'adresse n°2 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_3_TOO_LONG</td><td>La ligne d'adresse n°3 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_4_TOO_LONG</td><td>La ligne d'adresse n°4 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_5_TOO_LONG</td><td>La ligne d'adresse n°5 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_TOO_LONG</td><td>La ligne d'adresse n°6 est limitée à 38 caractères</td></tr>
             *       <tr><td>INVALID_ADDRESS_LINE_6</td><td>Le champ address_line_6 doit avoir le format [CODE_POSTAL] [VILLE], avec CODE_POSTAL sur 5 chiffres, lorsque le code pays vaut "FR"</td></tr>
             *       <tr><td>COUNTRY_CODE_TOO_LONG</td><td>Le code pays est limité à 2 caractères</td></tr>
             *       <tr><td>COUNTRY_CODE_EMPTY</td><td>Le code pays est vide</td></tr>
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
             *       <tr><td>INVALID_PRIORITY</td><td>La valeur du champ PRIORITY doit être supérieure ou égale à 1</td></tr>
             *       <tr><td>INVALID_PRODUCTION_CENTER</td><td>Le centre de production est inconnu</td></tr>
             *       <tr><td>INVALID_NOTIFICATION_EMAIL</td><td>L'email est invalide.</td></tr>
             *       <tr><td>INVALID_RECIPIENTS_COUNT</td><td>Le nombre de destinataires est atteint</td></tr>
             *       <tr><td>INVALID_SCHEDULED_DATE_FORMAT</td><td>Le format de la date d'engagement de remise en poste est invalide</td></tr>
             *       <tr><td>INVALID_SCHEDULED_DATE</td><td>La date d'engagement de remise en poste est invalide</td></tr>
             *       <tr><td>INVALID_TOTAL_SENDING_SIZE</td><td>La somme des tailles de l'ensemble des documents dépasse 20 Mo</td></tr>
             *       <tr><td>METADATA_WRONG_FORMAT</td><td>Le paramètre metadata n'est pas correct</td></tr>
             *       <tr><td>NAME_TOO_LONG</td><td>Le nom de l'envoi est trop long (256 caractères max)</td></tr>
             *       <tr><td>RECIPIENT_NOT_FOUND</td><td>Ressource RECIPIENT introuvable</td></tr>
             *       <tr><td>SENDING_NOT_FOUND</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>IMPORT_NOT_FOUND</td><td>Ressource IMPORT introuvable</td></tr>
             *       <tr><td>PREVIEW_NOT_FOUND</td><td>Ressource PREVIEW introuvable</td></tr>
             *       <tr><td>ID_FILE_NOT_FOUND</td><td>Ressource ID_FILE introuvable</td></tr>
             *       <tr><td>IMPORT_STATUS_IS_NOT_DONE </td><td>Erreur quand on essaie de modifier un import qui n'est pas en état done</td></tr>
             *       <tr><td>SENDING_STATUS_IS_NOT_DRAFT</td><td>Erreur quand on essaie d'ajouter un document ou un destinataire dans un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de soumettre un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de modifier une option d'un envoi qui n'est pas en état draft</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_DOCUMENT</td><td>Plusieurs documents ont été envoyés en multipart alors que le service limite à un document.</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_METADATA</td><td>Le paramètre metadata a été transmis plusieurs fois</td></tr>
             *       <tr><td>UNEXPECTED_NOT_VALID_ERROR</td><td>Le body de la requête n’est pas interprétable</td></tr>
             *     </table> */
            code: string;
            message: string;
        };
        errors_response: {
            errors?: components["schemas"]["error_response"][];
        };
        /** @description Les destinataires d'un envoi */
        import_recipients: {
            import_recipients: components["schemas"]["recipient_creation_import"][];
        };
        notification_creation_list: {
            /**
             * @description Type de notification a envoyer
             * @enum {string}
             */
            notification_type?: "ON_STATUS_ACCEPTED" | "ON_STATUS_REJECTED" | "ON_STATUS_PROCESSED" | "ON_STATUS_PROCESSED_WITH_ERRORS" | "ON_ACKNOWLEDGEMENT_OF_RECEIPT_RECEIVED" | "ON_UNDELIVERED_MAIL_RECEIVED" | "ON_MAIN_DELIVERY_STATUS_FIRST_PRESENTATION" | "ON_MAIN_DELIVERY_STATUS_DELIVERED" | "ON_MAIN_DELIVERY_STATUS_UNDELIVERED" | "ON_GLOBAL_DEPOSIT_PROOF_RECEIVED" | "ON_DEPOSIT_PROOF_RECEIVED" | "ON_CONTENT_PROOF_RECEIVED";
            ids?: string[];
        };
        notification_response_list: string[];
        error_response_list: {
            errors?: components["schemas"]["error_response"][];
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
                field?: "ADDRESS_LINE_1" | "ADDRESS_LINE_2" | "ADDRESS_LINE_3" | "ADDRESS_LINE_4" | "ADDRESS_LINE_5" | "ADDRESS_LINE_6" | "CUSTOM_FIELDS" | "COUNTRY_NAME" | "CUSTOM_ID" | "REFERENCE_TO_PRINT" | "START_PAGE" | "END_PAGE";
            }[];
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
             * @description référence client imprimable
             * @example custom12234
             */
            reference_to_print?: string;
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
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...)
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
            /** @description Champs de personnalisation du destinataire */
            custom_fields?: {
                [key: string]: string;
            };
            country_code: components["schemas"]["country_code"];
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Société Durand
             */
            sender_address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Batiment B
             */
            sender_address_line_3?: string;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 10 avenue Charles de Gaulle
             */
            sender_address_line_4?: string;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example
             */
            sender_address_line_5?: string;
            /**
             * @description Ligne d'adresse n°6 (Code postal et ville) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 94673 Charenton-Le-Pont
             */
            sender_address_line_6?: string;
            sender_country_code?: components["schemas"]["country_code"];
            /** @description Liste de bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associés à l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste des
             *     bribes de documents indiquées (dans l'ordre des éléments du tableau). */
            documents_override?: components["schemas"]["documents_override_item"][];
            /**
             * @description Date de planification
             * @example 2018-03-14
             */
            scheduled_date?: string;
        };
        /** @description Un destinataire. Pour supprimer un attribut, passer une chaîne vide. Cette opération n’est pas réalisable sur les attributs obligatoires de l’objet recipient_creation. */
        recipient_update: {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
            /**
             * @description référence client imprimable
             * @example custom12234
             */
            reference_to_print?: string;
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
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...)
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
            /** @description Champs de personnalisation du destinataire */
            custom_fields?: {
                [key: string]: string;
            };
            /**
             * @description Code du pays (Code ISO-3166) codes autorisés  FR, MC, RE, YT, MQ, GP, MF, BL, GF
             * @example FR
             */
            country_code?: string;
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Société Durand
             */
            sender_address_line_1?: string | null;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string | null;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Batiment B
             */
            sender_address_line_3?: string | null;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 10 avenue Charles de Gaulle
             */
            sender_address_line_4?: string | null;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example
             */
            sender_address_line_5?: string | null;
            /**
             * @description Ligne d'adresse n°6 (Code postal et ville) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 94673 Charenton-Le-Pont
             */
            sender_address_line_6?: string | null;
            sender_country_code?: string | null;
            /** @description Liste de bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associés à l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste des
             *     bribes de documents indiquées (dans l'ordre des éléments du tableau). */
            documents_override?: components["schemas"]["documents_override_item"][];
            /**
             * @description Date de planification
             * @example 2018-03-14
             */
            scheduled_date?: string;
        };
        /** @description Les destinataires importés pour l'envoi */
        recipient_response: {
            /**
             * @description Identifiant du destinataire
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id: string;
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom12234
             */
            custom_id?: string;
            /**
             * @description référence client imprimable
             * @example custom12234
             */
            reference_to_print?: string;
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
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...)
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
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Société Durand
             */
            sender_address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Batiment B
             */
            sender_address_line_3?: string;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 10 avenue Charles de Gaulle
             */
            sender_address_line_4?: string;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
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
             * @description référence Maileva du pli.
             * @example 13N16000002
             */
            reference?: string;
            envelope_type?: components["schemas"]["envelope_type"];
            /** @description Liste de bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associés à l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste des
             *     bribes de documents indiquées (dans l'ordre des éléments du tableau). */
            documents_override?: components["schemas"]["documents_override_item"][];
            status: components["schemas"]["recipient_status"];
            /** @description Détail d'un statut (cause du rejet) */
            status_detail?: string;
            /** @description Liste des statuts */
            statuses?: components["schemas"]["statuses"][];
            /**
             * @description Date de planification
             * @example 2018-03-14
             */
            scheduled_date?: string;
            /**
             * @description Date de planification
             * @example 2018-03-14
             */
            deposit_proof_scheduled_date?: string;
            /**
             * @description Date de planification de remise
             * @example 2018-03-14
             */
            scheduled_delivery_date?: string;
            /**
             * @description Dernier statut de distribution
             * @example LP03
             */
            last_delivery_status?: string;
            /**
             * Format: date-time
             * @description Date du dernier statut de distribution
             * @example 2018-03-14T07:21:40.757Z
             */
            last_delivery_status_date?: string;
            /**
             * Format: float
             * @description Coût de l'affranchissement en euros
             */
            postage_price?: number;
            postage_class?: components["schemas"]["postage_class"];
            /**
             * @description Numéro de recommandé
             * @example 1E3232323
             */
            registered_number?: string;
            /**
             * @description URL du document contenu dans la preuve de contenu
             * @example /sendings/110e8400-e29b-11d4-a716-446655440000/recipients/d905a65e-aa46-4f37-8480-260c4600c810/content_proof/download_embedded_document
             */
            content_proof_embedded_document_url?: string;
            /**
             * Format: date-time
             * @description Date de la preuve de dépôt
             * @example 2018-03-14T07:21:40.757Z
             */
            deposit_proof_date?: string;
            /**
             * Format: date-time
             * @description Date d'archivage de la preuve de dépôt
             * @example 2018-03-14T07:21:40.757Z
             */
            deposit_proof_archive_date?: string;
            /**
             * @description URL de l'archive de la preuve de dépôt. Attendre que cet attribut soit renseigné pour lancer le téléchargement.
             * @example /sendings/110e8400-e29b-11d4-a716-446655440000/recipients/d905a65e-aa46-4f37-8480-260c4600c810/download_deposit_proof
             */
            deposit_proof_url?: string;
            /**
             * @description Identifiant de la preuve de dépôt globale
             * @example 49ab87d8-e84b-4915-bd0b-cbf58a7a7a99
             */
            global_deposit_proof_id?: string;
            /**
             * Format: date-time
             * @description Date de la preuve de contenu. Attendre que cet attribut soit renseigné pour lancer le téléchargement.
             * @example 2018-03-14T07:21:40.757Z
             */
            content_proof_date?: string;
            /**
             * Format: date-time
             * @description Date d'archivage de la preuve de contenu
             * @example 2018-03-14T07:21:40.757Z
             */
            content_proof_archive_date?: string;
            /**
             * @description URL de l'archive de la preuve de contenu
             * @example /sendings/110e8400-e29b-11d4-a716-446655440000/recipients/d905a65e-aa46-4f37-8480-260c4600c810/download_content_proof
             */
            content_proof_url?: string;
            /**
             * Format: date-time
             * @description Date de l'avis de réception (AR). Attendre que cet attribut soit renseigné pour lancer le téléchargement.
             * @example 2018-03-15T07:21:40.757Z
             */
            acknowledgement_of_receipt_date?: string;
            /**
             * Format: date-time
             * @description Date d'archivage de l'avis de réception (AR)
             * @example 2018-03-15T07:21:50.757Z
             */
            acknowledgement_of_receipt_archive_date?: string;
            /**
             * @description URL de l'archive de l'avis de réception
             * @example /sendings/110e8400-e29b-11d4-a716-446655440000/recipients/d905a65e-aa46-4f37-8480-260c4600c810/download_acknowledgement_of_receipt
             */
            acknowledgement_of_receipt_url?: string;
            /**
             * Format: date-time
             * @description Date du pli non distribuable (PND).
             * @example 2018-03-15T07:21:40.757Z
             */
            undelivered_mail_date?: string;
            /**
             * Format: date-time
             * @description Date d'archivage du pli non distribuable (PND). Attendre que cet attribut soit renseigné pour lancer le téléchargement.
             * @example 2018-03-15T07:21:50.757Z
             */
            undelivered_mail_archive_date?: string;
            /**
             * @description URL de l'archive du pli non distribuable (PND)
             * @example /sendings/110e8400-e29b-11d4-a716-446655440000/recipients/d905a65e-aa46-4f37-8480-260c4600c810/download_undelivered_mail
             */
            undelivered_mail_url?: string;
            /**
             * @description Raison du pli non distribuable (PND)
             *
             *     <table border="1">
             *       <tr bgcolor="lightgrey">
             *         <th>Code</th>
             *         <th>Libellé</th>
             *       </tr>
             *       <tr>
             *         <td>N02</td>
             *         <td>Destinataire inconnu à l'adresse</td>
             *       </tr>
             *       <tr>
             *         <td>N03</td>
             *         <td>Pli avisé et non réclamé</td>
             *       </tr>
             *       <tr>
             *         <td>N05</td>
             *         <td>Pli refusé par le destinataire</td>
             *       </tr>
             *       <tr>
             *         <td>N07</td>
             *         <td>Défaut d'accès ou d'adressage</td>
             *       </tr>
             *     </table>
             * @example N02
             * @enum {string}
             */
            undelivered_mail_reason?: "N02" | "N03" | "N05" | "N07";
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
            /** @description Liste des delivery statuses */
            delivery_statuses?: components["schemas"]["delivery_status"][];
            /** @description Liste des main delivery statuses */
            main_delivery_statuses?: components["schemas"]["main_delivery_status_response"][];
            /** @description Dernier statut principal de distribution */
            last_main_delivery_status?: components["schemas"]["main_delivery_status_response"];
            /** @description Champs de personnalisation du destinataire */
            custom_fields?: {
                [key: string]: string;
            };
        };
        /**
         * @description Statut du destinataire.
         *     <table border="1">
         *       <tr bgcolor="lightgrey">
         *         <th>Code</th>
         *         <th>Libellé</th>
         *       </tr>
         *       <tr>
         *         <td>DRAFT</td>
         *         <td>le destinataire a été ajouté à l'envoi qui est au statut draft</td>
         *       </tr>
         *       <tr>
         *         <td>PENDING</td>
         *         <td>le destinataire n'a été ni traité, ni rejeté</td>
         *       </tr>
         *       <tr>
         *         <td>BLOCKED</td>
         *         <td>Envoi bloqué</td>
         *       </tr>
         *       <tr>
         *         <td>ACCEPTED</td>
         *         <td>Validé</td>
         *       </tr>
         *       <tr>
         *         <td>PROCESSED</td>
         *         <td>le destinataire a été mis sous pli (liasse appairée si recommandée)</td>
         *       </tr>
         *       <tr>
         *         <td>REJECTED</td>
         *         <td>le destinataire n'est pas valide</td>
         *       </tr>
         *       <tr>
         *         <td>SENDING_REJECTED</td>
         *         <td>Envoi rejeté</td>
         *       </tr>
         *       <tr>
         *         <td>CANCELED</td>
         *         <td>Annulé</td>
         *       </tr>
         *       <tr>
         *         <td>PREPARING</td>
         *         <td>En préparation</td>
         *       </tr>
         *     </table>
         * @example PENDING
         * @enum {string}
         */
        recipient_status: "DRAFT" | "PENDING" | "BLOCKED" | "ACCEPTED" | "SENDING_REJECTED" | "CANCELED" | "PREPARING" | "PROCESSED" | "REJECTED";
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
             * @description Nombre de destinataires au statut BLOCKED
             * @example 1
             */
            blocked?: number;
            /**
             * @description Nombre de destinataires au statut ACCEPTED
             * @example 1
             */
            accepted?: number;
            /**
             * @description Nombre de destinataires au statut PROCESSED
             * @example 0
             */
            processed?: number;
            /**
             * @description Nombre de destinataires au statut SENDING_REJECTED
             * @example 1
             */
            sending_rejected?: number;
            /**
             * @description Nombre de destinataires au statut CANCELED
             * @example 1
             */
            canceled?: number;
            /**
             * @description Nombre de destinataires au statut PREPARING
             * @example 1
             */
            preparing?: number;
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
        /** @description Option d'ajout d'une envelope retour */
        return_envelope: {
            /**
             * @description Type d'enveloppe retour.
             *     FRANKING_ENVELOPE : Enveloppe à affranchir, PREPAID_ENVELOPE : Enveloppe T
             * @example PREPAID_ENVELOPE
             */
            type?: string;
            /**
             * @description Identifiant de l'envelope retour
             * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
             */
            id?: string;
        };
        /** @description Option d'ajout d'une envelope retour */
        update_return_envelope: {
            /**
             * @description Type d'enveloppe retour.
             *     FRANKING_ENVELOPE : Enveloppe à affranchir, PREPAID_ENVELOPE : Enveloppe T PREPAID_ENVELOPE : Enveloppe T
             * @example PREPAID_ENVELOPE
             */
            type?: string;
            /**
             * @description Identifiant de l'envelope retour
             * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
             */
            id?: string;
        } | null;
        /** @description La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée et la ligne d'adresse n°6 doit être renseignée */
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
             * @description référence client imprimable
             * @example custom12234
             */
            reference_to_print?: string;
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
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...)
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
            /** @description Champs de personnalisation du destinataire */
            custom_fields?: {
                [key: string]: string;
            };
            country_code?: string;
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Société Durand
             */
            sender_address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Batiment B
             */
            sender_address_line_3?: string;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 10 avenue Charles de Gaulle
             */
            sender_address_line_4?: string;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example
             */
            sender_address_line_5?: string;
            /**
             * @description Ligne d'adresse n°6 (Code postal et ville) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 94673 Charenton-Le-Pont
             */
            sender_address_line_6?: string;
            sender_country_code?: string;
            /** @description Liste de bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associés à l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste des
             *     bribes de documents indiquées (dans l'ordre des éléments du tableau). */
            documents_override?: components["schemas"]["documents_override_item"][];
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
        rejected_import: {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example 4f89b0f7-30fb-47f5-8be6-111111111111
             */
            correlation_id?: string;
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
            /**
             * @description référence client imprimable
             * @example custom12234
             */
            reference_to_print?: string;
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
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...)
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
            /** @description Champs de personnalisation du destinataire */
            custom_fields?: {
                [key: string]: string;
            };
            country_code: components["schemas"]["country_code"];
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Société Durand
             */
            sender_address_line_1?: string;
            /**
             * @description Ligne d'adresse n°2 (Civilité, Prénom, Nom) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example M. Pierre DUPONT
             */
            sender_address_line_2?: string;
            /**
             * @description Ligne d'adresse n°3 (Résidence, Bâtiment ...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example Batiment B
             */
            sender_address_line_3?: string;
            /**
             * @description Ligne d'adresse n°4 (N° et libellé de la voie) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 10 avenue Charles de Gaulle
             */
            sender_address_line_4?: string;
            /**
             * @description Ligne d'adresse n°5 (Lieu dit, BP...) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example
             */
            sender_address_line_5?: string;
            /**
             * @description Ligne d'adresse n°6 (Code postal et ville) de l'expéditeur. Renseigner ce champ au niveau de la ressource sending et ne pas le renseigner au niveau de recipient si l'adresse expéditeur est la même pour tous les destinataires.
             * @example 94673 Charenton-Le-Pont
             */
            sender_address_line_6?: string;
            sender_country_code?: components["schemas"]["country_code"];
            errors?: components["schemas"]["error_response"][];
            documents_override?: components["schemas"]["documents_override_item"][];
        };
        /** @description un envoi */
        sending_creation: {
            /**
             * @description Nom de l'envoi
             * @example Résiliation d'un abonnement téléphonique
             */
            name: string;
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
             * @description Avis de réception (AR)
             * @default true
             * @example true
             */
            acknowledgement_of_receipt: boolean;
            /**
             * @description Date de planification choisie par le client (à 366j max)
             * @example 2018-03-14
             */
            expected_date?: string;
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
             * @description Feuille porte-adresse optionnelle
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
             * @description Types de notifications
             * @example [
             *       "ALL_MAILEVA",
             *       "ALL_LAPOSTE"
             *     ]
             */
            notification_types?: components["schemas"]["notification_type"][];
            /**
             * @description Possibilité d'imprimer une référence client
             * @default false
             * @example true
             */
            reference_to_print_enabled: boolean;
            /**
             * @description Impression de l'adresse expéditeur
             * @default false
             * @example false
             */
            print_sender_address: boolean;
            /**
             * @description Gestion numérique des PND (plis non distribuables)
             * @default false
             * @example false
             */
            returned_mail_scanning: boolean;
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
            /**
             * @description Durée d'archivage en années, durées autorisées 3, 6, 10
             * @default 3
             * @example 3
             */
            archiving_duration: number;
            /**
             * @description Type d'affranchissement. Valeurs autorisées FAST, URGENT. FAST distribution en 3 jours et URGENT distribution en 2 jours.
             * @default FAST
             * @example FAST
             */
            postage_type: string;
            return_envelope?: components["schemas"]["return_envelope"];
        };
        /** @description Un envoi. Pour supprimer un attribut, passer une chaîne vide. Cette opération n’est pas réalisable sur les attributs obligatoires de l’objet sending_creation */
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
             * @description Avis de réception (AR)
             * @example true
             */
            acknowledgement_of_receipt?: boolean;
            /**
             * @description Date de planification choisie par le client (à 366j max)
             * @example 2018-03-14
             */
            expected_date?: string | null;
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
             * @description Feuille porte-adresse optionnelle
             * @example false
             */
            optional_address_sheet?: boolean;
            /**
             * @description E-mail du destinataire des notifications
             * @example do_not_reply@maileva.com
             */
            notification_email?: string;
            /**
             * @description Types de notifications
             * @example [
             *       "ALL_MAILEVA",
             *       "ALL_LAPOSTE"
             *     ]
             */
            notification_types?: components["schemas"]["notification_type"][];
            /**
             * @description Possibilité d'imprimer une référence client
             * @example true
             */
            reference_to_print_enabled?: boolean;
            /**
             * @description Impression de l'adresse expéditeur
             * @example false
             */
            print_sender_address?: boolean;
            /**
             * @description Gestion numérique des PND (plis non distribuables)
             * @example false
             */
            returned_mail_scanning?: boolean;
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
            /**
             * @description Durée d'archivage en années, durées autorisées 3, 6, 10
             * @example 3
             */
            archiving_duration?: number;
            /**
             * @description Type d'affranchissement. Valeurs autorisées FAST, URGENT. FAST distribution en 3 jours et URGENT distribution en 2 jours.
             * @example FAST
             */
            postage_type?: string;
            return_envelope?: components["schemas"]["update_return_envelope"];
        };
        template_creation: {
            /**
             * @description Nom du template
             * @example Modèle mise en demeure
             */
            template_name?: string;
            /**
             * @description Description du template
             * @example Modèle pour les mises en demeure
             */
            template_description?: string;
        };
        template_response: {
            /** @description Identifiant du template */
            template_id?: string;
            /** @description Lien vers le template */
            template_href?: string;
        };
        from_template_creation: {
            /** @description Identifiant du template */
            template_id?: string;
        };
        /** @description Un envoi de LREL */
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
            /** @description Liste des statuts */
            statuses?: components["schemas"]["statuses"][];
            /**
             * @description Avis de réception (AR)
             * @example true
             */
            acknowledgement_of_receipt?: boolean;
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
             * Format: date
             * @description Date de planification choisie par le client (à 366j max)
             * @example 2023-08-15
             */
            expected_date?: string;
            /**
             * Format: date
             * @description Date de planification.
             * @example 2023-08-16
             */
            scheduled_date?: string;
            /**
             * Format: date-time
             * @description Date et heure de production
             * @example 2018-03-14T07:21:40.757Z
             */
            processed_date?: string;
            /**
             * Format: date-time
             * @description Date d'archivage du dernier pli archivable
             * @example 2018-03-14T07:21:40.757Z
             */
            archive_date?: string;
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
             * @description Référence d'envoi
             * @example 13O14200004
             */
            reference?: string;
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
             * @description Feuille porte-adresse optionnnelle (payante)
             * @example false
             */
            optional_address_sheet?: boolean;
            /**
             * @description Feuille porte-adresse imposée (gratuite)
             * @example false
             */
            system_address_sheet?: boolean;
            /**
             * @description Email de notification
             * @example do_not_reply@maileva.com
             */
            notification_email?: string;
            /**
             * @description Types de notifications
             * @example [
             *       "ALL_MAILEVA",
             *       "ALL_LAPOSTE"
             *     ]
             */
            notification_types?: components["schemas"]["notification_type"][];
            envelope_type?: components["schemas"]["envelope_type"];
            /**
             * @description Possibilité d'imprimer une référence client
             * @example true
             */
            reference_to_print_enabled?: boolean;
            /**
             * @description Impression de l'adresse expéditeur
             * @default false
             * @example false
             */
            print_sender_address: boolean;
            /**
             * @description Gestion numérique des PND (plis non distribuables)
             * @example false
             */
            returned_mail_scanning?: boolean;
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
            /**
             * @description Durée d'archivage en années, durées autorisées 3, 6, 10
             * @example 3
             */
            archiving_duration?: number;
            /**
             * @description Date de planification
             * @example 2018-03-14
             */
            deposit_proof_scheduled_date?: string;
            /**
             * @description Type d'affranchissement. Valeurs autorisées FAST, URGENT. FAST distribution en 3 jours et URGENT distribution en 2 jours.
             * @example FAST
             */
            postage_type?: string;
            /**
             * @description id du template
             * @example templateId
             */
            template_id?: string;
            return_envelope?: components["schemas"]["return_envelope"];
            /**
             * @description Retour en GED
             * @example true
             */
            restitution?: boolean;
        };
        /** @description Les envois */
        sendings_response: {
            sendings: components["schemas"]["sending_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /** @description Les preuves de dépôt globales */
        global_deposit_proofs_response: {
            global_deposit_proofs: components["schemas"]["global_deposit_proof_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /**
         * @description Statut d'un envoi :
         *     <table border="1">
         *       <tr bgcolor="lightgrey">
         *         <th>Code</th>
         *         <th>Libellé</th>
         *       </tr>
         *       <tr>
         *         <td>DRAFT</td>
         *         <td>L'envoi est au statut de brouillon, non validé par l’utilisateur</td>
         *       </tr>
         *       <tr>
         *         <td>PENDING</td>
         *         <td>Le client a fait un envoi, mais il n’a pas encore été analysé par le système ou l'envoi a été reçu mais il n’a pas encore été analysé</td>
         *       </tr>
         *       <tr>
         *         <td>BLOCKED</td>
         *         <td>L'envoi est en attente d'une autorisation financière</td>
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
         *         <td>CANCELED</td>
         *         <td>Votre envoi est annulé</td>
         *       </tr>
         *       <tr>
         *         <td>PREPARING</td>
         *         <td>Votre envoi est en cours de production (impression et mise sous pli)</td>
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
        sending_status: "DRAFT" | "PENDING" | "BLOCKED" | "ACCEPTED" | "REJECTED" | "CANCELED" | "PREPARING" | "PROCESSED" | "PROCESSED_WITH_ERRORS";
        global_deposit_proof_response: {
            /**
             * @description Identifiant de la preuve de dépôt
             * @example 49ab87d8-e84b-4915-bd0b-cbf58a7a7a62
             */
            id?: string;
            /**
             * Format: date-time
             * @description Date de la preuve de dépôt
             * @example 2018-03-14T07:21:40.757Z
             */
            date?: string;
            /**
             * @description Identifiant de l'envoi associé à la preuve de dépôt
             * @example 49ab87d8-e84b-4915-bd0b-cbf58a7a7a99
             */
            sending_id?: string;
            /**
             * @description Lien de téléchargement de la preuve de dépôt
             * @example /global_deposit_proofs/49ab87d8-e84b-4915-bd0b-cbf58a7a7a62/download
             */
            url?: string;
            /**
             * Format: date-time
             * @description Date d'archivage de la preuve de dépôt
             * @example 2018-03-14T07:21:40.757Z
             */
            archive_date?: string;
        };
        /**
         * document_metadata
         * Format: application/json
         */
        document_metadata: {
            priority?: number;
            name?: string;
            /**
             * @description Type du document
             * @enum {string}
             */
            category?: "ANNEX";
        };
        /** @description Statut de distribution */
        delivery_status: {
            /**
             * Format: date-time
             * @description Date de l'évènement
             * @example 2018-03-14T07:21:40.757Z
             */
            date?: string;
            /**
             * @description Lieu de l'évènement
             * @example LOGNES PIC
             */
            location?: string;
            /**
             * @description Code MAILEVA du statut de distribution
             *     <table border="1">
             *     <tr bgcolor="lightgrey">
             *     <th>Code</th>
             *     <th>Libellé</th>
             *     <th>Code fournisseur</th>
             *     <th>Famille</th>
             *     </tr>
             *     <tr><td>LP01</td><td>Pris en charge</td><td>PCHCFM</td><td>Prise en charge</td></td>
             *     <tr><td>LP02</td><td>Courrier imprimé et prêt à expédier</td><td>EPCCFM</td><td>Prise en charge</td></td>
             *     <tr><td>LP03</td><td>Tri départ</td><td>AECCFM</td><td>Acheminement</td></td>
             *     <tr><td>LP04</td><td>Tri arrivée</td><td>CHGCFM</td><td>Acheminement</td></td>
             *     <tr><td>LP05</td><td>Preuve de dépôt numérique disponible</td><td>POCDSP</td><td>Acheminement</td></td>
             *     <tr><td>LP06</td><td>Preuve de contenu générée</td><td>POCCFM</td><td>Acheminement</td></td>
             *     <tr><td>LP07</td><td>Preuve de contenu envoyée</td><td>PCHPIC</td><td>Acheminement</td></td>
             *     <tr><td>LP08</td><td>Pli mis à disposition en bureau de poste</td><td>MLVARS</td><td>Instance</td></td>
             *     <tr><td>LP09</td><td>Destinataire absent avisé</td><td>RENAVI</td><td>Instance</td></td>
             *     <tr><td>LP10</td><td>Destinataire absent nouveau rendez-vous</td><td>RENNRV</td><td>Instance</td></td>
             *     <tr><td>LP11</td><td>Remis en distribution</td><td>RSTFHB</td><td>Instance</td></td>
             *     <tr><td>LP12</td><td>Distribution différée pour force majeure</td><td>RSTFMA</td><td>Instance</td></td>
             *     <tr><td>LP13</td><td>Distribution différée pour raison interne</td><td>RSTNCG</td><td>Instance</td></td>
             *     <tr><td>LP14</td><td>Arrivée au site de distribution</td><td>AARCFM</td><td>Distribution</td></td>
             *     <tr><td>LP15</td><td>Distribué</td><td>LIVCFM</td><td>Distribution</td></td>
             *     <tr><td>LP16</td><td>Distribué (avec remarques du destinataire)</td><td>LIVRCA</td><td>Distribution</td></td>
             *     <tr><td>LP17</td><td>Distribué à l'expéditeur (suite au retour du pli)</td><td>LIVREO</td><td>Distribution</td></td>
             *     <tr><td>LP18</td><td>Avis de réception numérique disponible</td><td>PODDSP</td><td>Distribution</td></td>
             *     <tr><td>LP19</td><td>Retour à l'expéditeur pour cause de délai d'instance expiré</td><td>RENATT</td><td>Retour à l'expéditeur</td></td>
             *     <tr><td>LP20</td><td>Retour à l'expéditeur pour cause d'adresse incorrecte/incomplète</td><td>RENCAD</td><td>Retour à l'expéditeur</td></td>
             *     <tr><td>LP21</td><td>Retour à l'expéditeur pour cause de destinataire inconnu à l'adresse</td><td>RENDIA</td><td>Retour à l'expéditeur</td></td>
             *     <tr><td>LP22</td><td>Retour à l'expéditeur pour cause de pli refusé</td><td>RENDIV</td><td>Retour à l'expéditeur</td></td>
             *     <tr><td>LP23</td><td>Renvoyé par le Service Client au destinataire</td><td>CHGRCA</td><td>Réexpédition</td></td>
             *     <tr><td>LP24</td><td>Renvoi du Service Client vers l'expéditeur après enquête</td><td>SOLREO</td><td>Réexpédition</td></td>
             *     <tr><td>LP25</td><td>Renvoi du Service Client vers l'expéditeur - Délai de garde expiré</td><td>SOLMAR</td><td>Réexpédition</td></td>
             *     <tr><td>LP26</td><td>Réexpédition/Dérivation</td><td>RENLNA</td><td>Réexpédition</td></td>
             *     <tr><td>LP27</td><td>Renvoi du Service Client vers l'expéditeur</td><td>RSDREI</td><td>Réexpédition</td></td>
             *     <tr><td>LP28</td><td>Distribué au destinataire après enquête</td><td>RSDICI</td><td>Distribution</td></td>
             *     <tr><td>LP29</td><td>Remis et distribué en lot</td><td>LIVNEM</td><td>Distribution</td></td>
             *     <tr><td>LP00</td><td>Code inconnu</td><td>Tous les autres</td><td>Inconnu</td></td>
             *     </table>
             * @example LP03
             */
            code?: string;
            /**
             * @description Libellé du statut de distribution
             * @example Tri départ
             */
            label?: string;
            /**
             * @description Fournisseur de l'évènement
             * @example La Poste
             */
            source?: string;
            /**
             * @description Code fournisseur du statut de distribution. Cette codification est donnée à titre informatif et est susceptible de changer.
             * @example AECCFM
             */
            code_provider?: string;
            /**
             * Format: date-time
             * @description Date de création de la ressource
             * @example 2023-05-25T11:33:00.037Z
             */
            creation_date?: string;
        };
        /** @description Statut principal de distribution */
        main_delivery_status_response: {
            /**
             * Format: date-time
             * @description Date de l'évènement
             * @example 2018-03-14T07:21:40.757Z
             */
            date?: string;
            /**
             * @description Catégorie de l'évènement. Valeurs possibles DELIVERING, FIRST_PRESENTATION, DELIVERED, UNDELIVERED.
             *     <table border="1">
             *     <tr bgcolor="lightgrey">
             *     <th>Category</th>
             *     <th>Signification</th>
             *     </tr>
             *     <tr><td>DELIVERING</td><td>En distribution</td></tr>
             *     <tr><td>FIRST_PRESENTATION</td><td>Première présentation</td></tr>
             *     <tr><td>DELIVERED</td><td>Distribution</td></tr>
             *     <tr><td>UNDELIVERED</td><td>Non distribuable</td></tr>
             *     </table>
             * @example DELIVERED
             */
            category?: string;
            /**
             * @description Lieu de l'évènement
             * @example IVRY BIEVRE PDC1
             */
            location?: string;
            /**
             * @description Code MAILEVA du statut de distribution
             * @example LP15
             */
            code?: string;
            /**
             * @description Libellé du statut de distribution
             * @example Distribué
             */
            label?: string;
            /**
             * @description Fournisseur de l'évènement
             * @example La Poste
             */
            source?: string;
            /**
             * @description Code fournisseur du statut de distribution. Cette codification est donnée à titre informatif et est susceptible de changer.
             * @example LIVCFM
             */
            code_provider?: string;
            /**
             * Format: date-time
             * @description Date de création de la ressource
             * @example 2023-05-25T11:33:00.037Z
             */
            creation_date?: string;
        };
    };
    responses: never;
    parameters: {
        /** @description Identifiant du document */
        document_id: string;
        /** @description Identifiant de l'import */
        import_recipients_id: string;
        /** @description statut d'un envoi (recherche possible avec plusieurs statuts, séparés par une virgurle) */
        status: string;
        /** @description Le premier élément à retourner */
        paging_start_index: number;
        /** @description Le nombre d'élément à retourner */
        paging_count: number;
        /** @description liste des champs à trier ASC séparé par une virgule */
        sort: string;
        /** @description le type de tri, il est ASC si desc est false ou si elle n'est pas renseignée */
        desc: boolean;
        search_parameters: {
            [key: string]: Record<string, never>;
        };
        /** @description Le nombre d'éléments à retourner */
        paging_documents_count: number;
        /** @description Identifiant du destinataire */
        recipient_id: string;
        /** @description Identifiant d'un envoi */
        sending_id: string;
        /** @description Identifiant d'une preuve de dépôt globale */
        global_deposit_proof_id: string;
        /** @description Identifiant d'un import d'adresses */
        addresses_import_id: string;
        /** @description L'ID de la prévisualisation (format PDF) */
        file_id: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "get-all-sendings": {
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
    "post-sending": {
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
    "get-sending": {
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
    "delete-sending": {
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
    "update-sending": {
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
                "application/json": components["schemas"]["sending_update"];
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
    "submit-sending": {
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
    "get-all-documents-of-sending": {
        parameters: {
            query?: {
                /** @description Le premier élément à retourner */
                start_index?: components["parameters"]["paging_start_index"];
                /** @description Le nombre d'éléments à retourner */
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
    "post-document-of-sending": {
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
                    metadata?: components["schemas"]["document_metadata"];
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
    "get-document-of-sending": {
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
    "delete-document-of-sending": {
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
    "set-document-priority-of-sending": {
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
    "get-all-recipients-of-sending": {
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
    "create-recipient-of-sending": {
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
    "delete-all-recipients-of-sending": {
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
    "get-recipient-of-sending": {
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
    "delete-recipient-of-sending": {
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
    "patch-recipient-of-sending": {
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
                "application/json": components["schemas"]["recipient_update"];
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
    "submit-recipients-import-of-sending": {
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
    "download-acknowledgement-of-receipt-of-recipient-of-sending": {
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
                    "application/pdf": string;
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
    "download-archived-undelivered_mail-of-recipient-of-sending": {
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
                    "application/pdf": string;
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
    "download-deposit-proof-of-recipient-of-sending": {
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
                    "application/pdf": string;
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
    "download-content-proof-of-recipient-of-sending": {
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
                    "application/pdf": string;
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
    "download-embedded-document-of-recipient-of-sending": {
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
                    "application/pdf": string;
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
    "get-all-global-deposit-proofs": {
        parameters: {
            query?: {
                /** @description Le premier élément à retourner */
                start_index?: components["parameters"]["paging_start_index"];
                /** @description Le nombre d'élément à retourner */
                count?: components["parameters"]["paging_count"];
                /** @description Filtre sur le sending_id */
                sending_id?: string;
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
                    "application/json": components["schemas"]["global_deposit_proofs_response"];
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
    "get-global-deposit-proof": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant d'une preuve de dépôt globale */
                global_deposit_proof_id: components["parameters"]["global_deposit_proof_id"];
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
                    "application/json": components["schemas"]["global_deposit_proof_response"];
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
    "download-global_deposit_proof": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant d'une preuve de dépôt globale */
                global_deposit_proof_id: components["parameters"]["global_deposit_proof_id"];
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
                    "application/pdf": string;
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
