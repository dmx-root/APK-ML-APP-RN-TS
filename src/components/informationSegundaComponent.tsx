import { TouchableOpacity,View, Text, StyleSheet, Dimensions, GestureResponderEvent} from 'react-native'
import { OcrIcon }                              from '../public/icons/ocrIcon';
import { OcrProcessesInterface } from '../interfaces/services/ml_api/ocrInterfaces';

// Doc 
// Este elemento tiene la finalidad de renderizar información más detallada de los registros
// tiene como parámetros de entrada:
// HandlerClick: manejador de eventos al hacer click sobre él 
// data: informacón del registros para renderizar 

const {width,height}=Dimensions.get('window');

export function InformationSegundaComponent({talla,color,ean,cantidad,backColor}:{
    talla: string,
    color: string,
    ean: string,
    cantidad: number | string,
    backColor?: string 
}){
    return <View style={[infoLineStyle.container,{}]}>
                <View style={[infoLineStyle.labelContanier,{width:'15%',backgroundColor:backColor}]}>
                    <Text style={infoLineStyle.content}>{talla}</Text>
                </View>
                <View style={[infoLineStyle.contentContainer,{width:'34.5%',backgroundColor:backColor}]}>
                    <Text style={infoLineStyle.title}>{color}</Text>
                </View>
                <View style={[infoLineStyle.contentContainer,{width:'34.5%',backgroundColor:backColor}]}>
                    <Text style={infoLineStyle.title}>{ean}</Text>
                </View>
                <View style={[infoLineStyle.labelContanier,{width:'15.5%',backgroundColor:backColor}]}>
                    <Text style={infoLineStyle.content}>{cantidad}</Text>
                </View>
            </View>
}

const infoLineStyle=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        height:50,
        alignContent:'center',
        justifyContent:'space-between',
        marginBottom:2,
        marginTop:0
    },
    labelContanier:{
        width:'24.5%',
        height:'100%',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#CCC',
        // ba
    
        // paddingLeft:15,
    },
    contentContainer:{
        width:'24.5%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:15,
        alignContent:'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#CCC'
    },
    title:{
        fontSize:15,
        color:'#777',
    },
    content:{
        fontSize:15,
        color:'#777',
        fontWeight:'bold',
        paddingLeft:35,
        // backgroundColor:'#FFF'

    }
})