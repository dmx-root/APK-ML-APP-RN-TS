import { useLocalStorageGetData }                               from '../controllers/hooks/customHookGetDataLocalStorage';
import { ProductionScreenProps }                                from '../interfaces/screens/screensInterfaces';
import { ModalProductionRegister }                              from '../modals/modalProductionRegister';
import { OperationInterface }                                   from '../interfaces/view/production';
import { InfoLineButton }                                       from '../components/InfoLineButton';
import { InfoLineDouble }                                       from '../components/infoLineDouble';
import { RowLeftIcon }                                          from '../public/icons/rowLeftIcon';
import { ViewContainer }                                        from '../components/viewContainer';
import { ModuloIcon }                                           from '../public/icons/moduloIcon';
import { UserIcon }                                             from '../public/icons/userIcon';
import { SendIcon }                                             from '../public/icons/sendIcon';
import { OcrIcon }                                              from '../public/icons/ocrIcon';
import { FieldInfo }                                            from '../components/fieldInfo';
import { InfoLine }                                             from '../components/infoLine';
import { OpIcon }                                               from '../public/icons/opIcon';
import { View,StyleSheet, Dimensions, TouchableOpacity, Text }  from 'react-native';
import { useState }                                             from 'react';
import { LoadingComponent } from '../components/loadingComponent';
import { useMainContext } from '../contexts/mainContext';

const {height,width}=Dimensions.get('screen');

export function Production({navigation}:any){

    const opDetails = useLocalStorageGetData('currentOp');
    const operation = useLocalStorageGetData('currentOcr');
    const contextStorage = useMainContext();
    // console.log(operation.state)

    const [ operationData, setOperationData ] = useState<OperationInterface|null>(null);
    const [ modalRegisterState,setModalRegisterState ] = useState(false);

    return<>
            <View style={productionStyle.productionContainer}>
                <View style={productionStyle.body}>
                    {
                        opDetails.state.loading && operation.state.loading?
                        <LoadingComponent label='Cargando información del proceso...'/>:
                        <>
                            <ViewContainer>
                                
                                <FieldInfo label='Información de operario' color='#44329C'>
                                    <UserIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo>
                                <InfoLine title='Fecha' content={operation.state.data.fechaRegistro}/>
                                <InfoLineDouble title1='Nombre de Operario' content1={contextStorage?.currentUser?.nombre||'No definido'} title2='Documento' content2={contextStorage?.currentUser?.documentoid||'No definido'}/>
                            
                            </ViewContainer>
                            <ViewContainer>
                                <FieldInfo label='Información de la OP' color='#44329C'>
                                    <OpIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo>
                                <InfoLine title='OP' content={''}/>
                                <InfoLineDouble title1='Planeado' content1={''} title2='Ejecutado' content2='254'/>
                        
                                <FieldInfo label='Informacion del MÓDULO' color='#44329C'>
                                    <ModuloIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo>
                                <InfoLine title='MODULO' content='Modulo-1'/>
                                <InfoLineDouble title1='Planeado' content1='3000' title2='Ejecutado' content2='254'/>
                            </ViewContainer>
                            <ViewContainer>
                                <FieldInfo label='Registro Actual' color='#44329C'>
                                    <OcrIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo>
                                <InfoLineDouble title1='Color' content1='Piel' title2='COD-Color' content2='1204'/>
                                <InfoLine title='TALLA' content='XL'/>
                                <InfoLine title='EAN' content='11454112441'/>
                                {/* <InfoLineDouble title1='Talla' content1='XL' title2='' content2=''/> */}
                                {/* <InfoLine title='Cantidad Registrada' content='30'/> */}
                            
                                {/* <FieldInfo label='Registro Actual' color='#44329C'>
                                    <OcrIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo> */}
                                <InfoLineButton colorBtn='#44329C' fontBtn='#FFF' labelBtn='Editar...' handlerClick={()=>{}} title='Cantidad Registrada' content='Editar'/>
                                <InfoLineButton colorBtn='#44329C' fontBtn='#FFF' labelBtn='Editar...' handlerClick={()=>{}} title='Parada Inmediata' content='Sin Eventos'/>
                                <InfoLineButton colorBtn='#44329C' fontBtn='#FFF' labelBtn='Registrar...' handlerClick={()=>{setModalRegisterState(true)}} title='Ingreso de unidades' content='Sin Registros'/>
                            </ViewContainer>
                        </>
                    }
                </View>

                <View style={productionStyle.footer}>
                    <TouchableOpacity style={[productionStyle.button,{backgroundColor:'#C7CCEC'}]} onPress={()=>{navigation.navigate('HomeOcr')}}>
                        <RowLeftIcon color="#44329C" size={30} width={2}/>
                        <Text style={{color:'#44329C',fontSize:18,fontWeight:'600', marginLeft:'5%'}}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productionStyle.button}>
                        <SendIcon color="#FFF" size={30} width={2}/>
                        <Text style={{color:'#FFF',fontSize:18,fontWeight:'600', marginLeft:'5%'}}>Enviar Información</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                modalRegisterState?
                <ModalProductionRegister 
                operationData={operationData}
                setOperationData={setOperationData}
                handlerClick={()=>{setModalRegisterState(false)}}
                />:
                <></>
            }
    </>
    
}

const productionStyle=StyleSheet.create({
    productionContainer:{
        width,
        height,
        backgroundColor:'#DDD'
    },
    body:{
        width:'100%',
        height:'86%',
        paddingTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        // paddingTop:10,
        width:'100%',
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#FFF'
    },
    button:{
        width:'45%',
        height:70,
        borderRadius:35,
        // marginRight:'5%',
        marginBottom:'5%',
        // backgroundColor:'#C7E5FD',
        backgroundColor:'#44329C',
        // elevation:height*0.006,
        flexDirection:'row',
        paddingLeft:8,
        alignItems:'center',
        justifyContent:'center'

    },
    empty1:{
        width:'100%',
        height:160,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'#FFF'
    }
})