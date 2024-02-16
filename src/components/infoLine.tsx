import {View, Text, StyleSheet } from 'react-native'

// Doc 
// Este componente tiene como finalidad renderizar informacion en dos columnas, de las cuales la primera hace referencia al titulo y la segunda al contenido
// Este componente viene definido por una altura de 50 y un ancho ajustable a su componente padre
// Este componente recibe los siguientes parámetros:
// title: titulo de la info 
// content: contenido 

export function InfoLine({title,content}:{
    title:string,
    content:string
}){
    return <View style={infoLineStyle.container}>
                <View style={infoLineStyle.labelContanier}>
                    <Text style={infoLineStyle.title}>{title}</Text>
                </View>
                <View style={infoLineStyle.contentContainer}>
                    <Text style={infoLineStyle.content}>{content}</Text>
                </View>
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
        width:'49.5%',
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

    }
})