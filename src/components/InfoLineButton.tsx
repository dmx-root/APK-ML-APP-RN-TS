import {View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'

// Doc 
// Este componente tiene como finalidad renderizar informacion en 2 columnas y una tercera para el boton, de las cuales la primera hace referencia al titulo...
// ... la segunda al contenido 
// Este componente viene definido por una altura de 50 y un ancho ajustable a su componente padre
// Este componente recibe los siguientes parámetros:
// title: titulo de la info 
// content1: contenido 
// labelBtn: titulo del boton 
// colorBtn: color del boton 
// fontBtn: color para la letra del boton
// handlerClick: manejador de eventos para el boton 

export function InfoLineButton({title,content,labelBtn,handlerClick,colorBtn,fontBtn}:{
    title:string,
    content:string,
    labelBtn:string,
    colorBtn:string,
    fontBtn:string,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <View style={infoLineStyle.container}>
                <View style={infoLineStyle.labelContanier}>
                    <Text style={infoLineStyle.title}>{title}</Text>
                </View>
                <View style={infoLineStyle.contentContainer}>
                    <Text style={infoLineStyle.content}>{content}</Text>
                </View>
                <TouchableOpacity style={[infoLineStyle.contentContainer,{backgroundColor:colorBtn,borderRadius:8,alignItems:'center'}]} onPress={handlerClick}>
                    <Text style={[infoLineStyle.content,{color:fontBtn,fontWeight:'700'}]}>{labelBtn}</Text>
                </TouchableOpacity>
            </View>
}

const infoLineStyle=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        height:50,
        alignContent:'center',
        justifyContent:'space-between',
        marginBottom:2,
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
        paddingLeft:15,
        alignContent:'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#DDD'
    },
    title:{
        fontSize:15,
        color:'#777',
        fontWeight:'bold'
    },
    content:{
        fontSize:15,
        color:'#777',
        // fontWeight:'bold'
    },

})