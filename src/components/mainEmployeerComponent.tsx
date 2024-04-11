import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet} from 'react-native';
import { EmployeerProcessInterface }        from '../interfaces/services/ml_api/moduloInterfaces';

const {height}=Dimensions.get('window');

export function MainEmployeerComponent({data}:{data:EmployeerProcessInterface}){
    return <View>
                <TouchableOpacity style={employeerStyle.employeercontainer} onPress={()=>{}}>
                    <View style={employeerStyle.employeerIconContainer}>
                        <View style={employeerStyle.employeerIcon}>
                            {/* <CalendarIcon color='#AAA' width={2} size={40}/> */}
                            <Image  style={employeerStyle.img} source={require('../public/img/employeer-img.png')}/>
                        </View>
                    </View>
                    <View style={employeerStyle.body}>
                        <View style={employeerStyle.employeerNumber}>
                            <Text style={employeerStyle.content}>{data.operarioNombre?.slice(0,15)+'...'}</Text>
                        </View>
                        <View style={employeerStyle.employeerCantidad}>
                            <Text style={employeerStyle.content}>{data.documento}</Text>
                        </View>
                        <View style={employeerStyle.employeerPositiveActions}>
                            <Text style={employeerStyle.content}>{data.operarioCodigo}</Text>
                        </View>
                        <View style={employeerStyle.employeerNegativeActions}>
                            {/* <ModuloIcon color='#AAA' size={25} width={2}/> */}
                            <Text style={[employeerStyle.content,{color:'#AAA'}]}>{data.operarioDescripcion.slice(0,30).toLowerCase()+'...'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
}

const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain4='#717171';  //color de letra resaltado

const employeerStyle=StyleSheet.create({
    employeercontainer:{
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
    employeerIconContainer:{
        height:'100%',
        width:'15%',
        justifyContent:'center',
        alignItems:'center',
    },
    employeerIcon:{
        width:40,
        height:40,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
    },
    employeerNumber:{
        height:'100%',
        width:'30%',
        alignItems:'center',
        justifyContent:'center'
    },
    employeerCantidad:{
        width:'20%',
        // backgroundColor:'aqua',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    employeerPositiveActions:{
        width:'10%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    employeerNegativeActions:{
        // backgroundColor:'aqua',
        width:'40%',
        height:'100%',
        // flex:1,
        // backgroundColor:'aqua',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    employeerRefrenecia:{
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
