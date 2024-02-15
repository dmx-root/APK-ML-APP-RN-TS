import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { GestureResponderEvent } from "react-native"

// Doc
// Boton para el envio de información
// usado en interfaces de autorización  
// Este componente recive comno parametros de entrada la etiqueta del botoón y el manejador de eventos al ser presionado el elemento

export function AuthButton({label,handlerClick}:{
    label:string,
    handlerClick:(event: GestureResponderEvent) => void 
}){
    return <View style={authButtonStyle.authButtonContainer}>
                <TouchableOpacity style={authButtonStyle.authButton} onPress={handlerClick}>
                    <Text style={{color:'#FFF', fontWeight:'300', fontSize:25}}>{label}</Text>
                </TouchableOpacity>
            </View>
}

const authButtonStyle= StyleSheet.create({
    authButtonContainer:{
        width:'100%',
        height:100,
        // backgroundColor:'aqua',
        marginBottom:'5%',
        alignItems:'center',
        justifyContent:'center',
    },
    authButton:{
        // backgroundColor:'#44329C',
        width:'100%',
        height:'80%',
        borderWidth:2,
        borderColor:'#FFF',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    }
})