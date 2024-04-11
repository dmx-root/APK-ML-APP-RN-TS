import { handlerAxiosError }                        from '../../../utilities/handlerAxiosError';
import { ConectionInterfaceRequest }                from '../conection/conectionObjectRequest';
import { EmployeerProcessInterface }           from '../../../interfaces/services/ml_api/moduloInterfaces';

interface ParamsInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ParamsInterface; 
    token? : string
}

interface ApiResponse {
    apiCode : -1 | 0 | 1,
    apiMessage : string,
    data? : any
}

interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    data? : EmployeerProcessInterface[],
    statusCode? : number
}

export class InterfaceEmployeeRequest extends ConectionInterfaceRequest {
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface
    async productionData (properties : PropertiesInterface) : Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response : ApiResponse = (await this.getData(properties)).data;

            const dataClear : EmployeerProcessInterface[] = response.data.map((element:any)=>{

                return {
                    operarioCodigo:     element.opr_codigo_id,
                    operarioNombre:     element.nombre,
                    operarioDescripcion:element.descripcion,
                    documento:          element.documento,
                    creacionFecha:      element.creacion_fecha,
                    moduloId:           null,
                    stado:              true,
                    integracionModuloFecha:'xx-xx-xx'
                }
            })
            
            const controllerResponse : ControllerResponseInterface = {
                statusCodeApi : response.apiCode,
                statusMessageApi : response.apiMessage,
                statusCode : 200,
                data : dataClear
            }
            return controllerResponse;
            
        } catch (error) {
            const err = handlerAxiosError(error);
            const response : ControllerResponseInterface = {
                statusCodeApi : err.statusCodeApi,
                statusMessageApi: err.statusMessageApi,
                statusCode : err.statusCode
            }
            return response
        }
    }
}