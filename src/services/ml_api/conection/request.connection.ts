import axios,{AxiosRequestConfig, AxiosHeaders} from 'axios';

interface ParamsInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url? : string; 
    params? : ParamsInterface; 
    headers?: ParamsInterface
}

export class ConectionRequestInterface{

    private url;
    private params;
    private headers;

    constructor({url,params,headers}:PropertiesInterface){
        this.url =      url;
        this.params =   params || null;
        this.headers=   headers;
    }

    async getData(){
        // console.log(this.params)

        const data:AxiosRequestConfig={
            method:"get",
            url:this.url,
            params: this.params || null,
            headers: this.headers,
            withCredentials:true
        }
        return await axios(data);
    }

    set _url (url: string){
        this.url = url;
    }
    set _params(params: ParamsInterface){
        this.params = params
    }
    set _headers(headers : ParamsInterface){
        this.headers =headers
    }
}