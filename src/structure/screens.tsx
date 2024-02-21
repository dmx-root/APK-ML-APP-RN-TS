import { HomeEmployeer }            from '../views/homeEmployeers'
import { HomeModulos }              from '../views/homeModulo'
import { HomeOcr }                  from '../views/homeOcr'
import { HomeOP }                   from '../views/homeOp'
import { InformationDetailOp }      from '../views/informationDetailOp'
import { InformationModulo }        from '../views/informationModulo'
import { InformationUser }          from '../views/informationUser'
import { Login }                    from '../views/login'
import { Production }               from '../views/production'
import { Profile }                  from '../views/profile'
import {ADMIN_ROUTES}               from './routes'
import {AUTH_ROUTES}               from './routes'

export const SCREENS={
    [ADMIN_ROUTES.HOME_OP_LIST]:HomeOP,
    [ADMIN_ROUTES.HOME_OCR_LIST]:HomeOcr,
    [ADMIN_ROUTES.HOME_EMPLOYEER_LIST]:HomeEmployeer,
    [ADMIN_ROUTES.HOME_MODULO_LIST]:HomeModulos,
    [ADMIN_ROUTES.INFO_DETAILS_OP]:InformationDetailOp,
    [ADMIN_ROUTES.INFO_MODULO]:InformationModulo,
    [ADMIN_ROUTES.INFO_USERS]:InformationUser,
    [ADMIN_ROUTES.PRODUCTION]:Production,
    [ADMIN_ROUTES.PROFILE]:Profile,
    [AUTH_ROUTES.LOGIN]:Login,
    // [ADMIN_ROUTES.REVISE]:<></>, //crear vista para este elemento 
}