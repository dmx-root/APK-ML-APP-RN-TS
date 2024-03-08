import { handlerRemoveValueLocalStorage }               from '../controllers/helpers/handlerValueLocalStorage';
import { inicialStateAuth }                             from '../interfaces/services/ml_api/authInterfaces';
import { useHandlerSesion }                             from '../controllers/hooks/customHookSetSesion';
import { AuthCheckRemenberPassword }                    from '../components/authCheckRemenberPassword';
import { useSetSesion }                                 from '../controllers/helpers/handlerSetSesion';
import { LoginScreenProps }                             from '../interfaces/screens/screensInterfaces';
import { useApiGetAuth }                                from '../controllers/hooks/customHookGetAuth';
import { accountNavigators }                            from '../app/navigators/accountNavigators';
import { AuthStoredLogin }                              from '../components/authStoredLogin';
import { UserIcon }                                     from '../public/icons/userIcon';
import { LockIcon }                                     from '../public/icons/lockIcon';
import { AuthButton }                                   from '../components/authButton';
import { modal, form, newModal }                        from '../interfaces/view/login';
import { InputAuth }                                    from '../components/inputAuth';
import { useMainContext }                               from '../contexts/mainContext';
import { ModalLoading }                                 from '../modals/modalLoading';
import { ModalInput }                                   from '../modals/modalInput';
import { ModalAlert }                                   from '../modals/modalAlert';
import {View,StyleSheet, Dimensions, Text, Alert}       from 'react-native';
import { ImageBackground }                              from 'react-native';
import * as Font                                        from 'expo-font';
import { useEffect, useState }                          from 'react';

const {height,width}=Dimensions.get('screen');

const currentColorDefault='#44329C';

export function Login(){

    const { state, setDataAuth } =  useHandlerSesion();
    const contextStorage =          useMainContext();
    const currentSesionValidator =  useApiGetAuth();
    const { setSesion } =           useSetSesion();
    
    const [ dataForm, setDataForm ] =        useState<form|null>(null);
    const [ alert, setAlert ] =              useState<boolean>(false);
    const [ formState, setFormState ] =      useState<boolean>(false);
    const [ passworsSave, setPasswordSave] = useState<boolean>(false);
    const [ modal, setModal ] =              useState<modal>(newModal);

    useEffect(()=>{
        console.log('entró')
        // contextStorage?.setAccount(accountNavigators["Auth"])
    },[]);

    return<>
            <View style={loginStyle.backGround}>
                    <ImageBackground
                        source={require('../public/img/fb-ml.png')}
                        style={loginStyle.backgroundImage}
                        imageStyle={loginStyle.imageStyle}
                        blurRadius={3}>
                    <View style={loginStyle.logoContainer}>
                        {/* <Image source={require('../public/img/transparentLogo.png')} style={loginStyle.logo}/> */}
                    </View>
                    {
                    currentSesionValidator.state.loading?
                    <ModalLoading label='Cargando App...' handlerClick={()=>{}}/>:
                    currentSesionValidator.state.data&&!formState?
                    <AuthStoredLogin 
                    data={{
                        nombre:currentSesionValidator.state.data.data.userName, 
                        rol:currentSesionValidator.state.data.data.userProfileLAbel
                    }} 
                    handlerAcceder={()=>{
                        setSesion(currentSesionValidator.state.data?.data||inicialStateAuth);
                        console.log('Accedió');
                    }} 
                    handlerChange={()=>{
                        setFormState(true);
                        handlerRemoveValueLocalStorage('token');
                    }}/>:
                    <>
                        <View style={loginStyle.titleContainer}>
                            {/* <Text style={loginStyle.title}>Iniciar Sesión</Text> */}
                        </View>
                        <View style={loginStyle.form}>
                            <InputAuth 
                                label='Documento'
                                value={dataForm?.['Document']?dataForm?.['Document']:''} 
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
                                value={dataForm?.['Password']?'* * * * * * * * * * * *':''} 
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
                            <AuthCheckRemenberPassword 
                            label='Recordar contraseña'
                            state={passworsSave}
                            handlerClick={()=>{
                                setPasswordSave(!passworsSave);
                            }}/>
                            <AuthButton 
                                label='Acceder' 
                                handlerClick={()=>{
                                    dataForm?.['Password']&&dataForm?.['Document']?
                                    setDataAuth(dataForm?.['Document'],dataForm?.['Password'],passworsSave):
                                    Alert.alert('Campos vacios','Asegúrese de llenar todos los campos') 
                                    setAlert(true);
                                }}/>
                        </View>
                    </>
                    
                    }
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
                setDataForm({...dataForm,[modal.key]:modal.value})
                setModal({...modal,state:false})
            }}/>:
        <></>
    }
    {
        state.loading?
        <ModalLoading
        label='Iniciando Sesión...' 
        handlerClick={()=>{console.log('se detuvo la carga')}}/>:
        <></>
    }
    {
        state.error&&alert?
        <ModalAlert 
        label='Datos Erroneos' 
        content={state.error.statusMessageApi} 
        handlerClick={()=>{setAlert(false)}}/>:
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

