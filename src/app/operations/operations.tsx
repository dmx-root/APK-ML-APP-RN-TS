import { handlerGetValueLocalStorage, 
    handlerRemoveValueLocalStorage }    from "../../controllers/helpers/handlerValueLocalStorage";
import { useMainContext }               from "../../contexts/mainContext";
import { CalendarIcon }                 from "../../public/icons/calendarIcon";
import { CreateOcrIcon }                from "../../public/icons/createOcrIcon";
import { EmployeerIcon }                from "../../public/icons/employeerIcon";
import { LogoutIcon }                   from "../../public/icons/logoutIcon";
import { ModuloIcon }                   from "../../public/icons/moduloIcon";
import { OcrIcon }                      from "../../public/icons/ocrIcon";
import { OpIcon }                       from "../../public/icons/opIcon";
import { UserIcon }                     from "../../public/icons/userIcon";
import { Alert }                        from "react-native";

interface operationInterface{
    [key:number]:any
}

export const OPERATIONS_ITEMS:operationInterface={
    3:{
        icon:<LogoutIcon color='#FFF' size={35} width={2}/>,
        operation_label: "Cerrar Sesión",
        handlerClick:() => {
            handlerRemoveValueLocalStorage('token').then().catch();
        }
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

export const useOperationHandler  = ():{ OPERATIONS_ITEMS:operationInterface } =>{

    const contextStorage = useMainContext();

    const OPERATIONS_ITEMS:operationInterface={
        3:{
            icon:<LogoutIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Cerrar Sesión",
            handlerClick:(navigation:any) => {
                Alert.alert('Se cerrará la sesión', '¿Está seguro de cerrar la sesión?',
                [
                    {text: 'OK', onPress:()=>{
                        handlerGetValueLocalStorage('token').
                        then(element=>{
                            if(element)handlerRemoveValueLocalStorage('token').catch(err=>console.log(err));
                        }).
                        catch(err=>console.log(err));
                        navigation.navigate('Login');

                    }, style: 'cancel'},
                    {text: 'CANCEL', onPress: () =>{
                        
                    }, style: 'cancel'},
                ]);
                
            }
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
            handlerClick:(navigation:any) => {
                // navigation.navigate('Profile');
            }
        },
        19:{
            icon:<OcrIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Mostrar OCR",
            handlerClick:(navigation:any) => {
                navigation.navigate('HomeOcr');
            }
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
            handlerClick:(navigation:any) => {
                navigation.navigate('HomeOp')
            }
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

    return { OPERATIONS_ITEMS };
    
}