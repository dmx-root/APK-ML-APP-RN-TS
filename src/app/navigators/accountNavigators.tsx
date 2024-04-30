import { ADMIN_HOME_ROUTES, 
        FACTURACION_HOME_ROUTES, 
        GUEST_HOME_ROUTES, 
        PLANTA_HOME_ROUTES, 
        PROCESSES_HOME_ROUTES }                             from '../home/homeRoutes';
import { AdminContextProvider }                             from '../../contexts/adminContext';
import { BodegaContextProvider }                            from '../../contexts/bodegaContext';
import { ProcessesAdminContextProvider }                    from '../../contexts/processesAdminContext';
import { ProductionContextProvider }                        from '../../contexts/productionContext';
import { ADMIN_ROUTES, PROCESSES_ROUTES, AUTH_ROUTES}       from '../routes/routes';
import { GUEST_ROUTES, PLANTA_ROUTES, FACTURACION_ROUTES}   from '../routes/routes';
import { account }                                          from '../../interfaces/app/account'

//  Doc 
// Este módulo tiene la finalidad de listar los recursos a los que tiene acceso cada sesión, tales como:
// initialRoute: Vista inicial vez sean renderizadas todas las vistas
// routes: Lista de vistas o de rutas a las que tiene acceso cada perfil
// context: Asignación de un contexto para cada sesión en específico
// home: Lista de vistas principales para cada sesión 

interface accountNavigators {
    [key: string]: account
}

export const accountNavigators: accountNavigators = {
    auth: {
        id: 0,
        initialRoute: AUTH_ROUTES.LOGIN,
        routes: AUTH_ROUTES,
        context: null,
        home: null,

    },
    admin: {
        id: 1,
        initialRoute: ADMIN_ROUTES.HOME_OCR_LIST,
        routes: ADMIN_ROUTES,
        context: AdminContextProvider,
        home: ADMIN_HOME_ROUTES
    },
    processesAdmin: {
        id: 2,
        initialRoute: PROCESSES_ROUTES.HOME_OCR_LIST,
        routes: PROCESSES_ROUTES,
        context: ProcessesAdminContextProvider,
        home: PROCESSES_HOME_ROUTES
    },
    planta: {
        id: 3,
        initialRoute: PLANTA_ROUTES.HOME_OCR_LIST,
        routes: PLANTA_ROUTES,
        context: ProductionContextProvider,
        home: PLANTA_HOME_ROUTES
    },
    facturacion: {
        id: 4,
        initialRoute: FACTURACION_ROUTES.HOME_OCR_LIST,
        routes: FACTURACION_ROUTES,
        context: BodegaContextProvider,
        home: FACTURACION_HOME_ROUTES
    },
    guest: {
        id: 5,
        initialRoute: GUEST_ROUTES.HOME_OCR_LIST,
        routes: GUEST_ROUTES,
        context: null,
        home: GUEST_HOME_ROUTES
    },
}