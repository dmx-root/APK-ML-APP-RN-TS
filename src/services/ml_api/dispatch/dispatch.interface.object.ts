import { ConectionInterfaceDispatch } from '../conection/dispatch.connection';
import { handlerAxiosError }          from '../../../utilities/handlerAxiosError';

interface ObjectInterface{
    [key : string] : any
}


interface PropertiesInterface{
    url : string; 
    method: 'post' | 'put' | 'patch' | 'delete'
    params? : ObjectInterface; 
    headers? : ObjectInterface;
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

interface ApiConnectionInterface {
    executeQuery(data?: ObjectInterface): Promise<ControllerResponseInterface>;
}

export class ObjectDispatchInterface extends ConectionInterfaceDispatch implements ApiConnectionInterface{
    constructor(data:PropertiesInterface){
        super(data);
    }

    async executeQuery(data?: ObjectInterface): Promise<ControllerResponseInterface> {
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const fetch= await this.dispatchData(data);
            const response : ApiResponse = fetch.data;
            const status : number = fetch.status 
            
            const ocrProcessInterface: ControllerResponseInterface = {
                statusCodeApi: response.apiCode,
                statusMessageApi: response.apiMessage,
                statusCode: status
            }
            return ocrProcessInterface;

        } catch (error) {
            const err = handlerAxiosError(error);

            const apiResponse: ControllerResponseInterface = {
                statusCodeApi: -1,
                statusMessageApi: err.statusMessageApi,
                statusCode: err.statusCode
            }
            return apiResponse;
        }
    }
}


