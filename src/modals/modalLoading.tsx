import { View,GestureResponderEvent, StyleSheet, ActivityIndicator,Text } from "react-native";
import { Modal } from "../components/modal";

export function ModalLoading({label,handlerClick}:{
    label:string,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return  <Modal handlerClick={handlerClick}>
                <View style={modalLoadStyle.container}>
                    <Text>{label}</Text>
                    <ActivityIndicator size={'large'}/>
                </View>
            </Modal> 
}

const modalLoadStyle=StyleSheet.create({
    container:{
        height:150,
        width:250,
        justifyContent:'space-evenly',
        alignItems:'center',
        // backgroundColor:'aqua',
        marginBottom:30
    }
})