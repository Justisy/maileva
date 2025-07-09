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
         * @description Permet de créer un envoi. Cet envoi sera en état de brouillon (statut DRAFT), il est donc nécessaire de soummettre l'envoi afin qu'il soit envoyé en production.
         */
        post: operations["createSending"];
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
        get: operations["getSending"];
        put?: never;
        post?: never;
        /**
         * Suppression d'un envoi
         * @description Permet de supprimer un envoi.
         *
         *     Seuls les envois en état de brouillon (DRAFT) peuvent être supprimés.
         */
        delete: operations["deleteSending"];
        options?: never;
        head?: never;
        /**
         * Modification des options d'envoi
         * @description Permet de modifier les options liées à un envoi.
         *
         *     Seuls les envois en état de brouilon (DRAFT) peuvent être modifiés.
         *
         *     Seuls les paramètres pour lesquels une valeur est fournie sont modifiés.
         *
         *     Si votre système ne permet pas d'utiliser le verbe PATCH, il est possible d'utiliser le verbe POST.
         */
        patch: operations["updateSending"];
        trace?: never;
    };
    "/sendings/{sending_id}/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des envois vérifiés avant soumission
         * @description Permet de connaitre l'état du contrôle de l'envoi.
         */
        get: operations["getCheckSending"];
        put?: never;
        /**
         * Vérification de l'envoi avant soumission
         * @description Permet de vérifier l'envoi avant soumission (asynchrone).
         *
         *     Cette vérification est à réaliser systématiquement au moment du SUBMIT de l'envoi.
         *
         *     Il est nécessaire d'indiquer un canal d'envoi (SENDING MODE)
         *     - Lettre Recommandé (REGISTERED_MAIL)
         *     - Electronique (ELECTRONIC_NOTICE)
         *     - Consentement (USE_CONSENT), le canal étant défini en fonction du consentement donné par le destinataire
         *
         *     En fonction du canal d'envoi défini, des informations d'envoi et destinataires sont nécessaires.
         *
         *     __Informations d'envoi obligatoires pour les envois papiers  :__
         *
         *     - Le format d'impression : recto-verso ou recto seul
         *     - Durée d'archivage optionnelle : 0 an, 3, 6 ou 10 ans
         *     - gestion électronique des plis non distribuables (PND)
         *     - informations liées à l'expediteur
         *
         *     __Informations destinataires pour un envoi papier :__
         *     - address_line_1
         *     - address_line_2
         *     - address_line_3
         *     - address_line_4
         *     - address_line_5
         *     - address_line_6
         *
         *     Chaque ligne d’adresse doit contenir au plus 38 caractères.
         *
         *     La ligne d’adresse 1 ou 2 doit être définie obligatoirement. La ligne d’adresse 6 doit être définie obligatoirement. Pour les adresses françaises, la ligne d’adresse 6 doit contenir un code postal sur 5 chiffres, suivi d’un espace, suivi d’une ville.
         *
         *     __Informations d'envoi obligatoires pour les envois électroniques :__
         *
         *     - Objet de la notification qui sera envoyée au destinataire
         *     - Message personnalisé
         *     - Complément d'information afin de rajouter une mention libre juste après le nom et prénom (ou société) de l’expéditeur.
         *
         *
         *     __Informations destinataires  pour un envoi électronique :__
         *     - Legal status
         *     - first_name
         *     - last_name
         *     - company
         *     - email
         *
         *     Seul le champs "société" est facultatif, les autres étant obligatoires.
         *
         *
         *     Pour les envois passant par le consentement des destinataires, l'ensemble des champs sont nécessaires afin de pouvoir effectuer l'envoi en version papier ou en version électonique.
         */
        post: operations["checkSending"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sendings/{sending_id}/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Contrôle l'état d'un envoi après soumission
         * @description Permet de connaitre l'état du contrôle de l'envoi.
         */
        get: operations["getSubmitSending"];
        put?: never;
        /**
         * Finalisation d'un envoi
         * @description Permet de soumettre l'envoi (asynchrone) et déclencher ainsi la demande de production.
         *
         *     Un envoi soumis ne peut pas être annulé.
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
         * @description Permet d'ajouter un document à l'envoi.
         *
         *     Les documents autorisés sont les documents imprimables
         *     - PDF
         *     - doc(x)
         *     - xls(x)
         *     - txt
         *
         *     Les documents ajoutés pour un envoi ne doivent pas dépasser 50Mo au total. Le nombre total de documents est limité à 30.
         *
         *     Les documents ajoutés pour un envoi ne doivent pas être inférieur à 4 feuilles et ne doivent pas dépasser 200 feuilles au total (page porte adresse comprise).
         *
         *     Dans le cas ou l'option recto est activée, le nombre de page minimum est de 4 et le nombre maximum de page est limité à 199 (hors page porte adresse).  Dans le cas ou l'option recto/verso est activée, le nombre de page minimum est de 7 et le nombre maximum de page est limité à 398 (hors page porte adresse).
         *
         *     Le document doit être transmis en mutipart ainsi que la metadata. La metadata est constituée de priority (permet de définir l'ordre de priorité des documents dans l'envoi), de name (permet de donner un nom au fichier) et adjust (permet d'ajuster la taille).
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
        delete: operations["deleteDocument"];
        options?: never;
        head?: never;
        /**
         * Modification des metadata d'un document
         * @description Permet de modifier les metadata d'un document (priority, name, adjust)
         */
        patch: operations["updateDocument"];
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
         * @description Permet d'ajouter un destinataire à l'envoi. Le nombre de destinataires est limité à 30 000. Les documents ajoutés pour un envoi ne doivent pas dépasser 200 feuilles au total.
         *
         *             Il est nécessaire d'indiquer un canal d'envoi (SENDING MODE)
         *     - Lettre Recommandé (REGISTERED_MAIL)
         *     - Electronique (ELECTRONIC_NOTICE)
         *     - Consentement (USE_CONSENT), le canal étant défini en fonction du consentement donné par le destinataire
         *
         *     En fonction du canal d'envoi défini, des informations destinataires sont nécessaires.
         *
         *     __Informations destinataires pour le sending_mode "REGISTERED_MAIL" :__
         *     - address_line_1
         *     - address_line_2
         *     - address_line_3
         *     - address_line_4
         *     - address_line_5
         *     - address_line_6
         *
         *     Chaque ligne d’adresse doit contenir au plus 38 caractères.
         *
         *     La ligne d’adresse 1 ou 2 doit être définie obligatoirement. La ligne d’adresse 6 doit être définie obligatoirement. Pour les adresses françaises, la ligne d’adresse 6 doit contenir un code postal sur 5 chiffres, suivi d’un espace, suivi d’une ville.
         *
         *     __Informations destinataires  pour le sending_mode "ELECTRONIC_NOTICE" :__
         *     - Legal status
         *     - first_name
         *     - last_name
         *     - company
         *     - email
         *
         *     Seul le champs "société" est facultatif, les autres étant obligatoires.
         *
         *
         *     Pour les destinataires passant par le mode d'envoi "USE_CONSENT" les champs obligatoires des destinataires papier et electronique sont à définir.
         */
        post: operations["createRecipient"];
        /**
         * Suppression de tous les destinataires
         * @description Permet de supprimer tous les destinataires d'un envoi. Disponible pour les envois en statut Draft seulement.
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
         * @description Permet de télécharger la preuve de dépôt du destinataire. Seules les preuves de dépôt des envois électronique sont disponibles. Concernant le papier, les preuves de dépôt sont transmises à l'expéditeur par recommandé papier.
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
         * @description Permet de télécharger au format PDF le justificatif de réception du destinataire. Pour les envois papiers, il est nécessaire d'utiliser l'option "acknowledgement_of_receipt_scanning" afin que l'AR soit numérisé et disponible depuis cet url. Si l'option n'est pas activée, l'expéditeur reçoit son AR en version papier.
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        SendingCreation: {
            /**
             * @description Nom de l'envoi
             * @example Résiliation d'un abonnement téléphonique
             */
            name?: string;
            /**
             * @description Identifiant de l'envoi défini par le client.
             * @example ref client
             */
            custom_id?: string;
            /**
             * @description Information libre fournie par le client.
             * @example ref_dossier
             */
            custom_data?: string;
            registered_mail_options?: components["schemas"]["registered_mail_options"];
            electronic_notice_options?: components["schemas"]["electronic_notice_options"];
        };
        SendingResponse: {
            id?: string;
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
             * @description Information libre fournie par le client.
             * @example ref_dossier
             */
            custom_data?: string;
            registered_mail_options?: components["schemas"]["registered_mail_options"];
            electronic_notice_options?: components["schemas"]["electronic_notice_options"];
            /**
             * @description Statut d'un envoi : <table border="1"> <tr bgcolor="lightgrey"> <th>Type de statut</th> <th>Description</th> </tr> <tr> <td>DRAFT</td> <td>L'envoi est au statut de brouillon, non validé par l’utilisateur</td> </tr> <td>PENDING</td> <td>Le client a fait un envoi, mais il n’a pas encore été analysé par le système ou l'envoi a été reçu mais il n’a pas encore été analysé</td> </tr> </tr> <td>BLOCKED</td> <td>L'envoi est bloqué pour problème de paiement. Il sera automatiquement débloqué une fois le paiement régularisé.</td> </tr> <tr> <td>ACCEPTED</td> <td>L'envoi est compatible avec nos critères de validation et va être traité.</td> </tr> <tr> <td>REJECTED</td> <td>L'envoi est rejeté et ne peut être traité (exemple : incompatibilité d'options, de document, paiement...)</td> </tr> </tr> <td>CANCELED</td> <td>L’envoi a été annulé par l'utilisateur.</td> </tr> </tr> <td>PREPARING</td> <td>L’envoi est en cours de production.</td> </tr> <tr> <td>PROCESSED</td> <td>L'envoi a été traité et tous les destinataires étaient valides</td> </tr> <tr> <td>PROCESSED_WITH_ERRORS</td> <td>L'envoi a été traité mais certains destinataires n’étaient pas valides</td> </tr> </table>
             * @enum {string}
             */
            status?: "DRAFT" | "PENDING" | "BLOCKED" | "ACCEPTED" | "REJECTED" | "CANCELED" | "PREPARING" | "PROCESSED" | "PROCESSED_WITH_ERRORS";
            /** @description Identifiant interne Maileva de la commande. */
            order_id?: string;
            /** @description Reference interne Maileva de la commande. */
            order_reference?: string;
            /**
             * Format: date-time
             * @description Date et heure de soumission
             * @example 2018-03-14T07:21:40.757Z
             */
            submission_date?: string;
            /**
             * Format: date-time
             * @description Date et heure de production
             * @example 2018-03-14T07:21:40.757Z
             */
            processed_date?: string;
            /**
             * Format: date-time
             * @description Date et heure d'archivage'
             * @example 2018-03-14T07:21:40.757Z
             */
            archive_date?: string;
            created_by?: components["schemas"]["ByModel"];
            modified_by?: components["schemas"]["ByModel"];
        };
        SendingUpdate: {
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
             * @description Information libre fournie par le client.
             * @example ref_dossier
             */
            custom_data?: string;
            registered_mail_options?: components["schemas"]["registered_mail_options"];
            electronic_notice_options?: components["schemas"]["electronic_notice_options"];
        };
        SendingsResponse: {
            sendings?: components["schemas"]["SendingResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        DocumentCreation: {
            /** Format: binary */
            document: string;
            metadata?: {
                /** @description Ordre de priorité du document dans l'envoi. */
                priority: number;
                /** @description Nom du document */
                name: string;
                /**
                 * @description Ajuste la taille du document et permet de réduire les pages hors format.
                 * @default true
                 */
                adjust: boolean;
            };
        };
        DocumentUpdate: {
            metadata?: {
                /** @description Ordre de priorité du document dans l'envoi. */
                priority?: number;
                /** @description Nom du document */
                name?: string;
                /** @description Ajuste la taille du document et permet de réduire les pages hors format. */
                adjust?: boolean;
            };
        };
        DocumentResponse: {
            id?: string;
            /**
             * @description Statut de la vérification du document
             * @default PROCESSED
             * @enum {string}
             */
            status: "CONVERTING" | "PROCESSED" | "REJECTED";
            /** @description Raison du rejet (statut REJECTED uniquement) */
            detail?: string;
            metadata?: {
                name?: string;
                /** @description Ordre de priorité du document dans l'envoi. */
                priority?: number;
                /** @description Ajuste la taille du document et permet de réduire les pages hors format. */
                adjust?: boolean;
                /**
                 * @description Type du document
                 * @example application/pdf
                 */
                type?: string;
                /**
                 * @description Nombre de pages (disponible à partir du statut ACCEPTED)
                 * @example 3
                 */
                pages_count?: number;
                /**
                 * Format: int64
                 * @description Poids du document en octets
                 * @example 139071
                 */
                size?: number;
                /**
                 * Format: int64
                 * @description Poids du document convertis en octets
                 * @example 139072
                 */
                converted_size?: number;
            };
        };
        DocumentsResponse: {
            documents?: components["schemas"]["DocumentResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        RecipientCreation: {
            /**
             * @description Mode d'envoi du destinataire. Il peut être papier, électronique ou passer par le service de consentement. Si le consentement est donné par le destinataire, le mode d'envoi sera électronique, sinon il sera papier.
             * @enum {string}
             */
            sending_mode: "REGISTERED_MAIL" | "ELECTRONIC_NOTICE" | "USE_CONSENT";
            /**
             * @description Identifiant du destinataire fourni par le client.
             * @example custom
             */
            custom_id?: string;
            /** @description Information libre fournie par le client. */
            custom_data?: string;
            registered_mail_detail?: components["schemas"]["registered_mail_detail"];
            electronic_notice_detail?: components["schemas"]["electronic_notice_detail"];
            documents_override?: components["schemas"]["composed_document"];
        };
        RecipientUpdate: {
            /**
             * @description Identifiant du destinataire fourni par le client
             * @example custom
             */
            custom_id?: string;
            /** @description Information libre fournie par le client. */
            custom_data?: string;
            /**
             * @description Mode d'envoi du destinataire. Il peut être papier, électronique ou passer par le service de consentement. Si le consentement est donné par le destinataire, le mode d'envoi sera électronique, sinon il sera papier.
             * @enum {string}
             */
            sending_mode?: "USE_CONSENT" | "REGISTERED_MAIL" | "ELECTRONIC_NOTICE";
            /**
             * @description Type de destinataire
             * @enum {string}
             */
            legal_status?: "PROFESSIONAL" | "INDIVIDUAL";
            /**
             * @description Prénom du destinataire (envoi électronique seulement)
             * @example jean
             */
            first_name?: string;
            /**
             * @description Nom du destinataire (envoi électronique seulement)
             * @example Dupont
             */
            last_name?: string;
            /** @description Société du destinataire (envoi électronique seulement) */
            company?: string;
            /**
             * @description Adresse email du destinataire
             * @example jean.dupont@gmail.com
             */
            email?: string;
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
            documents_override?: components["schemas"]["composed_document"];
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
            /** @description Information libre fournie par le client. */
            custom_data?: string;
            /**
             * @description Mode d'envoi du destinataire. Il peut être papier, électronique ou passer par le service de consentement. Si le consentement est donné par le destinataire, le mode d'envoi sera électronique, sinon il sera papier.
             * @enum {string}
             */
            sending_mode?: "REGISTERED_MAIL" | "ELECTRONIC_NOTICE" | "USE_CONSENT";
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
            /** @description Société du destinataire */
            company?: string;
            /**
             * @description Statut du destinataire. <table border="1"> <tr bgcolor="lightgrey"> <th>Type de statut</th> <th>Description</th> </tr> <tr> <td>DRAFT</td> <td>Ajout d’un destinataire à un envoi non soumis.</td> </tr> <tr> <td>PENDING</td> <td>Le destinataire appartient à un envoi qui est en cours de validation.</td> </tr> <tr> <td>BLOCKED</td> <td>Le destinataire appartient à un envoi qui est bloqué.</td> </tr> <tr> <td>ACCEPTED</td> <td>Le destinataire a été accepté et sera produit.</td> </tr> <tr> <td>REJECTED</td> <td>Le destinataire a été rejeté, ou appartient à un envoi qui a été rejet.</td> </tr> <tr> <td>CANCELED</td> <td>Le destinataire appartient à un envoi qui a été annulé.</td> </tr> <tr> <td>PREPARING</td> <td>Le destinataire est en train d'être produit.</td> </tr> <tr> <td>PROCESSED</td> <td>Le destinataire a été produit.</td> </tr> </table>
             * @example PENDING
             * @enum {string}
             */
            status?: "DRAFT" | "PENDING" | "BLOCKED" | "ACCEPTED" | "REJECTED" | "CANCELED" | "PREPARING" | "PROCESSED";
            /** @description Détail d'un statut (cause du rejet) */
            status_detail?: string;
            /**
             * @description statut de distribution. <table border="1"> <tr bgcolor="lightgrey"> <th>Type de statut</th> <th>Description</th> </tr> <tr> <td>DELIVERING</td> <td>Le courrier de ce destinataire est en cours de distribution.</td> </tr> <tr> <td>ATTEMPTED_DELIVERY</td> <td>Une tentative de remise du courrier au destinataire a été effectuée.</td> </tr> <tr> <td>DELIVERED</td> <td>Le courrier a été est remis au destinataire.</td> </tr> <tr> <td>UNDELIVERED</td> <td>Le courrier n'a pas été remis au destinataire (statut définitif).</td> <tr>  </table>
             * @example DELIVERED
             * @enum {string}
             */
            delivery_status?: "DELIVERING" | "ATTEMPTED_DELIVERY" | "DELIVERED" | "UNDELIVERED";
            /** @description Détail d'un statut de distribution */
            delivery_status_detail?: string;
            /**
             * Format: date-time
             * @description Date du statut de l'envoi
             * @example 2018-03-14T07:21:40.757Z
             */
            status_date?: string;
            /**
             * Format: date-time
             * @description Date du statut de distribution
             * @example 2018-03-14T07:21:40.757Z
             */
            delivery_status_date?: string;
            /**
             * @description Mode d'envoi final du destinataire. Si le consentement est donné par le destinataire, le mode d'envoi final sera électronique, sinon il sera papier.
             * @enum {string}
             */
            final_sending_mode?: "REGISTERED_MAIL" | "ELECTRONIC_NOTICE";
            delivery_proof?: components["schemas"]["DeliveryProofResource"];
            deposit_proof?: components["schemas"]["DepositProofResource"];
            documents_override?: components["schemas"]["composed_document"];
        };
        RecipientsResponse: {
            recipients?: components["schemas"]["RecipientResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        /** @description Preuve de dépôt */
        DepositProofResource: {
            /**
             * @description Identifiant de la preuve
             * @example d905a65e-aa46-4f37-8480-260c4600c818
             */
            id?: string;
            /**
             * @description Date de création de la preuve
             * @example 2018-03-14T07:21:40.757Z
             */
            creation_date?: string;
            /** @description Lien de téléchargement de la preuve */
            href?: string;
        };
        /** @description Preuve de dépôt */
        DeliveryProofResource: {
            /**
             * @description Identifiant de la preuve
             * @example d905a65e-aa46-4f37-8480-260c4600c818
             */
            id?: string;
            /**
             * @description Type de preuve
             * @example DELIVERY_PROOF
             * @enum {string}
             */
            type?: "REFUSAL_PROOF" | "ACKNOWLEDGMENT_OF_RECEIPT" | "NOT_CLAIMED_PROOF" | "DELIVERY_PROOF";
            /**
             * @description Date de création de la preuve
             * @example 2018-03-14T07:21:40.757Z
             */
            creation_date?: string;
            /** @description Lien de téléchargement de la preuve */
            href?: string;
        };
        /** @description Bribe de document (plage de pages) */
        document: {
            /**
             * Format: uuid
             * @description uid du document préalablement ajouté
             * @example 6dfe84bc-3428-43db-90b5-ff9ac3b68ac2
             */
            document_id: string;
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
        /**
         * @description Code du pays (Code ISO-3166). Pas d'envoi à l'International.
         * @example FR
         * @enum {string}
         */
        country_code: "FR" | "MC" | "AD" | "RE" | "YT" | "MQ" | "GP" | "MF" | "BL" | "GF" | "PM";
        Paging: {
            prev?: string;
            next?: string;
            /** Format: int64 */
            total_results?: number;
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
            total?: number;
        };
        ErrorsDto: {
            errors?: components["schemas"]["ErrorDto"][];
        };
        ErrorDto: {
            code?: string;
            message?: string;
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
             *     </table> */
            code: string;
            message: string;
        };
        /**
         * composed_document
         * @description Liste de bribes de documents. Si ce champ n'est pas renseigné, le destinataire recevra tous les documents associé à l'envoi dans l'ordre spécifié par la priorité. Si ce champ est renseigné, le destinataire recevra la liste de bribes de documents indiquées (dans l'ordre des éléments du tableau).
         */
        composed_document: {
            /** @description Nom du document composé. Il sera visible par le destinataire en cas d'envoi électronique. */
            name: string;
            documents?: components["schemas"]["document"][];
        };
        /** ByModel */
        ByModel: {
            application_id?: string;
            user_login?: string;
            date?: string;
        };
        /** RegisteredMailOptions */
        registered_mail_options: {
            /**
             * @description Impression recto verso
             * @default true
             * @example true
             */
            duplex_printing: boolean;
            /**
             * @description Durée d'archivage optionnelle pour envoi papier (en années). Par défaut, elle est à 0.
             * @default 0
             * @example 0
             * @enum {integer}
             */
            archiving_duration: 0 | 1 | 3 | 6 | 10;
            /**
             * @description Gestion électronique des avis de réception (AR). Cette option indique que Maileva doit recevoir, numériser,
             *     mettre en ligne l’image et archiver physiquement les Avis de Réception. Pour cela, la première ligne de l’adresse
             *     de l’expéditeur sera conservée, mais les 5 autres lignes et le pays seront remplacés par l’adresse de Maileva.
             *     Cette option nécessite que l’option avis de réception soit activée.
             * @default false
             * @example true
             */
            acknowledgement_of_receipt_scanning: boolean;
            /**
             * @description Ligne d'adresse n°1 (Société) de l'expéditeur
             * @example Société Durand
             */
            sender_address_line_1: string;
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
            sender_address_line_6: string;
            sender_country_code?: components["schemas"]["country_code"];
        };
        /** ElectronicNoticeOptions */
        electronic_notice_options: {
            /** @description Id de l'expéditeur */
            electronic_sender_id: string;
            /**
             * @description Objet de l'email (obligatoire)
             * @example Convocation AG
             */
            notification_object: string;
            /**
             * @description Message libre défini par le client transmis aux destinataires lors de l'ouverture de son avis électronique
             * @example Message personnalisé
             */
            message?: string;
            /**
             * @description Nom de l'éxpediteur défini par le client ajouté après le nom de l'éxpediteur
             * @example Nom & Prénom pour le compte de Maileva
             */
            additional_sender_name?: string;
        };
        /** ElectronicNoticeDetail */
        electronic_notice_detail: {
            /**
             * @description Type de destinataire
             * @enum {string}
             */
            legal_status: "PROFESSIONAL" | "INDIVIDUAL";
            /**
             * @description Prénom du destinataire (envoi électronique seulement)
             * @example jean
             */
            first_name: string;
            /**
             * @description Nom du destinataire (envoi électronique seulement)
             * @example Dupont
             */
            last_name: string;
            /** @description Société du destinataire (envoi électronique seulement) */
            company?: string;
            /**
             * @description Adresse email du destinataire
             * @example jean.dupont@gmail.com
             */
            email: string;
        };
        /** RegisteredMailDetail */
        registered_mail_detail: {
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
            country_code?: components["schemas"]["country_code"];
        };
    };
    responses: {
        /** @description The specified resource was not found */
        Error404: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["error_response"];
            };
        };
        /** @description Unauthorized */
        Error401: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["error_response"];
            };
        };
        /** @description Bad Request */
        Error400: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["error_response"];
            };
        };
    };
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
    createSending: {
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
    deleteSending: {
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
    updateSending: {
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
    getCheckSending: {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description No results yet */
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
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    checkSending: {
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
    getSubmitSending: {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description No results yet */
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
            /** @description Not Found */
            404: {
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
            /** @description Successful operation */
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
                "multipart/form-data": components["schemas"]["DocumentCreation"];
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
            401: components["responses"]["Error401"];
            404: components["responses"]["Error404"];
        };
    };
    deleteDocument: {
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
    updateDocument: {
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
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["DocumentUpdate"];
            };
        };
        responses: {
            /** @description OK */
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
    createRecipient: {
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
}
