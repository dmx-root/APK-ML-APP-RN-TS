import { statusApi }                            from '../../../interfaces/services/ml_api/apiResponse';
import { authInterface, authResponseInterface } from '../../../interfaces/services/ml_api/authInterfaces';
import {ConectionObjectRequest}                 from '../conection/conectionObjectRequest';

export class AuthObjectRequest extends ConectionObjectRequest{

    async authGet(uri:string,params:{documentId:string,password:string}):Promise<any>{
        try {
            const response = (await this.getData(null,uri,params)).data;

            if(response.statusCodeApi===1){
                const authInterface:authResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:{
                        userName:response.data[0].user_name,
                        userDocumentId:response.data[0].user_document_id,
                        userProfileId:response.data[0].profile_id,
                        userProfileLAbel:response.data[0].profile_label,
                        userDescription:response.data[0].user_description,
                        userDocumentType:response.data[0].document_type_id,
                        userState:response.data[0].user_document_id,
                        userCreteDate:response.data[0].user_create_dete
                    }
                }
                return authInterface;
            }
            
            const authInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return authInterface;
 
        } catch (error) {
            console.log(error)
            const authInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return authInterface;
        }
        
    }
}