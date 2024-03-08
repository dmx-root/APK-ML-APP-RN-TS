import { GestureResponderEvent, Image, StyleSheet, Text, View } from "react-native";
import { AuthButton } from "./authButton";

interface data {
    nombre:string,
    rol:string
}

export function AuthStoredLogin({data,handlerAcceder,handlerChange}:{
    data:data,
    handlerAcceder:(event:GestureResponderEvent)=>void,
    handlerChange:(event:GestureResponderEvent)=>void,
}){
    return <View style={authStoredLoginStyle.container}>
                <View style={authStoredLoginStyle.header}>
                    <View style={authStoredLoginStyle.imgContainer}>
                        <Image source={require('../public/img/photo-profile.jpg')} style={authStoredLoginStyle.img}/>
                    </View>
                </View>
                <View style={authStoredLoginStyle.contentContainer}>
                    <View style={authStoredLoginStyle.row}>
                        <Text style={{fontSize:35, color:'#FFF',fontWeight:'500'}}>{data.nombre}</Text>
                    </View>
                    <View style={authStoredLoginStyle.row}>
                        <Text style={{fontSize:20, color:'#FFF',fontWeight:'300'}}>{data.rol}</Text>
                    </View>
                    <View style={authStoredLoginStyle.buttonContent}>
                        <AuthButton label='Acceder' handlerClick={handlerAcceder}/>
                        <AuthButton label='Acceder con otra cuenta' handlerClick={handlerChange}/>
                    </View>
                    
                </View>
            </View>
}

const authStoredLoginStyle= StyleSheet.create({
    
    container:{
        width:'100%',
        height:'60%',
    },
    header:{
        width:'100%',
        height:'40%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    imgContainer:{
        width:250,
        height:250,
        borderRadius:125,
        overflow:'hidden',
        borderWidth:5,
        borderColor:'#FFF'
    },
    img:{
        flex:1,
        resizeMode:'contain',
        alignSelf:'center',
        height:'100%',
        width:'100%',
    },
    contentContainer:{
        width:'100%',
        height:'60%',
        alignItems:'center',
    },
    row:{
        height:'15%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContent:{
        width:'80%',
        marginTop:'5%',
        paddingTop:'1%'
    }
})