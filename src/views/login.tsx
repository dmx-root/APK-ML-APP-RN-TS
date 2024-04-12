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
import { View, StyleSheet, Dimensions, Text, Alert }    from 'react-native';
import { ImageBackground }                              from 'react-native';
import * as Font                                        from 'expo-font';
import { useEffect, useState }                          from 'react';

import { AuthObjectRequest } from '../services/ml_api/request/authObjectRequest'
import {api_ml_local_auth_get_by_token } from '../endpoints/ml_api/restApiMujerLatina'

const {height,width}=Dimensions.get('screen');

const currentColorDefault='#44329C';

export function Login(){

    const { state, setDataAuth } =  useHandlerSesion();
    const currentSesionValidator =  useApiGetAuth();
    const { setSesion } =           useSetSesion();
    
    const [ dataForm, setDataForm ] =        useState<form|null>(null);
    const [ alert, setAlert ] =              useState<boolean>(false);
    const [ alertSesion, setAlertSesion ] =  useState<boolean>(true);
    const [ formState, setFormState ] =      useState<boolean>(false);
    const [ passworsSave, setPasswordSave] = useState<boolean>(false);
    const [ modal, setModal ] =              useState<modal>(newModal);

    async function load(){
        try {
            const query = new AuthObjectRequest();
            const response = await query.authGetByToken(api_ml_local_auth_get_by_token,'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTQ2NDQxOTI1IiwidXNlck5hbWUiOiJEQVZJRCBFU1RFQkFOIE1PUkFMRVMgw5FVU1RFUyIsInVzZXJEZXNjcmlwdGlvbiI6IkRlc2Fycm9sbGFkb3IganVuaW9yIiwicm9sZUlkIjoxLCJyb2xlTmFtZSI6IkFETUlOSVNUUkFET1IiLCJkb2N1bWVudFR5cGVJZCI6MSwiZG9jdWVtZW50VHlwZU5hbWUiOiJDRURVTEEgREUgQ0lVREFEQU5JQSIsImlhdCI6MTcxMjMzMDQ3NSwiZXhwIjoxNzE0OTYwMjc1fQ.tF9mlmd2XzAufiC5XWNwm4DzUZw-8Om81hAd8bafQPQw6Okz1yQpD6N4rkSFfLbFRbFy1Wg0dSqskkFnljtwqCzgjsLbJ58V8i67m7TnngAr7CMCTptnce0p4Q4CEEma4ChD1nPx5z1W56Ka9dpbH5yleQc6GePSJDtJ2Iv8c-MAWzByLfks6ULMJROgYbIQ734mSf9fzjJuusUp-N7Okltiz0DgN0z1zGcjXc3B8tNgYsSvbX8f4d1NYRgh39mJVhiv9Nd__HzpvZT70YMqQviJBbA4kkKtkTXzmRW36BR_zb3Ox9ObdaEwnk8qWlXOzIZ8BIsLCndjuIeTAzfwrQ')
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

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
                        nombre: currentSesionValidator.state.data.data.userName, 
                        rol:    currentSesionValidator.state.data.data.userProfileLAbel
                    }} 
                    handlerAcceder={()=>{
                        setSesion(currentSesionValidator.state.data?.data || inicialStateAuth);
                        
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
                                value={dataForm?.['Document'] || ''} 
                                handlerClick={()=>{
                                    setModal({
                                        state:      true,
                                        value:      '',
                                        placeHolder:'Ingrese el documento',
                                        label:      'DOCUMENTO',
                                        key:        'Document',
                                        keyboard:   'numeric',
                                        type:       'text',
                                    })
                                }}>
                                <UserIcon color='#FFF' size={45} width={1}/>
                            </InputAuth>
                            <InputAuth 
                                label='Contraseña' 
                                value={dataForm?.['Password']?'* * * * * * * * * * * *':''} 
                                handlerClick={()=>{
                                    setModal({
                                        state:      true,
                                        value:      '',
                                        placeHolder:'Ingrese el documento',
                                        label:      'CONTRASEÑA',
                                        type:       'password',
                                        key:        'Password',
                                        keyboard:   'default'
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
                                    setDataAuth(dataForm?.['Document'], dataForm?.['Password'], passworsSave): 
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
            label =     {modal.label} 
            type=       {modal.type} 
            value=      {modal.value}
            placeHolder={modal.placeHolder}
            keyboard=   {modal.keyboard}
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
    {
        currentSesionValidator.state.data?.sesionState && alertSesion?
        <ModalAlert 
        label='La sesión ha expirado' 
        content='Debe autenticarse de nuevo'
        // buttonText='Autenticarse'
        handlerClick={()=>{
            setFormState(true);
            setAlertSesion(false)
            handlerRemoveValueLocalStorage('token');
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

