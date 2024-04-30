//Doc 
//Este módulo permite listar las viastas a las que cada instancia de perfil tiene acceso

export const ADMIN_ROUTES = {  // Vistas para una sesión del perfil "Administrador de sistemas"
    HOME_OCR_LIST:'HomeOcr',
    HOME_OP_LIST:'HomeOp',
    HOME_MODULO_LIST:'HomeModulos',
    HOME_MODULO_REVISE:'HomeRevise',
    HOME_EMPLOYEER_LIST:'HomeEmployeers',
    INFO_DETAILS_OP:'InfoDetailOp',
    INFO_MODULO:'InfoModulo',
    INFO_REVISE:'InfoModuloRevise',
    INFO_USERS:'InfoUser',
    PRODUCTION:'Production',
    PROFILE:'Profile',
    LOGIN:'Login',
};

export const PROCESSES_ROUTES = {  // Vistas para una sesión del perfil "Administrador de proceso"
    HOME_OCR_LIST:'HomeOcr',
    HOME_OP_LIST:'HomeOp',
    HOME_MODULO_LIST:'HomeModulos',
    HOME_MODULO_REVISE:'HomeRevise',
    HOME_EMPLOYEER_LIST:'HomeEmployeers',
    INFO_DETAILS_OP:'InfoDetailOp',
    INFO_REVISE:'InfoModuloRevise',
    INFO_MODULO:'InfoModulo',
    PRODUCTION:'Production',
    PROFILE:'Profile',
    LOGIN:'Login',
};

export const PLANTA_ROUTES = {  // Vistas para una sesión del perfil "Operario de planta"
    HOME_OCR_LIST:'HomeOcr',
    HOME_OP_LIST:'HomeOp',
    HOME_MODULO_LIST:'HomeModulos',
    HOME_EMPLOYEER_LIST:'HomeEmployeers',
    INFO_DETAILS_OP:'InfoDetailOp',
    INFO_REVISE:'InfoModuloRevise',
    INFO_MODULO:'InfoModulo',
    PRODUCTION:'Production',
    PROFILE:'Profile',
    LOGIN:'Login',
};

export const FACTURACION_ROUTES = {  // Vistas para una sesión del perfil "Operario de facturación"

    HOME_OCR_LIST:'HomeOcr',
    HOME_OP_LIST:'HomeOp',
    HOME_MODULO_REVISE:'HomeRevise',
    INFO_DETAILS_OP:'InfoDetailOp',
    INFO_MODULO:'InfoModulo',
    INFO_REVISE:'InfoModuloRevise',
    PROFILE:'Profile',
    LOGIN:'Login',
};

export const GUEST_ROUTES={  // Vistas para una sesión del perfil "Invitado"
    HOME_OCR_LIST:'HomeOcr',
    HOME_OP_LIST:'HomeOp',
    HOME_MODULO_LIST:'HomeModulos',
    INFO_DETAILS_OP:'InfoDetailOp',
    INFO_MODULO:'InfoModulo',
    PROFILE:'Profile',
    LOGIN:'Login',
}

export const AUTH_ROUTES={  // Vistas para una sesión de instancia inicial
    LOGIN:'Login'
}