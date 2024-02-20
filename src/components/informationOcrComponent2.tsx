import { TouchableOpacity,View, Text, StyleSheet, Dimensions, GestureResponderEvent,Image } from 'react-native'
import { OcrIcon } from '../public/icons/ocrIcon';

// Doc 
// Este elemento tiene la finalidad de renderizar información más detallada de los registros
// tiene como parámetros de entrada:
// HandlerClick: manejador de eventos al hacer click sobre él 
// data: informacón del registros para renderizar 

const {width,height}=Dimensions.get('window');

const currentColorMain='#888';   //azul oscuro
const currentColorMain4='#e1e1e1';  //color de letra resaltado


export function InformationOcrComponent2({handlerClick}:{
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <TouchableOpacity style={ocrStyle.header1} onPress={handlerClick}>
                <View style={ocrStyle.iconContainer}>
                    <OcrIcon color='#AAA' size={50} width={1.5}/>
                    {/* <Image  style={ocrStyle.img} source={require('../public/img/ocr-img-2.png')}/> */}
                </View>
                <View style={ocrStyle.iconCheckContainer}>
                    {/* <CheckBoxEmpty data={{color:'#BBB',size:height*0.025}}/> */}
                    
                </View>
                <View style={ocrStyle.rowField}>
                    <View style={ocrStyle.rowContente}>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.labelTitle}>FECHA:</Text>
                        </View>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.fieldontent}>{}</Text>
                        </View>
                    </View>
                    <View style={ocrStyle.rowContente}>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.labelTitle}>HORA-I</Text>
                        </View>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.fieldontent}>{}</Text>
                        </View>
                    </View>
                    <View style={ocrStyle.rowContente}>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.labelTitle}>REG. POR</Text>
                        </View>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.fieldontent}>{}</Text>
                        </View>
                    </View>
                </View>
                <View style={ocrStyle.rowField}>
                    <View style={ocrStyle.rowContente}>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.labelTitle}>MODULO</Text>
                        </View>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.fieldontent}>{}</Text>
                        </View>
                    </View>
                    <View style={ocrStyle.rowContente}>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.labelTitle}>HORA-F</Text>
                        </View>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.fieldontent}>{}</Text>
                        </View>
                    </View>
                    <View style={ocrStyle.rowContente}>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.labelTitle}>UNIDADES</Text>
                        </View>
                        <View style={ocrStyle.fieldContainer}>
                            <Text style={ocrStyle.fieldontent}>{}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
}

const ocrStyle=StyleSheet.create({
    header1:{
        height:height*0.11,
        width:'98%',
        backgroundColor:currentColorMain4,
        borderRadius:height*0.004,
        alignSelf:'center',
        flexDirection:'row',
        marginTop:'0.5%',
        marginBottom:'0.5%',
        borderBottomWidth:height*0.002,
        borderBottomColor:'#C1C1C1'
    },
     img:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        resizeMode:'contain',
        flex:1
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
    iconCheckContainer:{
        position:'absolute',
        right:'0%',
        marginRight:'0.4%',
        marginTop:'1.2%'

    },
    rowContente:{
        width:'100%',
        height:'32%',
        flexDirection:'row',
    },
    fieldContainer:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'8%'
    },
    labelTitle:{
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:18
    },
    fieldontent:{
        color:'#999',
        fontSize:height*0.015
    },
    icon:{
        height:'60%'
    }
})