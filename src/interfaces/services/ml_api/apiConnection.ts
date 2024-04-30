
interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    data? : any[],
    statusCode? : number
}

export interface ApiConnectionInterface{
    productionData (): Promise <ControllerResponseInterface>;
}

