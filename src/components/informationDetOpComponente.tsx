import { TouchableOpacity,View, Text, StyleSheet,
         Dimensions, GestureResponderEvent, Image } from 'react-native'
import { CalendarIcon }                         from '../public/icons/calendarIcon';
import { OpIcon }                               from '../public/icons/opIcon';
import { OpDetail }                             from '../interfaces/services/ml_api/detailOpInteface';

// Doc 
// Este elemento tiene la finalidad de renderizar información más detallada de los registros
// tiene como parámetros de entrada:
// HandlerClick: manejador de eventos al hacer click sobre él 
// data: informacón del registros para renderizar 

const {width,height}=Dimensions.get('window');

const currentColorMain='#888';   //azul oscuro

export function InformationDetOpComponent({handlerClick, data}:{
    data:OpDetail
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <TouchableOpacity style={ocrStyle.container} onPress={handlerClick}>
        <View style={ocrStyle.header1}>
            <View style={ocrStyle.iconContainer}>
                <OpIcon color='#AAA' size={45} width={1.2}/>
            </View>
            <View style={ocrStyle.rowField}>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={ocrStyle.labelTitle}>{data.colorEtiqueta}</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{data.talla}</Text>
                        {/* <OcrIcon color='#999' size={20} width={2}/> */}
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{data.referencia}</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{data.opFechaAperturaProceso?`Abierto el ${data.opFechaAperturaProceso?.toDateString().slice(0,10)}`:'No def'}</Text>
                        <CalendarIcon color='#999' size={20} width={1.5}/>
                    </View>
                </View>
            </View>
            <View style={ocrStyle.rowField}>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={ocrStyle.labelTitle}>{data.op}</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{`${data.opLoteCompletado} unidades ejecutadas`}</Text>
                        {/* <ModuloIcon color='#999' size={20} width={2}/> */}
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{`${data.opLotePlaneado-data.opLoteCompletado} Unidades sin ejecutar`}</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>{data.opFechaCierreProceso?.toLocaleString().slice(0,10)||'Elemento en proceso'}</Text>
                        <CalendarIcon color='#999' size={20} width={1.5}/>
                    </View>
                </View>
                
            </View>
        </View>
    </ TouchableOpacity>
}

const ocrStyle=StyleSheet.create({
    container:{
        width:'98%',
        height:height*0.11,
        backgroundColor:'#EEE',
        borderRadius:10,
        marginBottom:5,
        borderBottomColor:'#CCC',
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
        alignItems:'center'
    },
    iconCheckContainer:{
        position:'absolute',
        right:'0%',
        marginRight:'0.4%',
        marginTop:'1.2%'

    },
    rowContente:{
        width:'100%',
        height:'22%',
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
        paddingRight:20
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
        justifyContent:'center',
        padding:'2%'
    }
});