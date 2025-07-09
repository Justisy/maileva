export interface paths {
    "/senders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des expéditeurs
         * @description Permet de visualiser les expéditeurs liés au client.
         */
        get: {
            parameters: {
                query?: {
                    start_index?: number;
                    count?: number;
                    sort?: string;
                    desc?: string;
                    q?: string;
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
                        "application/json": components["schemas"]["SenderResponses"];
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
        put?: never;
        /**
         * Créer un expéditeur
         * @description Permet de créer un expéditeur qui sera nécessaire pour faire des envois électroniques.
         */
        post: operations["createSender"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/senders/{sender_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un expéditeur
         * @description Permet de visualiser un expéditeur.
         */
        get: operations["getSender"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Modifier un expéditeur
         * @description Permet de modifier un expéditeur.
         */
        patch: operations["updateSender"];
        trace?: never;
    };
    "/senders/{sender_id}/change_owner": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Modifier le service de rattachement de l'utilisateur
         * @description Permet à l'expéditeur de changer de service tout en gardant son compte expéditeur et son code d'identification LRE
         */
        post: operations["changeOwner"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/senders/{sender_id}/grant_access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Rattacher un compte expéditeur AR24 existant à l'expéditeur
         * @description Permet de rattacher un compte expéditeur AR24 existant à l'expéditeur
         */
        post: operations["linkemail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/senders/{sender_id}/verify_identity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Commande d'une clé OTP
         * @description Permet de commander une clé OTP pour l'expéditeur correspondant à son identité numérique. Il recevra son courrier recommandé entre 2 et 8 jours.
         */
        post: operations["orderOtp"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/senders/{sender_id}/revoke_identity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Révoquer un courrier contenant la clé OTP
         * @description Permet de révoquer son identité en supprimant la clé OTP afin de rendre inutilisable une clé OTP perdue ou volée.
         */
        post: operations["revokeIdentity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/senders/{sender_id}/authenticate_by_otp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Validation de la clé OTP
         * @description Permet de valider le code à usage unique généré par l'utilisateur. Ce code à usage unique est valable 1 heure.
         */
        post: operations["authenticateByOtp"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/senders/{sender_id}/authenticate_by_certificate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sauvegarde de la clé OTP
         * @description Permet d'enregistrer le code à 32 caractères. Ce code est valable 30 jours et permet de générer des hashs pour les envois lreq.
         */
        post: operations["authenticateByCertificate"];
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
        ErrorsDto: {
            errors?: components["schemas"]["ErrorDto"][];
        };
        ExpirationDateResponse: {
            expiration_date?: string;
        };
        /** @description Informations sur la dernière modification */
        ActionResource: {
            /** @description Login de l'utilisateur */
            user_login?: string;
            /** @description Date de l'action */
            date?: string;
        };
        SenderResponse: {
            /** @description Civilité de l'expéditeur */
            title: string;
            /** @description Type d'expéditeur */
            legal_status: string;
            /** @description Prénom de l'expéditeur */
            first_name: string;
            /** @description Nom de l'expéditeur */
            last_name: string;
            /**
             * @description Email de l'expéditeur
             * @example test@gmail.com
             */
            email: string;
            /** @description Nom de l'entreprise de l'expéditeur */
            company_name?: string;
            /** @description Siret de l'entreprise de l'expéditeur */
            company_siret?: string;
            /** @description Pays de l'expéditeur */
            country: string;
            /** @description Adresse de l'expéditeur */
            address1: string;
            /** @description Adresse (ligne 2) de l'expéditeur */
            address2?: string;
            /** @description Adresse (ligne 3) de l'expéditeur */
            address3?: string;
            /** @description Code postal de l'expéditeur */
            zip_code?: string;
            /** @description Ville de l'expéditeur */
            city: string;
            /** @description L'email de l'expéditeur est confirmé ou à confirmer. */
            email_validated?: boolean;
            /**
             * @description Notification de disponibilité d'une preueve de dépôt == > une notification e-mail est envoyée lorsqu'une preuve de dépôt est disponible pour un destinataire.
             * @default true
             */
            notify_deposit_proof: boolean;
            /**
             * @description Notification de disponibilité d'un accusé de récéption ==> une notification e-mail est envoyée lorsqu'un accusé de reception est disponible pour un destinataire.
             * @default true
             */
            notify_acknowledgement_of_receipt: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de non réclamation du courrier par le destinataire ==> une notification e-mail est envoyée lorsqu'une preuve de non réclamation est disponible pour un destinataire.
             * @default true
             */
            notify_not_claimed_proof: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de refus ==> une notification e-mail est envoyée lorsqu'une preuve de refus est disponible pour un destinataire.
             * @default true
             */
            notify_refused_proof: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de consentement ==> une notification e-mail est envoyée lorsqu'une preuve de consentement est disponible pour un destinataire.
             * @default false
             */
            notify_consent_proof: boolean;
            /**
             * @description Notification contenant la liste des LRE en attente ==> une notification e-mail est envoyée deux fois par semaine avec la liste des LRE en attente pour tous les destinataires.
             * @default false
             */
            notify_waiting_ar_answer: boolean;
            /** @description Id de l'expéditeur */
            id?: string;
            status?: components["schemas"]["StatusResource"];
            /** @description L'expediteur a demandé le rattachement de son compte au token Maileva */
            provider_grant_access?: boolean;
            created_by?: components["schemas"]["ActionResource"];
            modified_by?: components["schemas"]["ActionResource"];
            /** @description Code client Maileva */
            code_client?: string;
            tracking_number?: string;
            certificate_end_date?: string;
            has_certificate?: boolean;
            old_senders?: components["schemas"]["OldSenderResponse"][];
        };
        Paging: {
            prev?: string;
            next?: string;
            /** Format: int64 */
            total_results?: number;
        };
        SenderResponses: {
            senders?: components["schemas"]["SenderResponse"][];
            paging?: components["schemas"]["Paging"];
        };
        OldSenderResponse: {
            /** @description id du changement d'owner */
            id?: string;
            /**
             * Format: datetime
             * @description Date du changement d'owner
             * @example 2018-03-14T07:21:40.757Z
             */
            change_date?: string;
            /** @description Ancien user login */
            old_user_login?: string;
        };
        /**
         * @description Statut de validation de l'email expéditeur : <table border="1"> <tr><td>VALIDATED</td> <td>L'expéditeur est au statut validé, son compte est paramétré</td></tr> <tr><td>VALIDATING</td> <td>L'expéditeur est au statut en cours de validation, il dispose de 60 min pour cliquer sur le lien de vérification de son email pour que le paramétrage de son compte soit validé</td></tr> <tr><td>EXPIRED</td> <td>L'expéditeur est au statut expiré, le lien de vérification a expiré. L'expéditeur doit de nouveau paramétrer son compte</td></tr> <tr><td>ACCESS_GRANTING</td> <td>L'expéditeur est au statut en cours de rattachement au compte Maileva. L'adresse email de l'expéditeur est déjà connu du partenaire et l'expéditeur doit effectuer une action pour accepter de rattacher son compte expéditeur au compte Maileva</td></tr> </table>
         * @enum {string}
         */
        StatusResource: "VALIDATED" | "VALIDATING" | "EXPIRED" | "ACCESS_GRANTING";
        ChangeOwner: {
            /** @description Nouveau login */
            target_user_login?: string;
        };
        Certificate: {
            /**
             * @description Code à 32 caractères
             * @example KCCPMRYZ8CY9B6EHGF5H23HKLNOGBSPM
             */
            certificate?: string;
        };
        SenderResource: {
            /** @description Civilité de l'expéditeur */
            title: string;
            /** @description Type d'expéditeur */
            legal_status: string;
            /** @description Prénom de l'expéditeur */
            first_name: string;
            /** @description Nom de l'expéditeur */
            last_name: string;
            /**
             * @description Email de l'expéditeur
             * @example test@gmail.com
             */
            email: string;
            /** @description Nom de l'entreprise de l'expéditeur */
            company_name?: string;
            /** @description Siret de l'entreprise de l'expéditeur */
            company_siret?: string;
            /** @description Pays de l'expéditeur */
            country: string;
            /** @description Adresse de l'expéditeur */
            address1: string;
            /** @description Adresse (ligne 2) de l'expéditeur */
            address2?: string;
            /** @description Adresse (ligne 3) de l'expéditeur */
            address3?: string;
            /** @description Code postal de l'expéditeur */
            zip_code?: string;
            /** @description Ville de l'expéditeur */
            city: string;
            /** @description L'email de l'expéditeur est confirmé ou à confirmer. */
            email_validated?: boolean;
            /**
             * @description Notification de disponibilité d'une preueve de dépôt == > une notification e-mail est envoyée lorsqu'une preuve de dépôt est disponible pour un destinataire.
             * @default true
             */
            notify_deposit_proof: boolean;
            /**
             * @description Notification de disponibilité d'un accusé de récéption ==> une notification e-mail est envoyée lorsqu'un accusé de reception est disponible pour un destinataire.
             * @default true
             */
            notify_acknowledgement_of_receipt: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de non réclamation du courrier par le destinataire ==> une notification e-mail est envoyée lorsqu'une preuve de non réclamation est disponible pour un destinataire.
             * @default true
             */
            notify_not_claimed_proof: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de refus ==> une notification e-mail est envoyée lorsqu'une preuve de refus est disponible pour un destinataire.
             * @default true
             */
            notify_refused_proof: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de consentement ==> une notification e-mail est envoyée lorsqu'une preuve de consentement est disponible pour un destinataire.
             * @default false
             */
            notify_consent_proof: boolean;
            /**
             * @description Notification contenant la liste des LRE en attente ==> une notification e-mail est envoyée deux fois par semaine avec la liste des LRE en attente pour tous les destinataires.
             * @default false
             */
            notify_waiting_ar_answer: boolean;
        };
        SenderUpdate: {
            company_name?: string;
            company_siret?: string;
            country?: string;
            address1?: string;
            address2?: string;
            address3?: string;
            zip_code?: string;
            city?: string;
            /**
             * @description Notification de disponibilité d'une preueve de dépôt == > une notification e-mail est envoyée lorsqu'une preuve de dépôt est disponible pour un destinataire.
             * @default true
             */
            notify_deposit_proof: boolean;
            /**
             * @description Notification de disponibilité d'un accusé de récéption ==> une notification e-mail est envoyée lorsqu'un accusé de reception est disponible pour un destinataire.
             * @default true
             */
            notify_acknowledgement_of_receipt: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de non réclamation du courrier par le destinataire ==> une notification e-mail est envoyée lorsqu'une preuve de non réclamation est disponible pour un destinataire.
             * @default true
             */
            notify_not_claimed_proof: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de refus ==> une notification e-mail est envoyée lorsqu'une preuve de refus est disponible pour un destinataire.
             * @default true
             */
            notify_refused_proof: boolean;
            /**
             * @description Notification de disponibilité d'une preuve de consentement ==> une notification e-mail est envoyée lorsqu'une preuve de consentement est disponible pour un destinataire.
             * @default false
             */
            notify_consent_proof: boolean;
            /**
             * @description Notification contenant la liste des LRE en attente ==> une notification e-mail est envoyée deux fois par semaine avec la liste des LRE en attente pour tous les destinataires.
             * @default false
             */
            notify_waiting_ar_answer: boolean;
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
    createSender: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Nouvel expéditeur */
        requestBody: {
            content: {
                "application/json": components["schemas"]["SenderResource"];
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
                    "application/json": components["schemas"]["SenderResponse"];
                };
            };
            /** @description Accepted */
            202: {
                headers: {
                    /** @description url resource */
                    Location?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SenderResponse"];
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
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'expéditeur */
                sender_id: string;
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
                    "application/json": components["schemas"]["SenderResponse"];
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
                /** @description Identifiant de l'expéditeur */
                sender_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SenderUpdate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SenderUpdate"];
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
    changeOwner: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'expéditeur */
                sender_id: string;
            };
            cookie?: never;
        };
        /** @description Nouveau login utilisateur. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ChangeOwner"];
            };
        };
        responses: {
            /** @description Ok */
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
            /** @description Sender not found */
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
    linkemail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'expéditeur */
                sender_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
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
            /** @description Sender not found */
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
    orderOtp: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'expéditeur */
                sender_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
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
            /** @description Sender not found */
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
    revokeIdentity: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'expéditeur */
                sender_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
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
    authenticateByOtp: {
        parameters: {
            query: {
                /**
                 * @description code otp
                 * @example 123456
                 */
                otp_code: string;
            };
            header?: never;
            path: {
                /** @description Identifiant de l'expéditeur */
                sender_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExpirationDateResponse"];
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
            /** @description Sender not found */
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
    authenticateByCertificate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identifiant de l'expéditeur */
                sender_id: string;
            };
            cookie?: never;
        };
        /** @description Sauvegarde d'un certificat. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Certificate"];
            };
        };
        responses: {
            /** @description Ok */
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
            /** @description Sender not found */
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
