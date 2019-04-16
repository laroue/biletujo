

// French
'use strict';
var fr = function() {}
fr.code = 'fr';
fr.data = {
/****************************************/
Version:'&middot; v2.0.9 &middot;&nbsp;',
/****************************************/

GP_Wait: 'En attente du serveur... Si ce message persiste vérifiez votre connexion puis cliquez ici:',
GP_Wait_tran: 'Votre requête est actuellement en traitement (environ 30 sec.). Vous pouvez cliquer sur la flèche et continuer à utiliser l’application.',
ID_placeholder: 'Tapez une adresse publique ici (p.ex. 0x88b..)',
/* Navigation*/
NAV_AddWallet: 'Créer un compte',
NAV_OpenWallet: 'Importer un compte',
NAV_ViewWallet: 'Recevoir',
NAV_Transaction: 'Envoyer',
NAV_Limites: 'Compte',
NAV_Help: 'Aide',
NAV_Transactions: 'Transactions',
NAV_Contacts: 'Contacts',
NAV_Close: 'Verrouiller le compte',
NAV_OpenStorage: 'Ouvrir un compte',
NAV_Billing: 'Mouvements',
NAV_Exchange: 'Compte',
NAV_Global: 'Général',

FILE_pickWallet: 'Choisir un fichier de compte',
FILE_pickContact: 'Choisir un fichier de contacts',
FILE_pickMemo: 'Choisir un fichier de mémos',
FILE_selectedFile: 'Fichier sélectionné',
FILE_open: 'Choisir',
FILE_NoFile:'Aucun fichier disponible',


HELP_1: 'Aide Gestion des comptes',
HELP_2: 'Aide Contenu du compte',

PDF_Private_title: 'Votre Compte',
PDF_Private_private: 'Clef Privée:',

PDF_Tag_file:'Etiquettes',
PDF_Priv_file:'ClefPrivee',
PDF_Pub_file:'ClefPublique',
/* Generate Wallets */
GEN_Enter_Token: 'Veuillez saisir votre code d\'autorisation',
GEN_USE_BROWSER: 'Afin d\'avoir une copie sur plusieurs supports, nous vous invitons à utiliser un navigateur pour créer votre compte',
GEN_Scan: 'Scanner votre QRcode d\'autorisation',
OPEN_Paper_selected: 'Sauvegarde papier sélectionnée.', 
GEN_Token_validation: 'Valider le code d\'autorisation',
GEN_Token_validation_error: 'Merci de vérifier le code d\'autorisation, il est manquant ou incomplet.',
GEN_Token_validation_KO: 'Le serveur n\'est pas disponible ou le code d\'autorisation que vous avez saisi n\'est pas valide',
GEN_Cancel: 'Annuler la création',
GEN_pswd: 'Choisissez votre mot de passe (au moins 8 caractères, une lettre, un chiffre et un caractère spécial)',
GEN_Placeholder_psw: 'Ne PAS oublier ce mot de passe!',
GEN_Enrollment_KO: 'Le serveur n\'est pas disponible ou a refusé la création de votre compte.',
GEN_Enrollment_Error: 'Une erreur est survenue lors de la création de votre compte.',
GEN_Warning_1: 'Attention: Si vous oubliez ce mot de passe, les montants contenus dans ce compte seront perdus.',
GEN_Create_1: 'Créer mon compte',
GEN_Result: 'Votre compte a été créé.',
GEN_Warning_2: 'Attention: Si vous perdez votre clef privée, les montants contenus dans ce compte seront perdus.', 
GEN_OK: 'OK',
GEN_ConfirmCreate: 'Conditions d\'utilisation',
GEN_GenCondRead: 'J\'ai lu et j\'accepte les ',
GEN_GenCondLink: 'conditions d\'utilisation',
GEN_LostPass: 'J\'ai bien compris que si je perds mon mot de passe ou mon fichier de sauvegarde (clef privée), je ne serai plus en mesure d\'utiliser les montants liés à ce compte.',
GEN_Create: 'Créer',
GEN_No_config: 'Le code fournit ne contient pas de référence à un server. Merci de le vérifier.',
GEN_No_server: 'Le code fournit ne correspond à aucun server. Merci de le vérifier.',



/* Open Panel */
OPEN_Choose_bak: 'Sélectionner une sauvegarde (fichier de compte .dat)',
OPEN_Choose_file: 'Choisir un fichier...',
OPEN_Scan_back: 'Scan d\'une sauvegarde papier...',
OPEN_Enter_psw: 'Votre fichier est crypté, merci d\'entrer le mot de passe:',
OPEN_Placeholder_psw: 'Mot de passe',
OPEN_Access: 'Accéder à votre compte:',
OPEN_Open: 'Ouvrir le compte',

Acc_locked: 'Attention: ce compte est actuellement bloqué.',

/* View Wallet*/
VIEW_address: 'Votre compte',
VIEW_QR: 'QRcode de votre adresse publique:',
VIEW_Save_title: 'Sauvegarder votre compte:',
VIEW_Save: 'Fichier de votre clef privée (.dat)',
VIEW_print: 'QRcode contenant votre clef privée (.pdf)',
VIEW_print_adr: 'QRcode de votre adresse publique', 
VIEW_close_title: 'Verrouiller votre compte:',
VIEW_close: 'Verouiller',

VIEW_print_price:'Etiquettes',
TAG_Tag_generatio_title:'Créer des étiquettes avec votre adresse publique:',
TAG_prod_name:'Nom du produit',
TAG_Description:'Description du produit:',
TAG_amount:'Prix:',
TAG_Cancel:'Annuler',
TAG_Get:'Créer',

VIEW_Check_note:'Vérifier un billet',
BN_Check_Title:'Vérifier un billet:',
BN_Close:'Fermer',
BN_Check:'Vérifier',
BN_CheckingProgress:'Vérification en cours...',
BN_NotValid:'Cette addresse ne correspond pas à un billet valide.',
BN_Valid:'Cette addresse correspond à un billet valide de ',


VIEW_Delegation_Allowance: 'Procurations et Autorisations:',
VIEW_Delegate_btn: 'Procurations',
VIEW_Allowance_btn: 'Autorisations',
WIEW_WrongPass: 'Mot de passe erroné!',

/* Decrypt */
DCRY_Enter_psw: 'Compte verrouillé. Entrez votre mot de passe:',
DCRY_Placeholder_psw: 'Mot de passe',
DCRY_OK: 'OK',
DCRY_Close_title: 'Fermer le compte pour en changer:',
DCRY_Close_btn: 'Changer de compte',
DCRY_Close_Wrn: 'Attention! : Si vous fermez un compte sans avoir effectué une copie de sauvegarde, il sera perdu (ainsi que les montants qu\'il contient)',
DCRY_Close_conf: 'J\'ai une sauvegarde. Je veux fermer ce compte.',
DCRY_Close_cancel: 'Garder ce compte ouvert.',
DCRY_Missing_server: 'Il n\'y a pas de server associé à ce compte. Veuillez entrer votre code d\'autorisation. (Pensez à refaire une sauvegarde de ce compte)',

/*Transaction*/
TRAN_Address: 'Votre compte',
TRAN_Solde: 'Solde:',
TRAN_Dest: 'Destinataire:',
TRAN_PayShop: 'Payement vers un magasin:',
TRAN_ShopId: 'ID du magasin: ',
TRAN_txId: 'ID de la transaction: ',
TRAN_cancelShop: 'Annuler',

TRAN_Amount: 'Montant:',
TRAN_Send: 'Payer', 
TRAN_Confirm_text: 'Vous êtes en train d\'envoyer',
TRAN_To: 'à',
TRAN_Cancel: 'Annuler',
TRAN_Confirm: 'Envoyer',
TRAN_Scan: 'Scanner le QRcode ',
TRAN_ScanStart: 'Débuter le Scan',
TRAN_OK: 'OK',
TRAN_Enter_pass: 'Veuillez entrer votre mot de passe et confirmer le paiement',

TRAN_Request: 'Facturer',
TRAN_Confirm_text_request: 'Vous êtes en train de demander le paiement de',
TRAN_From: 'à',
TRAN_Enter_pass_request: 'Veuillez entrer votre mot de passe et confirmer la demande',
TRAN_executed_request_text:'Vous avez transmis la demande de paiement',

TRAN_Done: 'La transaction a été transmise et est en traitement',
TRAN_Wait: '(...)',
TRAN_Ongoing: 'Transaction en cours de traitement -',
TRAN_WrongPass: 'Mot de passe erroné!',
TRAN_executed_text: 'Vous avez transmis l\'ordre de payer',
TRAN_rejected_request_text: 'Vous avez refusé de payer',
TRAN_tans_id: 'Identifiant de la transaction:',
TRAN_NotPossible: 'Avoir insuffisant pour la transaction',
TRAN_SplitedTrans: 'Le paiement sera passé en plusieurs transactions',

TRAN_Origine: 'Origine:',
TRAN_choose_origine_btn:'Modifier',

TRAN_Choose_Origine:'Faire un paiement depuis:',
TRAN_MyAccount:'Ce compte',
TRAN_MyDelegations:'Un autre compte',
DELEG_pick:'Procurations',
DELEG_Lim:'Limite: ',
DELEG_delete:'&#x2718;',
TRAN_Choose:'Choisir',
TRAN_AskFrom:'Demander un versement à:',
TRAN_PAY_ASKED: 'Demandes de paiement:',

CT_Filter: 'Filtre',
CTC_export_mem:'&#x1f4be;',
TRA_Export:'Exporter les transactions',
TRA_Export_title:'Exporter les transactions:',
TRA_Export_date:'Date des transactions entre le',
TRA_Export_date_to:' et le ',
CVS_COL_id:'ID',
CVS_COL_date:'Date',
CVS_COL_hour:'Heure',
CVS_COL_from:'De',
CVS_COL_fromAdd:'De',
CVS_COL_to:'A',
CVS_COL_toAdd:'A',
CVS_COL_amount:'Montant reçu',
CVS_COL_amount_send:'Montant envoyé',
CVS_COL_curr:'Monnaie',
CVS_COL_memo:'Mémo.',
CVS_COL_tax:'Taxe',
CVS_COL_del:'Délégué',
CVS_COL_tr_id:'ID transaction',

CVS_COL_address: 'Compte',
CVS_COL_Code: 'Identification',
CVS_COL_InPlNb: 'Nb de pledge',
CVS_COL_InPlTot: 'Total pledge',

CVS_COL_InPerNaNb: 'Nb de transactions nant. reçues de personnes',
CVS_COL_InPerNaTot: 'Total nant. reçu de personnes',
CVS_COL_InPerCmNb: 'Nb de transactions crédit mutuel reçues de personnes',
CVS_COL_InPerCmTot: 'Total credit mutuel reçu de personnes',
CVS_COL_OutPerNaNb: 'Nb de transactions nant. envoyées à des personnes',
CVS_COL_OutPerNaTot: 'Total nant. envoyé à des personnes',
CVS_COL_OutPerCmNb: 'Nb de transactions crédit mutuel envoyées à des personnes',
CVS_COL_OutPerCmTot: 'Total crédit mutuel envoyé à des personnes',

CVS_COL_InProNaNb: 'Nb de transactions nant. reçues d\'entreprises',
CVS_COL_InProNaTot: 'Total credit nant. d\'entreprises',
CVS_COL_InProCmNb: 'Nb de transactions crédit mutuel reçues d\'entreprises',
CVS_COL_InProCmTot: 'Total credit mutuel reçu d\'entreprises',
CVS_COL_OutProNaNb: 'Nb de transactions nant. envoyées à des entreprises',
CVS_COL_OutProNaTot: 'Total nant. envoyé à des entreprises',
CVS_COL_OutProCmNb: 'Nb de transactions crédit mutuel envoyées à des entreprises',
CVS_COL_OutProCmTot: 'Total crédit mutuel envoyé à des entreprises',


OPT_title:'Options:',
OPT_record_password:'Se souvenir du mot de passe:',
OPT_zero:'jamais',
OPT_two_min:'2 min.',
OPT_five_min:'5 min.',
OPT_15_min:'15 min.',
OPT_hour:'une heure',
OPT_warning:'Attention! Si vous sauvegardez le mot de passe, une personne ayant accès à l\'application peut effectuer des paiements sans connaître votre mot de passe.',
OPT_Enter_pass:'Veuillez entrer votre mot de passe et confirmer la modification',

/* Exchange Office*/ 
EXC_Wrong_Acc_Type: 'Le compte choisi n\'as pas accès à cette page',
EXC_Account: 'Compte:',
EXC_balances: 'Solde du compte:',
EXC_Refresh: 'Actualiser',
EXC_AccStat: 'Status du compte:',
EXC_LockUnlock: 'Bloquer/ Activer le compte:',
EXC_LockStatus: 'Le compte est actuellement ',
EXC_Unlocked: 'actif',
EXC_Locked: 'bloqué',
EXC_UpdateLim: 'Mettre à jour',
EXC_Credit_1: 'Créditer des ',
EXC_Credit_2: ' sur le compte:', 
EXC_Credit_prefix: 'Créditer ',
EXC_CreditAccount: 'Créditer le compte',
EXC_GestionQR: 'Gestion des autorisation',

EXC_AccType: 'Type de compte:',
EXC_Account_Type_physical: 'Personne',
EXC_Account_Type_legal: 'Entreprise',
EXC_Account_Type_admin: 'Administrateur',
EXC_Update: 'Modifier le compte',
EXC_New_type_not_compatible_with_bal: 'Le solde balance n\'est pas compatible avec un compte de type Personne.',
EXC_lim_not_compatible_with_bal: 'Le solde balance n\'est pas compatible avec les nouvelles limites.',
EXC_Account_updated: 'L\'ordre de modification du compte a été transmis.',

EXC_ConfirmCreditAccountTitle: 'Confirmer le crédit sur le compte', 
EXC_CreditAmount: 'Vous créditez le compte de ',
EXC_Account_credited_with: 'Vous avez effectué un ordre de crédit sur ce compte de ',

EXC_cancel: 'Annuler',
EXC_confirm: 'Confirmer',


GLB_Connection_error: 'Impossible d\'établir une connexion. Vérifiez votre lien à internet et rafraichissez cette page.',
GLB_Loading_api_node: 'Selection du serveur (cette opération peut prendre quelques min.)...',
GLB_No_valid_nodes_reload_them: 'Aucun serveur valide dans la liste de configuration',
GLB_Relaoad_nodes: 'Recharger la liste',

GLB_Not_owner: 'Seul le compte détenteur du contrat a accès à cette page',

GLB_tot_p:'Masse monétaire:',

GLB_Taxes: 'Taxes sur les transactions:',
GLB_tax_amount: 'Montant de la taxe vers un compte privé',
GLB_tax_amount_leg: 'Montant de la taxe vers un compte d\'entreprise',
GLB_percent: ' pour 10000',
GLB_update_tax: 'Modifier la taxe',
GLB_Change_tax: 'Modifier la taxe vers un compte privé:',
GLB_NewTaxAmount: 'Nouveau taux de la taxe sur les transactions:',

GLB_Change_tax_leg: 'Modifier la taxe vers un compte d\'entreprise:',

GLB_cancel: 'Annuler',
GLB_confirm: 'Confirmer',
GLB_Tax_amount_not_updated: 'Erreur: l\'ordre n\'a pu être transmis.',
GLB_Tax_amount_updated: 'L\'ordre de modification du taux de la taxe a été transmis.',

GLB_tax_account: 'Récipiendaire des taxes',
GLB_update_tax_acc: 'Changer de compte',
GLB_Change_tax_Account: 'Nouveau récipiendaire des taxes:',
GLB_Tax_account_not_updated: 'Erreur: l\'ordre n\'a pu être transmis.',
GLB_Tax_account_updated: 'L\'ordre de modification du récipiendaire de la taxe a été transmis.',

GLB_Ownership: 'Détenteur du contrat:',
GLB_update_Own_acc: 'Modifier le détenteur',
GLB_Change_owner_Account: 'Nouveau détenteur du contrat:',
GLB_Owner_account_not_updated: 'Erreur: l\'ordre n\'a pu être transmis.',
GLB_Owner_account_updated: 'L\'ordre de modification du détenteur du contrat a été transmis.',

EXC_unknow_address: 'Adresse publique de compte invalide ou inconnue.',


BIL_Title: 'Mouvements sur les comptes',
BIL_Btn_getAdd:'A partir d\'un code',
BIL_GetAdd_title:'Chercher un compte à partir d\'un code',
BIL_code_input:'Code à rechercher:',
BIL_Code_placeholder:'Code',
BIL_SearchAdd:'Chercher',
BIL_Close:'Fermer',
BIL_SearchingCode:'Recherche en cours...',
BIL_Between: 'Pour la période entre le:',
BIL_and: ' et le ',
BIL_Btn_Export: 'Calculer les mouvements',
BIL_Account_list: 'Liste de comptes',
BIL_ExpList: '&#x1f4be;',
BIL_ImpList: '&#x1f4c2;',
BIL_AddAdd: '&#x271A;',
BIL_NoAdd: 'Pas de comptes.',
BIL_DelAdd: '&#x2718;',

BIL_Progress_title: 'Calcul en cours:',
BIL_Cancel: 'Annuler',

BIL_Import_file_title: 'Importer une lise de compte',
BIL_SelectFile: 'Choisir un Fichier',
BIL_AddressToImport: ' comptes trouvés',
BIL_ImportSave: 'Importer',

BIL_selectedFile: 'Ficher selectionné',

BIL_AddAddress_title: 'Ajouter un compte',
BIL_chooseAddress: 'Choisir le compte:',
BIL_Save: 'Ajouter',
BIL_AlreadyInList:'Le compte selectionné est déjà dans la liste.',

BIL_DelAddress_title: 'Voulez-vous supprimer ce compte de la liste?',
BIL_DelAllAddress_title: 'Voulez-vous vider la liste des comptes?',
BIL_RemoveAdd: 'Supprimer',
BIL_NoValidAddress: 'Ce fichier est invalide.',



/* Balance */

BAL_balances: 'Répartition:',

BAL_flem: 'Fond du Léman: ',

LIM_limites: 'Limites',
LIM_credit: 'Limite en positif:',
LIM_debit: 'Limite en négatif:',

/* Delegation */
DELEG_Delegate_Tab_Title:'Vos procurations:',
DELEG_CloseTab: 'Fermer',
DELEG_help: '?',
DELEG_add: '&#x271A;',
DELEG_noDeleg: 'Il n\'y a pas de procuration active.',
DELEG_next: '>',
DELEG_prev: '<',
DELEG_NoMore: 'Il n\'y a pas d\'autre procuration.',


DELEG_Delegate_Help_title:'A propos des procurations:',
DELEG_Delegate_Help_text:'Une procuration donne l\'autorisation à un tiers d\'effectuer des paiements en votre nom vers un autre compte. La limite d\'une procuration est la somme maximum qui peut être engagée par transaction.',
DELEG_Close:'Fermer',

DELEG_Add_Deleg:'Ajouter une procuration',
DELEG_chooseAddress:'Choisir une adresse publique:',
DELEG_set_Limit:'Choisir la limite:',
DELEG_Enter_pass:'Entrez votre mot de passe:',
DELEG_cancel_Deleg:'Annuler',
DELEG_Save_Deleg:'Confirmer',
DELEG_NotAcceptedAddress:'L\'adresse publique choisie n\'est pas valide pour une procuration.',
DELEG_InvalidDelegationLimit:'La limite de la procuration n\'est pas valide.',
DELEG_LimitAvailable: 'Limite: ',
DELEG_AmountBiggerThanDeleg:'Montant supérieur à la limite.',

Deleg_order_create_send:'L\'ordre de création de la procuration a été envoyé.',
Deleg_order_edit_send:'L\'ordre de modification de la procuration a été envoyé.',
Deleg_order_delete_send:'L\'ordre de suppression de la procuration a été envoyé.',


DELEG_Edit_Deleg:'Modifier la procuration',
DELEG_Address:'Pour l\'adresse publique:',

DELEG_Delete_Deleg:'Supprimer la procuration',
DELEG_Delete_cancel_Deleg:'Conserver',
DELEG_Delete_conf_Deleg:'Supprimer',

/* Allowance */
ALLOW_Allowance_Tab_Title:'Vos autorisations de débit:',
ALLOW_CloseTab: 'Fermer',
ALLOW_help: '?',
ALLOW_add: '&#x271A;',
ALLOW_noAllow: 'Il n\'y a pas d\'autorisation de débit active.',

ALLOW_Allowance_Help_title:'A propos des autorisations de débit:',
ALLOW_Allowance_Help_text:'Une autorisation de débit (débit direct) donne le droit à la personne autorisée de prélever une somme sur votre compte à hauteur du montant que vous avez spécifié. Au-delà de cette limite, vous recevrez une demande de confirmation pour le paiement demandé.',
ALLOW_Close:'Fermer',
ALLOW_Add_Allow:'Ajouter une autorisation de débit',
ALLOW_chooseAddress:'Choisir une adresse publique:',
ALLOW_set_Amount:'Saisir le montant:',
ALLOW_Enter_pass:'Entrez votre mot de passe:',
ALLOW_cancel_Allowance:'Annuler',
ALLOW_Save_Allowance:'Confirmer',

ALLOW_Edit_Allowance:'Modifier l\'autorisation de débit',
ALLOW_Address:'Pour l\'adresse publique:',

ALLOW_Delete_Allowance:'Supprimer l\'autorisation de débit',
ALLOW_Delete_cancel_Allowance:'Conserver',
ALLOW_Delete_conf_Allowance:'Supprimer',

ALLOW_NotAcceptedAddress:'L\'adresse publique choisie n\'est pas valide pour une autorisation de débit.',
ALLOW_InvalidDelegationLimit:'Le montant de l\'autorisation n\'est pas valide.',

ALLOW_order_create_send:'L\'ordre de création de l\'autorisation a été envoyé.',
ALLOW_order_edit_send:'L\'ordre de modification de l\'autorisation a été envoyé.',
ALLOW_order_delete_send:'L\'ordre de suppression de l\'autorisation a été envoyé.',

Allow_NoMore: 'Aucune autre autorisation.',

/* List des Transactions*/
TRA_Transactions: 'Vos transactions:',
TRA_Got: 'Reçu ',
TRA_InDateOf: ' en date du ',
TRA_From: ' de ',
TRA_Paid: 'Versé ',
TRA_To: ' à ',
TRA_Ammount: 'Montant/date',
TRA_add: '>',
TRA_prev: '<',
TRA_next: '>',
TRA_check: '&#x2714;',
TRA_NoTrans: 'Aucune transaction associée à ce compte.',
TRA_NoMore: 'Aucune autre transaction.',
TRA_Refresh: '&#x21BA;',
TRA_Watch: '&#x1f514;',
TRA_details_title: 'Détails de la transaction:',
TRA_details_block: 'Faisant partie du block: ',
TRA_details_date: 'Date:',
TRA_details_amount: 'Montant transféré:',
TRA_Close: 'Fermer',
TRA_memo_title: 'Mémo:',
TRA_no_valid_memo: 'Ce fichier ne contient pas de mémo valide.',
TRA_Import_title: 'Importer des mémos',
TRA_SelectFile: 'Choisir un fichier',
TRA_Import_FileNumber: ' Mémos dans le fichier',
TRA_Import_localNumber:' Mémos locaux',
TRA_Import_Conflict: ' Mémos communs',
TRA_Import_merge: 'Import des mémos communs: ',
TRA_Merge_their: 'Remplacer par ceux du fichier',
TRA_Merge_mine: 'Conserver les mémos locaux ',
TRA_handle_memo: 'Exporter les transactions ',
TRA_Number: 'Nombre de transactions par page:', 
TRA_Date: 'Date',
TRA_TranId: 'Identifiant',
TRA_Memo: 'Mémo',
TRA_Part: 'Partenaire',
TRA_tot_column: 'Totaux:',
TRA_new_tra: 'Nouvelle transaction',
TRA_not_found: 'Aucune transaction valide ne correspond à ce QRcode', 
TRA_NotValidCode: 'QRcode invalide!',

TRA_ToApprove: 'A approuver',
TRA_PendingRequest: 'Mes demandes',
TRA_CloseTab: 'Fermer',

TRA_pay: 'Payer',
TRA_reject: 'Refuser',
TRAN_reject_text: 'Vous êtes en train de refuser une demande de',
TRAN_asked_by: 'formulée par',
TRAN_Enter_pass_reject:'Veuillez entrer votre mot de passe et confirmer votre refus',
TRAN_Keep: 'Annuler',
TRAN_Reject: 'Confirmer',

TRA_Approval_Tab_Title: 'Demandes de paiement',
TRA_NoMoreApproval: 'Aucune autre demande',
TRA_Approval_Help_title:'A propos des demandes de paiement',
TRA_Approval_Help_text: 'Cette page liste les demandes de paiement qui vous sont adressées et que vous n\'avez pas encore traitées.\n Une demande de paiement est générée: \n 1. soit lorsqu\'un utilisateur demande un versement de votre part vers son compte (facture), \n 2. soit en cas d’autorisation de votre part, lorsque le montant demandé dépasse celui de l\'autorisation. \n Vous pouvez refuser la transaction: celle-ci disparaît alors de la liste. Si vous acceptez la demande, le paiement est effectué, le montant correspondant est débité de votre compte et la transaction apparaît (une fois traitée) dans la liste des transactions.',

TRA_Pending_Tab_Title: 'Mes demandes de paiement',
TRA_NoMorePending: 'Aucune autre demande',
TRA_NoMoreAccepted: 'Aucune autre demande',
TRA_NoMoreRejected: 'Aucune autre demande rejetée',
TRA_Pending_Help_title:'A propos de mes demandes',
TRA_Pending_Help_text: 'Cette page énumère les demandes de paiement que vous avez adressées à des tiers. Vous y trouverez l\'état de vos demandes.',
TRA_Accepted_dissmissed:'L\'ordre de cacher cette information a été envoyé.',
TRA_Request_Rejected: 'L\'ordre de refuser la demande de paiement a été envoyé.',
TRA_Request_Payed: 'Votre ordre de paiement a été envoyé.',




/* Contacts */
CTC_yourContacts: 'Vos contacts:',
CTC_noContacts: 'Aucun contact.',
CTC_edit: '&#x270E;',
CTC_editName: 'Modifier le nom du contact',
CTC_editNameCancel: 'Annuler',
CTC_editNameSave: 'Confirmer',
CTC_delete: '&#x2718;',
CTC_confirmDelete: 'Supprimer le contact',
CTC_deleteCancel: 'Conserver',
CTC_deleteConfirm: 'Confirmer',

CTC_confirmAdd: 'Ajouter cette adresse publique à vos contacts',
CTC_withName: 'Choisissez son nom:',
CTC_addConfirm: 'Ajouter',
CTC_AlreadyAdded: 'Cette adresse publique fait déjà partie de vos contacts',
CTC_updateName: 'Voulez-vous modifier son nom?',
CTC_addCancel: 'Annuler',
CTC_updateConfirm: 'Confirmer',


CTC_add: '&#x271A;',

CTC_Tooltip_Export: 'Exporter',
CTC_Tooltip_Ajout: 'Ajouter',
CTC_Tooltip_Rafraichir:'Rafraichir',
CTC_Tooltip_verify: 'Vérifier une transaction',
CTC_Tooltip_notify: 'Avertir quand une nouvelle transaction arrive',

CTC_Add_ctc: 'Ajouter un contact',
CTC_chooseAddress: 'Choisir une adresse publique:',
CTC_chooseName: 'Choisir un nom pour le contact:',
CTC_addNameCancel: 'Annuler',
CTC_addNameSave: 'Enregistrer',

CTC_pick: 'Contacts',
CTC_pickContact: 'Choisir un contact',
CTC_cancelChoose: 'Annuler',
CTC_ConfirmChoose: 'Confirmer',

CTC_NotSameCurrTitle: 'Monnaie Incompatible',
CTC_NotSameCurrTxt: 'Ce contact est associé à une autre monnaie que votre compte. Il ne peut donc pas être choisi comme destinataire d\'un payement.',

STR_yourWallets: 'Vos comptes',
STR_forget: '&#x2718;',
STR_editName: 'Assigner un nom au compte',
STR_WarningBrowser: 'Vous utilisez un Navigateur Web',
STR_WarningQuestion: 'Attention: cet ordinateur est-il le vôtre?',
STR_No: 'Non',
STR_Yes: 'Oui',
STR_logout: 'Pour votre sécurité, une fois votre session terminée veuillez: \n1. Verrouiller votre compte et revenir sur cette page. \n2. Vous assurer que vous avez un fichier de sauvegarde de votre compte sur un autre support que le disque dur de cet ordinateur. \n3. Eliminer les copies du fichier de sauvegarde de cet ordinateur (si vous avez sauvegardé votre compte durant cette session, vérifiez le dossier "Téléchargement"). \n4. Vider la mémoire du navigateur en cliquant sur le bouton ci-dessous. \n5. Vider le cache du navigateur.',
STR_Clear: 'Vider la mémoire',
STR_NoWallet: 'Pas de compte',
STR_confirmDelete: 'Supprimer ce compte de la mémoire',
STR_warning: 'Attention vous devez conserver un fichier de sauvegarde pour pouvoir réouvrir votre compte. Si ce n\'est pas déjà fait vous pouvez faire une sauvegarde ci-dessous',
STR_Backup: 'Faire une sauvegarde du compte',
STR_forgetConfirm: 'Supprimer',

STR_Lock_wallet_title: 'Verrouiller votre compte',
STR_Lock_wallet: 'Verrouiller',
STR_Switch_title: 'Ouvrir un autre compte',
STR_LockCancel: 'Annuler',
/********************************************************/

/* Error Messages */
ERROR_1: 'Veuillez entrer un montant valide.',
ERROR_2: 'Votre mot de passe doit faire au moins 8 caractères. Il doit contenir au minimum une lettre, un chiffre et un caractère spécial',
ERROR_3: 'Désolé! Notre service ne permet pas de gérer ce type de fichier de compte. ',
ERROR_4: 'Ceci n\'est pas un fichier de compte. ',
ERROR_5: 'Cette unité n\'existe pas, merci d\'utiliser une des unités suivantes ',
ERROR_6: 'Adresse invalide. ',
ERROR_7: 'Mot de passe invalide. ',
ERROR_8: 'Montant invalide. ',
ERROR_9: 'Limite de gaz invalide. ',
ERROR_10: 'Valeur des données invalide. ',
ERROR_11: 'Montant de gaz invalide. ',
ERROR_12: 'Nonce invalide. ',
ERROR_13: 'Transaction signée invalide. ',
ERROR_14: 'Un compte avec ce nom existe déjà. ',
ERROR_15: 'Compte non trouvé. ',
ERROR_16: 'Il semble qu\'aucune proposition n\'existe encore avec cet identifiant ou qu\'il y ait eu une erreur lors de la consultation de cette proposition. ',
ERROR_17: 'Un compte avec cette adresse existe déjà. Merci de consulter la page listant vos comptes. ',
ERROR_18: 'Il vous faut au moins 0.001 ether sur votre compte pour couvrir les coûts du gaz. Ajoutez des ether et réessayez. ',
ERROR_19: 'Tout le gaz serait consommé lors de cette transaction. Cela signifie que vous avez déjà voté pour cette proposition ou que la période du débat est terminée.',
ERROR_20: 'Symbole invalide',
SUCCESS_1: 'Adresse valide',
SUCCESS_2: 'Compte déchiffré avec succès',
SUCCESS_3: 'Transaction envoyée. Identifiant de transaction: ',
SUCCESS_4: 'Votre compte a été ajouté avec succès: ',
SUCCESS_5: 'Vous avez voté avec succès. Merci d\'être un participant actif à The DAO.',
SUCCESS_6: 'Fichier sélectionné: ',

/* Geth Error Messages */
GETH_InvalidSender: 'Expéditeur invalide',
GETH_Nonce: 'Nonce trop bas',
GETH_Cheap: 'Prix du gaz trop bas pour être accepté',
GETH_Balance: 'Solde insuffisant',
GETH_NonExistentAccount: 'Compte inexistant ou solde du compte trop bas',
GETH_InsufficientFunds: 'Fonds insuffisants pour gaz * prix + valeur',
GETH_IntrinsicGas: 'Gaz intrinsèque trop bas',
GETH_GasLimit: 'Limite en gaz dépassée',
GETH_NegativeValue: 'Valeur négative',

};

module.exports = fr;




