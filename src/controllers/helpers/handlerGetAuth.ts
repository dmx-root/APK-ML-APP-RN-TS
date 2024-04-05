import { api_ml_local_auth_get }                 from "../../endpoints/ml_api/restApiMujerLatina";
import { authResponseInterface }    from "../../interfaces/services/ml_api/authInterfaces";
import { AuthObjectRequest }         from "../../services/ml_api/request/authObjectRequest";

export const  handlerGetAuth : (documentoId : string, clave: string) => Promise <any> = async (documentoId : string, clave: string) => {

    const apiQuery = new AuthObjectRequest(); 
    const data = await apiQuery.authGet(api_ml_local_auth_get, {documentoId, clave});
    return data;

}