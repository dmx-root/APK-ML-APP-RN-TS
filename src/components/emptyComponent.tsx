import { View, Text, StyleSheet } from "react-native";
//Doc 
// Este componente tiene como finalidad rendeerizar un mensaje dado el caso que no se haya podido obtener la información solicitada 
// Este elemento se ajusta al tamaño predefinido por su componente padre, por lo que no cuenta con un tamño definido 
// Tiene como parámetros de entrada:
// label: Mensaje que se quiere mostrar 

export function EmptyComponent({label}:{
    label:string
}){
    return <View style={emptyComponentStyle.container}>
                <Text style={emptyComponentStyle.content}>{label}</Text>
            </View>
}

const emptyComponentStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        fontSize:20,
        color:'#777',
        fontWeight:'600',
    }
})