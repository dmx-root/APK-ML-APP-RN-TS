import { TextInput, View, Text, GestureResponderEvent}  from "react-native";
import { StyleSheet, Dimensions, TouchableOpacity }     from 'react-native'
import { Modal }                                        from "../components/modal";
import { CheckIcon }                                    from "../public/icons/CheckIcon";
import { CloseIcon }                                    from "../public/icons/closeIcon";

const {height,width} = Dimensions.get('window');

export function ModalInput({label,type, handlerClick}:{
    label:string,
    type:string,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return  <Modal handlerClick={handlerClick}>
                <View style={modalInputStyle.container}>
                    <View style={modalInputStyle.labelContainer}>
                        <Text style={{fontSize:18, fontWeight:'700', color:'#999'}}>{label}</Text>
                    </View>
                    <View style={modalInputStyle.inputContainer}>
                        <TextInput style={modalInputStyle.input}/>
                    </View>
                    <View style={modalInputStyle.buttons}>
                        <TouchableOpacity  style={modalInputStyle.button}>
                            <CloseIcon color="#44329C" size={40} width={2}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={modalInputStyle.button}>
                            <CheckIcon color="#44329C" size={40} width={2}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
}

const modalInputStyle=StyleSheet.create({
    container:{
        width:width*0.7,
        // height:height*0.2

    },
    labelContainer:{
        width:'100%',
        height:60,
        // backgroundColor:'aqua',
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'100%',
        height:80,
        // backgroundColor:'aquamarine',
        justifyContent:'center'
    },
    buttons:{
        width:'100%',
        height:80,
        // backgroundColor:'aqua',
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input:{
        height:'70%',
        width:'100%',
        // backgroundColor:'aqua',
        borderWidth:2,
        borderColor:'#CCC',
        borderRadius:4,
        padding:20,
        // fontFamily:18,
        // color:'#AAA'
    },
    button:{
        width:'49%',
        height:'70%',
        borderWidth:3,
        borderColor:'#C7CCEC',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    }
})