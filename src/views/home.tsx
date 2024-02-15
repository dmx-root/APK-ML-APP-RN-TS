import {View,StyleSheet, Dimensions, TouchableOpacity,Text, TextInput} from 'react-native';
import { MainOpComponent } from '../components/mainOpComponent';
import { PlusIcon } from '../public/icons/plusIcon';
import { MenuIcon } from '../public/icons/menuIcon';
import { SearchIcon } from '../public/icons/searchIcon';
import { ItemResize } from '../components/ItemResize';
import { FilterIcon } from '../public/icons/filterIcon';
import { ItemNavigation } from '../components/itemNavigation';
import { OcrIcon } from '../public/icons/ocrIcon';
import { OpIcon } from '../public/icons/opIcon';
import { ModuloIcon } from '../public/icons/moduloIcon';
import { UserIcon } from '../public/icons/userIcon';
import { LayerIcon } from '../public/icons/layerIcon';
import { EmployeerIcon } from '../public/icons/employeerIcon';

const {height,width}=Dimensions.get('screen');

export function Home(){
    return <View style={{height,width}}>
                <View style={StyleMainWindow.backRoots}></View>

                <View style={StyleMainWindow.Backcontainer}>
                    <View style={StyleMainWindow.header}>
                        <View style={StyleMainWindow.filterContainer}>
                            <View style={StyleMainWindow.action}>
                                <View  style={StyleMainWindow.menuIcon}>
                                    <MenuIcon color='#999' size={40} width={2}/>
                                    {/* <FilterIcon color='#AAA' size={45} width={1}/> */}
                                </View>
                                <View style={StyleMainWindow.bar}>

                                </View>
                                <View style={StyleMainWindow.searchIcon}>
                                    <SearchIcon color='#999' size={40} width={2}/>
                                </View>
                            </View>
                        </View>
                        <View style={StyleMainWindow.fieldItemsSelect}>
                            <View style={StyleMainWindow.labels}>
                                <ItemResize state={true} handlerClick={()=>{}} label='Todas'/>
                                <ItemResize state={false} handlerClick={()=>{}} label='OP Brasier'/>
                                <ItemResize state={false} handlerClick={()=>{}} label='OP Panty'/>
                                <ItemResize state={false} handlerClick={()=>{}} label={`Ordenes de Producción Finalizadas`}/>
                            </View>
                            <View style={StyleMainWindow.labelsIcon}>
                                <FilterIcon color='#AAA' size={30} width={2}/>
                            </View>
                        </View>
                        <View style={StyleMainWindow.fieldContainer}>
                            <View style={{width:'13%',height:'100%'}}></View>
                            <View style={{justifyContent:'center',alignItems:'center',width:'18%',height:'100%'}}><Text style={StyleMainWindow.textField}>OP</Text></View>
                            <View style={{justifyContent:'center',alignItems:'center',width:'13%',height:'100%'}}><Text style={StyleMainWindow.textField}>PLANE...</Text></View>
                            <View style={{justifyContent:'center',alignItems:'center',width:'15%',height:'100%'}}><Text style={StyleMainWindow.textField}>EJECUT...</Text></View>
                            <View style={{justifyContent:'center',alignItems:'center',width:'15%',height:'100%'}}><Text style={StyleMainWindow.textField}>SIN EJEC...</Text></View>
                            <View style={{justifyContent:'center',alignItems:'center',width:'24%',height:'100%'}}><Text style={StyleMainWindow.textField}>REFERENCIA...</Text></View>
                        </View> 
                    </View>
                    <View style={StyleMainWindow.root1}>
                        <View style={StyleMainWindow.frame1}>
                            <MainOpComponent/>
                            <MainOpComponent/>
                            <MainOpComponent/>
                            <MainOpComponent/>
                            <MainOpComponent/>
                            <MainOpComponent/>
                            <MainOpComponent/>
                            <MainOpComponent/>
                            <MainOpComponent/>
                            {/* <MainOpComponent/>
                            <MainOpComponent/> */}
                        </View>
                        <TouchableOpacity style={StyleMainWindow.buttonOCR} onPress={()=>{}}>
                            <PlusIcon color="#777" size={70} width={1}/>
                            <Text style={{color:'#777',fontSize:15,fontWeight:'500'}}>Nueva OCR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={StyleMainWindow.root2}>
                        <View style={StyleMainWindow.navigationContainer}>
                            <ItemNavigation handlerClick={()=>{}} state={false}>
                                <UserIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                            <ItemNavigation state={false} handlerClick={()=>{}}>
                                <ModuloIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                            <ItemNavigation state={true} handlerClick={()=>{}}>
                                {/* <OpFillIcon size={50} width={2}/> */}
                                <OpIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                            <ItemNavigation state={false} handlerClick={()=>{}}>
                                <OcrIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                            <ItemNavigation handlerClick={()=>{}} state={false}>
                                {/* <LayerIcon color='#777' size={35} width={2}/> */}
                                <EmployeerIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                        </View>
                    </View>
                </View>
                
            </View>
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro

const StyleMainWindow=StyleSheet.create({
    headerBack:{
        width:'100%',
        height:'10%',
        backgroundColor:currentColorMain
    },
    backRoots:{
        height:'100%',
        width:'100%',
        backgroundColor:'#DDD'
    },
    menuIcon:{
        width:'10%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    bar:{
        height:'100%',
        width:'80%',
        // backgroundColor:'aqua'
    },
    searchIcon:{
        width:'10%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    Backcontainer:{
        position:'absolute',
        width,
        height,
    },
    header:{
        height:'20%',
        width:'100%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        // alignSelf:'center'
    },
    root1:{
        height:'65%',
        width:'100%',
        borderRadius:height*0.01,
        // alignSelf:'center',
        justifyContent:'center',
    },
    root2:{
        height:'12%',
        width:'100%',
        backgroundColor:'#EEE',
        // borderRadius:height*0.01,
        // justifyContent:'center'
    },
    navigationContainer:{
        width:'100%',
        height:'60%',
        // backgroundColor:'aqua',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    buttonOCR:{
        position:'absolute',
        zIndex:20,
        height:50,
        width:160,
        right:0,
        bottom:0,
        marginRight:'5%',
        marginBottom:'5%',
        borderRadius:25,
        backgroundColor:'#C7E5FD',
        elevation:height*0.006,
        flexDirection:'row',
        paddingLeft:8,
        alignItems:'center'
    },
    frame1:{
        height:'99%',
        width:'100%',
        borderRadius:height*0.01,
        alignSelf:'center',
        alignItems:'center'
    },
    action:{
        height:'60%',
        width:'90%',
        borderRadius:40,
        backgroundColor:'#EEE',
        flexDirection:'row'
    },
    filterContainer:{
        width:'100%',
        height:'45%',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    fieldContainer:{
        width:'100%',
        height:'20%',
        flexDirection:'row',
        borderTopWidth:height*0.002,
        borderTopColor:currentColorMain2
    },
    fieldContent:{
        height:'100%',
        width:'17%',
        justifyContent:'center',
        alignItems:'center'
    },
    textField:{
        color:'#717171',
        fontWeight:'bold',
        fontSize:15
    },


    fieldItemsSelect:{
        height:'35%',
        width:'100%',
        // justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:'5%'
        // backgroundColor:'aqua'
    },
    labels:{
        width:'80%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center'
        // backgroundColor:'aqua'
    },
    labelsIcon:{
        width:'15%',
        height:'100%',
        // backgroundColor:'aquamarine',
        justifyContent:'center',
        alignItems:'center'
    }
});