import { View, TextInput, StyleSheet, Text, KeyboardTypeOptions } from 'react-native';

// Doc 
// Este componente tiene el proposito actuar como entrada de texto en al cual ya se establece el label correspondiente
// Este componente ya viene con una altura definida por defecto pero su amplitud viene definida por su componente padre 
// Recibe como parámetros de entrada los siguientes valores:
// color:string => color del label 
// label:string => label o etiqueta
// handlerInput:(value:string)=>void =>manejador de eventos para la entrada de texto
// textType:KeyboardTypeOptions => tipo de entrada de texto, numeric, password, pad, etc.
// value:string => valor que será renderizado en el input
// placeholder:string => valor placeholder 

export function Input({color,label,handlerInput,textType,placeholder,value}:{
    color:string,
    label:string,
    handlerInput:(value:string)=>void,
    textType:KeyboardTypeOptions,
    value:string,
    placeholder:string
}){
    return <View style={inputStyle.container}>
                <View style={inputStyle.frame}>
                    <View style={inputStyle.labelContainer}>
                        <Text style={[inputStyle.content,{color}]}>{label}</Text>
                    </View>
                    <View style={inputStyle.inputContainer}>
                        <TextInput 
                        onChangeText={handlerInput} 
                        style={inputStyle.input} 
                        keyboardType={textType} 
                        placeholder={placeholder}
                        placeholderTextColor={'#CCC'} 
                        value={value}/>
                    </View>
                </View>
            </View>
}

const inputStyle=StyleSheet.create({
    container:{
        width:'100%',
        height:80,
        justifyContent:'center'
    },
    frame:{
        width:'100%',
        height:'70%',
        flexDirection:'row',
        
    },
    labelContainer:{
        height:'100%',
        width:'40%',
        justifyContent:'center'
    },
    inputContainer:{
        height:'100%',
        width:'60%',
        backgroundColor:'#FFF'
    },
    content:{
        fontSize:18,
        fontWeight:'700',
    },
    input:{
        height:'100%',
        width:'100%',
        // backgroundColor:'aqua',
        paddingLeft:20,
        fontSize:20,
        color:'#999',
        fontWeight:'600'
    }
})