import axios,{AxiosRequestConfig} from 'axios';

interface Data {
    [key:string]:string|number|boolean|Date
}

export class ConectionObjectRequest{

    async getData(path:string, params?: Data | null , token?:string){

        const data:AxiosRequestConfig={
            method:"get",
            url:path,
            params:params,
            headers:{
                "Authenticate-Token":token||"none"
            },
            withCredentials:true
        }
    return await axios(data);
   
    }

}