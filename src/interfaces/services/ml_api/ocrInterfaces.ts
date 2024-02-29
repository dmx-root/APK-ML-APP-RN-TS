import { statusApi } from './apiResponse'

export interface OcrProcessesInterface {
    op: string,
    referencia: string,
    colorId: string,
    tallaId: string,
    ean: string,
    colorEtiqueta: string,
    ocrId: number,
    moduloId: number,
    registroFecha: Date | string,
    inicioOperacion: null| Date | string,
    finOperacion: null|Date|String,
    cantidadUnidades: number,
    registradoPorId: string,
    ocrState: boolean,
    anormalidadCodigo: null| string,
    revisadoPorId: string|null,
    revisadoFecha: Date | null | string,
    estadoActualProceso: string,
    estadoProceso: number,
    anormalidadEtiqueta: string,
    categoriaId: number,
    categoriaEtiqueta:string
}

export interface OcrProcessesResponseInterface extends statusApi{
    data:Array<OcrProcessesInterface>
}