import axios,{AxiosRequestConfig} from 'axios';

interface Data {
    [key:string]:string|number|boolean|Date|null
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

interface ParamsInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ParamsInterface; 
    token? : string
}

export class ConectionInterfaceRequest{

    async getData({url, params, token} : PropertiesInterface){

        const data:AxiosRequestConfig={
            method:"get",
            url,
            params: params || null,
            headers:{
                "Authenticate-Token":token || null
            },
            withCredentials:true
        }
    return await axios(data);
   
    }
}