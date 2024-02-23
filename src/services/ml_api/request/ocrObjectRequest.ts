import { statusApi }                                from '../../../interfaces/services/ml_api/apiResponse';
import { OcrProcessesInterface, OcrProcessesResponseInterface } from '../../../interfaces/services/ml_api/ocrInterfaces';
import {ConectionObjectRequest}                     from '../conection/conectionObjectRequest';

//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)

export class OcrObjectRequest extends ConectionObjectRequest{

    async OcrProcessGet(uri:string):Promise<any>{
        try {
            const response = (await this.getData(null,uri,null)).data;

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
}