import { ButtonFullWidth }                                  from "../components/buttonFullWidth";
import { OperationInterface, newOperation }                 from "../interfaces/view/production";
import { ModalContainer }                                   from "../components/modalContainer";
import { InfoIcon }                                         from "../public/icons/infoIcon";
import { useMainContext }                                   from "../contexts/mainContext";
import { FieldInfo }                                        from "../components/fieldInfo";
import { InfoLine }                                         from "../components/infoLine";
import { Modal }                                            from "../components/modal";
import { GestureResponderEvent, StyleSheet, View, Text }    from "react-native";
import { useRemoveDataOperation } from "../controllers/hooks/customHookRemoveOperation";
import { handlerRemoveValueLocalStorage } from "../controllers/helpers/handlerValueLocalStorage";
import { handlerRemoveSavedObjectLocalStorage } from "../controllers/helpers/handlerObjectLocalStorage";


export function ModalRegisterOcrCurrentOp({handlerClose, handlerNext, handlerBack,navigation,op,modulo}:{
    handlerClose:(event:GestureResponderEvent)=>void,
    handlerNext:(event:GestureResponderEvent)=>void,
    handlerBack:(event:GestureResponderEvent)=>void,
    navigation:any,
    op:string,
    modulo:string
}){
    const constexStorage = useMainContext()
    const { removeDataOperation } = useRemoveDataOperation();

    return <Modal handlerClick={handlerClose}>
                <ModalContainer color='#C7CCEC'>
                    
                    <View style={modalStyle.title}>
                        <Text style={modalStyle.content}>¿Desea continuar con la misma información?</Text>
                    </View>

                    <InfoLine title='OP' content={op}/>
                    <InfoLine title='MODULO' content={`Modulo-${modulo}`}/>

                    <FieldInfo label='La información no se registrará si no ingresa los datos correctos ' color='#44329C'>
                        <InfoIcon color="#44329C" size={24} width={2}/>
                    </FieldInfo>

                    <View style={modalStyle.empty}></View>

                    <ButtonFullWidth 
                    fontColor='#44329C' 
                    color='#FFF' 
                    label='Registrar   ->' 
                    handlerClick={(e)=>{
                        handlerNext(e);
                        const operationData: OperationInterface={
                            ...newOperation,
                            inicioOperacion:    new Date().toLocaleTimeString(),
                            fechaRegistro:      new Date().toLocaleDateString(),
                            moduloId:           modulo,
                            registradoPor:      constexStorage?.currentUser?.documentoid||''
                        }
                        navigation.navigate('Production',operationData);
                    }}/>

                    <ButtonFullWidth 
                    fontColor='#44329C' 
                    color='#FFF' 
                    label='<-   Ingresar Nueva Información' 
                    handlerClick={(e)=>{
                        handlerBack(e);
                        handlerRemoveValueLocalStorage('currentModulo').then(response=>{
                            console.log(response)
                        }).catch(err=>console.log(err));
                        handlerRemoveSavedObjectLocalStorage('currentOp').then(response=>{
                            console.log(response);
                        }).catch(err=>console.log(err))
                    }}/>

                </ModalContainer>
            </Modal>
}

const modalStyle= StyleSheet.create({
    empty:{
        width:'100%',
        height:20
    },
    title:{
        width:'100%',
        height:80,
        alignItems:'center'
    },
    content:{
        color:'#44329C',
        fontSize:20,
        fontWeight:'500',

    }
})