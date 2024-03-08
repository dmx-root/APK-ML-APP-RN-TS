import { KeyboardTypeOptions } from 'react-native';

export interface modal{
    state:boolean,
    label:string,
    key:string
    type:string,
    value:string,
    placeHolder:string,
    keyboard:KeyboardTypeOptions,
}

export const newModal:modal = {
    state:false,
    label:'',
    type:'',
    value:'',
    key:'none',
    keyboard:'default',
    placeHolder:''
}

export interface form{
    [key:string]:string
}

