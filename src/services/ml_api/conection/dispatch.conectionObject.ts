import { AxiosResponse, AxiosRequestConfig } from  'axios';
import axios from 'axios';

interface ObjectInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ObjectInterface; 
    token? : string;
}

export class ConectionInterfaceDispatch{

    private url;
    private params;
    private token;

    constructor({url,params,token}:PropertiesInterface){
        this.url =      url;
        this.params =   params || null;
        this.token =    token || null;
    }

    async postData(data?:any){

        const axiosData : AxiosRequestConfig = {
            method:"post",
            url:        this.url,
            data:       data||null,
            params:     this.params,
            headers: {
                "Authenticate-Token": this.token
            }
        }
        return await axios(axiosData);
    }
}