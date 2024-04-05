import { statusApi }                                    from '../../../interfaces/services/ml_api/apiResponse';
import { authInterface, authResponseInterface }         from '../../../interfaces/services/ml_api/authInterfaces';
import { OperationsInterfaces, OperationsResponseApi }  from '../../../interfaces/services/ml_api/operations';
import {ConectionObjectRequest}                         from '../conection/conectionObjectRequest';
import axios from 'axios'
import {AxiosError,AxiosResponse} from 'axios';

//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)

interface UserAuthInterface{
    userDocumentId: string,
    userName: string,
    userDescription: string,
    // userState: boolean,
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

    async authGet(uri : string, params:{documentoId : string, clave : string} | null, token? : string):Promise<any>{
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
            if (axios.isAxiosError(error)) {
                // Verificar si es un error de Axios
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                  // Acceder a la propiedad response
                  console.log('Código de estado:', axiosError.response.status);
                  console.log('Mensaje de error:', axiosError.response.data);
                  const res:any = axiosError.response.data;

                    const authInterface : ApiResponse = {
                        apiCode:    res.apiCode,
                        apiMessage: res.apiMessage,
                        statusCode: axiosError.response.status,

                    }
                    return authInterface;
                } else {
                  console.log('Error de red:', axiosError.message);
                }
              }
            // if(typeof error !== 'undefined' && error){
            //     // console.log(Object.keys(error))
            //     console.log(error.response)
            // }
            // const authInterface : ApiResponse = {
            //     apiCode:-1,
            //     apiMessage:'Error de consultaaaaa',
            //     statusCode: 500,

            // }
            // return authInterface;
        }
        
    }

    async authGetByToken (uri :string, token : string ) : Promise <any>{
        try {
            
            const fetch : AxiosResponse = await this.getData(uri,null,token);

            const response = fetch.data;
            const statusCode : number= fetch.status;
            // console.log(response.data)
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
            // console.log(authInterface)
            
            return authInterface;
            

        } catch (error) {

            if (axios.isAxiosError(error)) {

                // Verificar si es un error de Axios
                const axiosError = error as AxiosError;

                if (axiosError.response) {
                //   Acceder a la propiedad response
                  console.log('Código de estado:', axiosError.response.status);
                  console.log('Mensaje de error:', axiosError.response.data);
                    const res:any = axiosError.response.data;
                    // console.log(res)
                    const authInterface : ApiResponse = {
                        apiCode:    res.apiCode,
                        apiMessage: res.apiMessage,
                        statusCode: axiosError.response.status,

                    }
                    return authInterface;
                } else {
                  console.log('Error de red:', axiosError.message);
                }
            }
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