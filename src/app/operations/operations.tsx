import { CalendarIcon }     from "../../public/icons/calendarIcon";
import { CreateOcrIcon }    from "../../public/icons/createOcrIcon";
import { EmployeerIcon }    from "../../public/icons/employeerIcon";
import { LogoutIcon }       from "../../public/icons/logoutIcon";
import { ModuloIcon }       from "../../public/icons/moduloIcon";
import { OcrIcon }          from "../../public/icons/ocrIcon";
import { OpIcon }           from "../../public/icons/opIcon";
import { UserIcon }         from "../../public/icons/userIcon";

interface operationInterface{
    [key:number]:any
}

export const OPERATIONS:operationInterface={
    3:{
        icon:<LogoutIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Cerrar Sesión",
        handlerClick:() => {}
    },
    1:{
        icon:<UserIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Ver Perfil",
        handlerClick:(navigation:any) => {
            navigation.navigate('Profile');
        }
    },
    16:{
        icon:<CreateOcrIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Crear OCR", 
        handlerClick:() => {}
    },
    19:{
        icon:<OcrIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Mostrar OCR",
        handlerClick:() => {}
    },
    20:{
        icon:<OpIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Abrir OP",  
        handlerClick:() => {}
    },
    21:{
        icon:<CalendarIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Asignar Fecha de Ejecucion de OP",
        handlerClick:() => {}
    },
    22:{
        icon:<CalendarIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Asignar Fecha de Ejecucion de Detalle OP",
        handlerClick:() => {}
    },
    25:{
        icon:<OpIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Ver OP's",
        handlerClick:() => {}
    },
    26:{
        icon:<ModuloIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Asignar op al módulo",
        handlerClick:() => {}
    },
    
    27:{
        icon:<EmployeerIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Administrar Operarios",
        handlerClick:() => {}
    },
    31:{
        icon:<ModuloIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Mostrar Módulos",
        handlerClick:(navigation:any) => {
            navigation.navigate('HomeModulos')
        }
    },
    28:{
        icon:<EmployeerIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Remover Operario",  
        handlerClick:() => {}
    },
    30:{
        icon:<EmployeerIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Mostrar Operarios", 
        handlerClick:() => {}
    }
}