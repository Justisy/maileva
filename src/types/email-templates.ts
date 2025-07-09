export interface paths {
    "/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Liste des templates d'email
         * @description Permet d'obtenir une liste des templates d'email.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Le premier élément à retourner */
                    start_index?: components["parameters"]["paging_start_index"];
                    /** @description Le nombre d'élément à retourner */
                    count?: components["parameters"]["paging_count"];
                    /** @description Champs, dans l'ordre, sur lesquels il y a un tri */
                    sort?: components["parameters"]["sort"];
                    /** @description Champs sur lesquels il y a un tri descendant */
                    desc?: components["parameters"]["desc"];
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
                        "application/json": components["schemas"]["templates_response"];
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
         * Création d'un template d'email
         * @description Permet de créer un template d'email.
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
                    "application/json": components["schemas"]["template_creation"];
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
                        "application/json": components["schemas"]["template_response"];
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
    "/templates/{template_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail d'un template
         * @description Permet de récupérer le détail d'un template à partir de son identifiant.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un template */
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
                    content: {
                        "application/json": components["schemas"]["template_response"];
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
         * Suppression d'un template
         * @description Permet de supprimer un template, à l'exception du template par defaut qui ne peut pas être supprimé.
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un template */
                    template_id: components["parameters"]["template_id"];
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
         * Modification partielle d'un template
         * @description Permet de modifier un template.
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un template */
                    template_id: components["parameters"]["template_id"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/merge-patch+json": components["schemas"]["template_update"];
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
                        "application/json": components["schemas"]["template_response"];
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
    "/templates/{template_id}/set_default": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attribution d'un caractère par défaut à un template
         * @description Permet de declarer un template comme etant le template par défaut pour une liste d'usages a la place du/des templates par défaut actuels
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un template */
                    template_id: components["parameters"]["template_id"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["usages_list_object"];
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
    "/templates/{template_id}/unset_default": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Suppression du caractère par défaut d'un template
         * @description Permet de declarer un template par defaut pour une liste d'usages comme etant template non par défaut.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identifiant d'un template */
                    template_id: components["parameters"]["template_id"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["usages_list_object"];
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
    "/templates/default_template/{usage}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Détail du template par défaut
         * @description Permet de récupérer le détail du template par défaut correspondant a un usage.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Usage */
                    usage: components["parameters"]["usage"];
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
                        "application/json": components["schemas"]["template_response"];
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Informations d'un template email */
        template_infos: {
            /**
             * @description Intitulé du template
             * @example Template clients Société XYZ
             */
            name?: string;
            /**
             * @description Nom libre de l'expéditeur de l'email
             * @example Jean DUPONT
             */
            from?: string;
            /**
             * @description Nom libre associé a l'adresse email de retour
             * @example Jean DUPONT
             */
            reply_to_name?: string;
            /**
             * Format: email
             * @description Adresse email de retour
             * @example jean.dupont@gmail.com
             */
            reply_to_email?: string;
            /**
             * @description Corps de l'email, en HTML
             * @example <h1>Veuillez trouver ci-joint votre facture {{invoice_number}}.</h1>
             */
            html_content?: string;
            /**
             * @description Corps de l'email, en texte
             * @example Veuillez trouver ci-joint votre facture {{invoice_number}}.
             */
            text_content?: string;
            /**
             * @description Objet de l'email contenant la facture
             * @example Votre facture {{invoice_number}} est disponible
             */
            subject?: string;
            template_variables?: components["schemas"]["template_variables"];
        };
        identifiable: {
            /**
             * Format: uuid
             * @description Identifiant du template
             * @example cf9eae90-ac38-4232-ab7d-7a185b3f19ac
             */
            readonly id: string;
        };
        auditable: {
            created_by: components["schemas"]["crud_operation"];
            modified_by?: components["schemas"]["crud_operation"];
        };
        /** @description Requete de création de template email */
        template_creation: WithRequired<components["schemas"]["template_infos"], "name" | "from" | "html_content" | "text_content" | "subject"> & {
            usages: components["schemas"]["usages_list"];
        };
        /** @description Requete de modification de template email */
        template_update: components["schemas"]["template_infos"] & {
            usages?: components["schemas"]["usages_list"];
        };
        /** @description template email */
        template_response: components["schemas"]["identifiable"] & WithRequired<components["schemas"]["template_infos"], "name" | "from" | "html_content" | "text_content" | "subject"> & WithRequired<components["schemas"]["auditable"], "created_by"> & {
            usages: components["schemas"]["template_usages_default"];
        };
        /** @description Liste des templates */
        templates_response: {
            templates: components["schemas"]["template_response"][];
            paging: components["schemas"]["paging_response"];
        };
        /**
         * @description Usage d'un envoi <br/> <table border="1">
         *       <tr bgcolor="lightgrey">
         *         <th>Code</th>
         *         <th>Description</th>
         *       </tr>
         *       <tr><td>INVOICE_EMAIL</td><td>Envoi d'une facture avec le mode d'envoi E-mail</td></tr>
         *       <tr><td>INVOICE_PORTAL</td><td>Envoi d'une facture avec le mode d'envoi portal</td></tr>
         *       <tr><td>NOTIFICATION</td><td>Envoi d'une notification</td></tr>
         *     </table>
         * @example INVOICE_EMAIL
         * @enum {string}
         */
        usage: "INVOICE_EMAIL" | "INVOICE_PORTAL" | "NOTIFICATION";
        /**
         * @description Liste d'usages
         * @example [
         *       "INVOICE_EMAIL",
         *       "NOTIFICATION"
         *     ]
         */
        usages_list: components["schemas"]["usage"][];
        /** @description Variables du template </br> Liste des variables disponibles pour les usages invoice_email et invoice_portal :</br> - recipient_company_name</br> - invoice_amount</br> - invoice_date</br> - invoice_number</br> - invoice_due_date</br> - invoice_type</br> - account_url (utilisée seulement pour l'usage invoice_portal et de façon obligatoire)</br> */
        template_variable: {
            /**
             * @description Nom de la variable, utilisé dans le template
             * @example invoice_number
             */
            key: string;
            /**
             * @description indique si la variable est obligatoire
             * @example true
             */
            mandatory: boolean;
            /**
             * @description La valeur a utiliser par défaut si la valeur de la variable n'est pas rensegnée
             * @example EZRE123123
             */
            default_value?: string;
            transcoding_mapping?: components["schemas"]["variable_mappings"];
        };
        /** @example [
         *       {
         *         "key": "invoice_number",
         *         "mandatory": true,
         *         "default_value": "EZRE123123"
         *       },
         *       {
         *         "key": "invoice_amount",
         *         "mandatory": false,
         *         "default_value": 0
         *       },
         *       {
         *         "key": "invoice_type",
         *         "mandatory": true,
         *         "transcoding_mapping": [
         *           {
         *             "key": "INVOICE",
         *             "value": "facture"
         *           },
         *           {
         *             "key": "CREDIT",
         *             "value": "avoir"
         *           }
         *         ]
         *       }
         *     ] */
        template_variables: components["schemas"]["template_variable"][];
        template_usages_default: components["schemas"]["template_usage_default"][];
        /** @description Definir l'usage du template et si il est le defaut template ou pas. */
        template_usage_default: {
            usage: components["schemas"]["usage"];
            /**
             * @description true si il s'agit d'un template par defaut, false sinon.
             * @default false
             * @example false
             */
            is_default: boolean;
        };
        /** @description décrire une opération de création ou de modification d'un objet */
        crud_operation: {
            /**
             * @description Login de l'utilisateur qui a réalisé l'opération
             * @example user_login
             */
            user_login?: string;
            /**
             * @description Id de l'utilisateur qui a réalisé l'opération
             * @example c27c8088-7bc7-4de4-80ff-5e5699ac116e
             */
            user_id?: string;
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
         * @description Type de contenu (HTML, TEXT ou SUBJECT)
         * @enum {string}
         */
        content_type: "HTML" | "TEXT" | "SUBJECT";
        usages_list_object: {
            usages: components["schemas"]["usages_list"];
        };
        /** @description Variables du template */
        variable_value: {
            /**
             * @description Nom de la variable, utilisé dans le template
             * @example invoice_number
             */
            key: string;
            /**
             * @description Valeur de la variable.
             * @example EZRE123123
             */
            value: string;
        };
        /** @example [
         *       {
         *         "key": "invoice_number",
         *         "value": "EZRE123123"
         *       },
         *       {
         *         "key": "invoice_due_date",
         *         "value": "10-10-2023"
         *       }
         *     ] */
        variables_values: components["schemas"]["variable_value"][];
        /** @description Mapping de valeurs a utiliser dans l'email associé a la variable */
        variable_mapping: {
            /**
             * @description Valeur originale
             * @example INVOICE
             */
            key: string;
            /**
             * @description Valeur associée
             * @example facture
             */
            value: string;
        };
        /** @example [
         *       {
         *         "key": "INVOICE",
         *         "value": "facture"
         *       },
         *       {
         *         "key": "CREDIT",
         *         "value": "avoir"
         *       }
         *     ] */
        variable_mappings: components["schemas"]["variable_mapping"][];
        preview_request_body: {
            content_type?: components["schemas"]["content_type"];
            variables_values?: components["schemas"]["variables_values"];
        };
        /** @description Liste d'erreurs */
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
             *
             *       <tr><td>ATTRIBUTE_MANDATORY</td><td>L'attribut est obligatoire. Le message de l'erreur fait référence à l'attribut concerné.</td></tr>
             *       <tr><td>ATTRIBUTE_WRONG_PARAMETER</td><td>L'attribut est incorrect. Le message de l'erreur fait référence à l'attribut concerné.</td></tr>
             *       <tr><td>DEFAULT_TEMPLATE_NOT_FOUND</td><td>Le template par défaut n'a pas été trouvé en utilisant l'identifiant fourni.</td></tr>
             *       <tr><td>DUPLICATE_TEMPLATE_VARIABLE</td><td>La variable doit être unique dans la liste des variables. Le message d'erreur fait référence à la variable concernée.</td></tr>
             *       <tr><td>DUPLICATE_TRANSCODING_MAPPING_KEY</td><td>La valeur du paramètre 'key' doit être unique dans le mapping de traduction de la variable. Le message d'erreur fait référence à la valeur du paramètre 'key'.</td></tr>
             *       <tr><td>DUPLICATE_USAGES_VALUE</td><td>Les valeurs du paramètre 'usage' doivent être différentes.</td></tr>
             *       <tr><td>EMPTY_ATTRIBUTE</td><td>L'attribut est vide. Le message de l'erreur fait référence à l'attribut concerné.</td></tr>
             *       <tr><td>EMPTY_REQUEST_BODY</td><td>Le body de la requête est vide.</td></tr>
             *       <tr><td>FORBIDDEN_INVOICE_PORTAL_AND_INVOICE_EMAIL</td><td>Les valeurs du paramètre 'usage' sont incompatibles.</td></tr>
             *       <tr><td>INVALID_ATTRIBUTE</td><td>L'attribut est invalide. Le message de l'erreur fait référence à l'attribut concerné.</td></tr>
             *       <tr><td>INVALID_TEMPLATE_VARIABLE_KEY</td><td>La valeur du paramètre 'key' est invalide. Le message de l'erreur fait référence à la valeur concernée.</td></tr>
             *       <tr><td>MANDATORY_NAME</td><td>Nom du template obligatoire.</td></tr>
             *       <tr><td>MANDATORY_FROM</td><td>Le nom de l'émetteur est obligatoire.</td></tr>
             *       <tr><td>MANDATORY_REPLY_TO</td><td>Adresses email de réponse obligatoire.</td></tr>
             *       <tr><td>MANDATORY_SUBJECT</td><td>Le nom est obligatoire.</td></tr>
             *       <tr><td>MANDATORY_BODY</td><td>Le corps de l'email est obligatoire.</td></tr>
             *       <tr><td>MANDATORY_FOOTER</td><td>La signature de l'email est obligatoire.</td></tr>
             *       <tr><td>MAX_TEMPLATE_NUMBER_EXEEDED</td><td>La limite du nombre de template autorisée a été atteinte.</td></tr>
             *       <tr><td>MISSING_TEMPLATE_VARIABLE</td><td>Une variable n'étant pas présente dans la liste template_variables a été utilisée. Le message d'erreur fait référence à la variable concernée.</td></tr>
             *       <tr><td>MISSING_TRANSCODING_MAPPING</td><td>Le mapping de traduction est obligatoire pour la variable. Le message d'erreur fait référence à la variable concernée.</td></tr>
             *       <tr><td>TEMPLATE_EXCEED_MAX_SIZE</td><td>La taille du template a dépassé la limite autorisée.</td></tr>
             *       <tr><td>TEMPLATE_NOT_FOUND</td><td>Le template n'a pas été trouvé en utilisant l'identifiant fourni.</td></tr>
             *       <tr><td>TEMPLATE_USAGES_NOT_FOUND</td><td>Les usages utilisés n'existent pas dans la liste des usages du template.</td></tr>
             *       <tr><td>TRANSCODING_MAPPING_KEY_WORD_NOT_FOUND</td><td>La valeur du paramètre 'key' dans le mapping de traduction n'a pas été trouvée pour la variable . Le message d'erreur fait référence à la variable et à la valeur du paramètre 'key' concernées.</td></tr>
             *       <tr><td>TRANCODING_MAPPING_NOT_AUTHORIZED</td><td>. L'utilisation d'un mapping de traduction n'est pas autorisée pour la variable. Le message d'erreur fait référence à la variable concernée.</td></tr>
             *       <tr><td>CONTACT_NOT_FOUND</td><td>Le contact n'a pas été trouvé en utilisant l'identifiant fourni.</td></tr>
             *       <tr><td>DEFAULT_TEMPLATE_CONNOT_BE_DELETED</td><td>Impossible de supprimer le template par défaut.</td></tr>
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
    };
    responses: never;
    parameters: {
        /** @description Identifiant d'un template */
        template_id: string;
        /** @description Identifiant du preview */
        preview_id: string;
        /** @description Usage */
        usage: components["schemas"]["usage"];
        /** @description Le premier élément à retourner */
        paging_start_index: number;
        /** @description Le nombre d'élément à retourner */
        paging_count: number;
        /** @description Champs, dans l'ordre, sur lesquels il y a un tri */
        sort: string;
        /** @description Champs sur lesquels il y a un tri descendant */
        desc: string;
        /** @description id du contrat */
        contract_id: string;
        /** @description Id client */
        client_id: string;
        /** @description id utilisateur */
        user_id: string;
        /** @description login */
        login: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export type operations = Record<string, never>;
