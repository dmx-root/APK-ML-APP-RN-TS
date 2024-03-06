import { GestureResponderEvent } from 'react-native'
import { statusApi } from '../services/ml_api/apiResponse';
export type FilterItem={
    id:number,
    label:string
} 

interface ApiState {
    data: any | null;
    loading: boolean;
    error: statusApi| null;
}


export interface Item{
    id:number,
    item:string,
    icon:React.ReactElement,
    actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>React.ReactElement,
    filterList: Array<FilterItem>,
    mainFetch:(documentId?:string)=>any
    NAVIGATE:(view:string, dispatch:any)=>void,
}

