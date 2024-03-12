import { StyleSheet, View,Text, GestureResponderEvent, TouchableOpacity } from "react-native";
import { Modal } from "../components/modal";


export function ModalAlertEvents({
    label,
    content,
    textButtonCancel,
    textButtonOk,
    handlerOk,
    handlerCancel
}:{
    label:string,
    content:string,
    textButtonCancel:string,
    textButtonOk:string,
    handlerCancel:(event:GestureResponderEvent) => void
    handlerOk:(event:GestureResponderEvent) => void
}){
    return  <Modal handlerClick={handlerCancel}>
                <View style={modalAlertEventsStyle.container}>
                    <View style={modalAlertEventsStyle.titleContainer}>
                        <Text style={modalAlertEventsStyle.title}>{label}</Text>
                    </View>
                    <View style={modalAlertEventsStyle.messageContainer}>
                        <Text style={modalAlertEventsStyle.content}>{content}</Text>
                    </View>
                    <View style={modalAlertEventsStyle.buttonsContainer}>
                        <TouchableOpacity style={[modalAlertEventsStyle.button,{backgroundColor:'#C7CCEC'}]} onPress={handlerCancel}>
                            <Text style={{color:'#44329C', fontSize:18,fontWeight:'500'}}>{textButtonCancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[modalAlertEventsStyle.button,{backgroundColor:'#44329C'}]} onPress={handlerOk}>
                            <Text style={{color:'#FFF', fontSize:18,fontWeight:'500'}}>{textButtonOk}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
}

const modalAlertEventsStyle=StyleSheet.create({
    container:{
        height:200,
        width:600,
        marginBottom:30,
        justifyContent:'center'
    },
    titleContainer:{
        height:'15%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
        
    },
    messageContainer:{
        height:'60%',
        // backgroundColor:'aqua',
        width:'100%',
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
    buttonsContainer:{
        width:'100%',
        height:50,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    button:{
        width:'48%',
        backgroundColor:'aqua',
        height:'100%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    }
})