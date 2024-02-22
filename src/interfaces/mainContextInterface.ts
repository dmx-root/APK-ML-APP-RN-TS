interface account{
    id:number,
    initialRoute:string,
    routes:any, 
    context:any
}

export interface MainContextInterface{
    account:account|null,
    setAccount:React.Dispatch<React.SetStateAction<account|null>>
}