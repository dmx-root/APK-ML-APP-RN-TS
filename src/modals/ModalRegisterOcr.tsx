import { useSetOperation }                  from "../controllers/hooks/customHookSetOperation";
import { ButtonFullWidth }                  from "../components/buttonFullWidth";
import { newOperation, OperationInterface } from "../interfaces/view/production";
import { ModalContainer }                   from "../components/modalContainer";
import { InfoIcon }                         from "../public/icons/infoIcon";
import { form }                             from '../interfaces/view/login';
import { FieldInfo }                        from "../components/fieldInfo";
import { useMainContext }                   from "../contexts/mainContext";
import { Input }                            from "../components/input";
import { Modal }                            from "../components/modal";
import { ModalLoading }                     from "./modalLoading";
import { ModalAlert }                       from "./modalAlert";
import { ModalListSelect }                  from "./modalListSelect";
import { ModalItemList }                    from "../components/modalItemList";
import { useState }                         from "react";
import { ModuloRequestInterface}            from '../services/ml_api/request/request.interface.modulo';
import { useApiGetData }                    from '../controllers/reducers/reducer.fetchData';
import { ROUTES }                           from "../endpoints/ml_api/ep.ml.api";
import { ObjectDispatchInterface }          from '../services/ml_api/dispatch/dispatch.interface.object'
import { useLoadData }                      from "../controllers/reducers/reducer.dispatchData";
import { LocalStorageSaveObject }           from '../services/local_storage/dispatch/dispatch.interface.saveObject'
import { LocalStorageSaveItem }             from '../services/local_storage/dispatch/dispatch.interface.saveItem';
import { Alert, FlatList, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const saveProcessData : (data : any, modulo: number) =>Promise<void> = async (data : any, modulo: number) => { 
    const saveItem =new LocalStorageSaveItem('currentModulo',modulo.toString());
    const saveData = new LocalStorageSaveObject('currentOp',data);
    try {
        await saveItem.execute();
        await saveData.execute();
    } catch (error) {
        console.log(error)
    }
} 

export function ModalRegisterOcr({handlerClick,navigation}:{
    handlerClick:(event:GestureResponderEvent)=>void,
    navigation:any,
}){
    const contextStorage =                              useMainContext();
    const [ dataForm, setDataForm ] =                   useState<form|null>(null);
    const [ alertState, setAlertState ] =               useState<boolean>(false);
    const [ modalModulosState, setModalModulosState ] = useState(false);
    const [ modalTypeOpState, setModalTypeOpState ] =   useState(false);

    const modulos = useApiGetData(
        new ModuloRequestInterface({
            url: ROUTES.api_ml_production_modulo_get_all
        })
    );

    const { state, loadData } = useLoadData(
        new ObjectDispatchInterface({
            method:'post',
            url:ROUTES.api_ml_production_op_open,
        })
    );

    return<>
        {
        state.loading?
        <ModalLoading 
        label="Cargando registros" 
        handlerClick={()=>{}}/>:
        state.error?

        <ModalAlert 
        label="Error de consulta" 
        content={typeof(state.data)==='string'?state.data:false||'La consulta falló'} 
        handlerClick={handlerClick}/>:

        <Modal handlerClick={handlerClick}>
            <ModalContainer color='#C7CCEC'>

                <Input 
                color='#44329C' 
                label='OP' 
                handlerInput={(text)=>{
                    setDataForm({...dataForm,op:text});
                }} 
                textType='numeric' 
                placeholder="X-X-X-X" 
                value={dataForm?.['op']?dataForm?.['op']:''}/>

                <View style={inputStyle.container}>
                    <View style={inputStyle.frame}>
                        <View style={inputStyle.labelContainer}>
                            <Text style={[inputStyle.content,{color:'#44329C'}]}>TIPO DE OP</Text>
                        </View>
                        <TouchableOpacity style={inputStyle.inputContainer} onPress={()=>{setModalTypeOpState(true)}}>
                            <Text style={inputStyle.input}>{dataForm?.['opType']?dataForm?.['opType']:''}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={inputStyle.container}>
                    <View style={inputStyle.frame}>
                        <View style={inputStyle.labelContainer}>
                            <Text style={[inputStyle.content,{color:'#44329C'}]}>MÓDULO</Text>
                        </View>
                        <TouchableOpacity 
                        style={inputStyle.inputContainer}
                        onPress={()=>{setModalModulosState(true)}}>
                            <Text style={inputStyle.input}>{dataForm?.['modulo']?dataForm?.['modulo']:''}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FieldInfo label='Asegurese de llenar todos los campos' color={alertState?'red':'#44329C'}>
                    <InfoIcon color={alertState?'red':'#44329C'} size={24} width={2}/>
                </FieldInfo>
                
                <ButtonFullWidth 
                fontColor='#44329C' 
                color='#FFF' 
                label='Enviar' 
                handlerClick={(e)=>{
                    if(dataForm?.['op']&&dataForm?.['opType']&&dataForm?.['modulo']){

                        const operationData: OperationInterface={
                            ...newOperation,
                            op:                 dataForm?.['opType']+dataForm?.['op'],
                            moduloId:           parseInt(dataForm?.['modulo']),
                            inicioOperacion:    new Date().toLocaleTimeString(),
                            fechaRegistro:      new Date().toLocaleDateString(),
                            registradoPor:      contextStorage?.currentUser?.documentoid||''
                        }

                        loadData({
                            op:operationData.op,
                            usuario:contextStorage?.currentUser?.documentoid
                        },
                        async (response)=>{
                            //Esta funcion se ejecuta si y solo si la consulta fue exitosa
                            if(response)
                            await saveProcessData(response.data,operationData.moduloId) // Guardamos los datos fundamentales para el proceso de manera local
                            navigation.navigate('Production',operationData);
                        });
                    }
                    else {
                        setAlertState(true);
                        Alert.alert('Campos vacios','Asegúrese de llenar todos los campos');
                    }
                }}/>

            </ModalContainer>
        </Modal>
        }
        {
        modalModulosState?
        <ModalListSelect handlerClose={()=>{setModalModulosState(false)}}>
            <FlatList renderItem={(item)=>
                <ModalItemList handlerClick={()=>{setDataForm({...dataForm,modulo:item.item.moduloId.toString()}); setModalModulosState(false)}} label={item.item.moduloEtiqueta} position='center'/>
            } data={modulos.state?.data}/>
        </ModalListSelect>:
        <></>
        }
        {
        modalTypeOpState?
        <ModalListSelect handlerClose={()=>{setModalTypeOpState(false)}}>
            <ModalItemList handlerClick={()=>{setDataForm({...dataForm,opType:'MOB'}); setModalTypeOpState(false)}} label='BRASIER' position='center'/>
            <ModalItemList handlerClick={()=>{setDataForm({...dataForm,opType:'MOP'}); setModalTypeOpState(false)}} label='PANTY' position='center'/>
        </ModalListSelect>:
        <></>
        }

    </>
}


const inputStyle=StyleSheet.create({
    container:{
        width:'100%',
        height:80,
        justifyContent:'center'
    },
    frame:{
        width:'100%',
        height:'70%',
        flexDirection:'row',
        
    },
    labelContainer:{
        height:'100%',
        width:'40%',
        justifyContent:'center'
    },
    inputContainer:{
        height:'100%',
        width:'60%',
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF'
    },
    content:{
        fontSize:18,
        fontWeight:'700',
    },
    input:{
        paddingLeft:20,
        fontSize:20,
        color:'#999',
        fontWeight:'600'
    }
})
