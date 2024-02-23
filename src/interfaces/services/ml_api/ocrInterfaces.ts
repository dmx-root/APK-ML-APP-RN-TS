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
    registroFecha: Date,
    inicioOperacion: null| Date,
    finOperacion: null|Date,
    cantidadUnidades: number,
    registradoPorId: string,
    ocrState: boolean,
    anormalidadCodigo: null| string,
    revisadoPorId: string|null,
    revisadoFecha: Date | null,
    estadoActualProceso: string,
    estadoProceso: number,
    anormalidadEtiqueta: string,
    categoriaId: number,
    categoriaEtiqueta:string
}

export interface OcrProcessesResponseInterface extends statusApi{
    data:Array<OcrProcessesInterface>
}