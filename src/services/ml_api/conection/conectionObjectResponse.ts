import axios,{AxiosRequestConfig} from 'axios';

interface Data {
    [key:string]:string|number|boolean|Date
}

export class ConectionObjectResponse{

    async postData(path:string,data:any, params?:any){
        const axiosData:AxiosRequestConfig={
            method:"post",
            url:path,
            data,
            params:params?params:null,
            headers:{
                "access-token-auth":"none"
            }
        }
        return await axios(axiosData);
    }

    async putData(path:string,data:Data,id:string|undefined,params:Data|null){
        const axiosData:AxiosRequestConfig={
            method:"put",
            url:path,
            data,
            params:params?params:null,
            headers:{
                "access-token-auth":"none"
            },
            withCredentials:true
        }
        return await axios(axiosData);
    }
    
    async deleteData(path:string, id:string|undefined, params:Data|undefined){
        const axiosData:AxiosRequestConfig={
            method:"delete",
            url:path+id?id:'',
            params:params?params:null,
            headers:{
                "access-token-auth":"none"
            }
        }
        return await axios(axiosData);
    }
}