import { useLocalStorageGetData }                               from '../controllers/hooks/customHookGetDataLocalStorage';
import { ProductionScreenProps }                                from '../interfaces/screens/screensInterfaces';
import { ModalProductionRegister }                              from '../modals/modalProductionRegister';
import { OperationInterface, newOperation }                     from '../interfaces/view/production';
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
import { LoadingComponent }                                     from '../components/loadingComponent';
import { useMainContext }                                       from '../contexts/mainContext';
import { ModalLoading }                                         from '../modals/modalLoading';
import { InfoLineButton2 }                                      from '../components/InfoLineButton2';
import { View,StyleSheet, Dimensions, TouchableOpacity, Text, Alert }   from 'react-native';
import { useState }                                                     from 'react';
import { useLoadDataOperation } from '../controllers/hooks/customHookLoadOperation';
import { useRemoveDataOperation } from '../controllers/hooks/customHookRemoveOperation';

const {height,width}=Dimensions.get('screen');

export function Production({navigation}:any){
    
    const contextStorage = useMainContext();

    const opDetails = useLocalStorageGetData('currentOp');
    const operation = useLocalStorageGetData('currentOcr');

    const loadData = useLoadDataOperation();
    const removeData = useRemoveDataOperation();

    const [ operationData, setOperationData ] = useState<OperationInterface|null>(null);
    const [ modalRegisterState,setModalRegisterState ] = useState(false);

    // console.log(state)

    return<>
            <View style={productionStyle.productionContainer}>
                <View style={productionStyle.body}>
                    {
                        opDetails.state.data&&operation.state.data&&
                        <>
                            <ViewContainer>
                                
                                <FieldInfo label='Información de operario' color='#44329C'>
                                    <UserIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo>
                                <InfoLine title='Operario' content={contextStorage?.currentUser?.nombre||'No definido'}/>
                                <InfoLineDouble title1='Fecha de registro' content1={operation.state.data.fechaRegistro} title2='Hora de inicio' content2={operation.state.data.inicioOperacion||'No Def'}/>
                            
                            </ViewContainer>
                            <ViewContainer>
                                <FieldInfo label={`Información de OP por talla y color`} color='#44329C'>
                                    <OpIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo>
                                <InfoLine title='OP en proceso' content={operation.state.data.op||'No Def'}/>
                                <InfoLineDouble title1='Planeado' content1={opDetails.state.data[0].opLotePlaneado||'No Def'} title2='Ejecutado' content2={opDetails.state.data[0].opLoteCompletado}/>
                        
                                <FieldInfo label='Informacion del MÓDULO' color='#44329C'>
                                    <ModuloIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo>
                                <InfoLine title='MODULO en proceso' content={operation.state.data.moduloId?`Modulo-${operation.state.data.moduloId}`:'No Def'}/>
                                <InfoLineDouble title1='Planeado' content1='- - -   - - -   - - -   - - -' title2='Ejecutado' content2='- - -   - - -   - - -   - - -'/>
                            </ViewContainer>
                            <ViewContainer>
                                <FieldInfo label='Registro Actual' color='#44329C'>
                                    <OcrIcon color='#44329C' size={24} width={2}/>
                                </FieldInfo>
                                <InfoLineDouble title1='Color' content1={operation.state.data.colorEtiqueta||operationData?.colorEtiqueta||'No asignado aún'} title2='COD-Color' content2={operation.state.data.colorId||operationData?.colorId||'No asignado aún'}/>
                                <InfoLine title='TALLA EN PROCESO' content={operation.state.data.tallaId||operationData?.tallaId||'Sin registros aún'}/>
                                <InfoLine title='EAN EN PROCESO' content={operation.state.data.ean||operationData?.ean||'Sin registros aún'}/>
                                <InfoLineButton colorBtn='#44329C' fontBtn='#FFF' labelBtn='Editar...' title='Cantidad Registrada' content={operationData?.cantidad.toString()||'No asignado aún'}  
                                handlerClick={()=>{
                                    if(operationData?.cantidad){
                                        console.log(operationData?.cantidad)
                                    }else{
                                        Alert.alert('!Acción no permitida!','No se puede editar el campo si aún no se ha generado registros')
                                    }
                                }} />
                                <InfoLineButton2 colorBtn='#44329C' fontBtn='#FFF' labelBtn='Registrar...' title='Ingreso de unidades'
                                handlerClick={()=>{
                                    setModalRegisterState(true);
                                    setOperationData(operation.state.data);
                                }}/>
                                <InfoLineButton2 colorBtn='#44329C' fontBtn='#FFF' labelBtn='Editar...' title='Agregar parada Inmediata' 
                                handlerClick={()=>{

                                }}/>
                            </ViewContainer>
                        </>
                    }
                </View>

                <View style={productionStyle.footer}>
                    <TouchableOpacity style={[productionStyle.button,{backgroundColor:'#C7CCEC'}]} onPress={()=>{
                            removeData.removeDataOperation(navigation)
                        }}>
                        <RowLeftIcon color="#44329C" size={30} width={2}/>
                        <Text style={{color:'#44329C',fontSize:18,fontWeight:'600', marginLeft:'5%'}}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={productionStyle.button}>
                        <SendIcon color="#FFF" size={30} width={2}/>
                        <Text style={{color:'#FFF',fontSize:18,fontWeight:'600', marginLeft:'5%'}} onPress={()=>{
                            loadData.loadDataOperation(operationData,opDetails.state.data,navigation);
                        }}>Enviar Información</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                modalRegisterState?
                <ModalProductionRegister 
                opDetails={opDetails.state.data}
                operationData={operationData}
                setOperationData={setOperationData}
                handlerClick={()=>{setModalRegisterState(false)}}
                />:
                <></>
            }
            {
                opDetails.state.loading||operation.state.loading?
                <ModalLoading 
                label='Cargando información del proceso...' 
                handlerClick={()=>{}}/>:
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