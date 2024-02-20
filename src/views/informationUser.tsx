import {View,StyleSheet, Dimensions, TouchableOpacity,Text} from 'react-native';
import { MenuIcon }                                         from '../public/icons/menuIcon';
import { SearchIcon }                                       from '../public/icons/searchIcon';
import { ItemResize }                                       from '../components/ItemResize';
import { FilterIcon }                                       from '../public/icons/filterIcon';
import { InformationHeaderViewComponentOp }                 from '../components/InformationHeaderViewComponentOp';
import { InformationOcrComponent }                          from '../components/informationOcrComponent';
import { RowLeftIcon }                                      from '../public/icons/rowLeftIcon';
import { useState }                                         from 'react'
import { InformationUserComponent } from '../components/informationUserComponent';

const {height,width}=Dimensions.get('screen');

export function InformationUser(){

    const filterItems=[
        {id:1,label:'Todos'},
        {id:2,label:'Usuarios deshabilitados'},
        {id:3,label:'Usuarios de planta'},
        {id:4,label:'Usuarios de bodega'},
        // {id:4,label:'Revisados'},
        // {id:5,label:'Sin Revisar'},
        // {id:6,label:'Anormalidades'},
    ]

    const [itemState,setItemSelec]=useState<number|null>(1)

    return <View style={{height,width}}>

                <View style={StyleMainWindow.backRoots}></View>

                <View style={StyleMainWindow.Backcontainer}>
                    <View style={StyleMainWindow.header}>
                        <View style={StyleMainWindow.filterContainer}>
                            <View style={StyleMainWindow.action}>
                                <View  style={StyleMainWindow.menuIcon}>
                                    <MenuIcon color='#999' size={40} width={2}/>
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
                                {filterItems.map(element=>
                                <ItemResize
                                    key={element.id} 
                                    state={itemState===element.id?true:false} 
                                    handlerClick={()=>{setItemSelec(element.id)}} 
                                    label={element.label}/>)}
                            </View>
                            <View style={StyleMainWindow.labelsIcon}>
                                <FilterIcon color='#AAA' size={30} width={2}/>
                            </View>
                        </View>
                    </View>
                    <View style={StyleMainWindow.root1}>
                        <View style={StyleMainWindow.frame1}>
                            <InformationUserComponent handlerClick={()=>{}}/>
                            <InformationUserComponent handlerClick={()=>{}}/>
                            <InformationUserComponent handlerClick={()=>{}}/>
                            <InformationUserComponent handlerClick={()=>{}}/>
                            <InformationUserComponent handlerClick={()=>{}}/>
                            <InformationUserComponent handlerClick={()=>{}}/>
                            <InformationUserComponent handlerClick={()=>{}}/>
                            <InformationUserComponent handlerClick={()=>{}}/>
                            <InformationUserComponent handlerClick={()=>{}}/>
                        </View>
                        <TouchableOpacity style={StyleMainWindow.buttonOCR} onPress={()=>{}}>
                            <RowLeftIcon color="#777" size={40} width={1.5}/>
                            <Text style={{color:'#777',fontSize:15,fontWeight:'500'}}>Regresar</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={StyleMainWindow.root2}>
                        <View style={StyleMainWindow.navigationContainer}>
                            <ItemNavigation handlerClick={()=>{}} state={false}>
                                <UserIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                            <ItemNavigation state={false} handlerClick={()=>{}}>
                                <ModuloIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                            <ItemNavigation state={true} handlerClick={()=>{}}>
                                <OpIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                            <ItemNavigation state={false} handlerClick={()=>{}}>
                                <OcrIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                            <ItemNavigation handlerClick={()=>{}} state={false}>
                                <EmployeerIcon color='#777' size={35} width={2}/>
                            </ItemNavigation>
                        </View>
                    </View> */}
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
        height:'15%',
        width:'100%',
        backgroundColor:'#FFF',
        marginBottom:10
        // borderRadius:height*0.01,
        // alignSelf:'center'
    },
    root1:{
        height:'80%',
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
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    frame1:{
        height:'100%',
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
        height:'60%',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    fieldContainer:{
        width:'97%',
        height:50,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        flexDirection:'row',
        // borderTopWidth:height*0.002,
        // borderTopColor:currentColorMain2,
        backgroundColor:'#FFF',
        marginBottom:5
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
        height:'40%',
        width:'100%',
        // justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:'5%',
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
        alignItems:'flex-end'
    }
});