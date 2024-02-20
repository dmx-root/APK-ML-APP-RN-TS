import { TouchableOpacity,View, Text, StyleSheet, Dimensions, GestureResponderEvent,Image } from 'react-native'
import { UserIcon }                             from '../public/icons/userIcon';

// Doc 
// Este elemento tiene la finalidad de renderizar información más detallada de los registros
// tiene como parámetros de entrada:
// HandlerClick: manejador de eventos al hacer click sobre él 
// data: informacón del registros para renderizar 

const {width,height}=Dimensions.get('window');

const currentColorMain='#888';   //azul oscuro
const currentColorMain4='#e1e1e1';  //color de letra resaltado


export function InformationUserComponent({handlerClick}:{
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <View style={userStyle.container}>
                <View style={userStyle.header1}>
                    <View style={userStyle.iconContainer}>
                        
                    <UserIcon color='#AAA' size={45} width={1.2}/>
                    </View>
                    <View style={userStyle.rowField}>
                        <View style={userStyle.rowContente}>
                            <View style={userStyle.fieldContainer}>
                                <Text style={userStyle.labelTitle}>David Esteba Morales</Text>
                            </View>
                        </View>
                        <View style={userStyle.rowContente}>
                            <View style={userStyle.fieldContainer}>
                                <Text style={[userStyle.labelTitle,{fontWeight:'normal'}]}>Operario de máquina</Text>
                                {/* <OcrIcon color='#999' size={20} width={2}/> */}
                            </View>
                        </View>
                        <View style={userStyle.rowContente}>
                            <View style={userStyle.fieldContainer}>
                                <Text style={[userStyle.labelTitle,{fontWeight:'normal'}]}>1146441925</Text>
                            </View>
                        </View>
                    </View>
                    <View style={userStyle.rowField}>
                        <View style={userStyle.rowContente}>
                            <View style={userStyle.fieldContainer}>
                                <Text style={userStyle.labelTitle}>Operario de planta</Text>
                            </View>
                        </View>
                        <View style={userStyle.rowContente}>
                            <View style={userStyle.fieldContainer}>
                                <Text style={[userStyle.labelTitle,{fontWeight:'normal'}]}>Usuario Habilitado</Text>
                                {/* <ModuloIcon color='#999' size={20} width={2}/> */}
                            </View>
                        </View>
                        <View style={userStyle.rowContente}>
                            <View style={userStyle.fieldContainer}>
                                {/* <Text style={[userStyle.labelTitle,{fontWeight:'normal'}]}>100 Unidades sin ejecutar</Text> */}
                            </View>
                        </View>
                        
                    </View>
                </View>
            </View>
}

const userStyle=StyleSheet.create({
    container:{
        width:'98%',
        height:height*0.09,
        backgroundColor:'#FFF',
        borderRadius:10,
        marginBottom:1,
        borderBottomColor:'#CCC',
        borderBottomWidth:1
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
        height:'28%',
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