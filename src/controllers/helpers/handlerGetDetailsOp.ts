import { get_detail_op }    from "../../endpoints/ml_api/restApiMujerLatina";
import { OpObjectRequest }  from "../../services/ml_api/request/opObjectRequest"

export const handlerGetDetailsOp: (op:string)=>Promise<any> = async (op:string) =>{
    const apiQuery = new OpObjectRequest();
    const response = await apiQuery.DetailOpGet(get_detail_op,op);
    return response;
}