import { InterfaceDetailOPRequest }             from '../../services/ml_api/request/reques.interfaceDetailOp';
import { api_ml_production_op_details_get }     from "../../endpoints/ml_api/restApiMujerLatina";
import { DetailProcessResponseInterface } from '../../interfaces/services/ml_api/detailOpInteface';

interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    data? : DetailProcessResponseInterface[],
    statusCode? : number
}

export const handlerGetDetailsOp: ( op : string ) => Promise <ControllerResponseInterface> = async ( op : string ) => {
    try {
        const fetch = new InterfaceDetailOPRequest();
        const response =await  fetch.productionData({
            url:api_ml_production_op_details_get+op
        }); 
        return response;
        
    } catch (error) {
        const response : ControllerResponseInterface = {
            statusCodeApi:-1,
            statusMessageApi:"Error de controlador",
            statusCode: 500
        }
        console.log(error) 
        return response;  
    }

}