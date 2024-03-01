import { GestureResponderEvent, StyleSheet, View, Text }    from "react-native";
import { Modal }                                            from "../components/modal";
import { ModalContainer }                                   from "../components/modalContainer";
import { InfoLine }                                         from "../components/infoLine";
import { ButtonFullWidth }                                  from "../components/buttonFullWidth";
import { FieldInfo }                                        from "../components/fieldInfo";
import { InfoIcon }                                         from "../public/icons/infoIcon";
import { useLocalStorageGetData } from "../controllers/hooks/customHookGetDataLocalStorage";
import { LoadingComponent } from "../components/loadingComponent";
import { EmptyComponent } from "../components/emptyComponent";


export function ModalRegisterOcrCurrentOp({handlerClick}:{
    handlerClick:(event:GestureResponderEvent)=>void
}){
    const { state } = useLocalStorageGetData('currentOcr');
    // console.log(state)
    return <Modal handlerClick={handlerClick}>
                <ModalContainer color='#C7CCEC'>
                    
                    <View style={modalStyle.title}>
                        <Text style={modalStyle.content}>¿Desea continuar con la misma información?</Text>
                    </View>

                    {   
                        state.loading||!state.data?
                        <LoadingComponent label="Cargando información..."/>:
                        state.error?
                        <EmptyComponent label="Error al tratar de cargar la información..."/>:
                        <>
                            <InfoLine title='OP' content={state.data.op||'No def'}/>
                            <InfoLine title='MODULO' content={state.data.modulo?`Modulo-${state.data.modulo}`:'No def'}/>
                        </>
                    }

                    <FieldInfo label='La información no se registrará si no ingresa los datos correctos ' color='#44329C'>
                        <InfoIcon color="#44329C" size={24} width={2}/>
                    </FieldInfo>

                    <View style={modalStyle.empty}></View>

                    <ButtonFullWidth 
                    fontColor='#44329C' 
                    color='#FFF' 
                    label='Registrar   ->' 
                    handlerClick={()=>{}}/>

                    <ButtonFullWidth 
                    fontColor='#44329C' 
                    color='#FFF' 
                    label='<-   Ingresar Nueva Información' 
                    handlerClick={()=>{}}/>

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