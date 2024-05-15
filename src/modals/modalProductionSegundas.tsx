import { InformationSegundaComponent }                      from '../components/informationSegundaComponent'
import { InfoLineDouble }                                   from '../components/infoLineDouble';
import { ModalContainer }                                   from '../components/modalContainer';
import { EmptyComponent }                                   from '../components/emptyComponent';
import { FieldInfo }                                        from '../components/fieldInfo';
import { OcrIcon }                                          from '../public/icons/ocrIcon';
import { Modal }                                            from '../components/modal';
import { LoadingComponent }                                 from '../components/loadingComponent';
import { useMainContext }                                   from '../contexts/mainContext';
import { form }                                             from '../interfaces/view/login';
import { ButtonFullWidth }                                  from '../components/buttonFullWidth';
import { useDeviceReader }                                  from '../controllers/reducers/reducer.deviceReader';
import { ModalLoading }                                     from './modalLoading';
import { useEffect, useState }                              from 'react';
import { GestureResponderEvent, StyleSheet, View, Text, TextInput,}    from 'react-native';
import { DetailOPRequestInterface }                         from '../services/ml_api/request/request.interface.detailOp';
import { useApiGetData }                                    from '../controllers/reducers/reducer.fetchData';
import { ROUTES }                                           from '../endpoints/ml_api/ep.ml.api';
import { useLoadData } from '../controllers/reducers/reducer.dispatchData';
import { ObjectDispatchInterface } from '../services/ml_api/dispatch/dispatch.interface.object';

export function ModalProductionSegundas({
    handlerClick, 
    handlerNext,
    formData,
}:{
    handlerClick: (event:GestureResponderEvent)=>void,
    handlerNext:  (event:GestureResponderEvent)=>void,
    formData : form | null
}){
    const { state } = useApiGetData(
        new DetailOPRequestInterface({
            url: ROUTES.api_ml_production_op_details_get+(formData?.opType || '') + (formData?.op || '')
        })
    );

    const loadData = useLoadData(
        new ObjectDispatchInterface({
            method:'post',
            url: ROUTES.api_ml_production_ocr_segundas_post
        })
    )

    const device =              useDeviceReader();
    const contextStorage =      useMainContext();
    
    const [ value, setValue] =  useState<string> ('');

    useEffect(()=>{
        if(value.length>12){
            device.deviceReader(state.data, value, parseInt(formData?.modulo||'0'))
            setValue('');
        }
    },[value])

    console.log(device.state.data)

    return <>
            {loadData.state.loading?
            <ModalLoading label='Cargando información...' handlerClick={()=>{}}/>:           
            <Modal handlerClick={handlerClick}>
                <ModalContainer color='#C7CCEC'>
                    <InfoLineDouble 
                    title1='FECHA' 
                    content1={new Date().toLocaleString().slice(0,9)} 
                    title2='OPERARIO' 
                    content2={contextStorage?.currentUser?.nombre.slice(0,12)+'...'||'No definido'}/>

                    <InfoLineDouble title1='OP' content1={formData?.op||'No definido'} title2='MÓDULO' content2={formData?.modulo||'No definido'}/>
                    <FieldInfo label='Registro de segundas' color='#44329C'>
                        <OcrIcon color="#44329C" size={24} width={2}/>
                    </FieldInfo>
                    <View style={segundasModal.fieldArea}>
                        <View style={segundasModal.container}>
                            <View style={[segundasModal.headerlabelContanier,{width:'15%'}]}>
                                <Text style={segundasModal.title}>TALLA</Text>
                            </View>
                            <View style={[segundasModal.headerlabelContanier,{width:'34.5%'}]}>
                                <Text style={segundasModal.title}>COLOR</Text>
                            </View>
                            <View style={[segundasModal.headerlabelContanier,{width:'34.5%'}]}>
                                <Text style={segundasModal.title}>EAN</Text>
                            </View>
                            <View style={[segundasModal.headerlabelContanier,{width:'15.5%'}]}>
                                <Text style={segundasModal.title}>CANT.</Text>
                            </View>
                        </View>
                        {
                            state.loading?
                            <LoadingComponent label='Cargando elementos...'/>:
                            state.error?
                            <EmptyComponent label='Error al cargar los elementos' color='#CCC'/>:
                            state.data?.map(element => 
                            <InformationSegundaComponent 
                            talla=  {element.talla} 
                            color=  {element.colorEtiqueta} 
                            ean=    {element.ean} 
                            key=    {element.ean}
                            backColor={device.state.data?.find(elm =>(elm.talla+elm.colorId)===(element.talla+element.colorCodigo))?'#D5F5E3':'#FFF'}
                            cantidad={device.state.data?.find(elm =>(elm.talla+elm.colorId)===(element.talla+element.colorCodigo))?.unidades||0}/>)
                        }
                    </View>
                    <FieldInfo label='Lectura para códigos de barras' color='#44329C'>
                        <></>
                    </FieldInfo>
                    <View style={segundasModal.inputContainer}>
                        <View style={segundasModal.labelContanier}>
                            <Text style={segundasModal.title}>EAN</Text>
                        </View>
                        <View style={segundasModal.labelContanier}>
                            <Text style ={segundasModal.title}>7778874445545</Text>
                        </View>
                        <View style={segundasModal.labelContanier}>
                            <TextInput onChangeText={(txt)=>{
                                setValue(txt)
                            }}
                            keyboardType='numeric'
                            value={value}
                            // ref={input}
                            />
                        </View>

                    </View>                        
                    <View style={{height:20}}/>
                    <ButtonFullWidth 
                    color='#FFF' 
                    fontColor='#44329C' 
                    handlerClick={(e)=>{
                        handlerNext(e);
                        if(device.state.data)
                            loadData.loadData({
                                "elements":device.state.data
                            },
                            async (res) =>{
                                console.log(res)
                                handlerClick(e);
                            })
                    }} 
                    label='Enviar...'/>

                    <ButtonFullWidth 
                    color='#FFF' 
                    fontColor='#44329C' 
                    handlerClick={(e)=>{}} 
                    label='Cancelar'/>

                </ModalContainer>
            </Modal>
            }
            
    
    </>
    
}

const segundasModal=StyleSheet.create({
    fieldArea:{
        width:'100%',
        minHeight:200,
        // height:200,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 20,
        alignItems:'center'
    },
    inputContainer:{
        width:'100%',
        height:50,
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    labelContanier:{
        backgroundColor:'#FFF',
        height:'100%',
        width:'33%',
        justifyContent:'center',
        // alignItems:'center',
        paddingLeft:30
    },
    title:{
        color:'#777',
        fontWeight:'bold'
    },

    container:{
        flexDirection:'row',
        width:'100%',
        height:50,
        alignContent:'center',
        justifyContent:'space-between',
        marginBottom:2,
        marginTop:2
    },
    headerlabelContanier:{
        width:'24.5%',
        height:'100%',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#CCC',
        paddingLeft:15,
    },
    contentContainer:{
        width:'24.5%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:15,
        alignContent:'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#CCC'
    },
    headertitle:{
        fontSize:15,
        color:'#777',
        fontWeight:'bold'
    },
    content:{
        fontSize:15,
        color:'#777',
        // fontWeight:'bold'

    }
})