import { ROUTES } from "../../endpoints/ml_api/ep.ml.api";
import { AuthRequestInterface } from "../../services/ml_api/request/request.interface.auth";

export const  handlerGetAuth : (documentoId : string, clave: string) => Promise <any> = async (documentoId : string, clave: string) => {

    const fetch = new AuthRequestInterface({
        url:ROUTES.api_ml_local_auth_get,
        headers:{
            'documento-id':documentoId,
            'clave':clave
        }
    });
    
    const data = await fetch.authByData();
    return data;

}