import { ButtonFullWidth }                  from "../components/buttonFullWidth";
import { ModalContainer }                   from "../components/modalContainer";
import { form }                             from '../interfaces/view/login';
import { InfoIcon }                         from "../public/icons/infoIcon";
import { FieldInfo }                        from "../components/fieldInfo";
import { Input }                            from "../components/input";
import { Modal }                            from "../components/modal";
import { FlatList, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View }            from 'react-native';
import { useState } from "react";
import { ModalListSelect } from "./modalListSelect";
import { ModalItemList } from "../components/modalItemList";
import { ModuloRequestInterface } from '../services/ml_api/request/request.interface.modulo';
import { useApiGetData } from '../controllers/reducers/reducer.fetchData';
import { ROUTES } from "../endpoints/ml_api/ep.ml.api";

export function ModalRegisterOcrSegundas({handlerClick, handlerNext, setDataForm, dataForm }:{
    handlerClick: (event:GestureResponderEvent)=>void,
    handlerNext: (event:GestureResponderEvent)=>void,
    setDataForm: React.Dispatch<React.SetStateAction<form|null>>,
    dataForm: form | null
}){

    const {state} = useApiGetData(
        new ModuloRequestInterface({
            url: ROUTES.api_ml_production_modulo_get_all
        })
    )

    const [ modalModulosState, setModalModulosState ] = useState(false);
    const [ modalTypeOpState, setModalTypeOpState ] =   useState(false);
    
    return<>
        {
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

                {/* <Input 
                color='#44329C' 
                label='TIPO OP' 
                handlerInput={(text)=>{
                    setDataForm({...dataForm,opType:text.toUpperCase()})
                }} 
                textType='default' 
                placeholder="MOP/MOB" 
                value={dataForm?.['opType']?dataForm?.['opType']:''}/>

                <Input 
                color='#44329C' 
                label='MODULO' 
                handlerInput={(text)=>{
                    setDataForm({...dataForm,modulo:text})
                }} 
                textType="numeric" 
                placeholder="##" 
                value={dataForm?.['modulo']?dataForm?.['modulo']:''}/> */}
                
                <View style={inputStyle.container}>
                    <View style={inputStyle.frame}>
                        <View style={inputStyle.labelContainer}>
                            <Text style={[inputStyle.content,{color:'#44329C'}]}>TIPO DE OP</Text>
                        </View>
                        <TouchableOpacity 
                        style={inputStyle.inputContainer}
                        onPress={()=>{setModalTypeOpState(true)}}>
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

                <FieldInfo label='Asegurese de llenar todos los campos' color={'#44329C'}>
                    <InfoIcon color={'#44329C'} size={24} width={2}/>
                </FieldInfo>
                
                <ButtonFullWidth 
                fontColor='#44329C' 
                color='#FFF' 
                label='Registrar' 
                handlerClick={handlerNext}/>

            </ModalContainer>
        </Modal>
        }
        {
        modalModulosState?
        
        <ModalListSelect handlerClose={()=>{setModalModulosState(false)}}>
            <FlatList renderItem={(item)=>
                <ModalItemList handlerClick={()=>{setDataForm({...dataForm,modulo:item.item.moduloId.toString()}); setModalModulosState(false)}} label={item.item.moduloEtiqueta} position='center'/>
            } data={state?.data}/>
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