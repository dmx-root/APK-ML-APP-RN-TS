import { DetailProcessResponseInterface, OpDetail } from '../../../interfaces/services/ml_api/detailOpInteface';
import { OpInterface, allBasicOpResponseInterface } from '../../../interfaces/services/ml_api/opInterfaces';
import { statusApi }                                from '../../../interfaces/services/ml_api/apiResponse';
import { ConectionObjectRequest }                   from '../conection/conectionObjectRequest';

//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)

export class OpObjectRequest extends ConectionObjectRequest{

    async OpGet(uri:string):Promise<any>{
        try {
            const response = (await this.getData(uri,null)).data;

            if(response.statusCodeApi===1){
                const dataClear:Array<OpInterface>=response.data.map((element:any)=>{
                    return {
                        op:element.op,
                        referencia: element.ref,
                        ocrCantidad: element.cant_ocr,
                        opLotePlaneado: element.cant_planned,
                        opLoteCompletado: element.cant_completed,
                        opEstado: element.op_state,
                        opFechaAperturaProceso: element.op_dete_open_task,
                        opFechaCierreProceso: element.op_dete_close_task,
                        opFechaAperturaProcesoPlaneado: element.op_dete_open_planned,
                        opFechaCierreProcesoPlaneado: element.op_dete_close_planned
                    }
                });

                const basicInfoOpInterface:allBasicOpResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return basicInfoOpInterface;
            }
            
            const basicInfoOpInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return basicInfoOpInterface;
 
        } catch (error) {
            console.log(error)
            const basicInfoOpInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return basicInfoOpInterface;
        }
        
    }
    async DetailOpGet(uri:string,op:string):Promise<any>{
        try {
            const response = (await this.getData((uri+op),null)).data;

            if(response.statusCodeApi===1){
                const dataClear:Array<OpDetail>=response.data.map((element:any)=>{
                    return {
                        op:element.op,
                        referencia: element.ref,
                        ocrCantidad: element.cant_ocr,
                        opLotePlaneado: element.amount_planned_det_op,
                        opLoteCompletado: element.amount_completed_det_op,
                        opFechaAperturaProceso: null,
                        opFechaCierreProceso: null,
                        opFechaAperturaProcesoPlaneado: null,
                        opFechaCierreProcesoPlaneado: null,
                        colorEtiqueta:element.color_label,
                        colorCodigo: element.color_id,
                        talla: element.tll_id,
                        ean: element.ean_id
                    }
                });

                const basicInfoOpInterface:DetailProcessResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return basicInfoOpInterface;
            }
            
            const basicInfoOpInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return basicInfoOpInterface;
 
        } catch (error) {
            console.log(error)
            const basicInfoOpInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return basicInfoOpInterface;
        } 
    }
    async OpProductionGet(uri:string,documentId:string):Promise<any>{
        try {
            const response = (await this.getData((uri+documentId),null)).data;
            // console.log(response)
            if(response.statusCodeApi===1){
                const dataClear:Array<OpInterface>=response.data.map((element:any)=>{
                    return {
                        op:element.op,
                        referencia: element.ref,
                        ocrCantidad: element.cant_ocr,
                        opLotePlaneado: element.cant_planned,
                        opLoteCompletado: element.cant_completed,
                        opEstado: null,
                        opFechaAperturaProceso: element.op_dete_open_task,
                        opFechaCierreProceso: element.op_dete_close_task,
                        opFechaAperturaProcesoPlaneado: element.op_dete_open_planned,
                        opFechaCierreProcesoPlaneado: element.op_dete_close_planned
                    }
                });

                const basicInfoOpInterface:allBasicOpResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return basicInfoOpInterface;
            }
            
            const basicInfoOpInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return basicInfoOpInterface;
 
        } catch (error) {
            console.log(error)
            const basicInfoOpInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return basicInfoOpInterface;
        }
        
    }
    async OpProductionGetAll(uri:string):Promise<any>{
        try {
            const response = (await this.getData(uri,null)).data;
            // console.log(response)
            if(response.statusCodeApi===1){
                const dataClear:Array<OpInterface>=response.data.map((element:any)=>{
                    return {
                        op:element.op,
                        referencia: element.ref,
                        ocrCantidad: element.cant_ocr,
                        opLotePlaneado: element.cant_planned,
                        opLoteCompletado: element.cant_completed,
                        opEstado: null,
                        opFechaAperturaProceso: element.op_dete_open_task,
                        opFechaCierreProceso: element.op_dete_close_task,
                        opFechaAperturaProcesoPlaneado: element.op_dete_open_planned,
                        opFechaCierreProcesoPlaneado: element.op_dete_close_planned
                    }
                });

                const basicInfoOpInterface:allBasicOpResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return basicInfoOpInterface;
            }
            
            const basicInfoOpInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return basicInfoOpInterface;
 
        } catch (error) {
            console.log(error)
            const basicInfoOpInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return basicInfoOpInterface;
        }
    } 
}