import {Item} from './homeRoutes';

export interface account{
    id:number,
    initialRoute:string,
    routes:any, 
    context:any,
    home:Array<Item>|null
}

export interface CurrentUser{
    documentoid:string,
    tipoDocumento:number
    nombre:string,
    rolId:number,
    rolNombre:string,
    descripcion:string,
    creacionFecha:string | Date
}