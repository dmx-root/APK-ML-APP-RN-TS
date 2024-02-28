import { useNavigation, NavigationProp }            from '@react-navigation/native';
import { OcrIcon }                                  from '../../public/icons/ocrIcon';
import { OpIcon }                                   from '../../public/icons/opIcon';
import { ModuloIcon }                               from '../../public/icons/moduloIcon';
import { EmployeerIcon }                            from '../../public/icons/employeerIcon';
import { Item }                                     from '../../interfaces/app/homeRoutes';


export const ADMIN_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>
    },
    {
        id:4,
        item:'HomeEmployeers',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<EmployeerIcon color='#777' size={35} width={2}/>
    },
] 
export const PROCESSES_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>
    },
    {
        id:4,
        item:'HomeEmployeers',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<EmployeerIcon color='#777' size={35} width={2}/>
    },
]   
export const PLANTA_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>
    },
    {
        id:4,
        item:'HomeEmployeers',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<EmployeerIcon color='#777' size={35} width={2}/>
    },
] 
export const FACTURACION_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>
    }
] 
export const GUEST_HOME_ROUTES:Array<Item> = [
    {
        id:1,
        item:'HomeOcr',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OcrIcon color='#777' size={35} width={2}/>
    },
    {
        id:2,
        item:'HomeOp',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<OpIcon color='#777' size={35} width={2}/>
    },
    {
        id:3,
        item:'HomeModulos',
        NAVIGATE:(view:string,dispatch:any)=>{dispatch.navigate(view)},
        icon:<ModuloIcon color='#777' size={35} width={2}/>
    }
] 