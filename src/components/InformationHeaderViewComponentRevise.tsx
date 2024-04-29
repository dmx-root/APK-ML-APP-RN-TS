import { Dimensions, StyleSheet, View, Image }  from 'react-native';
import { ItemList }                             from './itemList';
import { AnalitycsIcon }                        from '../public/icons/analitycsIcon';
import { OpIcon }                               from '../public/icons/opIcon';
import { ModuloProcessInterface } from '../interfaces/services/ml_api/moduloInterfaces'

const {height} = Dimensions.get('window');

interface InfoInterface{
    elementosRevisados: number,
    elementosSinRevisar: number
}

export function InformationHeaderViewComponentRevise({data,info}:{data: ModuloProcessInterface,info:InfoInterface}){
    
    console.log(info)
    return  <View style={headComponentStyle.container}>
                <View style={headComponentStyle.iconContainer}>
                    <Image  style={headComponentStyle.img} source={require('../public/img/revise-img.png')}/>
                </View>
                <View style={headComponentStyle.body}>
                    <View style={headComponentStyle.column}>
                        <ItemList label={'REVISIÓN DEL '+data.moduloEtiqueta} style={2} position='start'>
                            <></>
                        </ItemList>
                        <ItemList label={`${info.elementosSinRevisar} Elementos sin revisar`} style={1} position='start'>
                            {/* <EmployeerIcon color='#AAA' size={24} width={2}/> */}
                            <></>
                        </ItemList>
                        <ItemList label={`${info.elementosRevisados} Elmentos revisados`} style={1} position='start'>
                            {/* <UserIcon color='#AAA' size={24} width={2}/> */}
                            <></>
                        </ItemList>
                    </View>
                    <View style={headComponentStyle.column}>
                        <ItemList label={`Referencia... ${data.referenciaActual|| 'No definido'}`||'200 Unidades Planeadas'} style={2} position='end'>
                            {/* <></> */}
                            <AnalitycsIcon color='#AAA' size={24} width={2}/>
                        </ItemList>
                        <ItemList label={`Ejecutando la OP ${data.opActual||'No definida'}`} style={1} position='end'>
                            <OpIcon color='#AAA' size={24} width={2}/>
                            {/* <></> */}
                        </ItemList>
                        <ItemList label={`Ejecutando la talla ${data.tallaActual}`} style={1} position='end'>
                            <></>
                        </ItemList>
                    </View>    
                </View>
            </View>
}

const headComponentStyle= StyleSheet.create({
    container:{
        width:'100%',
        height:height*0.10,
        backgroundColor:'#EEE',
        borderBottomColor:'#DDD',
        borderBottomWidth:1,
        borderTopColor:'#DDD',
        borderTopWidth:1,
        flexDirection:'row',
        // borderRadius:10,
        // marginTop:5,
        marginBottom:5
    },
    img:{
        height:'40%',
        width:'40%',
        alignSelf:'center',
        resizeMode:'contain',
        flex:1
    },
    iconContainer:{
        height:'100%',
        width:'18%',
        // backgroundColor:'aqua',
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        width:'82%',
        height:'100%',
        flexDirection:'row',
    },
    row:{
        flexDirection:'row',
        // backgroundColor:'aqua',
        height:40
    },
    column:{
        height:'100%',
        width:'50%',
        justifyContent:'center'
        // flexDirection:'row'
        // display:'flex'
        // backgroundColor:'aqua'
    }
})