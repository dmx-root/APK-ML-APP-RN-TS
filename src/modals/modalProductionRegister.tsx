import { OpDetail }                                                     from '../interfaces/services/ml_api/detailOpInteface';
import { ButtonFullWidth }                                              from '../components/buttonFullWidth';
import { OperationInterface, newOperation }                             from '../interfaces/view/production';
import { ModalContainer }                                               from '../components/modalContainer';
import { Modal }                                                        from '../components/modal';
import { StyleSheet,View,Text,GestureResponderEvent, TextInput, Alert}  from 'react-native';
import { useEffect, useState }                                          from 'react';
import { handlerSaveObjectLocalStorage }                                from '../controllers/helpers/handlerObjectLocalStorage';

export function ModalProductionRegister({
    handlerClick, 
    setOperationData, 
    setDetailOp,
    operationData, 
    
    opDetails
}:{
    handlerClick:       (event:GestureResponderEvent)=>void,
    setOperationData:   React.Dispatch<React.SetStateAction<OperationInterface>>,
    setDetailOp:        React.Dispatch<React.SetStateAction<OpDetail | null>>,
    // detailOp:           OpDetail,
    operationData:      OperationInterface,
    opDetails:          Array<OpDetail>
}){

    const [ value, setValue ] = useState<string>(''); 

    useEffect(()=>{
        // Test value -> 7705531160577 para MOB3548

        if(value.length>12){// validamos la longitud de caracteres ingresados en el código de barras
            setValue('');
            if(operationData&&!operationData.cantidad){// validamos el primer registro 

                const response = opDetails.find(element=>element.ean===value);// se busca la coincidencia entre el elemento leído y el elemento cargado
                
                if(response&&operationData){ // validamos si el ean ingresado pertenece a las listas de OP's proporcionadas
                    setDetailOp(response);
                    setOperationData({ // establecemos la información inicial
                        ...operationData,
                        colorEtiqueta:  response.colorEtiqueta,
                        colorId:        response.colorCodigo,
                        ean:            response.ean,
                        tallaId:        response.talla,
                        refererncia:    response.referencia,
                        cantidad:       1,
                    });
                }
            }else{
                if(operationData&&operationData.ean===value){// validamos si la informacion 
    
                    setOperationData({ // Se da inicio al conteo de prendas 
                        ...operationData,
                        cantidad:(operationData.cantidad+1)
                    });
                }else{
                    Alert.alert('¡Error en la lectura de los datos!', 'La prenda ingresada no pertenece a la OP seleccionada')
                }
            }
        }
    },[value]);

    return <Modal handlerClick={handlerClick}>
                <ModalContainer color='#FFF'>
                    <View style={prodRegister.container}>
                        <View style={prodRegister.row}>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>COLOR</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>{operationData?.colorEtiqueta.slice(0,10)||'No asignado'}</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>EAN</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>{operationData?.ean||'No asignado'}</Text>
                            </View>
                        </View>
                        <View style={prodRegister.row}>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>TALLA</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>{operationData?.tallaId||'No asignado'}</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>UNIDADES</Text>
                            </View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>{operationData?.cantidad||0}</Text>
                            </View>
                        </View>
                        <View style={prodRegister.row}>
                            <View style={[prodRegister.column,{width:'50%'}]}>
                                <Text style={[prodRegister.title,{alignItems:'center'}]}>REGISTRO EAN</Text>
                            </View>
                            <TextInput 
                            style={[prodRegister.column,{width:'50%'}]}
                            onChangeText={(text)=>setValue(text)}
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