import { DetailProcessResponseInterface, OpDetail }             from '../../../interfaces/services/ml_api/detailOpInteface';
import { OpInterface, allBasicOpResponseInterface }             from '../../../interfaces/services/ml_api/opInterfaces';
import { statusApi }                                            from '../../../interfaces/services/ml_api/apiResponse';
import { handlerAxiosError }                                    from '../../../utilities/handlerAxiosError';
import { ConectionObjectRequest, ConectionInterfaceRequest }    from '../conection/conectionObjectRequest';

//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)

export class OpObjectRequest extends ConectionObjectRequest{

    async OpGet(uri : string) : Promise <any>{
        try {
            const response = (await this.getData(uri,null)).data;

            if(response.statusCodeApi===1){
                const dataClear:Array<OpInterface>=response.data.map((element:any)=>{
                    return {
                        op:element.op,
                        referencia: element.ref,
                        ocrCantidad: element.cant_ocr,
                        opLotePlaneado: element.cant_planned,
                        opLoteCompletado: element.cant_completed,
                        opEstado: element.op_state,
                        opFechaAperturaProceso: element.op_dete_open_task,
                        opFechaCierreProceso: element.op_dete_close_task,
                        opFechaAperturaProcesoPlaneado: element.op_dete_open_planned,
                        opFechaCierreProcesoPlaneado: element.op_dete_close_planned
                    }
                });

                const basicInfoOpInterface:allBasicOpResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return basicInfoOpInterface;
            }
            
            const basicInfoOpInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return basicInfoOpInterface;
 
        } catch (error) {
            console.log(error)
            const response = handlerAxiosError(error);
            return response;
        }
        
    }
    async OpProductionGetByUser(uri : string, documentId : string, token? : string) : Promise <any>{
        try {
            const response = (await this.getData((uri+documentId),null,token)).data;
            // console.log(response)
            if(response.apiCode===1){
                const dataClear:Array<OpInterface>=response.data.map((element:any)=>{
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
                });

                const basicInfoOpInterface:allBasicOpResponseInterface={
                    statusCodeApi:response.apiCode,
                    statusMessageApi:response.apiCode,
                    data:dataClear
                }
                return basicInfoOpInterface;
            }
            
            const basicInfoOpInterface:statusApi={
                statusCodeApi:response.apiCode,
                statusMessageApi:response.apiCode,
            }
            return basicInfoOpInterface;
 
        } catch (error) {
            const response = handlerAxiosError(error);
            return response;
        }    
    }
}

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
    data? : OpInterface[],
    statusCode? : number
}

export class InterfaceOPRequest extends ConectionInterfaceRequest {
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface
    async productionData (properties : PropertiesInterface) : Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response : ApiResponse = (await this.getData(properties)).data;

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



