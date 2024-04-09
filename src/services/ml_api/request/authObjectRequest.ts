import { statusApi }                                    from '../../../interfaces/services/ml_api/apiResponse';
import { OperationsInterfaces, OperationsResponseApi }  from '../../../interfaces/services/ml_api/operations';
import { handlerAxiosError }                            from '../../../utilities/handlerAxiosError';
import { ConectionObjectRequest }                       from '../conection/conectionObjectRequest';
import { AxiosResponse }                                from 'axios';

//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)

interface UserAuthInterface{
    userDocumentId: string,
    userName: string,
    userDescription: string,
    userCreteDate: string,
    userProfileId: number,
    userDocumentType: number,
    userProfileLabel: string
}

interface ApiResponse{
    apiCode : number,
    apiMessage : string,
    statusCode? : number,
    token?: string,
    data? : UserAuthInterface
}

export class AuthObjectRequest extends ConectionObjectRequest{

    async authGet( uri : string, params : { documentoId : string, clave : string} | null, token? : string) : Promise <any>{
        try {
            const fetch = await this.getData(uri, params || null, token);
            // console.log(fetch.status)
            
            const response = fetch.data;
            const statusCode = fetch.status;
            const authenticateToken = fetch.headers['authorization-token'];
              
            if(response.apiCode === 1){

                const authInterface : ApiResponse = {
                    apiCode:    response.apiCode,
                    apiMessage: response.apiMessage,
                    token:      authenticateToken,
                    statusCode: statusCode,
                    data:{
                        userName:           response.data[0].nombre,
                        userDocumentId:     response.data[0].documento_id,
                        userProfileId:      response.data[0].perfil_id,
                        userProfileLabel:   response.data[0].perfil_etiqueta,
                        userDescription:    response.data[0].descripcion,
                        userDocumentType:   response.data[0].tipo_documento_id,
                        userCreteDate:      response.data[0].user_create_dete || 'No asignado'
                        // userState:          response.data[0].estado,
                    }
                }

                return authInterface;
            }
            
            const authInterface : ApiResponse = {
                apiCode:response.apiCode,
                apiMessage:response.apiMessage,
                statusCode: statusCode,
            }
            return authInterface;
 
        } catch (error) {
            const response = handlerAxiosError(error);
            return response;
        }
    }

    async authGetByToken( uri : string, token : string ) : Promise <any>{
        try {
            
            const fetch : AxiosResponse = await this.getData(uri,null,token);

            const response = fetch.data;
            const statusCode : number= fetch.status;

            if(response.apiCode !== 1){

                const authInterface : ApiResponse = {
                    apiCode:response.apiCode,
                    apiMessage:response.apiMessage,
                    statusCode: statusCode,
                }
                return authInterface;
            }
            
            const authInterface : ApiResponse = {
                apiCode:    response.apiCode,
                apiMessage: response.apiMessage,
                statusCode: statusCode,
                data:{
                    userName:           response.data.userName,
                    userDocumentId:     response.data.userId,
                    userProfileId:      response.data.roleId,
                    userProfileLabel:   response.data.roleName,
                    userDescription:    response.data.userDescription,
                    userDocumentType:   response.data.userDocuementType,
                    userCreteDate:      'No asignado'
                }
            }
            
            return authInterface;       

        } catch (error) {
            const response = handlerAxiosError(error);
            return response;
            
        }
    } 

    async authGetOperations( uri : string, profileId : string, token? : string ) : Promise <any>{
        try {
            const response = (await this.getData((uri+profileId),null,token)).data;

            if(response.apiCode===1){
                const dataClear : OperationsInterfaces[] = response.data.map((element:any)=>{
                    return {
                        entornoId:          element.entorno_id,
                        profileId:          element.perfil_id,
                        operacionEtiqueta:  element.operacion,
                        operacionId:        element.operacion_id
                    }
                });

                const ocrProcessInterface:OperationsResponseApi={
                    statusCodeApi:response.apiCode,
                    statusMessageApi:response.apiMessage,
                    data:dataClear
                }
                return ocrProcessInterface;
            }
            
            const ocrProcessInterface:statusApi={
                statusCodeApi:response.apiCode,
                statusMessageApi:response.apiMessage,
            }
            return ocrProcessInterface;
 
        } catch (error) {
            const response = handlerAxiosError(error);
            return response;
        }
    }
}