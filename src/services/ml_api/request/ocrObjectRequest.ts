import { OcrProcessesInterface, OcrProcessesResponseInterface } from '../../../interfaces/services/ml_api/ocrInterfaces';
import { statusApi }                                            from '../../../interfaces/services/ml_api/apiResponse';
import {ConectionObjectRequest}                                 from '../conection/conectionObjectRequest';

//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)

export class OcrObjectRequest extends ConectionObjectRequest{
    async OcrProcessGet(uri:string):Promise<any>{
        try {
            const response = (await this.getData(uri,null)).data;

            if(response.statusCodeApi===1){
                const dataClear:Array<OcrProcessesInterface>=response.data.map((element:any)=>{
                    return {
                            op: element.op,
                            referencia: element.ref,
                            colorId: element.color_id,
                            tallaId: element.talla_id,
                            ean: element.ean_id,
                            colorEtiqueta: element.color_label,
                            ocrId: element.ocr_id,
                            moduloId: element.mdl_id,
                            registroFecha: element.dete_creation,
                            inicioOperacion: element.start_operation,
                            finOperacion: element.finish_operation,
                            cantidadUnidades: element.units_cant,
                            registradoPorId: element.register_by_id,
                            ocrState: element.ocr_state,
                            anormalidadCodigo:element.anm_cod,
                            revisadoPorId: element.check_in_by,
                            revisadoFecha: element.check_in_date,
                            estadoActualProceso:element.process_label,
                            estadoProceso: element.prc_state,
                            anormalidadEtiqueta:element.anomaly_label,
                            categoriaId: element.ctg_id,
                            categoriaEtiqueta: element.ctg_label
                    }
                });

                const ocrProcessInterface:OcrProcessesResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return ocrProcessInterface;
            }
            
            const ocrProcessInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return ocrProcessInterface;
 
        } catch (error) {
            console.log(error)
            const ocrProcessInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return ocrProcessInterface;
        }
        
    }
    async OcrProductionGet(uri:string,documentId:string):Promise<any>{
        try {
            const response = (await this.getData((uri+documentId),null)).data;
            // console.log(response)
            if(response.statusCodeApi===1){
                const dataClear:Array<OcrProcessesInterface>=response.data.map((element:any)=>{
                    return {
                            op: element.op,
                            referencia: element.ref,
                            colorId: element.color_id,
                            tallaId: element.talla_id,
                            ean: element.ean_id,
                            colorEtiqueta: element.color_label,
                            ocrId: element.ocr_id,
                            moduloId: element.mdl_id,
                            registroFecha: element.dete_creation,
                            inicioOperacion: element.start_operation,
                            finOperacion: element.finish_operation,
                            cantidadUnidades: element.units_cant,
                            registradoPorId: element.register_by_id,
                            ocrState: element.ocr_state,
                            anormalidadCodigo:element.anm_cod,
                            revisadoPorId: element.check_in_by,
                            revisadoFecha: element.check_in_date,
                            estadoActualProceso:element.process_label,
                            estadoProceso: element.prc_state,
                            anormalidadEtiqueta:element.anomaly_label,
                            categoriaId: element.ctg_id,
                            categoriaEtiqueta: element.ctg_label
                    }
                });

                const ocrProcessInterface:OcrProcessesResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return ocrProcessInterface;
            }
            
            const ocrProcessInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return ocrProcessInterface;
 
        } catch (error) {
            console.log(error)
            const ocrProcessInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return ocrProcessInterface;
        }
    }
    async OcrProductionGetByOP(uri:string,{op,color,talla}:{op:string,color:string,talla:string}):Promise<any>{
        try {
            const response = (await this.getData(uri,{op,color,talla})).data;
            if(response.statusCodeApi===1){
                const dataClear:Array<OcrProcessesInterface>=response.data.map((element:any)=>{
                    return {
                            op: element.op,
                            referencia: element.ref,
                            colorId: element.color_id,
                            tallaId: element.talla_id,
                            ean: element.ean_id,
                            colorEtiqueta: element.color_label,
                            ocrId: element.ocr_id,
                            moduloId: element.mdl_id,
                            registroFecha: element.dete_creation,
                            inicioOperacion: element.start_operation,
                            finOperacion: element.finish_operation,
                            cantidadUnidades: element.units_cant,
                            registradoPorId: element.register_by_id,
                            ocrState: element.ocr_state,
                            anormalidadCodigo:element.anm_cod,
                            revisadoPorId: element.check_in_by,
                            revisadoFecha: element.check_in_date,
                            estadoActualProceso:element.process_label,
                            estadoProceso: element.prc_state,
                            anormalidadEtiqueta:element.anomaly_label,
                            categoriaId: element.ctg_id,
                            categoriaEtiqueta: element.ctg_label
                    }
                });

                const ocrProcessInterface:OcrProcessesResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return ocrProcessInterface;
            }
            
            const ocrProcessInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return ocrProcessInterface;
 
        } catch (error) {
            console.log(error)
            const ocrProcessInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return ocrProcessInterface;
        }
    }
    async OcrProductionGetByModulo(uri:string,moduloId:string):Promise<any>{
        try {
            const response = (await this.getData((uri+moduloId),null)).data;
            // console.log(response.data.ocrList)
            if(response.statusCodeApi===1){
                const dataClear:Array<OcrProcessesInterface>=response.data.ocrList.map((element:any)=>{
                    return {
                        op: element.op,
                        referencia: element.ref,
                        colorId: element.color_id,
                        tallaId: element.talla_id,
                        ean: element.ean_id,
                        colorEtiqueta: element.color_label,
                        ocrId: element.ocr_id,
                        moduloId: element.mdl_id,
                        registroFecha: element.dete_creation,
                        inicioOperacion: element.start_operation,
                        finOperacion: element.finish_operation,
                        cantidadUnidades: element.units_cant,
                        registradoPorId: element.register_by_id,
                        ocrState: element.ocr_state,
                        anormalidadCodigo:element.anm_cod,
                        revisadoPorId: element.check_in_by,
                        revisadoFecha: element.check_in_date,
                        estadoActualProceso:element.process_label,
                        estadoProceso: element.prc_state,
                        anormalidadEtiqueta:element.anomaly_label,
                        categoriaId: element.ctg_id,
                        categoriaEtiqueta: element.ctg_label
                    }
                });

                const ocrProcessInterface:OcrProcessesResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return ocrProcessInterface;
            }
            
            const ocrProcessInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return ocrProcessInterface;
 
        } catch (error) {
            console.log(error)
            const ocrProcessInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return ocrProcessInterface;
        }
    }
}