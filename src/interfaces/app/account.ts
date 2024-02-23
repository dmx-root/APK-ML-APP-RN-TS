import {Item} from './homeRoutes';

export interface account{
    id:number,
    initialRoute:string,
    routes:any, 
    context:any,
    home:Array<Item>|null
}