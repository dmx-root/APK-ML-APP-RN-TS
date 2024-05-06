import { AxiosResponse, AxiosRequestConfig, AxiosHeaders, Method } from  'axios';
import axios from 'axios';

interface ObjectInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    method: 'post' | 'put' | 'patch' | 'delete'
    params? : ObjectInterface; 
    headers? : ObjectInterface;
}

export class ConectionInterfaceDispatch{

    private url;
    private params;
    private headers;
    private method;

    constructor({url,params,headers, method}:PropertiesInterface){
        this.url =      url;
        this.params =   params || null;
        this.headers=   headers;
        this.method =   method
    }

    async dispatchData(data?:any){

        const axiosData : AxiosRequestConfig = {
            method:     this.method,
            url:        this.url,
            data:       data||null,
            params:     this.params,
            headers:    this.headers
            
        }
        return await axios(axiosData);
    }
}