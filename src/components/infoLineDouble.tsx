import {View, Text, StyleSheet } from 'react-native'

// Doc 
// Este componente tiene como finalidad renderizar informacion en 4 columnas
// Este componente viene definido por una altura de 50 y un ancho ajustable a su componente padre
// Este componente recibe los siguientes parámetros:
// title1,title2: titulo de la info 
// content1,content2: contenido 

export function InfoLineDouble({title1,content1,title2,content2}:{
    title1:string,
    content1:string,
    title2:string,
    content2:string
}){
    return <View style={infoLineStyle.container}>
                <View style={infoLineStyle.labelContanier}>
                    <Text style={infoLineStyle.title}>{title1}</Text>
                </View>
                <View style={infoLineStyle.contentContainer}>
                    <Text style={infoLineStyle.content}>{content1}</Text>
                </View>
                <View style={infoLineStyle.labelContanier}>
                    <Text style={infoLineStyle.title}>{title2}</Text>
                </View>
                <View style={infoLineStyle.contentContainer}>
                    <Text style={infoLineStyle.content}>{content2}</Text>
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
        width:'24.5%',
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

    }
})