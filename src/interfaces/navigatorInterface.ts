import {CommonRoutes,AdminRoutes,ProcessesAdminRoutes,ProductionRoutes} from './routesInterface'
import {FC,ReactNode} from 'react'

interface AdminContextProps {
    children: ReactNode;
  }
interface ProcessesAdminContextProps{
    children:ReactNode
}
interface ProductionContextProps{
    children:ReactNode
}
interface BodegaContextProps{
    children:ReactNode
}

interface CurrentUser{
    userLabel:string,
    initialRoute:string,
}

interface CurrentUser1 extends CurrentUser{
    routes:AdminRoutes,
    context:FC<AdminContextProps>
}
interface CurrentUser2 extends CurrentUser{
    routes:ProcessesAdminRoutes,
    context:FC<ProcessesAdminContextProps>
}
interface CurrentUser3 extends CurrentUser{
    routes:ProductionRoutes,
    context:FC<ProductionContextProps>
}
interface CurrentUser4 extends CurrentUser{
    routes:CommonRoutes,
    context:FC<BodegaContextProps>
}
interface CurrentUser5 extends CurrentUser{
    routes:CommonRoutes
}

export interface Navigator{
    currentSessionProfile1:CurrentUser1,
    currentSessionProfile2:CurrentUser2,
    currentSessionProfile3:CurrentUser3,
    currentSessionProfile4:CurrentUser4,
    currentSessionProfile5:CurrentUser5
}
