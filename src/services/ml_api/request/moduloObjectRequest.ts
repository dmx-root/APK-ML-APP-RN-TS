import { statusApi } from "../../../interfaces/services/ml_api/apiResponse";
import { EmployeerProcessInterface, EmployeerProcessResponseInterface, ModuloProcessInterface, ModuloProcessesResponseInterface } from "../../../interfaces/services/ml_api/moduloInterfaces";
import { ConectionObjectRequest } from "../conection/conectionObjectRequest";

export class ModuloObjectRequest extends ConectionObjectRequest{
    async ModuloProcessGet(uri:string):Promise<any>{
        try {
            const response = (await this.getData(uri,null)).data;

            if(response.statusCodeApi===1){
                const dataClear:Array<ModuloProcessInterface>=response.data.map((element:any)=>{
                    return {
                        moduloId: element.mdl_id,
                        numeroTrabajadores: element.number_employees,
                        numeroMaquinas: element.number_machine,
                        moduloEstadoProceso: element.operation_state,
                        moduloEstado: element.modulo_state,
                        moduloEtiqueta: element.mdl_label,
                        produccionDiaria:null,
                        metaDiaria:null,
                        referenciaActual:null,
                        opActual:null
                    }
                });

                const ocrProcessInterface:ModuloProcessesResponseInterface={
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