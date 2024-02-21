import { AdminContextProvider }                             from '../contexts/adminContext';
import { BodegaContextProvider }                            from '../contexts/bodegaContext';
import { ProcessesAdminContextProvider }                    from '../contexts/processesAdminContext';
import { ProductionContextProvider }                        from '../contexts/productionContext';
import { ADMIN_ROUTES, PROCESSES_ROUTES, AUTH_ROUTES}       from './routes';
import { GUEST_ROUTES, PLANTA_ROUTES, FACTURACION_ROUTES}   from './routes';

export interface account{
    id:number,
    initialRoute:string,
    routes:any, 
    context:any
}

interface accountNavigators{
    [key: string]:account
}

export const accountNavigators:accountNavigators = {
    auth:{
        id:0,
        initialRoute:AUTH_ROUTES.LOGIN,
        routes:AUTH_ROUTES,
        context:null
    },
    admin:{
        id:1,
        initialRoute:ADMIN_ROUTES.HOME_OP_LIST,
        routes:ADMIN_ROUTES,
        context:AdminContextProvider
    },
    processesAdmin:{
        id:2,
        initialRoute:PROCESSES_ROUTES.HOME_OP_LIST,
        routes:PROCESSES_ROUTES,
        context:ProcessesAdminContextProvider
    },
    planta:{
        id:3,
        initialRoute:PLANTA_ROUTES.HOME_OP_LIST,
        routes:PLANTA_ROUTES,
        context:ProductionContextProvider
    },
    facturacion:{
        id:4,
        initialRoute:FACTURACION_ROUTES.HOME_OP_LIST,
        routes:FACTURACION_ROUTES,
        context:BodegaContextProvider
    },
    guest:{
        id:5,
        initialRoute:GUEST_ROUTES.HOME_OP_LIST,
        routes:GUEST_ROUTES,
        context:null
    },
}