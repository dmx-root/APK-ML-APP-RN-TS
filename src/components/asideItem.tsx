import { TouchableOpacity, View, Text, GestureResponderEvent, StyleSheet } from 'react-native'

export function AsideItem({children,label,handlerClick}:{
    children:React.ReactElement,
    label:string,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <View style={asideItemStyle.item}>
                <TouchableOpacity style={asideItemStyle.fieldOptionContainer} onPress={handlerClick}>
                    <View style={asideItemStyle.iconContainer}>
                        {children}
                    </View>
                    <View style={asideItemStyle.contentContainer}>
                        <Text style={asideItemStyle.content}>{label}</Text>
                    </View>
                </TouchableOpacity>
            </View>
}

const asideItemStyle=StyleSheet.create({
    item:{
        height:80,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    },
    fieldOptionContainer:{
        width:'90%',
        height:'70%',
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'aqua',
    },
    iconContainer:{
        width:80,
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
        
    },
    contentContainer:{
        width:'80%',
        height:'100%',
        justifyContent:'center',
        // alignItems:'center'
    },
    content:{
        color:'#FFF',
        fontWeight:'500',
        fontSize:20
    }
})