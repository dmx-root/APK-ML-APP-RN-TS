import { StyleSheet, Text, View, Alert, Image}              from 'react-native';
import { Dimensions, TouchableOpacity,ActivityIndicator }   from 'react-native';
import { RowLeftIcon } from '../public/icons/rowLeftIcon';
import { ProfileScreenProps } from '../interfaces/screens/screensInterfaces';
// import { RoowLeft }                                         from '../iconosSvg';

const {height,width}=Dimensions.get('screen');

export function Profile({navigation}:any){
    return <View style={profileStyle.mainLayer}>
                <View style={profileStyle.header}>
                    <Image source={require('../public/img/transparentLogo.png')} style={profileStyle.img}/>
                    <Image source={require('../public/img/transparentLogo.png')} style={profileStyle.img}/>
                    <View style={profileStyle.headerContent}>
                        <View style={profileStyle.nameEmpty}></View>
                        <Text style={profileStyle.name}>{'NNN'}</Text>
                    </View>
                </View>
                <View style={profileStyle.body}>
                    <View style={profileStyle.containerInformationHeader}>
                        <View style={profileStyle.empty}></View>
                        <View style={profileStyle.informationHeaderContainer}>
                            <Text style={profileStyle.titleInformationHeader}>{'OPERARIO(PLANTA)'}</Text>
                            
                        </View>
                    </View>
                    <View style={profileStyle.containerInformationHeader2}>
                        <View style={profileStyle.fieldTitleContainer}>
                            <Text style={profileStyle.titleInformation}>Documento</Text>
                        </View>
                        <View style={[profileStyle.fieldTitleContainer,{width:'60%'}]}>
                            <Text style={{color:currentColorMain3,fontSize:height*0.02,fontWeight:'bold',marginLeft:'10%'}}>{}</Text>
                        </View>
                    </View>
                    <View style={profileStyle.containerInformationHeader2}>
                        <View style={profileStyle.fieldTitleContainer}>
                            <Text style={profileStyle.titleInformation}>Tipo de documento</Text>
                        </View>
                        <View style={[profileStyle.fieldTitleContainer,{width:'60%'}]}>
                            <Text style={{color:currentColorMain3,fontSize:height*0.02,fontWeight:'bold',marginLeft:'10%'}}></Text>
                        </View>
                    </View>
                    <View style={profileStyle.containerInformationHeader2}>
                        <View style={profileStyle.fieldTitleContainer}>
                            <Text style={profileStyle.titleInformation}>Fecha de creación</Text>
                        </View>
                        <View style={[profileStyle.fieldTitleContainer,{width:'60%'}]}>
                            <Text style={{color:currentColorMain3,fontSize:height*0.02,fontWeight:'bold',marginLeft:'10%'}}>{}</Text>
                        </View>
                    </View>
                    <View style={profileStyle.containerInformationHeader2}>
                        <View style={profileStyle.fieldTitleContainer}>
                            <Text style={profileStyle.titleInformation}>Descripción</Text>
                        </View>
                        <View style={[profileStyle.fieldTitleContainer,{width:'60%'}]}>
                            <Text style={{color:currentColorMain3,fontSize:height*0.02,fontWeight:'bold',marginLeft:'10%'}}>{}</Text>
                        </View>
                    </View>
                    {/* <View style={profileStyle.root}></View> */}
                </View>
                <View style={profileStyle.photoContainer}>
                    <Image source={require('../public/img/photo-profile.jpg')} style={profileStyle.photoProfile}/>
                </View>
                <View style={profileStyle.buttonMenu}>
                    <TouchableOpacity onPress={()=>{}}>
                        <RowLeftIcon color='#FFF' size={50} width={2}/>
                    </TouchableOpacity>
                </View>
            </View>
}

const currentColorDefault='#44329C';
const currentColorMain='#44329C';
const currentColorMain2='#eee';
const currentColorMain3='#717171';
const currentColorMain4='#a1a1a1';

const profileStyle=StyleSheet.create({
    mainLayer:{
        height,
        width,
        backgroundColor:'#FFF'
    },
    header:{
        height:height*0.25,
        width,
        backgroundColor:currentColorMain,
        flexDirection:'row'
    },
    img:{
        flex:1,
        resizeMode:'contain',
        alignSelf:'center',
        height:height*0.55,
        width:width*0.55,
        opacity:0.1
    },
    body:{
        height:height*0.8,
        width,
        backgroundColor:currentColorMain2,
        // justifyContent:'flex-end',
        // alignItems:'center'
    },
    photoContainer:{
        position:'absolute',
        zIndex:10,
        backgroundColor:'#FFF',
        width:width*0.3,
        height:width*0.3,
        borderRadius:width*0.25,
        top:height*0.155,
        left:width*0.05,
        borderWidth:height*0.005,
        borderColor:'#FFF',
        overflow:'hidden'
    },
    photoProfile:{
        flex:1,
        resizeMode:'contain',
        alignSelf:'center',
        height:height*0.55,
        width:width*0.55,
        // opacity:0.
    },
    headerContent:{
       position:'absolute',
       alignSelf:'flex-end',
       height:height*0.1,
       width:width,
       flexDirection:'row',
       alignItems:'center',
    //    marginRight:'20%'
    },
    name:{
        fontSize:height*0.025,
        color:'#FFF',
        fontWeight:'bold',
        marginLeft:'20%',
        opacity:0.9,
        // backgroundColor:'aqua'
    },
    nameEmpty:{
        height:'100%',
        width:'17%'
    },
    cargo:{
        fontSize:height*0.02,
        color:'#FFF',
        fontWeight:'bold',
        // marginLeft:'20%',
        opacity:0.8
    },
    root:{
        height:'50%',
        width:'90%',
        backgroundColor:'#FFF',
        borderRadius:height*0.02,
        marginTop:'5%',
        alignSelf:'center'
    },
    empty:{
        height:'100%',
        width:'35%'
    },
    containerInformationHeader:{
        height:'20%',
        flexDirection:'row',
        alignItems:'flex-start'
    },
    informationHeaderContainer:{
        height:'50%',
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    titleInformationHeader:{
        fontSize:20,
        color:currentColorMain4,
        fontWeight:'bold'
    },
    contentInformationHeader:{
        color:currentColorMain3,
        fontSize:height*0.04,
        fontWeight:'bold'
    },
    containerInformationHeader2:{
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        width:'90%',
        alignSelf:'center'
    },
    fieldTitleContainer:{
        height:'100%',
        width:'40%',
        justifyContent:'center'
    },
    titleInformation:{
        fontSize:20,
        color:currentColorMain4,
        fontWeight:'bold'
    },
    buttonMenu:{
        position:'absolute',
        zIndex:20,
        height:80,
        width:80,
        // backgroundColor:'#FFF',
        borderWidth:height*0.003,
        borderColor:'#FFF',
        top:'5%',
        left:'1%',
        borderRadius:height*0.005,
        elevation:height*0.05,
        justifyContent:'center',
        alignItems:'center'
    },
})