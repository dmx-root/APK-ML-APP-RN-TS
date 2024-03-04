import { GestureResponderEvent } from 'react-native'
export type FilterItem={
    id:number,
    label:string
} 

export interface Item{
    id:number,
    item:string,
    icon:React.ReactElement,
    actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>React.ReactElement,
    filterList: Array<FilterItem>,
    NAVIGATE:(view:string, dispatch:any)=>void,
}

