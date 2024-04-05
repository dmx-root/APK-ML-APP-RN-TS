import {statusApi} from './apiResponse'

export interface OpDetail {
    op:string,
    referencia: string,
    ocrCantidad: number,
    opLotePlaneado: number,
    opLoteCompletado: number,
    opLoteRestante: number,
    colorEtiqueta:string,
    colorCodigo: string,
    tallaId:number,
    talla: string,
    ean: string,
    opFechaAperturaProceso:null|Date,
    opFechaCierreProceso: null|Date,
    opFechaAperturaProcesoPlaneado:null|Date,
    opFechaCierreProcesoPlaneado: null|Date,

}

export interface DetailProcessResponseInterface extends statusApi{
    data:Array<OpDetail>
}