import { EmployeerProcessInterface }    from '../../../interfaces/services/ml_api/moduloInterfaces';
import { ApiConnectionInterface }       from '../../../interfaces/services/ml_api/apiConnection';
import { handlerAxiosError }            from '../../../utilities/handlerAxiosError';
import { ConectionRequestInterface }    from '../conection/request.connection';
import { AxiosHeaders }                 from 'axios';

interface ParamsInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ParamsInterface; 
    headers? : AxiosHeaders
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

export class EmployeeRequestInterface extends ConectionRequestInterface implements ApiConnectionInterface { 
    constructor(properties : PropertiesInterface){
        super(properties);
    }
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface
    async productionData () : Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response : ApiResponse = (await this.getData()).data;

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