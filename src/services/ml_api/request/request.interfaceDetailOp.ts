import { handlerAxiosError }                        from '../../../utilities/handlerAxiosError';
import { ConectionInterfaceRequest }                from '../conection/conectionObjectRequest';
import { DetailProcessResponseInterface }           from '../../../interfaces/services/ml_api/detailOpInteface';


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
    data? : DetailProcessResponseInterface[],
    statusCode? : number
}

export class InterfaceDetailOPRequest extends ConectionInterfaceRequest {
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface
    async productionData (properties : PropertiesInterface) : Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response : ApiResponse = (await this.getData(properties)).data;

            const dataClear : DetailProcessResponseInterface[] = response.data.map((element:any)=>{
                return {
                    op:                             element.op_id,
                    referencia:                     element.referencia,
                    ocrCantidad:                    element.ocr_cantidad,
                    colorEtiqueta:                  element.clr_etiqueta,
                    colorCodigo:                    element.clr_id,
                    talla:                          element.tll_etiqueta,
                    tallaId:                        element.tll_id,
                    ean:                            element.ean,
                    opLotePlaneado:                 element.cantidad_planeada,
                    opLoteCompletado:               element.cantidad_ejecutada,
                    opLoteRestante:                 element.cantidad_restante,
                    opFechaAperturaProceso:         element.especificaciones_op_fecha_apertura_proceso,
                    opFechaCierreProceso:           element.especificaciones_op_fecha_cierre_proceso,
                    opFechaAperturaProcesoPlaneado: element.especificaciones_op_fecha_planeada_apertura_proceso,
                    opFechaCierreProcesoPlaneado:   element.especificaciones_op_fecha_planeada_cierre_proceso,
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