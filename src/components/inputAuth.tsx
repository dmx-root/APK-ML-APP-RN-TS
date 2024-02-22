import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


export function InputAuth({children,label,handlerClick,value}:{
    children:React.ReactElement,
    label:string,
    value:string|number
    handlerClick:()=>void
}){
    return <TouchableOpacity style={inputAuthStyle.inputAuthContainer} onPress={handlerClick}>
                <View style={inputAuthStyle.inputAuthLabel}>
                    <Text style={{color:'#FFF',fontSize:20,fontWeight:'500'}}>{label}</Text>
                </View>
                <View style={inputAuthStyle.inputAuthField}>
                    <View style={inputAuthStyle.inputAuthText}>
                        <Text style={{color:'#FFF',fontSize:25,fontWeight:'700'}}>{value}</Text>
                    </View>
                    <View style={inputAuthStyle.inputAuthIcon}>
                        {children}
                    </View>
                </View>
            </TouchableOpacity>
}

const inputAuthStyle=StyleSheet.create({
    inputAuthContainer:{
        width:'100%',
        height:120,
        borderBottomColor:'#FFF',
        borderBottomWidth:2,
        marginBottom:'7%'
        // borderRadius:40
    },
    inputAuthLabel:{
        width:'100%',
        height:'50%'
    },
    inputAuthField:{
        width:'100%',
        height:'50%',
        flexDirection:'row'
    },
    inputAuthText:{
        width:'90%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    inputAuthIcon:{
        width:'10%',
        height:'100%',
    }
})