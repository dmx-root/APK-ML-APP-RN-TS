import axios,{AxiosRequestConfig} from 'axios';

interface ParamsInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ParamsInterface; 
    token? : string
}

export class ConectionRequestInterface{

    private url;
    private params;
    private token;

    constructor({url,params,token}:PropertiesInterface){
        this.url =      url;
        this.params =   params || null;
        this.token =    token || null;
    }

    async getData(){

        const data:AxiosRequestConfig={
            method:"get",
            url:this.url,
            params: this.params || null,
            headers:{
                "Authenticate-Token":this.token || null
            },
            withCredentials:true
        }
    return await axios(data);
   
    }
}