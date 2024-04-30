import { ConectionInterfaceDispatch } from '../conection/dispatch.connectio'
import { handlerAxiosError }          from '../../../utilities/handlerAxiosError';

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
    color:  string,
    talla:  number | string,
    inicio: string | Date,
    finalizacion:string | Date,
    operarioId:string,
    modulo:number,
    unidades:number,
    anormalidad: string | null
}

interface OperationSegundasInterface{
    op:string,
    colorId:string,
    talla:string,
    operarioId:string,
    moduloId:number,
    unidades:number
}

interface ApiResponse {
    apiCode : -1 | 0 | 1,
    apiMessage : string,
    data? : any
}

interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    statusCode? : number
}

export class InterfaceOcrDispatch extends ConectionInterfaceDispatch{
    constructor(data:PropertiesInterface){
        super(data);
    }

    async productionData(operation:OperationInterface){
        try {
            // console.log("se ejecutó")
            const response : ApiResponse = (await this.postData(operation)).data;
            // console.log(response)
            const controllerResponse : ControllerResponseInterface = {
                statusCodeApi : response.apiCode,
                statusMessageApi : response.apiMessage,
                statusCode : 200,
            }
            return controllerResponse;

        } catch (error) {
            const err = handlerAxiosError(error);
            console.log(err)
            const response : ControllerResponseInterface = {
                statusCodeApi : err.statusCodeApi,
                statusMessageApi: err.statusMessageApi,
                statusCode : err.statusCode
            }
            return response
        }
    }
    async productionData2(operation:OperationSegundasInterface[]){
        try {
            // console.log("se ejecutó")
            const response : ApiResponse = (await this.postData({elements:operation})).data;
            // console.log(response)
            const controllerResponse : ControllerResponseInterface = {
                statusCodeApi : response.apiCode,
                statusMessageApi : response.apiMessage,
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
            return response
        }
    }

}
