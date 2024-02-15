import { TouchableWithoutFeedback, View, ImageBackground, GestureResponderEvent }                         from 'react-native'
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions }   from 'react-native'
import { AsideItem } from './asideItem';
import { OpIcon } from '../public/icons/opIcon';
import { EmployeerIcon } from '../public/icons/employeerIcon';
import { OcrIcon } from '../public/icons/ocrIcon';
import { ModuloIcon } from '../public/icons/moduloIcon';
import { UserIcon } from '../public/icons/userIcon';
import { LogoutIcon } from '../public/icons/logoutIcon';
import { CreateOcrIcon } from '../public/icons/createOcrIcon';

const {width,height}=Dimensions.get('window');
const currentColorMain='#44329C';   //azul oscuro

export function Aside({handlerClick}:{
    handlerClick:(event:GestureResponderEvent)=>void
}){

    const dataPrueba:{ id: number; label: string,icon:React.ReactElement }[] = [
        { id: 1, label: 'Ver Perfil',               icon:<UserIcon color='#FFF' size={40} width={2}/> },
        { id: 3, label: 'Cerrar Sesión',            icon:<LogoutIcon color='#FFF' size={40} width={2}/> },
        { id: 16, label: 'Crear OCR',               icon:<CreateOcrIcon color='#FFF' size={40} width={2}/>},
        { id: 19, label: 'Mostrar OCR',             icon:<OcrIcon color='#FFF' size={40} width={2}/> },
        { id: 20, label: 'Abrir OP',                icon:<OpIcon color='#FFF' size={40} width={2}/> },
        { id: 25, label: 'Ver OP\'s',               icon:<OpIcon color='#FFF' size={40} width={2}/> },
        { id: 27, label: 'Administrar Operarios',   icon:<EmployeerIcon color='#FFF' size={40} width={2}/>},
        { id: 31, label: 'Mostrar Módulos',         icon:<ModuloIcon color='#FFF' size={40} width={2}/> },
    ];
    
    return <TouchableWithoutFeedback onPress={handlerClick}>
                <View style={StyleAside.courtain}>
                    <TouchableWithoutFeedback onPress={()=>{}}>
                        <View style={StyleAside.aside}>
                            <View style={StyleAside.headerAside}>
                                <ImageBackground
                                    source={require('../public/img/transparentLogo.png')}
                                    style={StyleAside.backgroundImage}
                                    imageStyle={StyleAside.imageStyle}
                                    blurRadius={8}/>
                                {/* <Image source={require('../public/img/transparentLogo.png')} style={StyleAside.img}/> */}
                            </View>
                            <View style={StyleAside.bodyAside}>
                                {dataPrueba.map(element=>
                                    <AsideItem label={element.label} handlerClick={()=>{}} key={element.id}>
                                        {element.icon}
                                    </AsideItem>
                                )}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
}

const StyleAside=StyleSheet.create({
    aside:{
        height:height,
        width:width*0.5,
        zIndex:40,
        alignItems:'center',
        backgroundColor:currentColorMain
    },
    courtain:{
        position:'absolute',
        backgroundColor:'#00000070',
        width:width,
        height:height,
        zIndex:30,
        // backgroundColor:'#00000040'
    }
    ,headerAside:{
        // backgroundColor:'aqua',
        width:'80%',
        height:'10%',
        justifyContent:'flex-end',
        marginTop:10,
        marginBottom:'30%'
    },
    buttonMenu2:{
        position:'absolute',
        zIndex:40,
        elevation:height* 0.01,
        width:height*0.07,
        height:height*0.07,
        borderRadius:height*0.01,
        backgroundColor:currentColorMain,
        left:'75%',
        top:'5%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:height*0.003,
        borderColor:'#FFF'
    },
    img:{
        // height:'100%',
        // width:'100%',
        alignSelf:'center',
        flex:1,
        resizeMode:'repeat',
        // opacity:0.5

    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        width: '100%', // Ajusta según tus necesidades
        height: '120%', // Ajusta según tus necesidades
        opacity: 1, // Puedes ajustar la opacidad si lo deseas
    },
    bodyAside:{
        width:'100%',
        height:'80%',
        paddingTop:'10%'
    },
    fieldOptionContainer:{
        width:'100%',
        height:'10%',
        // borderTopWidth:height*0.002,
        flexDirection:'row',
        justifyContent:'center'
    },
    iconOptionContainer:{
        height:'100%',
        width:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    contentOptionContainer:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignItems:'flex-start'
        // backgroundColor:'aqua'
    },
    contentOptions:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:height*0.02
    }
});
