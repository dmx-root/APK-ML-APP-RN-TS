import { handlerAxiosError }            from '../../../utilities/handlerAxiosError';
import { ApiConnectionInterface }       from '../../../interfaces/services/ml_api/apiConnection'
import { ConectionRequestInterface }    from '../conection/request.connection';
import { AxiosHeaders }                 from 'axios';
import { OperationsInterfaces } from '../../../interfaces/services/ml_api/operations';

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
    data? : any[],
    statusCode? : number
}

interface AnomalyInterface {
    codigoAnormalidad: string,
    etiqueta: string,
}


export class SesionAnomalyRequestInterface extends ConectionRequestInterface implements ApiConnectionInterface{
    
    constructor(propierties:PropertiesInterface){
        super(propierties);
    }
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface
    async productionData () : Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response : ApiResponse = (await this.getData()).data;

            const dataClear : AnomalyInterface[] = response.data.map((element:any)=>{

                return {
                    codigoAnormalidad:  element.anm_id,
                    etiqueta:           element.etiqueta
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

export class SesionOperationsRequestInterface extends ConectionRequestInterface implements ApiConnectionInterface{
    
    constructor(propierties:PropertiesInterface){
        super(propierties);
    }
    
    async productionData(): Promise<ControllerResponseInterface> {
        try {

            const response = (await this.getData()).data;

            
                const dataClear : OperationsInterfaces[] = response.data.map((element:any)=>{
                    return {
                        entornoId:          element.entorno_id,
                        profileId:          element.perfil_id,
                        operacionEtiqueta:  element.operacion,
                        operacionId:        element.operacion_id
                    }
                });

                const ocrProcessInterface:ControllerResponseInterface={
                    statusCodeApi:response.apiCode,
                    statusMessageApi:response.apiMessage,
                    data:dataClear
                }
                return ocrProcessInterface;
           
        } catch (error) {
            const response = handlerAxiosError(error);
            return response;
        }
    }
}