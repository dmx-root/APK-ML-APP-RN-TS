import { TouchableOpacity, View, Text, StyleSheet} from "react-native";


export function ButtonFullWidth({color,fontColor,label}:{
    color:string,
    fontColor:string,
    label:string
}){
    return <View style={buttonFullWidthStyle.container}>
                <TouchableOpacity style={[buttonFullWidthStyle.button,{backgroundColor:fontColor}]}>
                    <Text style={[buttonFullWidthStyle.content,{color}]}>{label}</Text>
                </TouchableOpacity>
            </View>
}

const buttonFullWidthStyle=StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        // backgroundColor:'aqua',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:'100%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        fontSize:18,
        fontWeight:'600',
    }
})