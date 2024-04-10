
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, GestureResponderEvent}    from 'react-native';
import { AnalitycsIcon }                                                                        from '../public/icons/analitycsIcon';
import { OcrIcon }                                                                              from '../public/icons/ocrIcon';
import { ModuloProcessInterface }                                                               from '../interfaces/services/ml_api/moduloInterfaces';
import { OpIcon } from '../public/icons/opIcon';

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
                            <Text style={[StyleModulo.content,{color:'#777'}]}>{data.moduloEtiqueta}</Text>
                        </View>
                        <View style={StyleModulo.moduloCantidad}>
                            <OcrIcon color='#AAA' size={20} width={2}/>
                            <Text style={StyleModulo.content}>{data.produccionDiaria||0}</Text>
                        </View>
                        <View style={StyleModulo.moduloPositiveActions}>
                            <Text style={StyleModulo.content}>{data.tallaActual||'- - -'}</Text>
                        </View>
                        <View style={StyleModulo.moduloNegativeActions}>
                            <Text style={StyleModulo.content}>{data.colorActual||'- - -'}</Text>
                        </View>
                        <View style={StyleModulo.opIcon}>
                            <OpIcon color='#AAA' size={20} width={2}/>
                        </View>
                        <View style={StyleModulo.moduloRefrenecia}>
                            <Text style={[StyleModulo.content,{color:'#BBB'}]}>{data.opActual||'Sin OP...'}</Text>
                        </View>
                        <View style={[StyleModulo.moduloRefrenecia,{width:'25%'}]}>
                            <Text style={[StyleModulo.content,{color:'#BBB'}]}>{data.referenciaActual || 'Sin Ref...'}</Text>
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
        width:'17%',
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
        width:'10%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    moduloNegativeActions:{
        width:'15%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    opIcon:{
        width:'5%',
        height:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
    },
    moduloRefrenecia:{
        width:'15%',
        height:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',

    },
    content:{
        fontSize:16,
        fontWeight:'bold',
        color:'#AAA',
        // color:'#999'
    },
    body:{
        flexDirection:'row',
        width:'85%',
        height:'100%',
        // backgroundColor:'aqua'
    }

});
