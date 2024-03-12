export interface OperationInterface{
    inicioOperacion: Date|string,
    finOperacion: Date|string,
    registradoPor: string,
    moduloId: number,
    op: string,
    colorId:string,
    colorEtiqueta:string,
    refererncia: string,
    tallaId: string,
    ean: string,
    cantidad: number,
    eventualidadId: null | string,
    categoria: number,
    fechaRegistro: Date | string,
}

export const newOperation: OperationInterface={
    inicioOperacion:'',
    finOperacion:'',
    registradoPor:'',
    moduloId:0,
    op:'',
    colorId:'',
    colorEtiqueta:'',
    refererncia:'',
    tallaId:'',
    ean:'',
    cantidad:0,
    eventualidadId:null,
    categoria:0,
    fechaRegistro:''
}