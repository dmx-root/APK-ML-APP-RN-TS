import { handlerAxiosError }                        from '../../../utilities/handlerAxiosError';
import { ConectionInterfaceRequest }                from '../conection/conectionObjectRequest';

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
    data? : AnomalyInterface[],
    statusCode? : number
}

interface AnomalyInterface {
    codigoAnormalidad: string,
    etiqueta: string,
}

interface ClassInterface{
    productionData: (properties : PropertiesInterface ) => Promise <ControllerResponseInterface>
}

export class SesionAnomalyRequestInterface extends ConectionInterfaceRequest implements ClassInterface {
    
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface
    async productionData (properties : PropertiesInterface) : Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response : ApiResponse = (await this.getData(properties)).data;

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