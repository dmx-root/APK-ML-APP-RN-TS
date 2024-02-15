import { View,Text,TouchableOpacity,GestureResponderEvent,StyleSheet } from "react-native";

// Doc 
// este elemento tiene la finalidad de utilizarse como una etiqueta de filtro, de manera que nos permite filtrar una lista de elemetos con base a la etiqueta que ha sido seleccionada
// este elemento recive como parámetros de entrada:
// state: estado de la etiqueta 
// label: nombre o distintivo de la etiqueta
// handlerClick: permite pasar un controlador de eventos como parámetro de entrada, para gestinar el evento "click"

export function ItemResize({label,state,handlerClick}:{
    label:string,
    state:boolean,
    handlerClick:(event: GestureResponderEvent) => void
}){
    return <TouchableOpacity onPress={handlerClick} style={state?[intemResizeStyle.IntemResizeContainer,{backgroundColor:'#C7E5FD',borderColor:'#C7E5FD'}]:intemResizeStyle.IntemResizeContainer}>
                <View>
                    <Text style={{color:'#717171',fontWeight:'bold',fontSize:15}}>{label}</Text>
                </View>
            </TouchableOpacity>
}

const intemResizeStyle=StyleSheet.create({
    IntemResizeContainer:{
        height:'auto',
        width:'auto',
        padding:12,
        borderWidth:1,
        borderColor:'#AAA',
        borderRadius:25,
        marginRight:10
    }
})