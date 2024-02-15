import { View, StyleSheet, Text } from "react-native";


export function FieldInfo({label,children,color}:{
    label:string,
    children:React.ReactElement,
    color:string
}){
    return <View style={fieldInfo.container}>
                <View style={fieldInfo.labelContainer}>
                    <Text style={[fieldInfo.content,{color}]}>{label}</Text>
                </View>
                <View style={fieldInfo.icon}>{children}</View>
            </View>
}

const fieldInfo=StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        flexDirection:'row',
        // backgroundColor:'aqua',
        marginBottom:10
    },
    labelContainer:{
        justifyContent:'center',
        width:'90%',
        height:'100%'
    },
    icon:{
        justifyContent:'center',
        alignItems:'center',
        width:'10%',
        height:'100%',
        // backgroundColor:'aqua'
    },
    content:{
        fontSize:15,
        fontWeight:'500'
    }
})