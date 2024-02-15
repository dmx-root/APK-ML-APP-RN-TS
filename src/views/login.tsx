import {View,StyleSheet, Dimensions, Text, Image, ImageBackground} from 'react-native';
import * as Font                from 'expo-font';
import { useEffect, useState }  from 'react';
import { UserIcon }             from '../public/icons/userIcon';
import { InputAuth }            from '../components/inputAuth';
import { LockIcon }             from '../public/icons/lockIcon';
import { AuthButton }           from '../components/authButton';
import { AuthCheckRemenberPassword } from '../components/authCheckRemenberPassword';

const {height,width}=Dimensions.get('screen');

const currentColorDefault='#44329C';

export function Login(){

    const [load,setLoad]=useState(false)
    useEffect(()=>{
        if(!load){
            Font.loadAsync({
                'Roboto-Thin':require('../../assets/Roboto-Thin.ttf')
            })
        }
    });

    return <View style={loginStyle.backGround}>
            <ImageBackground
            source={require('../public/img/fb-ml.png')}
            style={loginStyle.backgroundImage}
            imageStyle={loginStyle.imageStyle}
            blurRadius={3}>
                <View style={loginStyle.logoContainer}>
                    <Image source={require('../public/img/transparentLogo.png')} style={loginStyle.logo}/>
                </View>
                <View style={loginStyle.titleContainer}>
                    <Text style={loginStyle.title}>Iniciar Sesión</Text>
                    {/* <UserIcon color='#FFF' size={45}/> */}
                </View>
                <View style={loginStyle.form}>
                    <InputAuth label='Documento' type='Password'>
                        <UserIcon color='#FFF' size={45} width={1}/>
                    </InputAuth>
                    <InputAuth label='Contraseña' type='Password'>
                        <LockIcon color='#FFF' size={45} width={1}/>
                    </InputAuth>
                    <AuthCheckRemenberPassword label='Recordar contraseña'/>
                    <AuthButton label='Acceder' handlerClick={()=>{console.log('click')}}/>
                </View>
            </ImageBackground>    
        </View>
}

const loginStyle=StyleSheet.create({
    backGround:{
        flex:1,
        backgroundColor:currentColorDefault,
        display:'flex',
        width,
        height
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        width: '100%', // Ajusta según tus necesidades
        height: '100%', // Ajusta según tus necesidades
        opacity: 0.35, // Puedes ajustar la opacidad si lo deseas
    },
    logoContainer:{
        width:'100%',
        height:'18%',
        marginTop:'10%',
        alignItems:'center'
    },
    logo:{
        resizeMode:'contain',
        flex:1,
    },
    titleContainer:{
        height:'15%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:80,
        color:'#FFF',
        fontFamily:'Roboto-Thin',
    },
    form:{
        marginTop:'5%',
        width:'80%',
        height:50
    }

})

