import { OpInterface }                  from '../../../interfaces/services/ml_api/opInterfaces';
import { ApiConnectionInterface }       from '../../../interfaces/services/ml_api/apiConnection';
import { handlerAxiosError }            from '../../../utilities/handlerAxiosError';
import { ConectionRequestInterface }    from '../conection/request.connection';
import { AxiosHeaders }                 from 'axios';
//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)
interface ParamsInterface {
    [key: string]: any
}

interface PropertiesInterface {
    url?: string;
    params?: ParamsInterface;
    headers?: AxiosHeaders
}

interface ApiResponse {
    apiCode: -1 | 0 | 1,
    apiMessage: string,
    data?: any
}

interface ControllerResponseInterface {
    statusCodeApi: number,
    statusMessageApi: string,
    data?: OpInterface[],
    statusCode?: number
}

export class OpRequestInterface extends ConectionRequestInterface implements ApiConnectionInterface {

    constructor(properties: PropertiesInterface) {
        super(properties)
    }
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface
    async executeQuery () : Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response : ApiResponse = (await this.getData()).data;

            const dataClear : OpInterface[] = response.data.map((element:any)=>{
                return {
                        op:                             element.op_id,
                        referencia:                     element.referencia,
                        ocrCantidad:                    element.ocr_cantidad,
                        opLotePlaneado:                 element.cantidad_planeada,
                        opLoteCompletado:               element.cantidad_ejecutada,
                        opFechaAperturaProceso:         element.fecha_apertura_proceso,
                        opFechaCierreProceso:           element.fecha_cierre_proceso,
                        opFechaAperturaProcesoPlaneado: element.fecha_planeada_apertura_proceso,
                        opFechaCierreProcesoPlaneado:   element.fecha_planeada_cierre_proceso,
                        opEstado:                       element.estado,
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
