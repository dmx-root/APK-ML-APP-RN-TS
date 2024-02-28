import {View,StyleSheet, Dimensions, TouchableOpacity, Text}    from 'react-native';
import { SendIcon }                                             from '../public/icons/sendIcon';
import { RowLeftIcon }                                          from '../public/icons/rowLeftIcon';
import { ViewContainer }                                        from '../components/viewContainer';
import { FieldInfo }                                            from '../components/fieldInfo';
import { InfoLine }                                             from '../components/infoLine';
import { InfoLineDouble }                                       from '../components/infoLineDouble';
import { OpIcon }                                               from '../public/icons/opIcon';
import { ModuloIcon }                                           from '../public/icons/moduloIcon';
import { InfoLineButton }                                       from '../components/InfoLineButton';
import { OcrIcon }                                              from '../public/icons/ocrIcon';
import { UserIcon }                                             from '../public/icons/userIcon';
import { ModalProductionRegister }                              from '../modals/modalProductionRegister';
import { ProductionScreenProps }                                from '../interfaces/screens/screensInterfaces';

const {height,width}=Dimensions.get('screen');

export function Production({navigation}:any){
    return<>
            <View style={productionStyle.productionContainer}>
                <View style={productionStyle.body}>
                    <ViewContainer>
                        <FieldInfo label='Información de operario' color='#44329C'>
                            <UserIcon color='#44329C' size={24} width={2}/>
                        </FieldInfo>
                        <InfoLine title='Fecha' content='12/12/2020'/>
                        <InfoLineDouble title1='Nombre de Operario' content1='David Esteban Morales' title2='Documento' content2='1146441925'/>
                    </ViewContainer>
                    <ViewContainer>
                        <FieldInfo label='Información de la OP' color='#44329C'>
                            <OpIcon color='#44329C' size={24} width={2}/>
                        </FieldInfo>
                        <InfoLine title='OP' content='MOP3458'/>
                        <InfoLineDouble title1='Planeado' content1='3000' title2='Ejecutado' content2='254'/>
                
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
                        {/* <InfoLineDouble title1='Talla' content1='XL' title2='' content2=''/> */}
                        <InfoLine title='TALLA' content='XL'/>
                        <InfoLine title='EAN' content='11454112441'/>
                        {/* <InfoLine title='Cantidad Registrada' content='30'/> */}
                    
                        {/* <FieldInfo label='Registro Actual' color='#44329C'>
                            <OcrIcon color='#44329C' size={24} width={2}/>
                        </FieldInfo> */}
                        <InfoLineButton colorBtn='#44329C' fontBtn='#FFF' labelBtn='Editar...' handlerClick={()=>{}} title='Cantidad Registrada' content='Editar'/>
                        <InfoLineButton colorBtn='#44329C' fontBtn='#FFF' labelBtn='Editar...' handlerClick={()=>{}} title='Parada Inmediata' content='Sin Eventos'/>
                        <InfoLineButton colorBtn='#44329C' fontBtn='#FFF' labelBtn='Registrar...' handlerClick={()=>{}} title='Ingreso de unidades' content='Sin Registros'/>
                    </ViewContainer>
                </View>
                <View style={productionStyle.footer}>
                    <TouchableOpacity style={[productionStyle.button]} onPress={()=>{navigation.navigate('HomeOcr')}}>
                        <RowLeftIcon color="#777" size={30} width={1.5}/>
                        <Text style={{color:'#777',fontSize:15,fontWeight:'500'}}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productionStyle.button}>
                        <SendIcon color="#777" size={30} width={1.5}/>
                        <Text style={{color:'#777',fontSize:15,fontWeight:'500'}}>Enviar Información</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <ModalProductionRegister/> */}
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
        paddingTop:10,
        width:'100%',
        height:'15%',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-evenly',
        // backgroundColor:'#FFF'
    },
    button:{
        width:'30%',
        height:70,
        borderRadius:30,
        marginRight:'5%',
        marginBottom:'5%',
        backgroundColor:'#C7E5FD',
        elevation:height*0.006,
        flexDirection:'row',
        paddingLeft:8,
        alignItems:'center',
        justifyContent:'space-evenly'

    }
})