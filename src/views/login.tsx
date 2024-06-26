import { LocalStorageSaveItem }                         from '../services/local_storage/dispatch/dispatch.interface.saveItem'
import { ObjectDispatchInterface }                      from '../services/ml_api/dispatch/dispatch.interface.object';
import { useApiGetAuth }                                from '../controllers/reducers/reducer.getCurrentSesion';
import { handlerRemoveValueLocalStorage }               from '../controllers/helpers/handlerValueLocalStorage';
import { inicialStateAuth }                             from '../interfaces/services/ml_api/authInterfaces';
import { useLoadData }                                  from '../controllers/reducers/reducer.dispatchData';
import { authInterface }                                from '../interfaces/services/ml_api/authInterfaces';
import { AuthCheckRemenberPassword }                    from '../components/authCheckRemenberPassword';
import { useSetSesion }                                 from '../controllers/helpers/handlerSetSesion';
import { AuthStoredLogin }                              from '../components/authStoredLogin';
import { ROUTES }                                       from '../endpoints/ml_api/ep.ml.api';
import { UserIcon }                                     from '../public/icons/userIcon';
import { LockIcon }                                     from '../public/icons/lockIcon';
import { AuthButton }                                   from '../components/authButton';
import { modal, form, newModal }                        from '../interfaces/view/login';
import { InputAuth }                                    from '../components/inputAuth';
import { ModalLoading }                                 from '../modals/modalLoading';
import { ModalInput }                                   from '../modals/modalInput';
import { ModalAlert }                                   from '../modals/modalAlert';
import { View, StyleSheet, Dimensions, Text, Alert }    from 'react-native';
import { ImageBackground,Image }                        from 'react-native';
import { useState }                                     from 'react';
import { LocalStorageRemoveItem } from '../services/local_storage/dispatch/dispatch.interface.removeData'

const {height,width}=Dimensions.get('screen');

const currentColorDefault='#44329C';

export function Login(){

    const currentSesionValidator =  useApiGetAuth();
    const { setSesion } =           useSetSesion();
    
    const [ dataForm, setDataForm ] =        useState<form|null>(null);
    const [ alert, setAlert ] =              useState<boolean>(false);
    const [ alertSesion, setAlertSesion ] =  useState<boolean>(true);
    const [ formState, setFormState ] =      useState<boolean>(false);
    const [ passworsSave, setPasswordSave] = useState<boolean>(false);
    const [ modal, setModal ] =              useState<modal>(newModal);

    const { state, loadData } = useLoadData(
        new ObjectDispatchInterface({
            method:'get',
            url:ROUTES.api_ml_local_auth_get,
            headers:{
                "documento-id": dataForm?.['Document'],
                "clave":        dataForm?.['Password']
            }
        })
    );

    return<>
            <View style={loginStyle.backGround}>
                    <ImageBackground
                        source={require('../public/img/fb-ml.png')}
                        style={loginStyle.backgroundImage}
                        imageStyle={loginStyle.imageStyle}
                        blurRadius={3}>
                    <View style={loginStyle.logoContainer}>
                        <View style={loginStyle.frame}>
                            <Image source={require('../public/img/transparentLogo.png')} style={loginStyle.logo}/>
                        </View>
                    </View>
                    {
                    currentSesionValidator.state.loading?
                    <ModalLoading label='Cargando App...' handlerClick={()=>{}}/>:
                    currentSesionValidator.state.data&&!formState?
                    <AuthStoredLogin 
                    data={{
                        nombre: currentSesionValidator.state.data.data[0].userName, 
                        rol:    currentSesionValidator.state.data.data[0].userProfileLAbel
                    }} 
                    handlerAcceder={()=>{
                        setSesion(currentSesionValidator.state.data?.data[0] || inicialStateAuth);
                    }} 
                    handlerChange={()=>{
                        (new LocalStorageRemoveItem("token")).
                        execute().
                        then(()=>{
                            setFormState(true);
                        }).
                        catch(err=>{
                            console.log(err, 'No se pudo eliminar el token')
                        })
                    }}/>:
                    <>
                        <View style={loginStyle.titleContainer}>
                            <Text style={loginStyle.title}>Iniciar Sesión</Text>
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
                                        loadData({ /*No data*/ },
                                        async (response) =>{
                                                if(response && passworsSave){
                                                    await (new LocalStorageSaveItem("token",response.headers["authorization-token"])).execute();
                                                    setSesion(overrideResponseData(response.data[0]))
                                                }
                                                if(response){
                                                    setSesion(overrideResponseData(response.data[0]))
                                                }
                                            }
                                        ):
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
        content={'state.error.statusMessageApi'} 
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

const overrideResponseData : (data: any) => authInterface = (data: any) =>{
    const newData : authInterface = {                  
        userName:           data.nombre,
        userDocumentId:     data.documento_id,
        userProfileId:      data.perfil_id,
        userProfileLAbel:   data.perfil_etiqueta,
        userDescription:    data.descripcion,
        userDocumentType:   data.tipo_documento_id,
        userCreteDate:      data.user_create_dete || 'No asignado',
        userState: true
    }
    return newData;
}

const loginStyle=StyleSheet.create({

    backGround:{
        flex:1,
        backgroundColor:currentColorDefault,
        // display:'flex',
        width,
        height
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        height,
        width,
        opacity: 0.35, 
    },
    logoContainer:{
        width:'100%',
        height:200,
        marginTop:'5%',
        alignItems:'center',
        marginBottom:100
    },
    frame:{
        width:'100%',
        height:180,
        marginTop:'10%',
        // backgroundColor:'aqua',
        // justifyContent:'center'
        alignItems:'center',

    },
    logo:{
        opacity:0.95,
        resizeMode:'contain',
        flex:1,
    },
    titleContainer:{
        // backgroundColor:'aqua',
        height:150,
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:80,
        color:'#FFF',
        fontFamily:'sans-serif-thin',
    },
    form:{
        marginTop:'5%',
        width:'80%',
        height:50
    }

})

