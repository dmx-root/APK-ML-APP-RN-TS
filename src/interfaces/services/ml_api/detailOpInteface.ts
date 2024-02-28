import {statusApi} from './apiResponse'

export interface OpDetail {
    op:string,
    referencia: string,
    ocrCantidad: number,
    opLotePlaneado: number,
    opLoteCompletado: number,
    opFechaAperturaProceso:null|Date,
    opFechaCierreProceso: null|Date,
    opFechaAperturaProcesoPlaneado:null|Date,
    opFechaCierreProcesoPlaneado: null|Date
    colorEtiqueta:string,
    colorCodigo: string,
    talla: string,
    ean: string
}

export interface DetailProcessResponseInterface extends statusApi{
    data:Array<OpDetail>
}