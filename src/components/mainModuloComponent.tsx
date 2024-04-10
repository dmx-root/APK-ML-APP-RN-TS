
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, GestureResponderEvent}    from 'react-native';
import { AnalitycsIcon }                                                                        from '../public/icons/analitycsIcon';
import { OcrIcon }                                                                              from '../public/icons/ocrIcon';
import { ModuloProcessInterface }                                                               from '../interfaces/services/ml_api/moduloInterfaces';

const {height}=Dimensions.get('window');

export function MainModuloComponent({data,handlerClick}:{
    data:ModuloProcessInterface,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <View>
                <TouchableOpacity style={StyleModulo.modulocontainer} onPress={handlerClick}>
                    <View style={StyleModulo.moduloIconContainer}>
                        <View style={StyleModulo.moduloIcon}>
                            <Image  style={StyleModulo.img} source={require('../public/img/modulo-img.png')}/>
                        </View>
                    </View>
                    <View style={StyleModulo.body}>
                        <View style={StyleModulo.moduloNumber}>
                            <Text style={StyleModulo.content}>{data.moduloEtiqueta}</Text>
                        </View>
                        <View style={StyleModulo.moduloCantidad}>
                            <OcrIcon color='#AAA' size={20} width={2}/>
                            <Text style={StyleModulo.content}>{data.produccionDiaria||'No def'}</Text>
                        </View>
                        <View style={StyleModulo.moduloPositiveActions}>
                            <AnalitycsIcon color='green' size={20} width={2}/>
                            <Text style={StyleModulo.content}>{'No def'}</Text>
                        </View>
                        <View style={StyleModulo.moduloNegativeActions}>
                            <AnalitycsIcon color='red' size={20} width={2}/>
                            <Text style={StyleModulo.content}>{'No def'}</Text>
                        </View>
                        <View style={StyleModulo.moduloRefrenecia}>
                            <Text style={[StyleModulo.content,{color:'#BBB'}]}>{data.referenciaActual||'No def'}</Text>
                        </View>
                        <View style={StyleModulo.moduloRefrenecia}>
                            <Text style={[StyleModulo.content,{color:'#BBB'}]}>{data.moduloEstadoProceso?'En proceso':'En paro'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
}

const currentColorMain4='#717171';  //color de letra resaltado

const StyleModulo=StyleSheet.create({
    modulocontainer:{
        flexDirection:'row',
        height:100,
        marginBottom:0,
        margin:'auto',
        maxWidth:'100%',
        borderColor:"#CCC",
        backgroundColor:'#FFF',
        borderBottomWidth:0.5,
        borderRadius:height*0.005
    },
    img:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        resizeMode:'contain',
        flex:1
    },
    moduloIconContainer:{
        height:'100%',
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    moduloIcon:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
    },
    moduloNumber:{
        height:'100%',
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
    },
    moduloCantidad:{
        width:'15%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        // paddingLeft:15
    },
    moduloPositiveActions:{
        width:'16%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    moduloNegativeActions:{
        width:'16%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    moduloRefrenecia:{
        width:'15%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    content:{
        fontSize:16,
        fontWeight:'bold',
        color:currentColorMain4,
        // color:'#999'
    },
    body:{
        flexDirection:'row',
        width:'85%',
        height:'100%',
        // backgroundColor:'aqua'
    }

});
