import { statusApi } from './apiResponse'

export interface OcrProcessesInterface {
    op: string,
    referencia: string,
    colorId: string,
    tallaId: number,
    tallaEtiqueta: string,
    ean: string,
    colorEtiqueta: string,
    ocrId: number,
    moduloId: number,
    moduloEtiqueta: string,
    registroFecha: Date | string,
    inicioOperacion: null| Date | string,
    finOperacion: null|Date|String,
    cantidadUnidades: number,
    registradoPorId: string,
    registradoPorNombre: string,
    ocrState: boolean,
    anormalidadCodigo: null| string,
    revisadoPorId: string|null,
    revisadoporNombre: string | null,
    revisadoFecha: Date | null | string,
    estadoActualProceso: string,
    estadoProceso: number,
    anormalidadEtiqueta: string,
    categoriaId: number,
    categoriaEtiqueta:string,

}

export interface OperationInformationInterface {
        inicioOperacion: Date | string,
        finOperacion: Date | String,
        registradoPorId: string,
        moduloId: number,
        cantidadUnidades: number,
        colorId: string,
        tallaId: string,
        op: string,
        anormalidadCodigo?: string,
        categoriaId: number,
}

export interface OcrProcessesResponseInterface extends statusApi{
    data:Array<OcrProcessesInterface>
}
