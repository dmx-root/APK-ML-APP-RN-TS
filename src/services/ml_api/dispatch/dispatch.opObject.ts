import { ConectionInterfaceDispatch } from '../conection/dispatch.conectionObject'
import { handlerAxiosError }          from '../../../utilities/handlerAxiosError';
import { DetailProcessResponseInterface }           from '../../../interfaces/services/ml_api/detailOpInteface';


interface ObjectInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ObjectInterface; 
    token? : string;
    data? : ObjectInterface
}

interface OperationInterface{
    op:     string,
    operarioId:string
}

interface ApiResponse {
    apiCode : -1 | 0 | 1,
    apiMessage : string,
    data? : any
}

interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    statusCode? : number,
    data? : ObjectInterface
}

export class InterfaceOpDispatch extends ConectionInterfaceDispatch{
    constructor(data:PropertiesInterface){
        super(data);
    }

    async productionData(operation:OperationInterface){
        try {
            
            const response : ApiResponse = (await this.postData(operation)).data;

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
                data : dataClear,
                statusCode : 200,
            }
            return controllerResponse;

        } catch (error) {
            const err = handlerAxiosError(error);
            // console.log(err)
            const response : ControllerResponseInterface = {
                statusCodeApi : err.statusCodeApi,
                statusMessageApi: err.statusMessageApi,
                statusCode : err.statusCode
            }
            return response;
        }
    }
}
