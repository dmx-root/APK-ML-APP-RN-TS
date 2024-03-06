import { statusApi } from "./apiResponse";

export interface authInterface{
    userDocumentId:string,
    userName:string,
    userDescription:string,
    userState:boolean,
    userCreteDate:Date | string,
    userProfileId:number,
    userDocumentType:number,
    userProfileLAbel:string,
}

export const inicialStateAuth:authInterface={
    userDocumentId:'No def',
    userName:'No def',
    userDescription:'No def',
    userState:false,
    userCreteDate: 'No def',
    userProfileId:0,
    userDocumentType:0,
    userProfileLAbel:'No def'
}

export interface authResponseInterface extends statusApi{
    data:authInterface,
    toke:string
}


