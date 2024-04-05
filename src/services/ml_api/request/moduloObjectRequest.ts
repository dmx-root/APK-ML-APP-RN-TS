import { statusApi } from "../../../interfaces/services/ml_api/apiResponse";
import { EmployeerProcessInterface, EmployeerProcessResponseInterface, ModuloProcessInterface, ModuloProcessesResponseInterface } from "../../../interfaces/services/ml_api/moduloInterfaces";
import { ConectionObjectRequest } from "../conection/conectionObjectRequest";

export class ModuloObjectRequest extends ConectionObjectRequest{
    async ModuloProcessGet(uri:string, token? : string ):Promise<any>{
        try {
            const response = (await this.getData(uri,null,token)).data;

            if(response.apiCode===1){
                const dataClear:Array<ModuloProcessInterface>=response.data.map((element:any)=>{
                    const data : ModuloProcessInterface ={
                        moduloId:               element.id_modulo,
                        numeroTrabajadores:     element.operarios_cantidad,
                        numeroMaquinas:         element.maquinas_cantidad,
                        moduloEstadoProceso:    element.estado_operacion,
                        moduloEstado:           element.estado,
                        moduloEtiqueta:         element.modulo_etiqueta,
                        referenciaActual:       element.referencia_actual,
                        opActual:               element.op_actual,
                        revisorActualId:        element.revisor_actual,
                        tallaActual:            element.talla_id_actual,
                        colorActual:            element.color_id_actual,
                        eventualidad:           element.eventualidad_actual,
                        revisorActualNombre:    'XXX - XXX - XXX',
                        produccionDiaria:       0,
                        metaDiaria:             0,
                    };
                    return data;
                });
                
                // console.log(dataClear)
                const ocrProcessInterface:ModuloProcessesResponseInterface={
                    statusCodeApi:response.apiCode,
                    statusMessageApi:response.apiMessage,
                    data:dataClear
                }
                return ocrProcessInterface;
            }
            
            const ocrProcessInterface:statusApi={
                statusCodeApi:response.apiCode,
                statusMessageApi:response.apiMessage,
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
    async EmployeersByModuloGet(uri:string, moduloId:string){
        try {
            const response = (await this.getData((uri+moduloId),null)).data;
            if(response.statusCodeApi===1){
                const dataClear:Array<EmployeerProcessInterface>=response.data.map((element:any)=>{
                    return {
                        moduloId:element.mdl_id,
                        numeroOperarios:element.number_employees,
                        moduloEtiqueta:element.mdl_label,
                        operarioCodigo:element.emp_code,
                        operarioNombre:element.emp_name,
                        operarioDescripcion:element.emp_description,
                        creacionFecha:element.creation_date,
                        integracionModuloFecha:null
                    }
                });

                const ocrProcessInterface:EmployeerProcessResponseInterface={
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
                statusMessageApi:'Error de consulta cn la interface',
            }
            return ocrProcessInterface;
        }
    }
}