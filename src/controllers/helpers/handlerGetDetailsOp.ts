import { InterfaceDetailOPRequest }             from '../../services/ml_api/request/request.interfaceDetailOp';
import { api_ml_production_op_details_get }     from "../../endpoints/ml_api/restApiMujerLatina";
import { api_ml_production_op_open }            from '../../endpoints/ml_api/restApiMujerLatina';
import { DetailProcessResponseInterface }       from '../../interfaces/services/ml_api/detailOpInteface';
import { InterfaceOpDispatch }                  from '../../services/ml_api/dispatch/dispatch.opObject';

interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    data? : DetailProcessResponseInterface[],
    statusCode? : number
}

interface DataInterface{
    op: string,
    usuario: string
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

export const handlerOpenOp: ({op,usuario}: DataInterface ) => Promise<any> = async ({op,usuario}: DataInterface ) => {
    try {
        const fetch = new InterfaceOpDispatch({
            url:api_ml_production_op_open,
        });

        const response = await fetch.productionData({
            operarioId:usuario,
            op:op
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