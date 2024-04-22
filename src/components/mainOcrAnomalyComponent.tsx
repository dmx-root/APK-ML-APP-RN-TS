import {View, TouchableOpacity, Image, Text, StyleSheet, GestureResponderEvent} from 'react-native'
import { OpIcon } from '../public/icons/opIcon';
import { ModuloIcon } from '../public/icons/moduloIcon';
import { OcrProcessesInterface } from '../interfaces/services/ml_api/ocrInterfaces';
import { CheckBoxEmpty } from '../public/icons/checkBoxEmpty';
import { CheckBoxFill } from '../public/icons/checkBoxFill';

// Doc 
// Este elemento es la representación para el registro de unidades
// es el componente principal el cual tiene como objetivo presentar información básica de las ordenes de conteo y registro
// Este componente recibe como parámetros de entrada:
// handlerClick: nos permite pasar un manejador de eventos por medio de este parámeto, para el evento "click"
// data: es la interfaz que define la información que será renderizada en el elemento

export function MainOcrAnomalyComponent({data,handlerClick}:{
    data:OcrProcessesInterface,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <View>
    <TouchableOpacity style={ocrStyle.ocrcontainer} onPress={handlerClick}>
        <View style={ocrStyle.ocrIconContainer}>
            <View style={ocrStyle.ocrIcon}>
                {/* <CalendarIcon color='#AAA' width={2} size={40}/> */}
                <Image  style={ocrStyle.img} source={require('../public/img/ocr-img-3.png')}/>
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
                <ModuloIcon color='#EC7063' size={20} width={2.5}/>
                <Text style={ocrStyle.content}>{`MOD-${data.moduloId}`}</Text>
            </View>
            <View style={ocrStyle.ocrNegativeActions}>
                <OpIcon color='#EC7063' size={20} width={2.5}/>
                <Text style={ocrStyle.content}>{data.op}</Text>
            </View>
            <View style={ocrStyle.ocrRefrenecia}>
                <View style={{width:'100%', height:'35%', justifyContent:'center', alignItems:'flex-end', paddingRight:'5%'}}>
                    {
                        data.revisadoPorId?
                        <CheckBoxFill color='#EC7063' size={15} width={2.5}/>:
                        <CheckBoxEmpty color='#EC7063' size={15} width={2.5}/>
                    }
                </View>
                <Text style={[ocrStyle.content,{color:'#F1948A'}]}>{data.referencia}</Text>
            </View>
        </View>
    </TouchableOpacity>
</View>
}

const ocrStyle=StyleSheet.create({
    ocrcontainer:{
        flexDirection:'row',
        height:100,
        // marginBottom:2,
        
        margin:'auto',
        maxWidth:'100%',
        borderColor:"#CCC",
        backgroundColor:'#FDEDEC',
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
        width:25,
        height:25,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
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
        color:"#EC7063",
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