import { ButtonFullWidth }                                          from '../components/buttonFullWidth';
import { OperationInterface }                                       from '../interfaces/view/production';
import { ModalContainer }                                           from '../components/modalContainer';
import { Modal }                                                    from '../components/modal';
import { StyleSheet, View, Text, GestureResponderEvent, TextInput}  from 'react-native';
import { useState }                                                 from 'react';

export function ModalProductionRegister({handlerClick, operationData, setOperationData}:{
    handlerClick:(event:GestureResponderEvent)=>void,
    setOperationData: React.Dispatch<React.SetStateAction<OperationInterface | null>>
    operationData: OperationInterface | null,
}){
    const [ cant, setCant] = useState<number>(0);
    const [ value, setValue] = useState<string>('')

    return <Modal handlerClick={handlerClick}>
                <ModalContainer color='#FFF'>
                    <View style={prodRegister.container}>
                        <View style={prodRegister.row}>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>COLOR</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>{operationData?.colorEtiqueta.slice(0,10)}</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>EAN</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>{operationData?.ean}</Text>
                            </View>
                        </View>
                        <View style={prodRegister.row}>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>TALLA</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>{operationData?.tallaId}</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>UNIDADES</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>{operationData?.cantidad}</Text>
                            </View>
                        </View>
                        <View style={prodRegister.row}>
                            <View style={[prodRegister.column,{width:'50%'}]}>
                                <Text style={[prodRegister.title,{alignItems:'center'}]}>REGISTRO EAN</Text>
                            </View>
                            <TextInput 
                            style={[prodRegister.column,{width:'50%'}]}
                            onChangeText={(text)=>{
                                setValue(text);
                                console.log(text)
                            }}
                            value={value}
                            />
                        </View>
                    </View>
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

const prodRegister=StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        marginBottom:20,
        // backgroundColor:'aqua'
    },
    row:{
        flexDirection:'row',
        height:55,
        width:'100%',
        // backgroundColor:'aqua',
        marginBottom:2

    },
    column:{
        height:'100%',
        width:'25%',
        borderColor:'#DDD',
        borderWidth:1,
        justifyContent:'center',
        // alignItems:'center',
        paddingLeft:20,
        fontSize:18,
        color:'#555'

    },
    title:{
        fontSize:15,
        color:'#777',
        fontWeight:'700',

    }

});