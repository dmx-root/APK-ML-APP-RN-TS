interface ParamsInterface{
    [key : string] : any
}

interface PropertiesInterface{
    url : string; 
    params? : ParamsInterface; 
    token? : string
}
interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    data? : any[],
    statusCode? : number
}

export interface ApiConnectionInterface{
    productionData (): Promise <ControllerResponseInterface>;
}

