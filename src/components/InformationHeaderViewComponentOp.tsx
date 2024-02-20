import { Dimensions, StyleSheet, View,Text,Image }    from 'react-native';
import { ItemList }                             from './itemList';
import { AnalitycsIcon }                        from '../public/icons/analitycsIcon';
import { OpIcon }                               from '../public/icons/opIcon';
import { OcrIcon }                              from '../public/icons/ocrIcon';
import { CalendarIcon }                         from '../public/icons/calendarIcon';

const {height} = Dimensions.get('window');

export function InformationHeaderViewComponentOp(){
    return  <View style={headComponentStyle.container}>
                <View style={headComponentStyle.iconContainer}>
                    {/* <OpIcon color='#999' size={50} width={1.5}/> */}
                    <Image  style={headComponentStyle.img} source={require('../public/img/base-de-datos-2.png')}/>

                </View>
                <View style={headComponentStyle.body}>
                    <View style={headComponentStyle.column}>
                        <ItemList label='MOP3548' style={2}  position='start'>
                            {/* <OpIcon color='#AAA' size={24} width={2}/> */}
                            <></>
                        </ItemList>
                        <ItemList label='100 Unidades Ejec' style={1} position='start'>
                            <AnalitycsIcon color='#AAA' size={24} width={3}/>
                        </ItemList>
                        <ItemList label='100 Unidades sin Ejec' style={1} position='start'>
                            <AnalitycsIcon color='#AAA' size={24} width={3}/>
                        </ItemList>
                        
                    </View>
                    <View style={headComponentStyle.column}>
                        <ItemList label='200 Unidades Planeadas' style={2} position='end'>
                            <></>
                        </ItemList>
                        <ItemList label='PIEL' style={1} position='end'>
                            <></>
                        </ItemList>
                        <ItemList label='XL' style={1} position='end'>
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
        height:'55%',
        width:'55%',
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