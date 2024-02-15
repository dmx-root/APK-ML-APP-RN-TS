import { View, StyleSheet, Text } from "react-native";


export function InputAuth({children,label,type}:{
    children:React.ReactElement,
    label:string,
    type:string
}){
    return <View style={inputAuthStyle.inputAuthContainer}>
                <View style={inputAuthStyle.inputAuthLabel}>
                    <Text style={{color:'#FFF',fontSize:20,fontWeight:'500'}}>{label}</Text>
                </View>
                <View style={inputAuthStyle.inputAuthField}>
                    <View style={inputAuthStyle.inputAuthText}>

                    </View>
                    <View style={inputAuthStyle.inputAuthIcon}>
                        {children}
                    </View>
                </View>
            </View>
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
        height:'100%'
    },
    inputAuthIcon:{
        width:'10%',
        height:'100%',
    }
})