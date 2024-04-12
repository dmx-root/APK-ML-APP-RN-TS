import { ModalContainer }           from '../components/modalContainer';
import { Modal }                    from '../components/modal';
import { GestureResponderEvent, StyleSheet, View, Text }    from 'react-native';
import { InfoLineDouble }           from '../components/infoLineDouble';
import { FieldInfo }                from '../components/fieldInfo';
import { OcrIcon }                  from '../public/icons/ocrIcon';
import { EmptyComponent }           from '../components/emptyComponent';
import { InformationSegundaComponent } from '../components/informationSegundaComponent'

export function ModalProductionSegundas({
    handlerClick, 
}:{
    handlerClick: (event:GestureResponderEvent)=>void,
}){
    const data : any = {}
    return <Modal handlerClick={handlerClick}>
                <ModalContainer color='#C7CCEC'>
                    <InfoLineDouble title1='FECHA' content1={'- - -  - - -  - - -'} title2='OPERARIO' content2={''}/>
                    <InfoLineDouble title1='OP' content1={''} title2='MÓDULO' content2={''}/>
                    <FieldInfo label='Registro de segundas' color='#44329C'>
                        <OcrIcon color="#44329C" size={24} width={2}/>
                    </FieldInfo>
                    <View style={segundasModal.fieldArea}>
                        {/* <EmptyComponent label='No se han registrado elementos...' color='#CCC'/> */}
                        <InformationSegundaComponent handlerClick={()=>{}} data={data}/>
                        <InformationSegundaComponent handlerClick={()=>{}} data={data}/>
                    </View>
                    <FieldInfo label='Lectura para códigos de barras' color='#44329C'>
                        <></>
                    </FieldInfo>
                    <View style={segundasModal.inputContainer}>
                        <View style={segundasModal.labelContanier}>
                            <Text style={segundasModal.title}>EAN</Text>
                        </View>
                        <View style={segundasModal.labelContanier}>
                            <Text style ={segundasModal.title}>7778874445545</Text>
                        </View>
                        <View style={segundasModal.labelContanier}>
                            
                        </View>
                    </View>
                </ModalContainer>
            </Modal>
}

const segundasModal=StyleSheet.create({
    fieldArea:{
        width:'100%',
        height:300,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 20,
        alignItems:'center'
    },
    inputContainer:{
        width:'100%',
        height:50,
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    labelContanier:{
        backgroundColor:'#FFF',
        height:'100%',
        width:'33%',
        justifyContent:'center',
        // alignItems:'center',
        paddingLeft:30
    },
    title:{
        color:'#777',
        fontWeight:'bold'
    }
})