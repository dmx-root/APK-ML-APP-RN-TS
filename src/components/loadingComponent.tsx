import { View, Text, StyleSheet,ActivityIndicator } from "react-native";
//Doc 
// Este componente tiene como finalidad rendeerizar un mensaje diámico en el que se da a entender el motivo de espera
// Este elemento se ajusta al tamaño predefinido por su componente padre, por lo que no cuenta con un tamño definido 
// Tiene como parámetros de entrada:
// label: Mensaje que se quiere mostrar 

export function LoadingComponent({label}:{
    label:string
}){
    return <View style={loadingComponentStyle.container}>
                 <Text style={loadingComponentStyle.content}>{label}</Text>
                <ActivityIndicator size={'large'}/>
            </View>
}

const loadingComponentStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        fontSize:18,
        color:'#777',
        fontWeight:'400',
        marginBottom:15
    }
})