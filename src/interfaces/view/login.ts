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

export interface form{
    [key:string]:string
}

