import { ButtonFullWidth }                                              from '../components/buttonFullWidth';
import { OperationInterface }                                           from '../interfaces/view/production';
import { ModalContainer }                                               from '../components/modalContainer';
import { Modal }                                                        from '../components/modal';
import { StyleSheet,View,Text,GestureResponderEvent, TextInput, TouchableOpacity } from 'react-native';
import { useState }                                                     from 'react';
import { FieldInfo }                                                    from '../components/fieldInfo';
import { AlertIcon }                                                    from '../public/icons/alertIcon';

export function ModalProductionEdit({
    handlerClick, 
    setOperationData, 
    operationData,
}:{
    handlerClick:       (event:GestureResponderEvent)=>void,
    setOperationData:   React.Dispatch<React.SetStateAction<OperationInterface>>,
    operationData:      OperationInterface,
}){

    const [value, setValue] = useState<number>(0)

    return <Modal handlerClick={handlerClick}>
                <ModalContainer color='#FFF'>
                    
                    <FieldInfo label={`Acción solo permitida por perfil administrativo`} color='#AAA'>
                        <AlertIcon color="#AAA" size={24} width={2} />
                    </FieldInfo>
                    <View style={prodEdit.fieldContainer}>
                        <View style={prodEdit.labelContanier}>
                            <Text style={prodEdit.title}>Cantidad registrada</Text>
                        </View>
                        <View style={prodEdit.contentContainer}>
                            <Text style={prodEdit.title}>{operationData.cantidad}</Text>
                        </View>
                        <View style={[prodEdit.contentContainer,{borderColor:'#FFF'}]}/>
                    </View>
                    <View style={prodEdit.fieldContainer}>
                        <View style={prodEdit.labelContanier}>
                            <Text style={prodEdit.title}>Nueva cantidad</Text>
                        </View>
                        <View style={prodEdit.contentContainer}>
                            <TextInput 
                            style={prodEdit.content}
                            // value={value.toString()}
                            onChangeText={(txt)=>{
                                setValue(parseInt(txt))
                            }}/>
                        </View>
                
                        <TouchableOpacity 
                        style={prodEdit.buttonContainer} 
                        onPress={(e)=>{
                            handlerClick(e);
                            setOperationData({...operationData,cantidad:value})
                        }}>
                            <Text style={{color:'#FFF',fontWeight:'700'}}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:25}}/>
                    <ButtonFullWidth 
                    handlerClick={(e)=>{
                        handlerClick(e);
                    }} 
                    color='#44329C' 
                    label='Cerrar' 
                    fontColor='#C7CCEC'/>
                </ModalContainer>
            </Modal>
}

const prodEdit=StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        marginBottom:20,
    },
    fieldContainer:{
        flexDirection:'row',
        width:'100%',
        height:50,
        alignContent:'center',
        justifyContent:'space-between',
        marginBottom:5,
        marginTop:2
    },
    labelContanier:{
        width:'49.5%',
        height:'100%',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#DDD',
        paddingLeft:15,
    },
    contentContainer:{
        width:'24.5%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#DDD'
    },
    buttonContainer:{
        backgroundColor:'#44329C',
        borderRadius:8,
        width:'25%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:15,
        color:'#777',
        fontWeight:'bold'
    },
    content:{
        fontSize:15,
        color:'#777',
        height:'100%',
        width:'100%',
        textAlign:'center'
    },
});