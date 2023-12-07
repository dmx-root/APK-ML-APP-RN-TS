
export interface CommonRoutes{
    HOME:string,
    PROFILE:string   
}

export interface AdminRoutes extends CommonRoutes{
    PRODUCTION:string
}

export interface ProcessesAdminRoutes extends CommonRoutes{
    PRODUCTION:string
}
export interface ProductionRoutes extends CommonRoutes{
    PRODUCTION:string
}
