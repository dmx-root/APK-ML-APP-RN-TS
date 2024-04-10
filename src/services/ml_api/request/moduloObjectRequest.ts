import { ModuloProcessInterface }       from "../../../interfaces/services/ml_api/moduloInterfaces";
import { handlerAxiosError }            from '../../../utilities/handlerAxiosError'
import { ConectionInterfaceRequest }    from "../conection/conectionObjectRequest";

interface ParamsInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ParamsInterface; 
    token? : string
}

interface ApiResponse {
    apiCode: -1 | 0 | 1,
    apiMessage: string,
    data?:any
}

interface ControllerResponseInterface {
    statusCodeApi: number,
    statusMessageApi: string,
    data?: ModuloProcessInterface[],
    statusCode? : number
}

export class InterfaceModuloRequest extends ConectionInterfaceRequest {
    // Doc
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface
    async productionData (properties : PropertiesInterface) : Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response : ApiResponse = (await this.getData(properties)).data;

            const dataClear : ModuloProcessInterface[] = response.data.map((element : any)=>{
                return {
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