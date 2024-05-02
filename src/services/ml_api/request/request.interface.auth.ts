import { handlerAxiosError }                            from '../../../utilities/handlerAxiosError';
import { AxiosResponse }                                from 'axios';
import { ConectionRequestInterface }    from '../conection/request.connection';

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
    userProfileLabel: string,
    userDateTokenExp?:  any
}

interface ControllerResponseInterface {
    statusCodeApi: number,
    statusMessageApi: string,
    token?:string;
    data?: UserAuthInterface[],
    statusCode?: number
}

interface ParamsInterface {
    [key: string]: any
}

interface PropertiesInterface {
    url: string;
    params?: ParamsInterface;
    headers?: ParamsInterface
}

export interface ApiConnectionInterface{
    authByData(): Promise <ControllerResponseInterface>;
    authByToken(): Promise <ControllerResponseInterface>;
}

export class AuthRequestInterface extends ConectionRequestInterface implements ApiConnectionInterface{
    constructor(properties: PropertiesInterface) {
        super(properties)
    }
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface 
    async authByData(): Promise<ControllerResponseInterface>{
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const fetch= await this.getData();
            const response = fetch.data;
            const statusCode = fetch.status;
            const authenticateToken = fetch.headers['authorization-token'];

            const authInterface : ControllerResponseInterface = {
                statusCodeApi:    response.apiCode,
                statusMessageApi: response.apiMessage,
                token:            authenticateToken,
                statusCode:       statusCode,
                data:[{
                    userName:           response.data[0].nombre,
                    userDocumentId:     response.data[0].documento_id,
                    userProfileId:      response.data[0].perfil_id,
                    userProfileLabel:   response.data[0].perfil_etiqueta,
                    userDescription:    response.data[0].descripcion,
                    userDocumentType:   response.data[0].tipo_documento_id,
                    userCreteDate:      response.data[0].user_create_dete || 'No asignado'
                    // userState:          response.data[0].estado,
                }]
            }

            return authInterface;

        } catch (error) {
            const err = handlerAxiosError(error);

            const apiResponse: ControllerResponseInterface = {
                statusCodeApi: -1,
                statusMessageApi: err.statusMessageApi,
                statusCode: err.statusCode
            }
            return apiResponse;
        }
    }
    async authByToken(): Promise<ControllerResponseInterface>{

        try {
            const fetch : AxiosResponse = await this.getData();
                
            const response = fetch.data;
            const statusCode : number= fetch.status;
    
            if(response.apiCode !== 1){
    
                const authInterface : ControllerResponseInterface = {
                    statusCodeApi:response.apiCode,
                    statusMessageApi:response.apiMessage,
                    statusCode: statusCode,
                }
                return authInterface;
            }
            
    
            const authInterface : ControllerResponseInterface = {
                statusCodeApi:    response.apiCode,
                statusMessageApi: response.apiMessage,
                statusCode:       statusCode,
                data:[{
                    userName:           response.data.userName,
                    userDocumentId:     response.data.userId,
                    userProfileId:      response.data.roleId,
                    userProfileLabel:   response.data.roleName,
                    userDescription:    response.data.userDescription,
                    userDocumentType:   response.data.userDocuementType,
                    userDateTokenExp:   response.data.exp,
                    userCreteDate:      'No asignado'
                }]
            }
            return authInterface;
            
        } catch (error) {
            const response = handlerAxiosError(error);
            return response;
        }

    }
}
