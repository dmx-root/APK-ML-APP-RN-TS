import { UserIcon }                                     from '../public/icons/userIcon';
import { InputAuth }                                    from '../components/inputAuth';
import { LockIcon }                                     from '../public/icons/lockIcon';
import { AuthButton }                                   from '../components/authButton';
import { AuthCheckRemenberPassword }                    from '../components/authCheckRemenberPassword';
import { ModalInput }                                   from '../modals/modalInput';
import { ModalLoading }                                 from '../modals/modalLoading';
import { ModalAlert }                                   from '../modals/modalAlert';
import { modal, form }                                  from '../interfaces/view/login';
import { useHandlerSesion }                             from '../controllers/hooks/customHookSetSesion';
import { AuthStoredLogin }                              from '../components/authStoredLogin';
import { useApiGetAuth }                                from '../controllers/hooks/customHookGetAuth';
import { handlerRemoveValueLocalStorage }               from '../controllers/helpers/handlerValueLocalStorage';
import { useSetSesion }                                 from '../controllers/helpers/handlerSetSesion';
import { inicialStateAuth }                             from '../interfaces/services/ml_api/authInterfaces';
import { LoginScreenProps }                             from '../interfaces/screens/screensInterfaces';
import {View,StyleSheet, Dimensions, Text, Alert}       from 'react-native';
import { Image, ImageBackground }                       from 'react-native';
import { useState }                                     from 'react';
import * as Font                                        from 'expo-font';

const {height,width}=Dimensions.get('screen');

const currentColorDefault='#44329C';

export function Login(){

    const currentSesionValidator = useApiGetAuth();
    const { state, setDataAuth } = useHandlerSesion();
    const { setSesion } = useSetSesion();
    
    const [ dataForm, setDataForm] = useState<form|null>(null);
    const [ modal, setModal ] = useState<modal>({state:false,label:'',type:'',value:'',key:'none',keyboard:'default',placeHolder:''});
    const [ alert, setAlert ] = useState<boolean>(false);
    const [ formState,setFormState] = useState(false)
    const [ passworsSave,setPasswordSave] = useState<boolean>(false);

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

