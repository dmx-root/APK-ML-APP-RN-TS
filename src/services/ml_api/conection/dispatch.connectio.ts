import { AxiosResponse, AxiosRequestConfig, AxiosHeaders } from  'axios';
import axios from 'axios';

interface ObjectInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ObjectInterface; 
    headers? : AxiosHeaders;
}

export class ConectionInterfaceDispatch{

    private url;
    private params;
    private headers;

    constructor({url,params,headers}:PropertiesInterface){
        this.url =      url;
        this.params =   params || null;
        this.headers=   headers;
    }

    async postData(data?:any){

        const axiosData : AxiosRequestConfig = {
            method:     "post",
            url:        this.url,
            data:       data||null,
            params:     this.params,
            headers:    this.headers
            
        }
        return await axios(axiosData);
    }
}