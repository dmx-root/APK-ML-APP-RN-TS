import { TextInput, View, Text, GestureResponderEvent}                      from "react-native";
import { StyleSheet, Dimensions, TouchableOpacity,KeyboardTypeOptions}      from 'react-native'
import { Modal }                                                            from "../components/modal";
import { CheckIcon }                                                        from "../public/icons/CheckIcon";
import { CloseIcon }                                                        from "../public/icons/closeIcon";

const {height,width} = Dimensions.get('window');

// Este componente tiene como finalidad desplegar un modal para ingresar informacion en por medio de un input 
// para esto al modal se le tiene que pasar los siguientes parámetros:
// label: titulo del modal 
// type: tipo de texto para el modal
// value: informacion que regresa el modal 
// keyboard: tipo de teclado que se desplegará en la pantalla
// placeHolder: place holder para el input del modal
// handlerValue: manejador de eventos el cual gestionará el paso de información entre el modal y la vista en la que se renderizará
// handlerClose: manejador de eventos el cual se encargará de cerrar el modal
// handlerSend: manejador de eventos el cual se encargará de validar la información escrita 

export function ModalInput({
    label,
    type,
    value,
    keyboard,
    placeHolder,
    handlerValue,
    handlerClose,
    handlerSend,
    }:{
    label:string,
    type:string|null,
    value:string|'',
    keyboard:KeyboardTypeOptions,
    placeHolder:string,
    handlerValue:(text:string)=>void,
    handlerClose:(event:GestureResponderEvent)=>void,
    handlerSend:(event:GestureResponderEvent)=>void,
}){
    return  <Modal handlerClick={handlerClose}>
                <View style={modalInputStyle.container}>
                    <View style={modalInputStyle.labelContainer}>
                        <Text style={{fontSize:18, fontWeight:'700', color:'#999'}}>{label}</Text>
                    </View>
                    <View style={modalInputStyle.inputContainer}>
                        <TextInput 
                            style={modalInputStyle.input}
                            onChangeText={handlerValue}
                            placeholder={placeHolder}
                            placeholderTextColor={'#CCC'}
                            keyboardType={keyboard}
                            value={value}
                        // onChangeText={(text)=>{setNewOp(text)} }
                        />
                    </View>
                    <View style={modalInputStyle.buttons}>
                        <TouchableOpacity  style={modalInputStyle.button} onPress={handlerClose}>
                            <CloseIcon color="#44329C" size={40} width={2}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={modalInputStyle.button} onPress={handlerSend}>
                            <CheckIcon color="#44329C" size={40} width={2}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
}

const modalInputStyle=StyleSheet.create({
    container:{
        width:width*0.7,
        // height:height*0.2

    },
    labelContainer:{
        width:'100%',
        height:60,
        // backgroundColor:'aqua',
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'100%',
        height:80,
        // backgroundColor:'aquamarine',
        justifyContent:'center'
    },
    buttons:{
        width:'100%',
        height:80,
        // backgroundColor:'aqua',
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input:{
        height:'70%',
        width:'100%',
        borderWidth:2,
        borderColor:'#CCC',
        borderRadius:4,
        padding:10,
        fontSize:20,
        textAlign:'center',
        fontWeight:'500',
        color:'#777',
        
        // backgroundColor:'aqua'
        // color:'#AAA'
    },
    button:{
        width:'49%',
        height:'70%',
        borderWidth:3,
        borderColor:'#C7CCEC',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    }
})