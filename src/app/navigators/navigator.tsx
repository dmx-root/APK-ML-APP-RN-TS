import {Navigator}                                    from '../../interfaces/navigatorInterface'
import {CURRENT_USER_1,CURRENT_USER_2,CURRENT_USER_3} from '../routes/rutes'
import {CURRENT_USER_4,CURRENT_USER_5}                from '../routes/rutes'
import {AdminContextProvider}                         from '../../contexts/adminContext';
import {ProcessesAdminContextProvider}                from '../../contexts/processesAdminContext';
import {ProductionContextProvider }                   from '../../contexts/productionContext';
import {BodegaContextProvider}                        from '../../contexts/bodegaContext';


export const navigators:Navigator={
    currentSessionProfile1:{
        userLabel:'Administrador',
        initialRoute:"Home",
        routes:CURRENT_USER_1,
        context:AdminContextProvider
        
    },
    currentSessionProfile2:{
        userLabel:'Administrador de Procesos',
        initialRoute:"Home",
        routes:CURRENT_USER_2,
        context:ProcessesAdminContextProvider

    },
    currentSessionProfile3:{
        userLabel:'Operario de Planta',
        initialRoute:'Home',
        routes:CURRENT_USER_3,
        context:ProductionContextProvider
        
    },
    currentSessionProfile4:{
        userLabel:'Operario de Bodega',
        initialRoute:'Home',
        routes:CURRENT_USER_4,
        context:BodegaContextProvider

    },
    currentSessionProfile5:{
        userLabel:'Invitado',
        initialRoute:'Home',
        routes:CURRENT_USER_5

    },
}