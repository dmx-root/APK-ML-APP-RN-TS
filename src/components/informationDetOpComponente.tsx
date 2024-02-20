import { TouchableOpacity,View, Text, StyleSheet, Dimensions, GestureResponderEvent,Image } from 'react-native'
import { OcrIcon }                              from '../public/icons/ocrIcon';
import { CheckBoxEmpty }                        from '../public/icons/checkBoxEmpty';
import { UserIcon }                             from '../public/icons/userIcon';
import { CalendarIcon }                         from '../public/icons/calendarIcon';
import { ModuloIcon }                           from '../public/icons/moduloIcon';
import { OpIcon } from '../public/icons/opIcon';

// Doc 
// Este elemento tiene la finalidad de renderizar información más detallada de los registros
// tiene como parámetros de entrada:
// HandlerClick: manejador de eventos al hacer click sobre él 
// data: informacón del registros para renderizar 

const {width,height}=Dimensions.get('window');

const currentColorMain='#888';   //azul oscuro
const currentColorMain4='#e1e1e1';  //color de letra resaltado


export function InformationDetOpComponent({handlerClick}:{
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <View style={ocrStyle.container}>
        <View style={ocrStyle.header1}>
            <View style={ocrStyle.iconContainer}>
                <OpIcon color='#AAA' size={45} width={1.2}/>
            </View>
            <View style={ocrStyle.rowField}>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={ocrStyle.labelTitle}>Blanco</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>Xl</Text>
                        {/* <OcrIcon color='#999' size={20} width={2}/> */}
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>MAR32457</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>Abierto el 20/08/2023</Text>
                        <CalendarIcon color='#999' size={20} width={1.5}/>
                    </View>
                </View>
            </View>
            <View style={ocrStyle.rowField}>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={ocrStyle.labelTitle}>MOP3548</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>500 unidades ejecutadas</Text>
                        {/* <ModuloIcon color='#999' size={20} width={2}/> */}
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>300 Unidades sin ejecutar</Text>
                    </View>
                </View>
                <View style={ocrStyle.rowContente}>
                    <View style={ocrStyle.fieldContainer}>
                        <Text style={[ocrStyle.labelTitle,{fontWeight:'normal'}]}>Elemento en proceso</Text>
                        <CalendarIcon color='#999' size={20} width={1.5}/>
                    </View>
                </View>
                
            </View>
        </View>
        {/* <View style={ocrStyle.extends}>
            <View style={ocrStyle.icon2Container}>
                <View style={{borderRadius:40, backgroundColor:'#EEE', width:40, height:40, justifyContent:'center', alignItems:'center'}}>
                    <UserIcon color='#999' size={25} width={1.5}/>
                </View>
            </View>
            <View style={ocrStyle.infoUser}>
                <Text style={{fontSize:15, color:'#777', fontWeight:'500'}}>Registrado por 1146441925</Text>
            </View>
            <View style={[ocrStyle.icon2Container,{width:'10%'}]}>
                <View style={{borderRadius:40, backgroundColor:'#EEE', width:40, height:40, justifyContent:'center', alignItems:'center'}}>
                    <CalendarIcon color='#999' size={25} width={1.5}/>
                </View>
            </View>
            <View style={[ocrStyle.infoUser,{width:'30%'}]}>
                <Text style={{fontSize:15, color:'#777', fontWeight:'500'}}>Registrado el 12/22/2023</Text>
            </View>
        </View> */}
    </View>
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
        // backgroundColor:'aqua',
        justifyContent:'center',
        padding:'2%'
    }
});