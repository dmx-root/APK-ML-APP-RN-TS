import { TouchableOpacity,View, Text, StyleSheet, Dimensions, GestureResponderEvent} from 'react-native'
import { OcrIcon }                              from '../public/icons/ocrIcon';
import { OcrProcessesInterface } from '../interfaces/services/ml_api/ocrInterfaces';

// Doc 
// Este elemento tiene la finalidad de renderizar información más detallada de los registros
// tiene como parámetros de entrada:
// HandlerClick: manejador de eventos al hacer click sobre él 
// data: informacón del registros para renderizar 

const {width,height}=Dimensions.get('window');

export function InformationSegundaComponent({handlerClick,data}:{
    handlerClick:(event:GestureResponderEvent)=>void,
    data:OcrProcessesInterface
}){
    return <TouchableOpacity style={ocrStyle.container} onPress={handlerClick}>
        <View style={ocrStyle.header1}>
            <View style={ocrStyle.iconContainer}>
                <OcrIcon color='green' size={40} width={1.5}/>
            </View>
            <View style={ocrStyle.rowField}>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={ocrStyle.labelTitle}>Cantidad Registrada</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>Talla Registrada</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>Color Registrado</Text>
                    </View>
                </View>
                
            </View>
            <View style={ocrStyle.rowField}>
                <View style={ocrStyle.rowContente}>
                    <View style={[ocrStyle.fieldContainer,{justifyContent:'flex-end'}]}>
                        <Text style={ocrStyle.labelTitle}>35</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={[ocrStyle.fieldContainer,{justifyContent:'flex-end'}]}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>XL</Text>
                        {/* <ModuloIcon color='#999' size={20} width={2}/> */}
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={[ocrStyle.fieldContainer,{justifyContent:'flex-end'}]}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>Verde</Text>
                    </View>
                </View>              
            </View>
        </View>
    </TouchableOpacity>
}

const ocrStyle=StyleSheet.create({
    container:{
        width:'99%',
        height:height*0.08,
        backgroundColor:'#D5F5E3',
        borderRadius:8,
        marginBottom:3,
        borderBottomColor:'#82E0AA',
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
        height:'33%',
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
        color:'green',
        fontWeight:'bold',
        fontSize:15,
        paddingRight:20,
        // paddingLeft:20,
    },
    fieldontent:{
        color:'#EC7063',
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