import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export function ModalItemList({children,label, handlerClick, position}:{
    label : string;
    handlerClick: (event :GestureResponderEvent ) => void;
    children? : React.ReactElement,
    position? : 'start' | 'center' |'end'
}){
    return  <TouchableOpacity style={modalItemStyle.conatiner} onPress={handlerClick}>
                <View style={[
                    modalItemStyle.frame,
                    position && position ==='start'?{justifyContent:'flex-start'}:
                    position && position ==='center'?{justifyContent:'center'}:
                    position && position ==='end'?{justifyContent:'flex-end'}:{}]}>
                    <View style = {children?modalItemStyle.icon:{}}>{children}</View>
                    <Text style={modalItemStyle.content}>{label}</Text>
                </View>
            </TouchableOpacity>
}

const modalItemStyle = StyleSheet.create({
    conatiner:{
        width: 600,
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    frame:{
        width:'100%',
        height:'80%',
        alignItems:'center',
        // justifyContent:'center',
        flexDirection:'row'
    },
    content:{
        color: '#555',
        fontWeight: '400',
        fontSize: 17
    },
    icon:{
        width:'10%',
        height:'100%',
        justifyContent:'center',
        // alignItems:'center'
    }
})