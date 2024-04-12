import { StyleSheet, View,Text, GestureResponderEvent, TouchableOpacity } from "react-native";
import { Modal } from "../components/modal";


export function ModalAlert({label,content,handlerClick,buttonText}:{
    label:string,
    content:string,
    handlerClick:(event:GestureResponderEvent) => void,
    buttonText?:string
}){
    return  <Modal handlerClick={handlerClick}>
                <View style={modalAlertStyle.container}>
                    <View style={modalAlertStyle.titleContainer}>
                        <Text style={modalAlertStyle.title}>{label}</Text>
                    </View>
                    <View style={modalAlertStyle.messageContainer}>
                        <Text style={modalAlertStyle.content}>{content}</Text>
                    </View>
                    <View style={modalAlertStyle.buttonContainer}>
                        <TouchableOpacity style={modalAlertStyle.button} onPress={handlerClick}>
                            <Text style={{color:'#44329C',fontWeight:'bold',fontSize:18}}>{buttonText||'OK'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
}

const modalAlertStyle=StyleSheet.create({
    container:{
        // height:250,
        width:500,
        marginBottom:30,
        justifyContent:'center',
        // backgroundColor:'aqua'
    },
    titleContainer:{
        height:40,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
        
    },
    messageContainer:{
        height:100,
        width:'100%',
        // backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonContainer:{
        height:70,
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
    },
    button:{
        width:'100%',
        height:'80%',
        backgroundColor:'#C7CCEC',
        justifyContent:'center',
        alignItems:'center'
    }
})