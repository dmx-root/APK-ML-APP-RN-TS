import { useNavigation, NavigationProp }            from '@react-navigation/native';
import { OcrIcon }                                  from '../../public/icons/ocrIcon';
import { OpIcon }                                   from '../../public/icons/opIcon';
import { ModuloIcon }                               from '../../public/icons/moduloIcon';
import { EmployeerIcon }                            from '../../public/icons/employeerIcon';
import { Item }                                     from '../../interfaces/app/homeRoutes';
import { FILTER_ITEMS_EMPLOYEERS_HOME, FILTER_ITEMS_MODULOS_HOME, FILTER_ITEMS_OCR_HOME, FILTER_ITEMS_OP_HOME }                    from './homeFilter';
import { ButtonHome }                               from '../../components/buttonHome';
import { PlusIcon }                                 from '../../public/icons/plusIcon';
import { GestureResponderEvent }                    from 'react-native';
import React                                        from 'react';


export const ADMIN_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>,
        actionObject:(
            handlerClick:(event:GestureResponderEvent)=>void
            )=>{
            return <ButtonHome label='Nueva OCR' handlerClick={handlerClick}>
                <PlusIcon color="#777" size={70} width={1}/>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>,
        actionObject:(
            handlerClick:(event:GestureResponderEvent)=>void
            )=>{
            return <ButtonHome label='Abrir OP' handlerClick={handlerClick}>
                <PlusIcon color="#777" size={70} width={1}/>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OP_HOME
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='Ver Módulos' handlerClick={handlerClick}>
                <ModuloIcon color="#777" size={35} width={1.5}/>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_MODULOS_HOME
    },
    {
        id:4,
        item:'HomeEmployeers',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<EmployeerIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='Adm Operarios' handlerClick={handlerClick}>
                <EmployeerIcon color="#777" size={35} width={1.5}/>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_EMPLOYEERS_HOME
    }
]; 

export const PROCESSES_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:4,
        item:'HomeEmployeers',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<EmployeerIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
];   

export const PLANTA_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:4,
        item:'HomeEmployeers',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<EmployeerIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
]; 

export const FACTURACION_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    }
]; 

export const GUEST_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>,
        actionObject:(handlerClick:(event:GestureResponderEvent)=>void)=>{
            return <ButtonHome label='' handlerClick={handlerClick}>
                <></>
            </ButtonHome>
        },
        filterList:FILTER_ITEMS_OCR_HOME
    }
]; 