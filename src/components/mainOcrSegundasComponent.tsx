import {View, TouchableOpacity, Image, Text, StyleSheet, GestureResponderEvent} from 'react-native'
import { OpIcon } from '../public/icons/opIcon';
import { ModuloIcon } from '../public/icons/moduloIcon';
import { OcrProcessesInterface } from '../interfaces/services/ml_api/ocrInterfaces';
import { CalendarIcon } from '../public/icons/calendarIcon';
import { CheckIcon } from '../public/icons/CheckIcon';
import { CheckBoxEmpty } from '../public/icons/checkBoxEmpty';
import { CheckBoxFill } from '../public/icons/checkBoxFill';

// Doc 
// Este elemento es la representación para el registro de unidades
// es el componente principal el cual tiene como objetivo presentar información básica de las ordenes de conteo y registro
// Este componente recibe como parámetros de entrada:
// handlerClick: nos permite pasar un manejador de eventos por medio de este parámeto, para el evento "click"
// data: es la interfaz que define la información que será renderizada en el elemento

export function MainOcrSegundasComponent({data,handlerClick}:{
    data:OcrProcessesInterface,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    // console.log(data.revisadoPorId)
    return <View>
    <TouchableOpacity style={ocrStyle.ocrcontainer} onPress={handlerClick}>
        <View style={ocrStyle.ocrIconContainer}>
            
            <View style={ocrStyle.ocrIcon}>
                <Image  style={ocrStyle.img} source={require('../public/img/ocr-img-4.png')}/>
            </View>
        </View>
        <View style={ocrStyle.body}>
            <View style={ocrStyle.ocrNumber}>
                <Text style={ocrStyle.content}>{data.colorEtiqueta}</Text>
            </View>
            <View style={ocrStyle.ocrCantidad}>
                <Text style={ocrStyle.content}>{data.cantidadUnidades}</Text>
            </View>
            <View style={ocrStyle.ocrPositiveActions}>
                <Text style={ocrStyle.content}>{data.tallaId}</Text>
            </View>
            <View style={ocrStyle.modulo}>
                <ModuloIcon color='green' size={20} width={2.5}/>
                <Text style={ocrStyle.content}>{`MOD-${data.moduloId}`}</Text>
            </View>
            <View style={ocrStyle.ocrNegativeActions}>
                <OpIcon color='green' size={20} width={2.5}/>
                <Text style={ocrStyle.content}>{data.op}</Text>
            </View>
            <View style={ocrStyle.ocrRefrenecia}>
                <View style={{width:'100%', height:'35%', justifyContent:'center', alignItems:'flex-end', paddingRight:'5%'}}>
                    {
                        data.revisadoPorId?
                        <CheckBoxFill color='green' size={15} width={2.5}/>:
                        <CheckBoxEmpty color='green' size={15} width={2.5}/>
                    }
                </View>
                <Text style={[ocrStyle.content,{color:'#52BE80'}]}>{data.referencia}</Text>
            </View>
        </View>
    </TouchableOpacity>
</View>
}

const ocrStyle=StyleSheet.create({
    ocrcontainer:{
        flexDirection:'row',
        height:100,
        margin:'auto',
        maxWidth:'100%',
        borderColor:"#CCC",
        backgroundColor:'#EAFAF1',
        borderBottomWidth:2,
        borderRadius:10,
    
    },
    img:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        resizeMode:'contain',
        flex:1
    },
    ocrIconContainer:{
        height:'100%',
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    ocrIcon:{
        width:'100%',
        height:25,
        // backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
    },
    ocrNumber:{
        height:'100%',
        width:'20%',
        justifyContent:'center'
    },
    ocrCantidad:{
        width:'10%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:15
    },
    ocrPositiveActions:{
        width:'8%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    modulo:{
        width:'17%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'

    },
    ocrNegativeActions:{
        width:'20%',
        height:'100%',
        // flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        // backgroundColor:'aqua'
    },
    ocrRefrenecia:{
        width:'25%',
        height:'100%',
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    content:{
        fontSize:16,
        fontWeight:'bold',
        color:"green",
        // color:'#999'
    },
    createIconContainer:{
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    body:{
        flexDirection:'row',
        width:'85%',
        height:'100%',
        // backgroundColor:'aqua'
    }
});