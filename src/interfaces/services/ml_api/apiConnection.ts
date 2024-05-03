
interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    data? : any[],
    statusCode? : number
}

interface obj{
    [key: string]: any
}

export interface ApiConnectionInterface{
    productionData (): Promise <ControllerResponseInterface>;
    set _headers(headers:obj)
    set _params(params:obj)
    set _url(url:string)
}

