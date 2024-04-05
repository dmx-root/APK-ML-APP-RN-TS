import {statusApi} from './apiResponse';

export interface OpInterface{
    op:string,
    referencia: string,
    ocrCantidad: number,
    opLotePlaneado: number,
    opLoteCompletado: number,
    opEstado: boolean,
    opFechaAperturaProceso: null | Date,
    opFechaCierreProceso: null | Date,
    opFechaAperturaProcesoPlaneado: null | Date,
    opFechaCierreProcesoPlaneado: null | Date
}

export interface allBasicOpResponseInterface extends statusApi{
    data:Array<OpInterface>
}