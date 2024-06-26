import { TouchableOpacity,View, Text, StyleSheet, Dimensions, GestureResponderEvent,Image } from 'react-native'
import { OcrIcon }                              from '../public/icons/ocrIcon';
import { CheckBoxEmpty }                        from '../public/icons/checkBoxEmpty';
import { UserIcon }                             from '../public/icons/userIcon';
import { CalendarIcon }                         from '../public/icons/calendarIcon';
import { OcrProcessesInterface } from '../interfaces/services/ml_api/ocrInterfaces';
import { CheckBoxFill } from '../public/icons/checkBoxFill';

// Doc 
// Este elemento tiene la finalidad de renderizar información más detallada de los registros
// tiene como parámetros de entrada:
// HandlerClick: manejador de eventos al hacer click sobre él 
// data: informacón del registros para renderizar 

const {width,height}=Dimensions.get('window');

const currentColorMain='#1C46AF';   //azul oscuro

export function InformationOcrCheckComponent({handlerClick,data}:{
    handlerClick:(event:GestureResponderEvent)=>void,
    data:OcrProcessesInterface
}){
    return <TouchableOpacity style={ocrStyle.container} onPress={handlerClick}>
        <View style={ocrStyle.header1}>
            <View style={ocrStyle.iconContainer}>
                <OcrIcon color='#1C46AF' size={50} width={1.3}/>
            </View>
            <View style={ocrStyle.iconCheckContainer}>
                {
                    data.revisadoFecha?
                    <CheckBoxFill color='#1C46AF' size={25} width={2}/>:
                    <CheckBoxEmpty color='#1C46AF' size={25} width={2}/>
                }
            </View>
            <View style={ocrStyle.rowField}>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={ocrStyle.labelTitle}>{`Inicio a las ${data.inicioOperacion?.toLocaleString().slice(11,19)}`}</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{`${data.cantidadUnidades} unidades registradas`}</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{data.referencia}</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{`Revisado el ${data.revisadoFecha?.toLocaleString().slice(0,10)}`}</Text>
                        <CalendarIcon color='#1C46AF' size={20} width={1.5}/>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{`Registrado el ${data.registroFecha?.toLocaleString().slice(0,10)}`}</Text>
                        <CalendarIcon color='#1C46AF' size={20} width={1.5}/>
                    </View>
                </View>
            </View>
            <View style={ocrStyle.rowField}>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={ocrStyle.labelTitle}>{`Finalización a las ${data.finOperacion?.toLocaleString().slice(11,19)}`}</Text>
                        {/* <ClockIcon color='#777' size={20} width={2}/> */}
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{`MODULO-${data.moduloId}`}</Text>
                        {/* <ModuloIcon color='#999' size={20} width={2}/> */}
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{data.anormalidadCodigo||`Sin Eventos`}</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{`Revisado por ${data.revisadoPorId}`}</Text>
                        <UserIcon color='#1C46AF' size={20} width={2}/>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{`Registrado por ${data.registradoPorId}`}</Text>
                        <UserIcon color='#1C46AF' size={20} width={2}/>
                    </View>
                </View>
                
            </View>
        </View>
    </TouchableOpacity>
}

const ocrStyle=StyleSheet.create({
    container:{
        width:'100%',
        height:height*0.12,
        backgroundColor:'#CAD8F9',
        // borderRadius:10,
        marginBottom:1,
        borderBottomColor:'#A3BDFE',
        borderBottomWidth:3
    },
    body:{
        width:'100%',
        height:'100%',
        // backgroundColor:'aqua'
    },
    extends:{
        width:'100%',
        height:'35%',
        flexDirection:'row'
        // backgroundColor:'aquamarine'
    },
    header1:{
        height:'100%',
        width:'98%',
        alignSelf:'center',
        flexDirection:'row',
        // backgroundColor:currentColorMain4,
        // borderRadius:height*0.004,
        // marginTop:'0.5%',
        // marginBottom:'0.5%',
        borderBottomWidth:1,
        borderBottomColor:'#EEE'
    },
    header2:{
        height:height*0.11,
        width:'98%',
        backgroundColor:'#F9EBEA',
        borderRadius:height*0.004,
        alignSelf:'center',
        flexDirection:'row',
        marginTop:'0.5%',
        marginBottom:'0.5%',
        borderBottomWidth:height*0.002,
        borderBottomColor:'#C1C1C1'
    },
    rowField:{
        width:'41%',
        height:'100%',
        justifyContent:'center'
        // flexDirection:'row'
        // backgroundColor:'aqua'
    },
    iconContainer:{
        height:'100%',
        width:'16%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:currentColorMain1
    },
    icon2Container:{
        height:'100%',
        width:'18%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua',
        
        // backgroundColor:currentColorMain1
    },
    iconCheckContainer:{
        position:'absolute',
        right:'0%',
        marginRight:'0.4%',
        marginTop:'1.2%'

    },
    rowContente:{
        width:'100%',
        height:'18%',
        flexDirection:'row',
    },
    fieldContainer:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
        // justifyContent:'space-between',
        alignContent:'center',
        paddingLeft:'8%'
    },
    labelTitle:{
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:15,
        paddingRight:20,
        // paddingLeft:20,
    },
    fieldontent:{
        color:'#999',
        fontSize:height*0.015
    },
    icon:{
        height:'60%'
    },
    infoUser:{
        width:'40%',
        height:'100%',
        // backgroundColor:'aqua',
        justifyContent:'center',
        padding:'2%'
    }
});