import { StyleSheet, View,Text, GestureResponderEvent } from "react-native";
import { Modal } from "../components/modal";


export function ModalAlert({label,content,handlerClick}:{
    label:string,
    content:string,
    handlerClick:(event:GestureResponderEvent) => void
}){
    return  <Modal handlerClick={handlerClick}>
                <View style={modalAlertStyle.container}>
                    <View style={modalAlertStyle.titleContainer}>
                        <Text style={modalAlertStyle.title}>{label}</Text>
                    </View>
                    <View style={modalAlertStyle.messageContainer}>
                        <Text style={modalAlertStyle.content}>{content}</Text>
                    </View>
                </View>
            </Modal>
}

const modalAlertStyle=StyleSheet.create({
    container:{
        height:150,
        width:500,
        marginBottom:30,
        justifyContent:'center'
    },
    titleContainer:{
        height:'20%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
        
    },
    messageContainer:{
        height:'60%',
        width:'100%',
        // backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'500',
        color:'#333'
    },
    content:{
        fontSize:15,
        color:'#555',
        fontWeight:'400'
    }
})