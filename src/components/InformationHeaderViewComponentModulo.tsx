import { Dimensions, StyleSheet, View,Text,Image }    from 'react-native';
import { ItemList }                             from './itemList';
import { AnalitycsIcon }                        from '../public/icons/analitycsIcon';
import { OpIcon }                               from '../public/icons/opIcon';
import { OcrIcon }                              from '../public/icons/ocrIcon';
import { CalendarIcon }                         from '../public/icons/calendarIcon';
import { EmployeerIcon } from '../public/icons/employeerIcon';
import { UserIcon } from '../public/icons/userIcon';

const {height} = Dimensions.get('window');

export function InformationHeaderViewComponentModulo(){
    return  <View style={headComponentStyle.container}>
                <View style={headComponentStyle.iconContainer}>
                    <Image  style={headComponentStyle.img} source={require('../public/img/modulo-img-2.png')}/>
                </View>
                <View style={headComponentStyle.body}>
                    <View style={headComponentStyle.column}>
                        <ItemList label='MODULO 10' style={2} position='start'>
                            <></>
                        </ItemList>
                        <ItemList label='12 Operarios' style={1} position='start'>
                            <EmployeerIcon color='#AAA' size={24} width={2}/>
                        </ItemList>
                        <ItemList label='Revisor 1146441925' style={1} position='start'>
                            <UserIcon color='#AAA' size={24} width={2}/>
                        </ItemList>
                        
                    </View>
                    <View style={headComponentStyle.column}>
                        <ItemList label='200 Unidades Planeadas' style={2} position='end'>
                            {/* <></> */}
                            <AnalitycsIcon color='#AAA' size={24} width={2}/>
                        </ItemList>
                        <ItemList label='Ejecutando la OP MOP3548' style={1} position='end'>
                            <OpIcon color='#AAA' size={24} width={2}/>
                            {/* <></> */}
                        </ItemList>
                        <ItemList label='Ejecutando la talla XL' style={1} position='end'>
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