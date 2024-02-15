import { View, TextInput, StyleSheet, Text } from 'react-native';

export function Input({color,label}:{
    color:string,
    label:string
}){
    return <View style={inputStyle.container}>
                <View style={inputStyle.frame}>
                    <View style={inputStyle.labelContainer}>
                        <Text style={[inputStyle.content,{color}]}>{label}</Text>
                    </View>
                    <View style={inputStyle.inputContainer}>

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
    }
})