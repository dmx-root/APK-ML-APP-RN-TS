import { get_auth } from "../../endpoints/ml_api/restApiMujerLatina";
import { authResponseInterface } from "../../interfaces/services/ml_api/authInterfaces";
import { AuthObjectRequest } from "../../services/ml_api/request/authObjectRequest";

export const  handlerGetAuth:(documentId:string,password:string) =>Promise<authResponseInterface> = async (documentId:string,password:string) => {
    const apiQuery=new AuthObjectRequest(); 
    const data:authResponseInterface=await apiQuery.authGet(get_auth,{documentId,password});
    return data
}