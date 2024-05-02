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
import { EditICon }                     from '../../public/icons/editIcon'
import { Alert }                        from "react-native";

//Doc 
// Este módulo permite listar todas las operaciones posibles del aplicativo 
// Cada item consta de:
// icon: el ícono que reprensenta la operación (En caso de ser necesario para ser renderizado)
// operation_label: el nombre de cada operación, este nos permite identificar la operación (No se renderiza)
// handler_click: es la acción que deberá ejecuatar el item al ser seleccionado 
// En cada inicio de sesión se accede a las funcionalidades u operaciones permitidas por medio del ID de la operación
// Esta diseñado de manera que el ID del item coincida con el ID de la operación solicitada de la base de datos, de esta manera puede ser accedido

interface operationInterface{
    [key:number]:any
}

interface SetStateDsipatchInterface{
    [key:string]:React.Dispatch<React.SetStateAction<boolean>>
} 

export const useOperationHandler  = ({
    navigation,
    setStateActions
}:{
    navigation: any;
    setStateActions: SetStateDsipatchInterface
}):{ OPERATIONS_ITEMS:operationInterface } =>{

    const OPERATIONS_ITEMS:operationInterface={
        3:{
            icon:<LogoutIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Cerrar Sesión",
            handlerClick:() => {
                Alert.alert('Se cerrará la sesión', '¿Está seguro de cerrar la sesión?',
                [
                    {text: 'OK', onPress:()=>{
                        handlerGetValueLocalStorage('token').
                        then(element=>{
                            if(element)handlerRemoveValueLocalStorage('token').catch(err=>console.log(err));
                        }).
                        catch(err=>console.log(err));
                        // navigation.navigate('Login');

                    }, style: 'cancel'},
                    {text: 'CANCEL', onPress: () =>{
                        
                    }, style: 'cancel'},
                ]);
                
            }
        },
        1:{
            icon:<UserIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Ver Perfil",
            handlerClick:() => {
                navigation.navigate('Profile');
                setStateActions.setAsideState(false);
            }
        },
        16:{
            icon:<CreateOcrIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Crear OCR", 
            handlerClick:() => {
                // navigation.navigate('Profile');
                setStateActions.setAsideState(false);
                setStateActions.setNewRegister(true);
            }
        },
        33:{
            icon:<CreateOcrIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Crear OCR de segundas", 
            handlerClick:() => {
                // navigation.navigate('Profile');
                setStateActions.setAsideState(false);
                setStateActions.setModalSegundas(true);
            }
        },
        19:{
            icon:<EditICon color='#FFF' size={35} width={2}/> ,
            operation_label: "Revisar OCR",
            handlerClick:() => {}
        },
        20:{
            icon:<OcrIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Mostrar OCR's",
            handlerClick:() => {
                setStateActions.setAsideState(false);
                navigation.navigate('HomeOcr');
            }
        },
        21:{
            icon:<OpIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Abrir OP",  
            handlerClick:() => {
                setStateActions.setAsideState(false);
                setStateActions.setNewRegister(true);                
            }
        },
        22:{
            icon:<CalendarIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Asignar Fecha de Ejecucion de OP",
            handlerClick:() => {}
        },
        23:{
            icon:<CalendarIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Asignar Fecha de Ejecucion de Detalle OP",
            handlerClick:() => {}
        },
        26:{
            icon:<OpIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Ver OP's",
            handlerClick:() => {
                setStateActions.setAsideState(false);
                navigation.navigate('HomeOp')
            }
        },
        27:{
            icon:<ModuloIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Asignar op al módulo",
            handlerClick:() => {
                setStateActions.setAsideState(false);

            }
        },
        
        28:{
            icon:<EmployeerIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Administrar Operarios",
            handlerClick:() => {
                setStateActions.setAsideState(false);
                navigation.navigate('HomeEmployeers')
                
            }
        },
        32:{
            icon:<ModuloIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Mostrar Módulos",
            handlerClick:() => {
                setStateActions.setAsideState(false);
                navigation.navigate('HomeModulos')
            }
        },
        31:{
            icon:<EmployeerIcon color='#FFF' size={35} width={2}/>,
            operation_label: "Mostrar Operarios", 
            handlerClick:() => {
                setStateActions.setAsideState(false);
                navigation.navigate('HomeEmployeers')
            }
        }
    }

    return { OPERATIONS_ITEMS };
    
}