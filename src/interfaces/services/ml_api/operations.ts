import { statusApi } from "./apiResponse";


export interface OperationsInterfaces{
    entornoId:number,
    profileId:number,
    operacionEtiqueta:string,
    operacionId:number
}

export interface OperationsResponseApi extends statusApi{
    data:Array<OperationsInterfaces>
} 