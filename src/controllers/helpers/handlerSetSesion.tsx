import { useMainContext }       from "../../contexts/mainContext";
import { statusApi }            from "../../interfaces/services/ml_api/apiResponse";
import { authInterface }        from "../../interfaces/services/ml_api/authInterfaces";
import { handlerGetSesion }     from "./handlerGetSesion";

interface hookResponse{
    statusCode:number,
    statusMessage:string
}

export const useSetSesion:()=> { setSesion:(data:authInterface)=>hookResponse} = ()=>{
    
    const contextStorage = useMainContext();
    
    const setSesion:(data:authInterface)=> hookResponse = (data:authInterface) => {
        
        const account = handlerGetSesion(data.userProfileId);
        if(account.id!==0){ 
            contextStorage?.setAccount(account);
            contextStorage?.setCurrentUser({
                nombre:data.userName,
                documentoid:data.userDocumentId,
                tipoDocumento:data.userDocumentType,
                rolId:data.userProfileId,
                rolNombre:data.userDocumentId,
                descripcion:data.userDescription,
                creacionFecha:data.userCreteDate 
            });
            const response: hookResponse={
                statusCode:1,
                statusMessage:'Sesion establecida correctamente'
            }
            return response;
        }
        else{
            const response: hookResponse={
                statusCode:0,
                statusMessage:'No se pudo establecer la sesión'
            }
            return response;
        }

    }
    return {setSesion}
}