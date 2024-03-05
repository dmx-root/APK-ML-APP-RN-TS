import { statusApi } from "./apiResponse";

export interface authInterface{
    userDocumentId:string,
    userName:string,
    userDescription:string,
    userState:boolean,
    userCreteDate:Date,
    userProfileId:number,
    userDocumentType:number,
    userProfileLAbel:string,
}

export interface authResponseInterface extends statusApi{
    data:authInterface,
    toke:string
}


