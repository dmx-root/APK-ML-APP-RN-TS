import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet} from 'react-native';
import { CalendarIcon } from '../public/icons/calendarIcon';
import { AnalitycsIcon } from '../public/icons/analitycsIcon';

const {height}=Dimensions.get('window');

export function MainOpComponent(){
    return <View>
                <TouchableOpacity style={StyleOp.Opcontainer} onPress={()=>{}}>
                    <View style={StyleOp.OpIconContainer}>
                        <View style={StyleOp.OpIcon}>
                            {/* <CalendarIcon color='#AAA' width={2} size={40}/> */}
                            <Image  style={StyleOp.img} source={require('../public/img/base-de-datos.png')}/>
                        </View>
                    </View>
                    <View style={StyleOp.body}>
                        <View style={StyleOp.OpNumber}>
                            <Text style={StyleOp.content}>{'MOP3548'}</Text>
                        </View>
                        <View style={StyleOp.OpCantidad}>
                            <Text style={StyleOp.content}>{'3500'}</Text>
                        </View>
                        <View style={StyleOp.OpPositiveActions}>
                            <AnalitycsIcon color='green' size={20} width={2}/>
                            <Text style={StyleOp.content}>{'35%'}</Text>
                        </View>
                        <View style={StyleOp.OpNegativeActions}>
                            <AnalitycsIcon color='red' size={20} width={2}/>
                            <Text style={StyleOp.content}>{'77%'}</Text>
                        </View>
                        <View style={StyleOp.OpRefrenecia}>
                            <Text style={[StyleOp.content,{color:'#BBB'}]}>{'MAR3524'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
}

const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain4='#717171';  //color de letra resaltado

const StyleOp=StyleSheet.create({
    Opcontainer:{
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
    OpIconContainer:{
        height:'100%',
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    OpIcon:{
        width:35,
        height:35,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
    },
    OpNumber:{
        height:'100%',
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    OpCantidad:{
        width:'20%',
        // backgroundColor:'aqua',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    OpPositiveActions:{
        width:'15%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    OpNegativeActions:{
        width:'17%',
        height:'100%',
        // flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    OpRefrenecia:{
        width:'22%',
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
    createIconContainer:{
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    body:{
        flexDirection:'row',
        width:'85%',
        height:'100%',
        // backgroundColor:'aqua'
    }

});
