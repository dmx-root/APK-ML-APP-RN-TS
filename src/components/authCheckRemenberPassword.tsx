import { StyleSheet, View, Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { CheckBoxEmpty } from "../public/icons/checkBoxEmpty";
import { CheckBoxFill } from "../public/icons/checkBoxFill";
import { useState } from "react";

//  Doc
//  este componente permite establer un input de tipo check
//  recibe como parametro de entrada la etiqueta del check list

export function AuthCheckRemenberPassword({label,handlerClick, state}:{
    label:String,
    state:boolean,
    handlerClick:(event:GestureResponderEvent)=>void 
}){


    return <View style={authCheckRemenberPasswordStyle.authCheckRemenber}>
        <TouchableOpacity style={authCheckRemenberPasswordStyle.authCheckRemenberContainer} onPress={handlerClick}>
            {
                state?
                <CheckBoxFill color="#FFF" size={45} width={1}/>:
                <CheckBoxEmpty color="#FFF" size={45} width={1}/>
            }
        </TouchableOpacity>
        <View style={authCheckRemenberPasswordStyle.authCheckRemenberLabel}>
            <Text style={{color:'#FFF', fontSize:20}}>{label}</Text>
        </View>
    </View>
}

const authCheckRemenberPasswordStyle=StyleSheet.create({
    authCheckRemenber:{
        width:'100%',
        height:50,
        // backgroundColor:'aqua',
        marginBottom:'10%',
        flexDirection:'row'
    },
    authCheckRemenberContainer:{
        width:'10%',
        height:'100%',
        // backgroundColor:'aqua'
    },
    authCheckRemenberLabel:{
        width:'90%',
        height:'100%',
        justifyContent:'center'
    }
})