import { useLocalStorageGetData }                           from "../controllers/hooks/customHookGetDataLocalStorage";
import { LoadingComponent }                                 from "../components/loadingComponent";
import { ButtonFullWidth }                                  from "../components/buttonFullWidth";
import { ModalContainer }                                   from "../components/modalContainer";
import { EmptyComponent }                                   from "../components/emptyComponent";
import { InfoIcon }                                         from "../public/icons/infoIcon";
import { FieldInfo }                                        from "../components/fieldInfo";
import { InfoLine }                                         from "../components/infoLine";
import { Modal }                                            from "../components/modal";
import { GestureResponderEvent, StyleSheet, View, Text }    from "react-native";
import { OperationInterface } from "../interfaces/view/production";


export function ModalRegisterOcrCurrentOp({handlerClose, handlerNext, handlerBack, data}:{
    handlerClose:(event:GestureResponderEvent)=>void,
    handlerNext:(event:GestureResponderEvent)=>void,
    handlerBack:(event:GestureResponderEvent)=>void,
    data: OperationInterface
}){

    return <Modal handlerClick={handlerClose}>
                <ModalContainer color='#C7CCEC'>
                    
                    <View style={modalStyle.title}>
                        <Text style={modalStyle.content}>¿Desea continuar con la misma información?</Text>
                    </View>

                    <InfoLine title='OP' content={data.op||'No def'}/>
                    <InfoLine title='MODULO' content={data.moduloId?`Modulo-${data.moduloId}`:'No def'}/>

                    <FieldInfo label='La información no se registrará si no ingresa los datos correctos ' color='#44329C'>
                        <InfoIcon color="#44329C" size={24} width={2}/>
                    </FieldInfo>

                    <View style={modalStyle.empty}></View>

                    <ButtonFullWidth 
                    fontColor='#44329C' 
                    color='#FFF' 
                    label='Registrar   ->' 
                    handlerClick={handlerNext}/>

                    <ButtonFullWidth 
                    fontColor='#44329C' 
                    color='#FFF' 
                    label='<-   Ingresar Nueva Información' 
                    handlerClick={handlerBack}/>

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