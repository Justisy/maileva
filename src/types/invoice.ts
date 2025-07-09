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
                        "application/json": components["schemas"]["sending_errors_response"];
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
         * @description Permet de créer un envoi.
         *
         *     Cet envoi sera en état de brouillon (DRAFT), il faudra le soumettre pour l'envoyer en production.
         *
         *     Un envoi nécessite de renseigner des informations complémentaires de deux types :
         *     - globales à tous les canaux d'expédition;
         *     - spécifiques au canal d'expédition.
         *
         *     Les options à renseigner dépendent du canal d'expédition de la facture :
         *
         *     Envoi par email :
         *     - identifiant du template d'email personnalisé pour la notification du destinataire ;
         *     - personnalisation du « nom/prénom » associé à l’adresse email de l’émetteur des factures dématérialisées ;
         *     - personnalisation de l’adresse email de retour
         *     - personnalisation de l’adresse email de l'expéditeur
         *
         *
         *     Envoi par portail :
         *     - identifiant du template d'email personnalisé pour la notification du destinataire ;
         *     - personnalisation du « nom/prénom » associé à l’adresse email de l’émetteur des factures dématérialisées ;
         *     - personnalisation de l’adresse email de retour
         *     - personnalisation de l’adresse email de l'expéditeur
         *
         *
         *     Envoi vers chorus :
         *     - numéro de TVA intra-communautaire de l’émetteur ;
         *     - siret de l’émetteur ;
         *     - raison sociale de l’émetteur.
         *
         *     Options pour les envois papier :
         *     - coloris d'impression : couleur ou noir et blanc ;
         *     - format d'impression : recto-verso ou recto seul ;
         *     - ajout d'une page porte-adresse ;
         *     - Le type d'enveloppe est choisi automatiquement. 1 à 5 feuilles (feuille porte-adresse et enveloppe retour incluses) : enveloppe DL. 6 à 45 feuilles (hors feuille porte-adresse, enveloppe retour incluse) : enveloppe C4 ;
         *     - type de fenêtre sur l'enveloppe : simple ou double fenêtre ;
         *     - type d'affranchissement : urgent, rapide ou économique ;
         *     - email de notification ;
         *     - impression de l'adresse expéditeur ;
         *     - durée d'archivage optionnelle pour un envoi papier : 0 ou 11 ans. Pour un envoi dématérialisé, la durée d'archivage est automatiquement de 11 ans ;
         *     - gestion électronique des plis non distribuables (PND) ;
         *
         *     La mise à disposition sur le portail de publication de factures nécessite de renseigner une combinaison d’options partagés avec d’autres canaux, telles que les informations sur l’expéditeur (siret, numéro de TVA intracommunautaire, raison sociale, adresse…).
         *
         *     La selection du canal de distribution sera faite au niveau du destinataire.
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
                        "application/json": components["schemas"]["sending_errors_response"];
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
                        "application/json": components["schemas"]["sending_errors_response"];
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
                        "application/json": components["schemas"]["sending_errors_response"];
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
                    "application/merge-patch+json": components["schemas"]["sending_creation"];
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
                        "application/json": components["schemas"]["sending_errors_response"];
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
    "/sendings/{sending_id}/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Récupération du résultat de la vérification d'un envoi avant finalisation
         * @description Permet de récupérer le résultat de la vérification de la validité d'un envoi avant de le soumettre et de déclencher ainsi la demande de
         *     production.
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
                /** @description L'envoi est valide */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description La vérification est en cours */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description L'envoi est invalide */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["sending_check_errors_response"];
                    };
                };
                /** @description Aucune vérification n'a été lancée */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        /**
         * Vérification d'un envoi avant finalisation.
         * @description Permet de vérifier la validité d'un envoi avant de le soumettre et de déclencher ainsi la demande de
         *     production. La vérification peut prendre du temps, la requête GET, sur le même chemin, est celle qui permet de récupérer ultérieurement le résultat de la validation.
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
                /** @description Le traitement de la vérification est toujours en cours */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Le traitement de la vérification est en cours et le client vient de lancer une nouvelle requête de vérification ; Envoi pas en draft ; Le hash calculé sur l'envoi permet de signaler qu'une vérification a été réalisée et rien n’a changé dans l'envoi qui justifie une nouvelle vérification */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["error_response"];
                    };
                };
                /** @description L'envoi n'existe pas */
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
         * @description Permet de soumettre l'envoi et de déclencher ainsi la demande de production.
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
                        "application/json": components["schemas"]["sending_submit_errors_response"];
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
         * @description Permet de récupérer la liste des documents associés à un envoi.
         *     La liste des documents d'un envoi est paginée.
         *
         *     Par défaut et au maximum, le nombre de résultats renvoyé est de 30.
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
                        "application/json": components["schemas"]["document_errors_response"];
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
         * Ajout d'un document à un envoi.
         * @description Permet d'ajouter un document à un envoi.
         *     Les types de documents autorisés sont :
         *       - Adobe (.pdf)
         *       - Word (.doc, .docx et .rtf)
         *       - Texte (.txt)
         *       - Excel (.xls, .xlsx)
         *
         *     Le document ajouté ne doit pas dépasser 20 Mo.
         *     Le nombre total de documents est limité à 30 par envoi. Un envoi ne peut contenir au maximum que 5 pièces jointes (document de catégorie *ATTACHMENT*). Toutes les pièces jointes de l'envoi sont adressées à tous les destinataires.
         *     Le document doit être transmis en mutipart ainsi que la metadata.
         *
         *     L'objet contenant les meta-données (*metadata*) est constitué de :
         *     - la priorité du document (*priority* permet de définir l'ordre d'impression des documents) ;
         *     - l'intitulé du document (*name* permet de donner un nom au fichier)
         *     - la catégorie du document (*category* permet d'indiquer le type de document *INVOICE* pour facture et *ATTACHMENT* pour une pièce jointe. Par défaut le type sera *INVOICE* s'il n'est pas renseigné)
         *     La première page du document est positionnée systématiquement sur le recto de la feuille.
         *
         *     Le  nombre de feuilles d’un envoi par Courrier ne doit pas dépasser la capacité de l’enveloppe :
         *     - Enveloppe grand format C4 (210x300 mm, Double fenêtre) : 45 feuilles maximum (hors feuille porte-adresse, enveloppe retour incluse)
         *     - Enveloppe petit format DL (114x229 mm Simple ou Double-fenêtre) : 5 feuilles maximum (feuille porte-adresse et enveloppe retour incluses)
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
                            /**
                             * @description Catégorie du document <br/> <table border="1">
                             *       <tr bgcolor="lightgrey">
                             *         <th>Code</th>
                             *         <th>Description</th>
                             *       </tr>
                             *       <tr><td>INVOICE</td><td>Facture</td></tr>
                             *       <tr><td>ATTACHMENT</td><td>Pièce jointe</td></tr>
                             *     </table>
                             * @enum {string}
                             */
                            category?: "INVOICE" | "ATTACHMENT";
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
                        "application/json": components["schemas"]["document_errors_response"];
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
         * @description Permet de récupérer le détail d'un document associé à un envoi.
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
                        "application/json": components["schemas"]["document_errors_response"];
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
                        "application/json": components["schemas"]["document_errors_response"];
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
         * Modification de la priorité d'un document
         * @description Permet de définir la priorité d'un envoi.
         *
         *     Les documents seront imprimés et mis sous pli dans l'ordre choisi.
         *
         *     Deux documents ne peuvent pas avoir la même priorité.
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
                        "application/json": components["schemas"]["document_errors_response"];
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
         *     Cette liste est paginée. Par défaut, la pagination est de 50 résultats. Elle peut atteindre 500 au maximum.
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
                        "application/json": components["schemas"]["recipient_errors_response"];
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
         * Ajout d'un destinataire à un envoi
         * @description Permet d'ajouter un destinataire à un envoi.
         *
         *
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
                        "application/json": components["schemas"]["recipient_errors_response"];
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
         * Suppression de tous les destinataires d'un envoi
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
                        "application/json": components["schemas"]["recipient_errors_response"];
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
         * @description Permet d'obtenir le détail d'un destinataire dans un envoi.
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
                        "application/json": components["schemas"]["recipient_errors_response"];
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
         * Suppression d'un destinataire dans un envoi
         * @description Permet de supprimer un destinataire dans un envoi.
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
                        "application/json": components["schemas"]["recipient_errors_response"];
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
         * Modification partielle d'un destinataire dans un envoi
         * @description Permet de modifier partiellement un destinataire dans un envoi.
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
         * Ajout d'un ou plusieurs destinataires à un envoi
         * @description
         *     Permet d'ajouter un ou plusieurs destinataires à un envoi.
         *
         *     Le nombre de destinataires à l'importation est limité à 30 000.
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
                        "application/json": components["schemas"]["recipient_errors_response"];
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
    "/sendings/{sending_id}/recipients/{recipient_id}/delivery_statuses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des statuts de distribution d'un destinataire
         * @description Permet de lister les statuts de distribution d'un destinataire.
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
                        "application/json": components["schemas"]["delivery_statuses_response"];
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
    "/sendings/{sending_id}/recipients/{recipient_id}/download_archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Permet de télécharger au format PDF la facture et les annexes envoyées au destinataire
         * @description Téléchargement de la facture et de ses annexes envoyées au destinataire (un seul document signé), ainsi que les pièces jointes, dans le cas où l'option d'archivage a été choisie pour les envois papier ou dématérialisés. Si la facture ne comporte pas de pièces jointes, la facture signée en PDF est téléchargée, sinon un fichier ZIP contenant la facture signée et les pièces jointes.
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
                        "application/zip": string;
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["recipient_errors_response"];
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
         * @description Code du pays (Code ISO-3166)
         * @example FR
         * @enum {string}
         */
        country_code: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TP" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "YU" | "ZA" | "ZM" | "ZR" | "ZW";
        /** @description Options E-mail pour l'envoi */
        email_options: {
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
            /**
             * @description Adresse email de l'expéditeur (seule la partie se trouvant avant le @ est personnalisable, le nom de domaine restera celui de Maileva)
             * @example jean.dupont@notification.maileva.com
             */
            recipient_notification_sender_email?: string;
        };
        /** @description Options Portail pour l'envoi */
        portal_options: {
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
             * @description Adresse email de l'expéditeur (seule la partie se trouvant avant le @ est personnalisable, le nom de domaine restera celui de Maileva)
             * @example jean.dupont@notification.maileva.com
             */
            recipient_notification_sender_email?: string;
        };
        /** @description Liste des statuts de distribution */
        delivery_statuses_response: {
            /** @description
             *     <table border="1">
             *       <tr bgcolor="lightgrey">
             *         <th>Code</th>
             *         <th>Source</th>
             *         <th>Description</th>
             *       </tr>
             *       <tr>
             *         <td>C01</td>
             *         <td>Chorus</td>
             *         <td>Déposée</td>
             *       </tr>
             *       <tr>
             *         <td>C02</td>
             *         <td>Chorus</td>
             *         <td>En cours d’acheminement vers le destinataire</td>
             *       </tr>
             *       <tr>
             *         <td>C03</td>
             *         <td>Chorus</td>
             *         <td>Mise à disposition du destinataire</td>
             *       </tr>
             *       <tr>
             *         <td>C04</td>
             *         <td>Chorus</td>
             *         <td>Rejetée par l’ordonnateur pour erreur dans les données d’acheminement</td>
             *       </tr>
             *       <tr>
             *         <td>C05</td>
             *         <td>Chorus</td>
             *         <td>Rejetée par l’ordonnateur pour autre motif</td>
             *       </tr>
             *       <tr>
             *         <td>C06</td>
             *         <td>Chorus</td>
             *         <td>Suspendue</td>
             *       </tr>
             *       <tr>
             *         <td>C07</td>
             *         <td>Chorus</td>
             *         <td>Service fait</td>
             *       </tr>
             *       <tr>
             *         <td>C08</td>
             *         <td>Chorus</td>
             *         <td>Mandatée /DP validée</td>
             *       </tr>
             *       <tr>
             *         <td>C09</td>
             *         <td>Chorus</td>
             *         <td>Mise à disposition du comptable</td>
             *       </tr>
             *       <tr>
             *         <td>C10</td>
             *         <td>Chorus</td>
             *         <td>Comptabilisée</td>
             *       </tr>
             *       <tr>
             *         <td>C11</td>
             *         <td>Chorus</td>
             *         <td>Mise en paiement</td>
             *       </tr>
             *       <tr>
             *         <td>C12</td>
             *         <td>Chorus</td>
             *         <td>Complétée – mise à disposition</td>
             *       </tr>
             *       <tr>
             *         <td>C13</td>
             *         <td>Chorus</td>
             *         <td>Mise à disposition du premier valideur</td>
             *       </tr>
             *       <tr>
             *         <td>C14</td>
             *         <td>Chorus</td>
             *         <td>Refusée par le premier valideur pour autre motif</td>
             *       </tr>
             *       <tr>
             *         <td>C15</td>
             *         <td>Chorus</td>
             *         <td>Validation 1 hors délai</td>
             *       </tr>
             *       <tr>
             *         <td>C16</td>
             *         <td>Chorus</td>
             *         <td>Validée par le second valideur</td>
             *       </tr>
             *       <tr>
             *         <td>C17</td>
             *         <td>Chorus</td>
             *         <td>Refusée par le second valideur pour autre motif</td>
             *       </tr>
             *       <tr>
             *         <td>C18</td>
             *         <td>Chorus</td>
             *         <td>Validation 2 hors délai</td>
             *       </tr>
             *       <tr>
             *         <td>C19</td>
             *         <td>Chorus</td>
             *         <td>Refusée par la MOE pour autre motif</td>
             *       </tr>
             *       <tr>
             *         <td>C20</td>
             *         <td>Chorus</td>
             *         <td>Refusée par le fournisseur pour autre motif</td>
             *       </tr>
             *       <tr>
             *         <td>C21</td>
             *         <td>Chorus</td>
             *         <td>Associée</td>
             *       </tr>
             *       <tr>
             *         <td>C22</td>
             *         <td>Chorus</td>
             *         <td>Conforme – non intégrée</td>
             *       </tr>
             *       <tr>
             *         <td>C23</td>
             *         <td>Chorus</td>
             *         <td>Mise à disposition du premier valideur</td>
             *       </tr>
             *       <tr>
             *         <td>C24</td>
             *         <td>Chorus</td>
             *         <td>Refusée par le premier valideur pour erreur dans les données d’acheminement</td>
             *       </tr>
             *       <tr>
             *         <td>C25</td>
             *         <td>Chorus</td>
             *         <td>Mise à disposition du second valideur</td>
             *       </tr>
             *       <tr>
             *         <td>C26</td>
             *         <td>Chorus</td>
             *         <td>Refusée par le second valideur pour erreur des données d’acheminement</td>
             *       </tr>
             *       <tr>
             *         <td>C27</td>
             *         <td>Chorus</td>
             *         <td>Mise à disposition MOE</td>
             *       </tr>
             *       <tr>
             *         <td>C28</td>
             *         <td>Chorus</td>
             *         <td>Refusée par la MOE pour erreur dans les données d’acheminement</td>
             *       </tr>
             *       <tr>
             *         <td>C29</td>
             *         <td>Chorus</td>
             *         <td>Prise en compte MOE</td>
             *       </tr>
             *       <tr>
             *         <td>C30</td>
             *         <td>Chorus</td>
             *         <td>Mise à disposition MOA</td>
             *       </tr>
             *       <tr>
             *         <td>C31</td>
             *         <td>Chorus</td>
             *         <td>Refusée par la MOA pour erreur dans les données d’acheminement</td>
             *       </tr>
             *       <tr>
             *         <td>C32</td>
             *         <td>Chorus</td>
             *         <td>Refusée par la MOA pour autre motif</td>
             *       </tr>
             *       <tr>
             *         <td>C33</td>
             *         <td>Chorus</td>
             *         <td>Mise à disposition fournisseur</td>
             *       </tr>
             *       <tr>
             *         <td>C34</td>
             *         <td>Chorus</td>
             *         <td>Demande de complément</td>
             *       </tr>
             *       <tr>
             *         <td>C35</td>
             *         <td>Chorus</td>
             *         <td>Transmise à la MOA</td>
             *       </tr>
             *       <tr>
             *         <td>C36</td>
             *         <td>Chorus</td>
             *         <td>Prise en compte par le destinataire</td>
             *       </tr>
             *       <tr>
             *         <td>C37</td>
             *         <td>Chorus</td>
             *         <td>Non conforme - non intégrée</td>
             *       </tr>
             *       <tr>
             *         <td>C38</td>
             *         <td>Chorus</td>
             *         <td>Prise en compte par la MOA</td>
             *       </tr>
             *       <tr>
             *         <td>C39</td>
             *         <td>Chorus</td>
             *         <td>Acheminée MOA</td>
             *       </tr>
             *       <tr>
             *         <td>C40</td>
             *         <td>Chorus</td>
             *         <td>Acheminée MOE</td>
             *       </tr>
             *       <tr>
             *         <td>request</td>
             *         <td>Email</td>
             *         <td>Envoyé</td>
             *       </tr>
             *       <tr>
             *         <td>delivered</td>
             *         <td>Email</td>
             *         <td>Délivré</td>
             *       </tr>
             *       <tr>
             *         <td>opened</td>
             *         <td>Email</td>
             *         <td>Ouvert</td>
             *       </tr>
             *       <tr>
             *         <td>click</td>
             *         <td>Email</td>
             *         <td>Cliqué</td>
             *       </tr>
             *       <tr>
             *         <td>unsubscribed</td>
             *         <td>Email</td>
             *         <td>Désinscription</td>
             *       </tr>
             *       <tr>
             *         <td>blocked</td>
             *         <td>Email</td>
             *         <td>Bloqué</td>
             *       </tr>
             *       <tr>
             *         <td>hard_bounce</td>
             *         <td>Email</td>
             *         <td>Hard bounce</td>
             *       </tr>
             *       <tr>
             *         <td>deferred</td>
             *         <td>Email</td>
             *         <td>Différé</td>
             *       </tr>
             *       <tr>
             *         <td>complaint</td>
             *         <td>Email</td>
             *         <td>Plainte</td>
             *       </tr>
             *       <tr>
             *         <td>soft_bounce</td>
             *         <td>Email</td>
             *         <td>Soft bounce</td>
             *       </tr>
             *       <tr>
             *         <td>error</td>
             *         <td>Email</td>
             *         <td>Erreur</td>
             *       </tr>
             *       <tr>
             *         <td>invalid_email</td>
             *         <td>Email</td>
             *         <td>Email non valide</td>
             *       </tr>
             *       <tr>
             *         <td>unique_opened</td>
             *         <td>Email</td>
             *         <td>Première ouverture</td>
             *       </tr>
             *       <tr>
             *         <td>N10</td>
             *         <td>Courrier</td>
             *         <td>Pli Non Distribuable (PND)</td>
             *       </tr>
             *     </table> */
            delivery_statuses?: {
                /**
                 * @description Identifiant du statut de distribution
                 * @example C01
                 */
                status?: string;
                /**
                 * @description Statut de distribution
                 * @example Déposée
                 */
                label?: string;
                /**
                 * Format: datetime
                 * @description Date du statut de distribution
                 * @example 2018-03-14T07:21:40.757Z
                 */
                date?: string;
            }[];
            paging?: components["schemas"]["paging_response"];
        };
        /**
         * @description Catégorie du document <br/> <table border="1">
         *       <tr bgcolor="lightgrey">
         *         <th>Code</th>
         *         <th>Description</th>
         *       </tr>
         *       <tr><td>INVOICE</td><td>Facture</td></tr>
         *       <tr><td>ATTACHMENT</td><td>Pièce jointe</td></tr>
         *     </table>
         * @default INVOICE
         * @example INVOICE
         * @enum {string}
         */
        document_category: "INVOICE" | "ATTACHMENT";
        /** @description Description de l'erreur */
        document_error_response: {
            /** @description <table border="1">
             *       <tr bgcolor="lightgrey">
             *         <th>Code</th>
             *         <th>Description</th>
             *       </tr>
             *       <tr><td>ATTACHMENTS_EXCEED_MAX_SIZE</td><td>Les attachements ont dépassé la taille autorisée</td></tr>
             *       <tr><td>ADDRESS_LINE_1_TOO_LONG</td><td>La ligne d'adresse n°1 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_2_TOO_LONG</td><td>La ligne d'adresse n°2 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_3_TOO_LONG</td><td>La ligne d'adresse n°3 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_4_TOO_LONG</td><td>La ligne d'adresse n°4 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_5_TOO_LONG</td><td>La ligne d'adresse n°5 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_TOO_LONG</td><td>La ligne d'adresse n°6 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_WRONG_FORMAT</td><td>Le champ address_line_6 doit avoir le format [CODE_POSTAL] [VILLE], avec CODE_POSTAL sur 5 chiffres, lorsque le code pays vaut "FR"</td></tr>
             *       <tr><td>ALREADY_CHECK_SENDING</td><td>La vérification de l'envoi a déjà été réalisée</td></tr>
             *       <tr><td>ATTRIBUTE_EXIST</td><td>L'attribut doit être unique et il existe déjà</td></tr>
             *       <tr><td>ATTRIBUTE_MANDATORY</td><td>L'attribut est obligatoire. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_NOT_FOUND</td><td>L'attribut n'est pas trouvé. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_TOO_LONG</td><td>L'attribut est trop long. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_WRONG_PARAMETER</td><td>Un attribut est incorrect. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>CHECK_OBSOLETE_AFTER_SENDING_MODIFICATION</td><td>Après modification de l'envoi, le résultat de la vérification du check, lancée auparavant, est obsolète. Il faut relancer une nouvelle vérification</td></tr>
             *       <tr><td>CORRUPTED_DOCUMENT</td><td>Le document est corrompu ou contient un virus</td></tr>
             *       <tr><td>COUNTRY_CODE_TOO_LONG</td><td>Le code pays est limité à 2 caractères</td></tr>
             *       <tr><td>CUSTOM_ID_EMPTY</td><td>Le custom id est vide</td></tr>
             *       <tr><td>CUSTOM_ID_WRONG_FORMAT</td><td>Le custom id n'est pas au bon format</td></tr>
             *       <tr><td>DOCUMENT_NOT_FOUND</td><td>Le document est introuvable</td></tr>
             *       <tr><td>DOCUMENT_IN_DOCUMENTS_OVERRIDE</td><td>Impossible de supprimer le document puisque des bribes de document y font référence. Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_ID_NOT_ACCEPTED</td><td>Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_NOT_ACCEPTED</td><td>Première page ou dernière page invalides pour le document spécifié</td></tr>
             *       <tr><td>DOC_TYPE_NOT_ACCEPTED</td><td>Le type de document n'est pas accepté (.pdf, .doc, .docx, .rtf, .txt, .xls, .xlsx autorisés)</td></tr>
             *       <tr><td>DUPLICATE_PRIORITY</td><td>Plusieurs documents ont la même priorité</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_1_OR_ADDRESS_LINE_2</td><td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_6</td><td>La ligne d'adresse n°6 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ATTRIBUTE</td><td>L'attribut est vide. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>EMPTY_DOCUMENT</td><td>Le document est vide</td></tr>
             *       <tr><td>EMPTY_FILE_ID</td><td>L'identifiant de fichier est vide</td></tr>
             *       <tr><td>EMPTY_PRODUCTION_CENTER</td><td>Le centre de production est vide</td></tr>
             *       <tr><td>EMPTY_METADATA</td><td>Les méta-données sont vides</td></tr>
             *       <tr><td>EMPTY_NAME</td><td>Aucun nom d'envoi n'a été transmis</td></tr>
             *       <tr><td>EMPTY_PRIORITY</td><td>Le champ priority est vide</td></tr>
             *       <tr><td>EMPTY_SCHEDULED_DATE</td><td>La date d'engagement de remise en poste est manquante</td></tr>
             *       <tr><td>FORBIDDEN_PRINT_SENDER_ADDRESS_WITH_SIMPLE_ENVELOPPE_WINDOWS_TYPE</td><td>L'impression de l'adresse de l'expéditeur nécessite le choix d'une enveloppe à double fenêtres</td></tr>
             *       <tr><td>FORBIDDEN_TREAT_UNDELIVERED_MAIL_AND_PRINT_SENDER_ADDRESS</td><td>L'impression de l'adresse de l'expéditeur n'est pas compatible avec la gestion électronique des PND</td></tr>
             *       <tr><td>INVALID_COUNTRY_CODE</td><td>Le code pays n'est pas autorisé</td></tr>
             *       <tr><td>INVALID_DOCUMENTS_COUNT</td><td>Erreur lorsque l'on tente d'ajouter plus de 30 documents dans un envoi</td></tr>
             *       <tr><td>INVALID_DOCUMENT_SIZE</td><td>La taille du document transmis dépasse les 20 Mo</td></tr>
             *       <tr><td>INVALID_DOCUMENT_TYPE</td><td>Seuls les documents de type INVOICE peuvent apparaitre dans les bribes de documents d'un destinataire</td></tr>
             *       <tr><td>INVALID_INVOICE_DATE</td><td>Date de facture ne peut pas être postérieure à la date du jour.</td></tr>
             *       <tr><td>INVALID_PRIORITY</td><td>Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRODUCTION_CENTER</td><td>Le centre de production est inconnu</td></tr>
             *       <tr><td>INVALID_NOTIFICATION_EMAIL</td><td>L'email est invalide.</td></tr>
             *       <tr><td>INVALID_NUMBER_COUNT</td><td>Le numéro de facture associé à l'expéditeur a déjà été utilisé dans le cadre d'un destinataire Chorus</td></tr>
             *       <tr><td>INVALID_RECIPIENTS_COUNT</td><td>Le nombre de destinataires est atteint</td></tr>
             *       <tr><td>INVALID_SIRET</td><td>Siret invalide</td></tr>
             *       <tr><td>INVALID_TOTAL_SENDING_SIZE</td><td>La somme des tailles de l'ensemble des documents dépasse 20 Mo</td></tr>
             *       <tr><td>INVALID_INVOICE_DUE_DATE</td><td>La date d'échéance ne peut pas être antérieure à la date de facturation</td></tr>
             *       <tr><td>INVALID_INVOICE_DUE_DATE_RANGE</td><td>La date d'échéance ne peut pas être située, postérieurement ou antérieurement, dans un intervalle de plus de 30 ans de la date du jour</td></tr>
             *       <tr><td>INVALID_INVOICE_DATE_RANGE</td><td>La date de facturation ne peut pas être située, postérieurement ou antérieurement, dans un intervalle de plus de 30 ans de la date du jour</td></tr>
             *       <tr><td>JSON_FORMAT_ERROR</td><td>Un problème dans le format JSON des données transmises</td></tr>
             *       <tr><td>MAX_ATTRIBUTE_VALUE_EXEEDED</td><td>L'attribut ne peut pas dépasser une valeur maximale</td></tr>
             *       <tr><td>METADATA_WRONG_FORMAT</td><td>Le paramètre metadata n'est pas correct</td></tr>
             *       <tr><td>MISSING_FILE</td><td>Fichier à charger introuvable</td></tr>
             *       <tr><td>NAME_TOO_LONG</td><td>Le nom de l'envoi est trop long (256 caractères max)</td></tr>
             *       <tr><td>NO_INVOICE_ON_SENDING</td><td>Pas de facture dans l'envoi</td></tr>
             *       <tr><td>NO_PARAMETER</td><td>Au moins un paramètre est requis</td></tr>
             *       <tr><td>NO_RECIPIENT_ON_SENDING</td><td>Pas de destinataires dans l'envoi</td></tr>
             *       <tr><td>OPERATION_IN_PROGRESS</td><td>L'opération est en cours. le résultat ne peut pas être fourni immédiatement</td></tr>
             *       <tr><td>PAGES_NOT_MATCH</td><td>Incohérence entre la première page et la dernière page</td></tr>
             *       <tr><td>PARAM_FILTER_NOT_ALLOWED</td><td>La valeur de l'attribut n'est pas acceptée. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>PARAM_NOT_ACCEPTED</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>POST_CHECK_MANDATORY_BEFORE_GET</td><td>Une demande de résultat d'une vérification d'un envoi a été reçue alors qu'aucune vérification n'a été lancée</td></tr>
             *       <tr><td>RECIPIENT_NOT_FOUND</td><td>Ressource RECIPIENT introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>SENDING_NOT_FOUND</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>STATUS_NOT_DRAFT</td><td>Erreur quand on essaie d'ajouter un document ou un destinataire dans un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de soumettre un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de modifier une option d'un envoi qui n'est pas en état draft</td></tr>
             *       <tr><td>SHEET_NUMBER_EXCEEDED</td><td>Nombre de feuilles maximales dépassé pour le type d'enveloppe</td></tr>
             *       <tr><td>SIRET_ERROR</td><td>La plateforme Chorus Pro n'accepte pas le numéro de Siret</td></tr>
             *       <tr><td>SIRET_RECIPIENT_COMMITMENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret, du code service exécutant et du numéro d'engagement juridique</td></tr>
             *       <tr><td>SIRET_RECIPIENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret et du code service exécutant</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_DOCUMENT</td><td>Plusieurs documents ont été envoyés en multipart alors que le service limite à un document.</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_METADATA</td><td>Le paramètre metadata a été transmis plusieurs fois</td></tr>
             *       <tr><td>UNEXPECTED_ERROR</td><td>Une erreur inattendue est intervenue </td></tr>
             *       <tr><td>WRONG_FORMAT_ATTRIBUTE</td><td>Le format de l'attribut est incorrect</td></tr>
             *       <tr><td>PICTURES_OBSOLETE_AFTER_DOCUMENTS_MODIFICATION</td><td>Après modification des documents ou documentsOverrides, les images générées auparavant sont obsolète. Il faut relancer une nouvelle pictures_request</td></tr>
             *     </table> */
            code: string;
            message: string;
        };
        document_errors_response: {
            errors?: components["schemas"]["document_error_response"][];
        };
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
             * @example Facture1234.pdf
             */
            name: string;
            /**
             * @description Type du document
             * @example application/pdf
             */
            type: string;
            category?: components["schemas"]["document_category"];
            /**
             * @description Nombre de pages (disponible à partir du statut ACCEPTED)
             * @example 3
             */
            pages_count?: number;
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
            /**
             * Format: datetime
             * @description Date de création
             * @example 2018-03-14T07:21:40.757Z
             */
            creation_date?: string;
            /**
             * Format: datetime
             * @description Date de modification
             * @example 2018-03-14T07:21:40.757Z
             */
            modification_date?: string;
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
             *       <tr><td>ATTACHMENTS_EXCEED_MAX_SIZE</td><td>Les attachements ont dépassé la taille autorisée</td></tr>
             *       <tr><td>ADDRESS_LINE_1_TOO_LONG</td><td>La ligne d'adresse n°1 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_2_TOO_LONG</td><td>La ligne d'adresse n°2 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_3_TOO_LONG</td><td>La ligne d'adresse n°3 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_4_TOO_LONG</td><td>La ligne d'adresse n°4 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_5_TOO_LONG</td><td>La ligne d'adresse n°5 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_TOO_LONG</td><td>La ligne d'adresse n°6 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_WRONG_FORMAT</td><td>Le champ address_line_6 doit avoir le format [CODE_POSTAL] [VILLE], avec CODE_POSTAL sur 5 chiffres, lorsque le code pays vaut "FR"</td></tr>
             *       <tr><td>ALREADY_CHECK_SENDING</td><td>La vérification de l'envoi a déjà été réalisée</td></tr>
             *       <tr><td>ATTRIBUTE_EXIST</td><td>L'attribut doit être unique et il existe déjà</td></tr>
             *       <tr><td>ATTRIBUTE_MANDATORY</td><td>L'attribut est obligatoire. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_NOT_FOUND</td><td>L'attribut n'est pas trouvé. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_TOO_LONG</td><td>L'attribut est trop long. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_WRONG_PARAMETER</td><td>Un attribut est incorrect. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>CHECK_OBSOLETE_AFTER_SENDING_MODIFICATION</td><td>Après modification de l'envoi, le résultat de la vérification du check, lancée auparavant, est obsolète. Il faut relancer une nouvelle vérification</td></tr>
             *       <tr><td>CORRUPTED_DOCUMENT</td><td>Le document est corrompu ou contient un virus</td></tr>
             *       <tr><td>COUNTRY_CODE_TOO_LONG</td><td>Le code pays est limité à 2 caractères</td></tr>
             *       <tr><td>CUSTOM_ID_EMPTY</td><td>Le custom id est vide</td></tr>
             *       <tr><td>CUSTOM_ID_WRONG_FORMAT</td><td>Le custom id n'est pas au bon format</td></tr>
             *       <tr><td>DOCUMENT_NOT_FOUND</td><td>Le document est introuvable</td></tr>
             *       <tr><td>DOCUMENT_IN_DOCUMENTS_OVERRIDE</td><td>Impossible de supprimer le document puisque des bribes de document y font référence. Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_ID_NOT_ACCEPTED</td><td>Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_NOT_ACCEPTED</td><td>Première page ou dernière page invalides pour le document spécifié</td></tr>
             *       <tr><td>DOC_TYPE_NOT_ACCEPTED</td><td>Le type de document n'est pas accepté (.pdf, .doc, .docx, .rtf, .txt, .xls, .xlsx autorisés)</td></tr>
             *       <tr><td>DUPLICATE_PRIORITY</td><td>Plusieurs documents ont la même priorité</td></tr>
             *       <tr><td>EMAIL_TEMPLATE_NOT_FOUND</td><td>The template ‘{0}’ is not found</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_1_OR_ADDRESS_LINE_2</td><td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_6</td><td>La ligne d'adresse n°6 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ATTRIBUTE</td><td>L'attribut est vide. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>EMPTY_DOCUMENT</td><td>Le document est vide</td></tr>
             *       <tr><td>EMPTY_FILE_ID</td><td>L'identifiant de fichier est vide</td></tr>
             *       <tr><td>EMPTY_PRODUCTION_CENTER</td><td>Le centre de production est vide</td></tr>
             *       <tr><td>EMPTY_METADATA</td><td>Les méta-données sont vides</td></tr>
             *       <tr><td>EMPTY_NAME</td><td>Aucun nom d'envoi n'a été transmis</td></tr>
             *       <tr><td>EMPTY_PRIORITY</td><td>Le champ priority est vide</td></tr>
             *       <tr><td>EMPTY_SCHEDULED_DATE</td><td>La date d'engagement de remise en poste est manquante</td></tr>
             *       <tr><td>FORBIDDEN_PRINT_SENDER_ADDRESS_WITH_SIMPLE_ENVELOPPE_WINDOWS_TYPE</td><td>L'impression de l'adresse de l'expéditeur nécessite le choix d'une enveloppe à double fenêtres</td></tr>
             *       <tr><td>FORBIDDEN_TREAT_UNDELIVERED_MAIL_AND_PRINT_SENDER_ADDRESS</td><td>L'impression de l'adresse de l'expéditeur n'est pas compatible avec la gestion électronique des PND</td></tr>
             *       <tr><td>INVALID_COUNTRY_CODE</td><td>Le code pays n'est pas autorisé</td></tr>
             *       <tr><td>INVALID_DOCUMENTS_COUNT</td><td>Erreur lorsque l'on tente d'ajouter plus de 30 documents dans un envoi</td></tr>
             *       <tr><td>INVALID_DOCUMENT_SIZE</td><td>La taille du document transmis dépasse les 20 Mo</td></tr>
             *       <tr><td>INVALID_DOCUMENT_TYPE</td><td>Seuls les documents de type INVOICE peuvent apparaitre dans les bribes de documents d'un destinataire</td></tr>
             *       <tr><td>INVALID_INVOICE_DATE</td><td>Date de facture ne peut pas être postérieure à la date du jour. Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRIORITY</td><td>Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRODUCTION_CENTER</td><td>Le centre de production est inconnu</td></tr>
             *       <tr><td>INVALID_NOTIFICATION_EMAIL</td><td>L'email est invalide.</td></tr>
             *       <tr><td>INVALID_NUMBER_COUNT</td><td>Le numéro de facture associé à l'expéditeur a déjà été utilisé dans le cadre d'un destinataire Chorus</td></tr>
             *       <tr><td>INVALID_RECIPIENTS_COUNT</td><td>Le nombre de destinataires est atteint</td></tr>
             *       <tr><td>INVALID_SIRET</td><td>Siret invalide</td></tr>
             *       <tr><td>INVALID_TOTAL_SENDING_SIZE</td><td>La somme des tailles de l'ensemble des documents dépasse 20 Mo</td></tr>
             *       <tr><td>JSON_FORMAT_ERROR</td><td>Un problème dans le format JSON des données transmises</td></tr>
             *       <tr><td>MAX_ATTRIBUTE_VALUE_EXEEDED</td><td>L'attribut ne peut pas dépasser une valeur maximale</td></tr>
             *       <tr><td>METADATA_WRONG_FORMAT</td><td>Le paramètre metadata n'est pas correct</td></tr>
             *       <tr><td>MISSING_FILE</td><td>Fichier à charger introuvable</td></tr>
             *       <tr><td>NAME_TOO_LONG</td><td>Le nom de l'envoi est trop long (256 caractères max)</td></tr>
             *       <tr><td>NO_INVOICE_ON_SENDING</td><td>Pas de facture dans l'envoi</td></tr>
             *       <tr><td>NO_PARAMETER</td><td>Au moins un paramètre est requis</td></tr>
             *       <tr><td>NO_RECIPIENT_ON_SENDING</td><td>Pas de destinataires dans l'envoi</td></tr>
             *       <tr><td>OPERATION_IN_PROGRESS</td><td>L'opération est en cours. le résultat ne peut pas être fourni immédiatement</td></tr>
             *       <tr><td>PAGES_NOT_MATCH</td><td>Incohérence entre la première page et la dernière page</td></tr>
             *       <tr><td>PARAM_FILTER_NOT_ALLOWED</td><td>La valeur de l'attribut n'est pas acceptée. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>PARAM_NOT_ACCEPTED</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>POST_CHECK_MANDATORY_BEFORE_GET</td><td>Une demande de résultat d'une vérification d'un envoi a été reçue alors qu'aucune vérification n'a été lancée</td></tr>
             *       <tr><td>RECIPIENT_NOT_FOUND</td><td>Ressource RECIPIENT introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>SENDING_NOT_FOUND</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>STATUS_NOT_DRAFT</td><td>Erreur quand on essaie d'ajouter un document ou un destinataire dans un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de soumettre un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de modifier une option d'un envoi qui n'est pas en état draft</td></tr>
             *       <tr><td>SHEET_NUMBER_EXCEEDED</td><td>Nombre de feuilles maximales dépassé pour le type d'enveloppe</td></tr>
             *       <tr><td>SIRET_ERROR</td><td>La plateforme Chorus Pro n'accepte pas le numéro de Siret</td></tr>
             *       <tr><td>SIRET_RECIPIENT_COMMITMENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret, du code service exécutant et du numéro d'engagement juridique</td></tr>
             *       <tr><td>SIRET_RECIPIENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret et du code service exécutant</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_DOCUMENT</td><td>Plusieurs documents ont été envoyés en multipart alors que le service limite à un document.</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_METADATA</td><td>Le paramètre metadata a été transmis plusieurs fois</td></tr>
             *       <tr><td>UNEXPECTED_ERROR</td><td>Une erreur inattendue est intervenue </td></tr>
             *       <tr><td>WRONG_FORMAT_ATTRIBUTE</td><td>Le format de l'attribut est incorrect</td></tr>
             *     </table> */
            code: string;
            message: string;
        };
        errors_response: {
            errors?: components["schemas"]["error_response"][];
        };
        /** @description Les destinataires d'un envoi */
        import_recipients: {
            import_recipients: components["schemas"]["recipient_creation"][];
        };
        /** @description Options Courrier pour l'envoi */
        mail_options: {
            /**
             * @description Durée d'archivage optionnelle pour envoi papier (en années)
             * @default 0
             * @example 0
             * @enum {integer}
             */
            archiving_duration: 0 | 11;
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
             * @description enveloppe simple ou double fenêtre (si format DL)
             * @example SIMPLE
             * @enum {string}
             */
            envelope_windows_type?: "SIMPLE" | "DOUBLE";
            /**
             * @description Liste des emails de notification des PND
             * @example [
             *       "email@domain.com",
             *       "email_bis@domain.com"
             *     ]
             */
            notification_treat_undelivered_mail?: string[];
            /**
             * @description Feuille porte adresse optionnelle
             * @default false
             * @example false
             */
            optional_address_sheet: boolean;
            postage_type?: components["schemas"]["mail_postage_type"];
            /**
             * @description Impression de l'adresse expéditeur
             * @default false
             * @example false
             */
            print_sender_address: boolean;
            /**
             * @description Gestion électronique des PND
             * @default false
             * @example false
             */
            treat_undelivered_mail: boolean;
        };
        /**
         * @description Catégorie de l'affranchissement
         *     <table border="1">
         *       <tr bgcolor="lightgrey">
         *         <th>Code</th>
         *         <th>Libellé</th>
         *       </tr>
         *       <tr>
         *         <td>IMPORTANT</td>
         *         <td>Important - lettre performance</td>
         *       </tr>
         *       <tr>
         *         <td>IMPORTANT_INDUSTRIEL</td>
         *         <td>Important - courrier indus G2</td>
         *       </tr>
         *       <tr>
         *         <td>PRIORITY</td>
         *         <td>Courant - lettre verte ou lettre internationale</td>
         *       </tr>
         *       <tr>
         *         <td>PRIORITY_INDUSTRIAL</td>
         *         <td>Courant - courrier indus G3</td>
         *       </tr>
         *       <tr>
         *         <td>ECONOMY</td>
         *         <td>Economique - écopli</td>
         *       </tr>
         *       <tr>
         *         <td>ECONOMY_INDUSTRIAL</td>
         *         <td>Economique - courrier indus G4</td>
         *       </tr>
         *     </table>
         * @example PRIORITY
         * @enum {string}
         */
        mail_postage_class: "IMPORTANT" | "IMPORTANT_INDUSTRIEL" | "PRIORITY" | "PRIORITY_INDUSTRIAL" | "ECONOMY" | "ECONOMY_INDUSTRIAL";
        /**
         * @description Type d'affranchissement demandé
         *     <table border="1">
         *       <tr bgcolor="lightgrey">
         *         <th>Code</th>
         *         <th>Libellé</th>
         *         <th>Délai</th>
         *       </tr>
         *       <tr>
         *         <td>URGENT</td>
         *         <td>Important</td>
         *         <td>J+2</td>
         *       </tr>
         *       <tr>
         *         <td>FAST</td>
         *         <td>Courant</td>
         *         <td>J+3</td>
         *       </tr>
         *       <tr>
         *         <td>ECONOMIC</td>
         *         <td>Economique</td>
         *         <td>J+4</td>
         *       </tr>
         *     </table>
         * @enum {string}
         */
        mail_postage_type: "URGENT" | "FAST" | "ECONOMIC";
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
        /** @description Ajout d'un destinataire / facture */
        recipient_creation: {
            /**
             * @description Identifiant unique du destinataire pour le rapprochement avec le carnet d'adresses
             * @example recip1234
             */
            identifier?: string;
            sending_mode?: components["schemas"]["sending_mode"];
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
             * Format: date
             * @description Date de la facture
             * @example 2018-03-14
             */
            invoice_date?: string;
            /**
             * Format: date
             * @description Date d'échéance de la facture
             * @example 2018-03-14
             */
            invoice_due_date?: string;
            /**
             * @description Numéro de facture
             * @example FAC_1234
             */
            invoice_number?: string;
            /**
             * Format: float
             * @description Montant hors taxe de la facture
             * @example 100.5
             */
            invoice_amount_without_tax?: number;
            /**
             * Format: float
             * @description Montant net à payer (montant TTC - remises)
             * @example 120.5
             */
            invoice_net_payable_amount?: number;
            /**
             * Format: float
             * @description Montant de la TVA de la facture
             * @example 20
             */
            invoice_tax_amount?: number;
            /**
             * Format: float
             * @description Montant toutes taxes comprises
             * @example 120.5
             */
            invoice_total_amount?: number;
            /**
             * @description Devise de la facture
             * @example EUR
             * @enum {string}
             */
            invoice_currency?: "EUR" | "USD" | "GBP" | "CHF";
            /**
             * @description Type de la facture
             * @example INVOICE
             * @enum {string}
             */
            invoice_type?: "INVOICE" | "CREDIT";
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
             * @description Numéro de la facture de référence (cas d'un avoir)
             * @example Av-123456
             */
            original_invoice_number?: string;
            /**
             * @description Raison sociale du destinataire
             * @example Ministère de l'interieur
             */
            company_name?: string;
            /**
             * @description SIRET du destinataire
             * @example 42433569300083
             */
            siret?: string;
            /**
             * @description Type de marché
             * @example CO_CONTRACTING
             * @enum {string}
             */
            market_type?: "CO_CONTRACTING" | "SUBCONTRACTING";
            /**
             * @description SIRET du validateur
             * @example 42433569300083
             */
            approver_siret?: string;
            /**
             * @description Code Pays du valideur
             * @example FR
             */
            approver_country_code?: string;
            /**
             * @description Raison sociale du validateur
             * @example France facture
             */
            approver_company_name?: string;
            factor_country_code?: components["schemas"]["country_code"];
            /**
             * @description Raison sociale de l'affactureur
             * @example EURL BASILE
             */
            factor_company_name?: string;
            /**
             * @description Siret de l'affactureur
             * @example 42433569300083
             */
            factor_siret?: string;
            /**
             * @description Iban de l'émetteur de la facture
             * @example FR7612548029989876543210917
             */
            sender_iban?: string;
            /**
             * @description BIC de l'émetteur de la facture
             * @example BOUSFRPPXXX
             */
            sender_bic?: string;
            /**
             * @description Objet
             * @example Votre facture EZRE123123 est disponible
             */
            subject?: string;
            /**
             * @description adresse email du destinataire
             * @example recip@domain.com
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
            /**
             * Format: uuid
             * @description Identifiant du template d'e-mail
             * @example 59e081d8-20ee-4336-9a1b-fd37ad9a76c1
             */
            email_template_id?: string;
            /** @description Liste de bribes de documents. Seuls les documents de type *INVOICE* peuvent se retrouver dans les bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associé à l'envoi. Le destinataire recevera de toute façon, avec ou sans bribes de documents, toutes les pièces jointes de l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste de
             *     bribes de documents indiquées (composées en un seul document dans l'ordre des priorités des documents). */
            documents_override?: components["schemas"]["documents_override_item"][];
        };
        /** @description Description de l'erreur */
        recipient_error_response: {
            /** @description <table border="1">
             *       <tr bgcolor="lightgrey">
             *         <th>Code</th>
             *         <th>Description</th>
             *       </tr>
             *       <tr><td>ATTACHMENTS_EXCEED_MAX_SIZE</td><td>Les attachements ont dépassé la taille autorisée</td></tr>
             *       <tr><td>ADDRESS_LINE_1_TOO_LONG</td><td>La ligne d'adresse n°1 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_2_TOO_LONG</td><td>La ligne d'adresse n°2 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_3_TOO_LONG</td><td>La ligne d'adresse n°3 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_4_TOO_LONG</td><td>La ligne d'adresse n°4 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_5_TOO_LONG</td><td>La ligne d'adresse n°5 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_TOO_LONG</td><td>La ligne d'adresse n°6 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_WRONG_FORMAT</td><td>Le champ address_line_6 doit avoir le format [CODE_POSTAL] [VILLE], avec CODE_POSTAL sur 5 chiffres, lorsque le code pays vaut "FR"</td></tr>
             *       <tr><td>ALREADY_CHECK_SENDING</td><td>La vérification de l'envoi a déjà été réalisée</td></tr>
             *       <tr><td>ATTRIBUTE_EXIST</td><td>L'attribut doit être unique et il existe déjà</td></tr>
             *       <tr><td>ATTRIBUTE_MANDATORY</td><td>L'attribut est obligatoire. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_NOT_FOUND</td><td>L'attribut n'est pas trouvé. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_TOO_LONG</td><td>L'attribut est trop long. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_WRONG_PARAMETER</td><td>Un attribut est incorrect. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>CHECK_OBSOLETE_AFTER_SENDING_MODIFICATION</td><td>Après modification de l'envoi, le résultat de la vérification du check, lancée auparavant, est obsolète. Il faut relancer une nouvelle vérification</td></tr>
             *       <tr><td>CORRUPTED_DOCUMENT</td><td>Le document est corrompu ou contient un virus</td></tr>
             *       <tr><td>COUNTRY_CODE_TOO_LONG</td><td>Le code pays est limité à 2 caractères</td></tr>
             *       <tr><td>CUSTOM_ID_EMPTY</td><td>Le custom id est vide</td></tr>
             *       <tr><td>CUSTOM_ID_WRONG_FORMAT</td><td>Le custom id n'est pas au bon format</td></tr>
             *       <tr><td>DOCUMENT_NOT_FOUND</td><td>Le document est introuvable</td></tr>
             *       <tr><td>DOCUMENT_IN_DOCUMENTS_OVERRIDE</td><td>Impossible de supprimer le document puisque des bribes de document y font référence. Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_ID_NOT_ACCEPTED</td><td>Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_NOT_ACCEPTED</td><td>Première page ou dernière page invalides pour le document spécifié</td></tr>
             *       <tr><td>DOC_TYPE_NOT_ACCEPTED</td><td>Le type de document n'est pas accepté (.pdf, .doc, .docx, .rtf, .txt, .xls, .xlsx autorisés)</td></tr>
             *       <tr><td>DUPLICATE_PRIORITY</td><td>Plusieurs documents ont la même priorité</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_1_OR_ADDRESS_LINE_2</td><td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_6</td><td>La ligne d'adresse n°6 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ATTRIBUTE</td><td>L'attribut est vide. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>EMPTY_DOCUMENT</td><td>Le document est vide</td></tr>
             *       <tr><td>EMPTY_FILE_ID</td><td>L'identifiant de fichier est vide</td></tr>
             *       <tr><td>EMPTY_PRODUCTION_CENTER</td><td>Le centre de production est vide</td></tr>
             *       <tr><td>EMPTY_METADATA</td><td>Les méta-données sont vides</td></tr>
             *       <tr><td>EMPTY_NAME</td><td>Aucun nom d'envoi n'a été transmis</td></tr>
             *       <tr><td>EMPTY_PRIORITY</td><td>Le champ priority est vide</td></tr>
             *       <tr><td>EMPTY_SCHEDULED_DATE</td><td>La date d'engagement de remise en poste est manquante</td></tr>
             *       <tr><td>FORBIDDEN_PRINT_SENDER_ADDRESS_WITH_SIMPLE_ENVELOPPE_WINDOWS_TYPE</td><td>L'impression de l'adresse de l'expéditeur nécessite le choix d'une enveloppe à double fenêtres</td></tr>
             *       <tr><td>FORBIDDEN_SENDING_MODE_WITH_TEMPLATE_USAGES</td><td>The sending mode 'EMAIL' is not compatible with the template ‘{0}’ usages</td>
             *       <tr><td>FORBIDDEN_TREAT_UNDELIVERED_MAIL_AND_PRINT_SENDER_ADDRESS</td><td>L'impression de l'adresse de l'expéditeur n'est pas compatible avec la gestion électronique des PND</td></tr>
             *       <tr><td>INVALID_COUNTRY_CODE</td><td>Le code pays n'est pas autorisé</td></tr>
             *       <tr><td>INVALID_DOCUMENTS_COUNT</td><td>Erreur lorsque l'on tente d'ajouter plus de 30 documents dans un envoi</td></tr>
             *       <tr><td>INVALID_DOCUMENT_SIZE</td><td>La taille du document transmis dépasse les 20 Mo</td></tr>
             *       <tr><td>INVALID_DOCUMENT_TYPE</td><td>Seuls les documents de type INVOICE peuvent apparaitre dans les bribes de documents d'un destinataire</td></tr>
             *       <tr><td>INVALID_EMAIL_TEMPLATE_ID</td><td>The value of parameter `email_template_id` is invalid</td></tr>
             *       <tr><td>INVALID_INVOICE_DATE</td><td>Date de facture ne peut pas être postérieure à la date du jour. Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRIORITY</td><td>Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRODUCTION_CENTER</td><td>Le centre de production est inconnu</td></tr>
             *       <tr><td>INVALID_NOTIFICATION_EMAIL</td><td>L'email est invalide.</td></tr>
             *       <tr><td>INVALID_NUMBER_COUNT</td><td>Le numéro de facture associé à l'expéditeur a déjà été utilisé dans le cadre d'un destinataire Chorus</td></tr>
             *       <tr><td>INVALID_RECIPIENTS_COUNT</td><td>Le nombre de destinataires est atteint</td></tr>
             *       <tr><td>INVALID_SIRET</td><td>Siret invalide</td></tr>
             *       <tr><td>INVALID_TOTAL_SENDING_SIZE</td><td>La somme des tailles de l'ensemble des documents dépasse 20 Mo</td></tr>
             *       <tr><td>JSON_FORMAT_ERROR</td><td>Un problème dans le format JSON des données transmises</td></tr>
             *       <tr><td>MAX_ATTRIBUTE_VALUE_EXEEDED</td><td>L'attribut ne peut pas dépasser une valeur maximale</td></tr>
             *       <tr><td>METADATA_WRONG_FORMAT</td><td>Le paramètre metadata n'est pas correct</td></tr>
             *       <tr><td>MISSING_FILE</td><td>Fichier à charger introuvable</td></tr>
             *       <tr><td>NAME_TOO_LONG</td><td>Le nom de l'envoi est trop long (256 caractères max)</td></tr>
             *       <tr><td>NO_INVOICE_ON_SENDING</td><td>Pas de facture dans l'envoi</td></tr>
             *       <tr><td>NO_PARAMETER</td><td>Au moins un paramètre est requis</td></tr>
             *       <tr><td>NO_RECIPIENT_ON_SENDING</td><td>Pas de destinataires dans l'envoi</td></tr>
             *       <tr><td>OPERATION_IN_PROGRESS</td><td>L'opération est en cours. le résultat ne peut pas être fourni immédiatement</td></tr>
             *       <tr><td>PAGES_NOT_MATCH</td><td>Incohérence entre la première page et la dernière page</td></tr>
             *       <tr><td>PARAM_FILTER_NOT_ALLOWED</td><td>La valeur de l'attribut n'est pas acceptée. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>PARAM_NOT_ACCEPTED</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>POST_CHECK_MANDATORY_BEFORE_GET</td><td>Une demande de résultat d'une vérification d'un envoi a été reçue alors qu'aucune vérification n'a été lancée</td></tr>
             *       <tr><td>RECIPIENT_NOT_FOUND</td><td>Ressource RECIPIENT introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>SENDING_NOT_FOUND</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>STATUS_NOT_DRAFT</td><td>Erreur quand on essaie d'ajouter un document ou un destinataire dans un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de soumettre un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de modifier une option d'un envoi qui n'est pas en état draft</td></tr>
             *       <tr><td>SHEET_NUMBER_EXCEEDED</td><td>Nombre de feuilles maximales dépassé pour le type d'enveloppe</td></tr>
             *       <tr><td>SIRET_ERROR</td><td>La plateforme Chorus Pro n'accepte pas le numéro de Siret</td></tr>
             *       <tr><td>SIRET_RECIPIENT_COMMITMENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret, du code service exécutant et du numéro d'engagement juridique</td></tr>
             *       <tr><td>SIRET_RECIPIENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret et du code service exécutant</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_DOCUMENT</td><td>Plusieurs documents ont été envoyés en multipart alors que le service limite à un document.</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_METADATA</td><td>Le paramètre metadata a été transmis plusieurs fois</td></tr>
             *       <tr><td>UNEXPECTED_ERROR</td><td>Une erreur inattendue est intervenue </td></tr>
             *       <tr><td>WRONG_FORMAT_ATTRIBUTE</td><td>Le format de l'attribut est incorrect</td></tr>
             *     </table> */
            code: string;
            message: string;
        };
        recipient_errors_response: {
            errors?: components["schemas"]["recipient_error_response"][];
        };
        /** @description Les destinataires importés pour l'envoi */
        recipient_response: {
            /**
             * @description Identifiant du destinataire
             * @example d905a65e-aa46-4f37-8480-260c4600c810
             */
            id?: string;
            /**
             * @description Identifiant unique du destinataire pour le rapprochement avec le carnet d'adresses
             * @example recip1234
             */
            identifier?: string;
            sending_mode?: components["schemas"]["sending_mode"];
            /**
             * @description référence (rfr) qui permet au client d'identifier le destinataire auprès du support
             * @example 4020110013K00001
             */
            recipient_tracking_reference?: string;
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
             * Format: date
             * @description Date de la facture
             * @example 2018-03-14
             */
            invoice_date?: string;
            /**
             * Format: date
             * @description Date d'échéance de la facture
             * @example 2018-03-14
             */
            invoice_due_date?: string;
            /**
             * @description Numéro de facture
             * @example FAC_1234
             */
            invoice_number?: string;
            /**
             * Format: float
             * @description Montant hors taxe de la facture
             * @example 100.5
             */
            invoice_amount_without_tax?: number;
            /**
             * Format: float
             * @description Montant net à payer (montant TTC - remises)
             * @example 120.5
             */
            invoice_net_payable_amount?: number;
            /**
             * Format: float
             * @description Montant de la TVA de la facture
             * @example 20
             */
            invoice_tax_amount?: number;
            /**
             * Format: float
             * @description Montant toutes taxes comprises
             * @example 120.5
             */
            invoice_total_amount?: number;
            /**
             * @description Type de la facture
             * @example INVOICE
             * @enum {string}
             */
            invoice_type?: "INVOICE" | "CREDIT";
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
             * @description Numéro de la facture de référence (cas d'un avoir)
             * @example Av-123456
             */
            original_invoice_number?: string;
            /**
             * @description Raison sociale du destinataire
             * @example Ministère de l'interieur
             */
            company_name?: string;
            /**
             * @description SIRET du destinataire
             * @example 42433569300083
             */
            siret?: string;
            /**
             * @description Type de marché
             * @example CO_CONTRACTING
             * @enum {string}
             */
            market_type?: "CO_CONTRACTING" | "SUBCONTRACTING";
            /**
             * @description SIRET du validateur
             * @example 42433569300083
             */
            approver_siret?: string;
            /**
             * @description Code Pays du valideur
             * @example FR
             */
            approver_country_code?: string;
            /**
             * @description Raison sociale du validateur
             * @example France facture
             */
            approver_company_name?: string;
            factor_country_code?: components["schemas"]["country_code"];
            /**
             * @description Raison sociale de l'affactureur
             * @example EURL BASILE
             */
            factor_company_name?: string;
            /**
             * @description Siret de l'affactureur
             * @example 42433569300083
             */
            factor_siret?: string;
            /**
             * @description Iban de l'émetteur de la facture
             * @example FR7612548029989876543210917
             */
            sender_iban?: string;
            /**
             * @description BIC de l'émetteur de la facture
             * @example BOUSFRPPXXX
             */
            sender_bic?: string;
            /**
             * @description Objet
             * @example Votre facture EZRE123123 est disponible
             */
            subject?: string;
            /**
             * @description adresse email du destinataire
             * @example recip@domain.com
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
            /** @description Liste de bribes de documents. Si ce champ n'est pas renseigné,
             *     le destinataire recevra tous les documents associé à l'envoi.
             *     Si ce champ est renseigné, le destinataire recevra la liste de
             *     bribes de documents indiquées (dans l'ordre des éléments du tableau). */
            documents_override?: components["schemas"]["documents_override_item"][];
            postage_type?: components["schemas"]["mail_postage_type"];
            postage_class?: components["schemas"]["mail_postage_class"];
            status?: components["schemas"]["recipient_status"];
            /** @description Détail d'un statut (cause du rejet) */
            status_detail?: string;
            /** @description Dernier statut de distribution */
            last_delivery_status?: string;
            /**
             * Format: datetime
             * @description Date du dernier statut de distribution
             * @example 2018-03-14T07:21:40.757Z
             */
            last_delivery_status_date?: string;
            /**
             * Format: float
             * @description Coût de l'affranchissement en euros
             */
            postage_price?: number;
            /**
             * Format: date-time
             * @description Date du PND
             * @example 2018-03-14T07:21:40.757Z
             */
            undelivered_mail_date?: string;
            /**
             * Format: date-time
             * @description Date d'archivage de la facture
             * @example 2018-03-14T07:21:40.757Z
             */
            archive_date?: string;
            /**
             * @description URL de l'archive de la facture
             * @example /sendings/110e8400-e29b-11d4-a716-446655440000/recipients/d905a65e-aa46-4f37-8480-260c4600c810/download_archive
             */
            archive_url?: string;
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
            /**
             * Format: datetime
             * @description Date de création
             * @example 2018-03-14T07:21:40.757Z
             */
            creation_date?: string;
            /**
             * Format: datetime
             * @description Date de modification
             * @example 2018-03-14T07:21:40.757Z
             */
            modification_date?: string;
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
         *         <td>le destinataire a été : Par Courrier, mis sous pli; Par Chorus, envoyé à Chorus; Par E-mail envoyé</td>
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
        /** @description un envoi */
        sending_creation: {
            /**
             * @description Nom de l'envoi
             * @example Envoi du 14 février
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
             * @description Email de notification
             * @example do_not_reply@maileva.com
             */
            notification_email?: string;
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
             * @description Numéro de TVA intra-communautaire de l’émetteur
             * @example FR43424335693
             */
            sender_tax_number?: string;
            /**
             * @description Siret de l’émetteur
             * @example 42433569300083
             */
            sender_siret?: string;
            /**
             * @description Raison sociale de l’émetteur
             * @example Société DURAND
             */
            sender_company_name?: string;
            email_options?: components["schemas"]["email_options"];
            mail_options?: components["schemas"]["mail_options"];
            portal_options?: components["schemas"]["portal_options"];
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
         *       <tr><td>PORTAL</td><td>Mise à disposition sur le portail de publication de factures</td></tr>
         *     </table>
         * @enum {string}
         */
        sending_mode: "MAIL" | "EMAIL" | "CHORUS" | "PORTAL";
        /** @description Description de l'erreur */
        sending_error_response: {
            /** @description <table border="1">
             *       <tr bgcolor="lightgrey">
             *         <th>Code</th>
             *         <th>Description</th>
             *       </tr>
             *       <tr><td>ATTACHMENTS_EXCEED_MAX_SIZE</td><td>Les attachements ont dépassé la taille autorisée</td></tr>
             *       <tr><td>ADDRESS_LINE_1_TOO_LONG</td><td>La ligne d'adresse n°1 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_2_TOO_LONG</td><td>La ligne d'adresse n°2 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_3_TOO_LONG</td><td>La ligne d'adresse n°3 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_4_TOO_LONG</td><td>La ligne d'adresse n°4 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_5_TOO_LONG</td><td>La ligne d'adresse n°5 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_TOO_LONG</td><td>La ligne d'adresse n°6 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_WRONG_FORMAT</td><td>Le champ address_line_6 doit avoir le format [CODE_POSTAL] [VILLE], avec CODE_POSTAL sur 5 chiffres, lorsque le code pays vaut "FR"</td></tr>
             *       <tr><td>ALREADY_CHECK_SENDING</td><td>La vérification de l'envoi a déjà été réalisée</td></tr>
             *       <tr><td>ATTRIBUTE_EXIST</td><td>L'attribut doit être unique et il existe déjà</td></tr>
             *       <tr><td>ATTRIBUTE_MANDATORY</td><td>L'attribut est obligatoire. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_NOT_FOUND</td><td>L'attribut n'est pas trouvé. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_TOO_LONG</td><td>L'attribut est trop long. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_WRONG_PARAMETER</td><td>Un attribut est incorrect. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>CHECK_OBSOLETE_AFTER_SENDING_MODIFICATION</td><td>Après modification de l'envoi, le résultat de la vérification du check, lancée auparavant, est obsolète. Il faut relancer une nouvelle vérification</td></tr>
             *       <tr><td>CORRUPTED_DOCUMENT</td><td>Le document est corrompu ou contient un virus</td></tr>
             *       <tr><td>COUNTRY_CODE_TOO_LONG</td><td>Le code pays est limité à 2 caractères</td></tr>
             *       <tr><td>CUSTOM_ID_EMPTY</td><td>Le custom id est vide</td></tr>
             *       <tr><td>CUSTOM_ID_WRONG_FORMAT</td><td>Le custom id n'est pas au bon format</td></tr>
             *       <tr><td>DOCUMENT_NOT_FOUND</td><td>Le document est introuvable</td></tr>
             *       <tr><td>DOCUMENT_IN_DOCUMENTS_OVERRIDE</td><td>Impossible de supprimer le document puisque des bribes de document y font référence. Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_ID_NOT_ACCEPTED</td><td>Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_NOT_ACCEPTED</td><td>Première page ou dernière page invalides pour le document spécifié</td></tr>
             *       <tr><td>DOC_TYPE_NOT_ACCEPTED</td><td>Le type de document n'est pas accepté (.pdf, .doc, .docx, .rtf, .txt, .xls, .xlsx autorisés)</td></tr>
             *       <tr><td>DUPLICATE_PRIORITY</td><td>Plusieurs documents ont la même priorité</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_1_OR_ADDRESS_LINE_2</td><td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_6</td><td>La ligne d'adresse n°6 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ATTRIBUTE</td><td>L'attribut est vide. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>EMPTY_DOCUMENT</td><td>Le document est vide</td></tr>
             *       <tr><td>EMPTY_FILE_ID</td><td>L'identifiant de fichier est vide</td></tr>
             *       <tr><td>EMPTY_PRODUCTION_CENTER</td><td>Le centre de production est vide</td></tr>
             *       <tr><td>EMPTY_METADATA</td><td>Les méta-données sont vides</td></tr>
             *       <tr><td>EMPTY_NAME</td><td>Aucun nom d'envoi n'a été transmis</td></tr>
             *       <tr><td>EMPTY_PRIORITY</td><td>Le champ priority est vide</td></tr>
             *       <tr><td>EMPTY_SCHEDULED_DATE</td><td>La date d'engagement de remise en poste est manquante</td></tr>
             *       <tr><td>FORBIDDEN_PRINT_SENDER_ADDRESS_WITH_SIMPLE_ENVELOPPE_WINDOWS_TYPE</td><td>L'impression de l'adresse de l'expéditeur nécessite le choix d'une enveloppe à double fenêtres</td></tr>
             *       <tr><td>FORBIDDEN_SENDING_MODE_WITH_TEMPLATE_USAGES</td><td>The sending mode ‘{0}’ is not compatible with the template ‘{1}’ usages</td></tr>
             *       <tr><td>FORBIDDEN_TREAT_UNDELIVERED_MAIL_AND_PRINT_SENDER_ADDRESS</td><td>L'impression de l'adresse de l'expéditeur n'est pas compatible avec la gestion électronique des PND</td></tr>
             *       <tr><td>INVALID_COUNTRY_CODE</td><td>Le code pays n'est pas autorisé</td></tr>
             *       <tr><td>INVALID_DOCUMENTS_COUNT</td><td>Erreur lorsque l'on tente d'ajouter plus de 30 documents dans un envoi</td></tr>
             *       <tr><td>INVALID_DOCUMENT_SIZE</td><td>La taille du document transmis dépasse les 20 Mo</td></tr>
             *       <tr><td>INVALID_DOCUMENT_TYPE</td><td>Seuls les documents de type INVOICE peuvent apparaitre dans les bribes de documents d'un destinataire</td></tr>
             *       <tr><td>INVALID_INVOICE_DATE</td><td>Date de facture ne peut pas être postérieure à la date du jour. Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRIORITY</td><td>Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRODUCTION_CENTER</td><td>Le centre de production est inconnu</td></tr>
             *       <tr><td>INVALID_NOTIFICATION_EMAIL</td><td>L'email est invalide.</td></tr>
             *       <tr><td>INVALID_NUMBER_COUNT</td><td>Le numéro de facture associé à l'expéditeur a déjà été utilisé dans le cadre d'un destinataire Chorus</td></tr>
             *       <tr><td>INVALID_RECIPIENTS_COUNT</td><td>Le nombre de destinataires est atteint</td></tr>
             *       <tr><td>INVALID_RECIPIENT_NOTIFICATION_TEMPLATE</td><td>The value of parameter `recipient_notification_template` is invalid</td></tr>
             *       <tr><td>INVALID_SIRET</td><td>Siret invalide</td></tr>
             *       <tr><td>INVALID_TOTAL_SENDING_SIZE</td><td>La somme des tailles de l'ensemble des documents dépasse 20 Mo</td></tr>
             *       <tr><td>JSON_FORMAT_ERROR</td><td>Un problème dans le format JSON des données transmises</td></tr>
             *       <tr><td>MAX_ATTRIBUTE_VALUE_EXEEDED</td><td>L'attribut ne peut pas dépasser une valeur maximale</td></tr>
             *       <tr><td>METADATA_WRONG_FORMAT</td><td>Le paramètre metadata n'est pas correct</td></tr>
             *       <tr><td>MISSING_FILE</td><td>Fichier à charger introuvable</td></tr>
             *       <tr><td>NAME_TOO_LONG</td><td>Le nom de l'envoi est trop long (256 caractères max)</td></tr>
             *       <tr><td>NO_INVOICE_ON_SENDING</td><td>Pas de facture dans l'envoi</td></tr>
             *       <tr><td>NO_PARAMETER</td><td>Au moins un paramètre est requis</td></tr>
             *       <tr><td>NO_RECIPIENT_ON_SENDING</td><td>Pas de destinataires dans l'envoi</td></tr>
             *       <tr><td>OPERATION_IN_PROGRESS</td><td>L'opération est en cours. le résultat ne peut pas être fourni immédiatement</td></tr>
             *       <tr><td>PAGES_NOT_MATCH</td><td>Incohérence entre la première page et la dernière page</td></tr>
             *       <tr><td>PARAM_FILTER_NOT_ALLOWED</td><td>La valeur de l'attribut n'est pas acceptée. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>PARAM_NOT_ACCEPTED</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>POST_CHECK_MANDATORY_BEFORE_GET</td><td>Une demande de résultat d'une vérification d'un envoi a été reçue alors qu'aucune vérification n'a été lancée</td></tr>
             *       <tr><td>RECIPIENT_NOT_FOUND</td><td>Ressource RECIPIENT introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>SENDING_NOT_FOUND</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>STATUS_NOT_DRAFT</td><td>Erreur quand on essaie d'ajouter un document ou un destinataire dans un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de soumettre un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de modifier une option d'un envoi qui n'est pas en état draft</td></tr>
             *       <tr><td>SHEET_NUMBER_EXCEEDED</td><td>Nombre de feuilles maximales dépassé pour le type d'enveloppe</td></tr>
             *       <tr><td>SIRET_ERROR</td><td>La plateforme Chorus Pro n'accepte pas le numéro de Siret</td></tr>
             *       <tr><td>SIRET_RECIPIENT_COMMITMENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret, du code service exécutant et du numéro d'engagement juridique</td></tr>
             *       <tr><td>SIRET_RECIPIENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret et du code service exécutant</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_DOCUMENT</td><td>Plusieurs documents ont été envoyés en multipart alors que le service limite à un document.</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_METADATA</td><td>Le paramètre metadata a été transmis plusieurs fois</td></tr>
             *       <tr><td>UNEXPECTED_ERROR</td><td>Une erreur inattendue est intervenue </td></tr>
             *       <tr><td>WRONG_FORMAT_ATTRIBUTE</td><td>Le format de l'attribut est incorrect</td></tr>
             *     </table> */
            code: string;
            message: string;
        };
        sending_errors_response: {
            errors?: components["schemas"]["sending_error_response"][];
        };
        /** @description Description de l'erreur */
        sending_submit_error_response: {
            /** @description <table border="1">
             *       <tr bgcolor="lightgrey">
             *         <th>Code</th>
             *         <th>Description</th>
             *       </tr>
             *       <tr><td>ATTACHMENTS_EXCEED_MAX_SIZE</td><td>Les attachements ont dépassé la taille autorisée</td></tr>
             *       <tr><td>ADDRESS_LINE_1_TOO_LONG</td><td>La ligne d'adresse n°1 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_2_TOO_LONG</td><td>La ligne d'adresse n°2 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_3_TOO_LONG</td><td>La ligne d'adresse n°3 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_4_TOO_LONG</td><td>La ligne d'adresse n°4 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_5_TOO_LONG</td><td>La ligne d'adresse n°5 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_TOO_LONG</td><td>La ligne d'adresse n°6 est limitée à 38 caractères</td></tr>
             *       <tr><td>ADDRESS_LINE_6_WRONG_FORMAT</td><td>Le champ address_line_6 doit avoir le format [CODE_POSTAL] [VILLE], avec CODE_POSTAL sur 5 chiffres, lorsque le code pays vaut "FR"</td></tr>
             *       <tr><td>ALREADY_CHECK_SENDING</td><td>La vérification de l'envoi a déjà été réalisée</td></tr>
             *       <tr><td>ATTRIBUTE_EXIST</td><td>L'attribut doit être unique et il existe déjà</td></tr>
             *       <tr><td>ATTRIBUTE_MANDATORY</td><td>L'attribut est obligatoire. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_NOT_FOUND</td><td>L'attribut n'est pas trouvé. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_TOO_LONG</td><td>L'attribut est trop long. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>ATTRIBUTE_WRONG_PARAMETER</td><td>Un attribut est incorrect. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>CHECK_OBSOLETE_AFTER_SENDING_MODIFICATION</td><td>Après modification de l'envoi, le résultat de la vérification du check, lancée auparavant, est obsolète. Il faut relancer une nouvelle vérification</td></tr>
             *       <tr><td>CORRUPTED_DOCUMENT</td><td>Le document est corrompu ou contient un virus</td></tr>
             *       <tr><td>COUNTRY_CODE_TOO_LONG</td><td>Le code pays est limité à 2 caractères</td></tr>
             *       <tr><td>CUSTOM_ID_EMPTY</td><td>Le custom id est vide</td></tr>
             *       <tr><td>CUSTOM_ID_WRONG_FORMAT</td><td>Le custom id n'est pas au bon format</td></tr>
             *       <tr><td>DOCUMENT_NOT_FOUND</td><td>Le document est introuvable</td></tr>
             *       <tr><td>DOCUMENT_IN_DOCUMENTS_OVERRIDE</td><td>Impossible de supprimer le document puisque des bribes de document y font référence. Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_ID_NOT_ACCEPTED</td><td>Document introuvable en utilisant l'id fourni</td></tr>
             *       <tr><td>DOC_NOT_ACCEPTED</td><td>Première page ou dernière page invalides pour le document spécifié</td></tr>
             *       <tr><td>DOC_TYPE_NOT_ACCEPTED</td><td>Le type de document n'est pas accepté (.pdf, .doc, .docx, .rtf, .txt, .xls, .xlsx autorisés)</td></tr>
             *       <tr><td>DUPLICATE_PRIORITY</td><td>Plusieurs documents ont la même priorité</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_1_OR_ADDRESS_LINE_2</td><td>La ligne d'adresse n°1 ou la ligne d'adresse n°2 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ADDRESS_LINE_6</td><td>La ligne d'adresse n°6 doit être renseignée</td></tr>
             *       <tr><td>EMPTY_ATTRIBUTE</td><td>L'attribut est vide. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>EMPTY_DOCUMENT</td><td>Le document est vide</td></tr>
             *       <tr><td>EMPTY_FILE_ID</td><td>L'identifiant de fichier est vide</td></tr>
             *       <tr><td>EMPTY_PRODUCTION_CENTER</td><td>Le centre de production est vide</td></tr>
             *       <tr><td>EMPTY_METADATA</td><td>Les méta-données sont vides</td></tr>
             *       <tr><td>EMPTY_NAME</td><td>Aucun nom d'envoi n'a été transmis</td></tr>
             *       <tr><td>EMPTY_PRIORITY</td><td>Le champ priority est vide</td></tr>
             *       <tr><td>EMPTY_SCHEDULED_DATE</td><td>La date d'engagement de remise en poste est manquante</td></tr>
             *       <tr><td>FORBIDDEN_PRINT_SENDER_ADDRESS_WITH_SIMPLE_ENVELOPPE_WINDOWS_TYPE</td><td>L'impression de l'adresse de l'expéditeur nécessite le choix d'une enveloppe à double fenêtres</td></tr>
             *       <tr><td>FORBIDDEN_TREAT_UNDELIVERED_MAIL_AND_PRINT_SENDER_ADDRESS</td><td>L'impression de l'adresse de l'expéditeur n'est pas compatible avec la gestion électronique des PND</td></tr>
             *       <tr><td>INVALID_COUNTRY_CODE</td><td>Le code pays n'est pas autorisé</td></tr>
             *       <tr><td>INVALID_DOCUMENTS_COUNT</td><td>Erreur lorsque l'on tente d'ajouter plus de 30 documents dans un envoi</td></tr>
             *       <tr><td>INVALID_DOCUMENT_SIZE</td><td>La taille du document transmis dépasse les 20 Mo</td></tr>
             *       <tr><td>INVALID_DOCUMENT_TYPE</td><td>Seuls les documents de type INVOICE peuvent apparaitre dans les bribes de documents d'un destinataire</td></tr>
             *       <tr><td>INVALID_INVOICE_DATE</td><td>Date de facture ne peut pas être postérieure à la date du jour. Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRIORITY</td><td>Le champ PRIORITY est nul</td></tr>
             *       <tr><td>INVALID_PRODUCTION_CENTER</td><td>Le centre de production est inconnu</td></tr>
             *       <tr><td>INVALID_NOTIFICATION_EMAIL</td><td>L'email est invalide.</td></tr>
             *       <tr><td>INVALID_NUMBER_COUNT</td><td>Le numéro de facture associé à l'expéditeur a déjà été utilisé dans le cadre d'un destinataire Chorus</td></tr>
             *       <tr><td>INVALID_RECIPIENTS_COUNT</td><td>Le nombre de destinataires est atteint</td></tr>
             *       <tr><td>INVALID_SIRET</td><td>Siret invalide</td></tr>
             *       <tr><td>INVALID_TOTAL_SENDING_SIZE</td><td>La somme des tailles de l'ensemble des documents dépasse 20 Mo</td></tr>
             *       <tr><td>JSON_FORMAT_ERROR</td><td>Un problème dans le format JSON des données transmises</td></tr>
             *       <tr><td>MAX_ATTRIBUTE_VALUE_EXEEDED</td><td>L'attribut ne peut pas dépasser une valeur maximale</td></tr>
             *       <tr><td>METADATA_WRONG_FORMAT</td><td>Le paramètre metadata n'est pas correct</td></tr>
             *       <tr><td>MISSING_FILE</td><td>Fichier à charger introuvable</td></tr>
             *       <tr><td>NAME_TOO_LONG</td><td>Le nom de l'envoi est trop long (256 caractères max)</td></tr>
             *       <tr><td>NO_INVOICE_ON_SENDING</td><td>Pas de facture dans l'envoi</td></tr>
             *       <tr><td>NO_PARAMETER</td><td>Au moins un paramètre est requis</td></tr>
             *       <tr><td>NO_RECIPIENT_ON_SENDING</td><td>Pas de destinataires dans l'envoi</td></tr>
             *       <tr><td>OPERATION_IN_PROGRESS</td><td>L'opération est en cours. le résultat ne peut pas être fourni immédiatement</td></tr>
             *       <tr><td>PAGES_NOT_MATCH</td><td>Incohérence entre la première page et la dernière page</td></tr>
             *       <tr><td>PARAM_FILTER_NOT_ALLOWED</td><td>La valeur de l'attribut n'est pas acceptée. Le message de l'erreur fait référence à l'attribut concerné</td></tr>
             *       <tr><td>PARAM_NOT_ACCEPTED</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>POST_CHECK_MANDATORY_BEFORE_GET</td><td>Une demande de résultat d'une vérification d'un envoi a été reçue alors qu'aucune vérification n'a été lancée</td></tr>
             *       <tr><td>RECIPIENT_NOT_FOUND</td><td>Ressource RECIPIENT introuvable</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>PARAM_SORT_NOT_ALLOWED</td><td>Impossible de trier selon le paramètre fourni</td></tr>
             *       <tr><td>SENDING_NOT_FOUND</td><td>Ressource SENDING introuvable</td></tr>
             *       <tr><td>STATUS_NOT_DRAFT</td><td>Erreur quand on essaie d'ajouter un document ou un destinataire dans un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de soumettre un envoi qui n'est pas en état draft<br/>Erreur quand on essaie de modifier une option d'un envoi qui n'est pas en état draft</td></tr>
             *       <tr><td>SHEET_NUMBER_EXCEEDED</td><td>Nombre de feuilles maximales dépassé pour le type d'enveloppe</td></tr>
             *       <tr><td>SIRET_ERROR</td><td>La plateforme Chorus Pro n'accepte pas le numéro de Siret</td></tr>
             *       <tr><td>SIRET_RECIPIENT_COMMITMENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret, du code service exécutant et du numéro d'engagement juridique</td></tr>
             *       <tr><td>SIRET_RECIPIENT_ERROR</td><td>La plateforme Chorus Pro n'accepte pas la combinaison du numéro de Siret et du code service exécutant</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_DOCUMENT</td><td>Plusieurs documents ont été envoyés en multipart alors que le service limite à un document.</td></tr>
             *       <tr><td>TOO_MANY_PARAMETER_METADATA</td><td>Le paramètre metadata a été transmis plusieurs fois</td></tr>
             *       <tr><td>UNEXPECTED_ERROR</td><td>Une erreur inattendue est intervenue </td></tr>
             *       <tr><td>WRONG_FORMAT_ATTRIBUTE</td><td>Le format de l'attribut est incorrect</td></tr>
             *     </table> */
            code: string;
            message: string;
        };
        /** @description Description d'une erreur dans un check d'un envoi */
        sending_check_error_response: {
            sending: components["schemas"]["sending_error_response"][];
            recipients: components["schemas"]["recipient_check_error_response"][];
        };
        recipient_check_error_response: {
            recipient_id?: string;
            errors?: components["schemas"]["recipient_error_response"][];
        };
        sending_submit_errors_response: {
            errors?: components["schemas"]["sending_submit_error_response"][];
        };
        sending_check_errors_response: {
            errors?: components["schemas"]["sending_check_error_response"][];
        };
        /** @description Un envoi de facture */
        sending_response: {
            /**
             * @description Identifiant d'un envoi
             * @example 110e8400-e29b-11d4-a716-446655440000
             */
            id?: string;
            /**
             * @description Nom d'un envoi
             * @example Facture d'un abonnement téléphonique
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
             * @description référence (rfr) qui permet au client d'identifier l'envoi auprès du support
             * @example 4020110013K
             */
            sending_tracking_reference?: string;
            /**
             * @description Email de notification
             * @example do_not_reply@maileva.com
             */
            notification_email?: string;
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
             * @description Numéro de TVA intra-communautaire de l’émetteur
             * @example FR43424335693
             */
            sender_tax_number?: string;
            /**
             * @description Siret de l’émetteur
             * @example 42433569300083
             */
            sender_siret?: string;
            /**
             * @description Raison sociale de l’émetteur
             * @example Société DURAND
             */
            sender_company_name?: string;
            email_options?: components["schemas"]["email_options"];
            mail_options?: components["schemas"]["mail_options"];
            portal_options?: components["schemas"]["portal_options"];
            status?: components["schemas"]["sending_status"];
            /** @description Détail d'un statut (cause du rejet) */
            status_detail?: string;
            /**
             * Format: datetime
             * @description Date de création
             * @example 2018-03-14T07:21:40.757Z
             */
            creation_date?: string;
            /**
             * Format: datetime
             * @description Date de modification
             * @example 2018-03-14T07:21:40.757Z
             */
            modification_date?: string;
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
             * Format: date-time
             * @description Date d'archivage de la dernière facture archivable
             * @example 2018-03-14T07:21:40.757Z
             */
            archive_date?: string;
            /**
             * @description Nombre de documents dans l'envoi
             * @example 1
             */
            documents_count?: number;
            /** @description Poids du document (en octets) */
            documents_size?: number;
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
            recipients_counts?: components["schemas"]["recipients_counts"];
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
                    "application/json": components["schemas"]["recipient_errors_response"];
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
