import {AxiosError, isAxiosError} from 'axios';

interface ApiResponse{
    statusCodeApi:number,
    statusMessageApi:string
    statusCode? : number
};

export const handlerAxiosError : ( error : unknown ) => ApiResponse  = ( error : unknown ) => {
    if (isAxiosError(error)) {
        // Verificar si es un error de Axios
        const axiosError = error as AxiosError;

        if (axiosError.response) {

            const res:any = axiosError.response.data;

            const authInterface : ApiResponse = {
                statusCodeApi:    res.apiCode,
                statusMessageApi: res.apiMessage,
                statusCode: axiosError.response.status,
            }
            return authInterface;
        } else {
            
            const authInterface : ApiResponse = {
                statusCodeApi:    -1,
                statusMessageApi: axiosError.message,
                statusCode: 500,

            }
            return authInterface;
        }
    }
    else{          
        const authInterface : ApiResponse = {
            statusCodeApi:    -1,
            statusMessageApi: "Error de método y consulta",
            statusCode: 500,

        }
        return authInterface;
    }
}