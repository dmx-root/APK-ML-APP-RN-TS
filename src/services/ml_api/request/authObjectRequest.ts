import { statusApi }                                    from '../../../interfaces/services/ml_api/apiResponse';
import { authInterface, authResponseInterface }         from '../../../interfaces/services/ml_api/authInterfaces';
import { OperationsInterfaces, OperationsResponseApi }  from '../../../interfaces/services/ml_api/operations';
import {ConectionObjectRequest}                         from '../conection/conectionObjectRequest';

//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)

export class AuthObjectRequest extends ConectionObjectRequest{

    async authGet(uri:string,params:{documentId:string,password:string}|null,token?:string):Promise<any>{
        try {
            const response = (await this.getData(uri,params||null,token)).data;

            if(response.statusCodeApi===1){
                const authInterface:authResponseInterface={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    toke:response.token,
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
    async authGetOperations(uri:string, profileId:string):Promise<any>{
        try {
            const response = (await this.getData((uri+profileId),null)).data;

            if(response.statusCodeApi===1){
                const dataClear:Array<OperationsInterfaces>=response.data.map((element:any)=>{
                    return {
                        entornoId:element.env_id,
                        profileId:element.prf_id,
                        operacionEtiqueta:element.operation_label,
                        operacionId:element .ope_id
                    }
                });

                const ocrProcessInterface:OperationsResponseApi={
                    statusCodeApi:response.statusCodeApi,
                    statusMessageApi:response.statusMessageApi,
                    data:dataClear
                }
                return ocrProcessInterface;
            }
            
            const ocrProcessInterface:statusApi={
                statusCodeApi:response.statusCodeApi,
                statusMessageApi:response.statusMessageApi,
            }
            return ocrProcessInterface;
 
        } catch (error) {
            console.log(error)
            const ocrProcessInterface:statusApi={
                statusCodeApi:-1,
                statusMessageApi:'Error de consulta',
            }
            return ocrProcessInterface;
        }
    }
}