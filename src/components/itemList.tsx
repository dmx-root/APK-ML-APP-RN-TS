import { StyleSheet, View, Text } from "react-native";


export function ItemList({children,label,style,position}:{
    label:string,
    children:React.ReactElement,
    style:1|2,
    position:'start'|'end'
}){

    return <View style={[itemStyle.container,position==='end'?{justifyContent:'flex-end'}:{justifyContent:'flex-start'}]}>
                <View style={itemStyle.labelContainer}>
                    <Text style={style===1?{color:'#777', fontSize:15, fontWeight:'400'}:{color:'#777', fontSize:18, fontWeight:'bold'}}>
                    {label}
                    </Text>
                </View>
                <View style={itemStyle.iconContainer}>
                    {children}
                </View>
            </View>
}

const itemStyle= StyleSheet.create({
    container:{
        width:'95%',
        height:40,
        flexDirection:'row',
        // justifyContent:'flex-end',
        // backgroundColor:'aqua'
    },
    iconContainer:{
        width:40,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    labelContainer:{
        height:'100%',
        // width:'100%',
        justifyContent:'center',
        // alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        // backgroundColor:'aquamarine'
    }
})