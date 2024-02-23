 export interface Item{
    id:number,
    item:string,
    NAVIGATE:(view:string, dispatch:any)=>void,
    icon:React.ReactElement
}

