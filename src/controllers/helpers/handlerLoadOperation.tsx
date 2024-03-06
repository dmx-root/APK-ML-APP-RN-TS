import { OperationInterface, newOperation } from "../../interfaces/view/production";

export const handlerLoadOperation:(dataForm:any)=>OperationInterface = (dataForm:any) => {
    
    const operationData: OperationInterface={
        ...newOperation,
        op:dataForm?.['opType']+dataForm?.['op'],
        moduloId:dataForm?.['modulo'],
        inicioOperacion:new Date().toLocaleTimeString(),
        fechaRegistro:new Date().toLocaleDateString(),
        registradoPor:'1146441925'
    }
    return operationData;
}