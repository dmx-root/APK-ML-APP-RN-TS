import {View,StyleSheet, Dimensions, Text}              from 'react-native';
import { Image, ImageBackground, KeyboardTypeOptions}   from 'react-native';
import * as Font                                        from 'expo-font';
import {  useState }                                    from 'react';
import { UserIcon }                                     from '../public/icons/userIcon';
import { InputAuth }                                    from '../components/inputAuth';
import { LockIcon }                                     from '../public/icons/lockIcon';
import { AuthButton }                                   from '../components/authButton';
import { AuthCheckRemenberPassword }                    from '../components/authCheckRemenberPassword';
import { ModalInput }                                   from '../modals/modalInput';
import { useGetAccount }                                from '../controllers/hooks/customHookGetAccount';
import { useMainContext } from '../contexts/mainContext';

const {height,width}=Dimensions.get('screen');

const currentColorDefault='#44329C';

interface form{
    [key:string]:string
}

interface modal{
    state:boolean,
    label:string,
    key:string
    type:string,
    value:string,
    placeHolder:string,
    keyboard:KeyboardTypeOptions,
}

export function Login(){

    const [dataForm, setDataForm] = useState<form|null>(null);
    const [modal, setModal] = useState<modal>({state:false,label:'',type:'',value:'',key:'none',keyboard:'default',placeHolder:''});
    const { setSesion, account } = useGetAccount();
    
   

 
    return<>
            <View style={loginStyle.backGround}>
                    <ImageBackground
                        source={require('../public/img/fb-ml.png')}
                        style={loginStyle.backgroundImage}
                        imageStyle={loginStyle.imageStyle}
                        blurRadius={3}>
                    <View style={loginStyle.logoContainer}>
                        <Image source={require('../public/img/transparentLogo.png')} style={loginStyle.logo}/>
                    </View>
                    <View style={loginStyle.titleContainer}>
                        {/* <Text style={loginStyle.title}>Iniciar Sesión</Text> */}
                    </View>
                    <View style={loginStyle.form}>
                        <InputAuth 
                            label='Documento' 
                            handlerClick={()=>{
                                setModal({
                                    label:'DOCUMENTO',
                                    key:'Document',
                                    type:'text',
                                    state:true,
                                    value:'',
                                    placeHolder:'Ingrese el documento',
                                    keyboard:'numeric'
                                })
                            }}>
                            <UserIcon color='#FFF' size={45} width={1}/>
                        </InputAuth>
                        <InputAuth 
                            label='Contraseña' 
                            handlerClick={()=>{
                                setModal({
                                    label:'CONTRASEÑA',
                                    key:'Password',
                                    type:'password',
                                    state:true,
                                    value:'',
                                    placeHolder:'Ingrese el documento',
                                    keyboard:'default'
                                })
                            }}>
                            <LockIcon color='#FFF' size={45} width={1}/>
                        </InputAuth>
                        <AuthCheckRemenberPassword label='Recordar contraseña'/>
                        <AuthButton label='Acceder' handlerClick={()=>{console.log('click')}} />
                    </View>
                </ImageBackground>    
            </View>
    {
        modal.state?
        <ModalInput 
            label={modal.label} 
            type={modal.type} 
            value={modal.value}
            placeHolder={modal.placeHolder}
            keyboard={modal.keyboard}
            handlerValue={(text:string)=>{
                setModal({...modal,value:text})
            }}
            handlerClose={()=>{
                setModal({...modal,state:false})
            }} 
            handlerSend={()=>{

                setSesion(1)
                setDataForm({...dataForm,[modal.key]:modal.value})
                setModal({...modal,state:false})

            }}/>:
        <></>
    }
    </>
}

// useEffect(()=>{
//     if(!load){
//         Font.loadAsync({
//             'Roboto-Thin':require('../../assets/Roboto-Thin.ttf')
//         })
//     }
// });

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
        width: '100%',
        height: '100%',
        opacity: 0.35, 
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

