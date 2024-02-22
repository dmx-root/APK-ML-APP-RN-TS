import axios,{AxiosRequestConfig} from 'axios';

interface Data {
    [key:string]:string|number|boolean|Date
}

export class ConectionObjectRequest{
    async getData(id:string|null,path:string,params:Data|null){
        const data:AxiosRequestConfig={
            method:"get",
            url:path,
            params:params?params:null,
            headers:{
                "access-token-auth":"none"
            },
            withCredentials:true
        }
    return await axios(data);
   
    }

}