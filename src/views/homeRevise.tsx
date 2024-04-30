import {View,StyleSheet, Dimensions, Text, FlatList, TouchableOpacity}        from 'react-native';
import { MenuIcon }                                         from '../public/icons/menuIcon';
import { SearchIcon }                                       from '../public/icons/searchIcon';
import { ItemResize }                                       from '../components/ItemResize';
import { FilterIcon }                                       from '../public/icons/filterIcon';
import { ItemNavigation }                                   from '../components/itemNavigation';
import { MainModuloComponent }                              from '../components/mainModuloComponent';
import { useMainContext }                                   from '../contexts/mainContext';
import { ModalRegisterOcr }                                 from '../modals/ModalRegisterOcr';
import { useApiGetModulosAll }                              from '../controllers/hooks/customHookGetModulosGetAllFilter'
import { LoadingComponent }                                 from '../components/loadingComponent';
import { EmptyComponent }                                   from '../components/emptyComponent';
import { useState }                                         from 'react'
import { Aside } from '../components/aside';
import { ModalSegundas } from '../modals/modalSegundas';
import { InformationModuloComponent } from '../components/informationModuloComponent';

const {height,width}=Dimensions.get('screen');

export function HomeRevise({navigation}:any){

    const [ asideState,setAsideState ] =                    useState<boolean>(false);
    const [ newRegister,setNewRegister ] =                  useState<boolean>(false);
    const [ modalSegundas,setModalSegundas ] =              useState<boolean>(false);

    // const { state } = useApiGetModulos();
    const {state, setItemSelector, itemSelector} = useApiGetModulosAll();

    // console.log(state)
    const contextStorage = useMainContext();

    return<>
     <View style={{height,width}}>

                <View style={StyleMainWindow.backRoots}></View>

                <View style={StyleMainWindow.Backcontainer}>
                    <View style={StyleMainWindow.header}>
                        <View style={StyleMainWindow.filterContainer}>
                            <View style={StyleMainWindow.action}>
                                <TouchableOpacity  style={StyleMainWindow.menuIcon} onPress={()=>{setAsideState(true)}}>
                                    <MenuIcon color='#999' size={40} width={2}/>
                                </TouchableOpacity>
                                <View style={StyleMainWindow.bar}>
                                </View>
                                <View style={StyleMainWindow.searchIcon}>
                                    <SearchIcon color='#999' size={40} width={2}/>
                                </View>
                            </View>
                        </View>
                        <View style={StyleMainWindow.fieldItemsSelect}>
                            <View style={StyleMainWindow.labels}>
                                {contextStorage?.account?.home?.filter(icon=>icon.id===3)[0].filterList.map(element=>
                                <ItemResize
                                    key={element.id} 
                                    state={itemSelector===element.id?true:false} 
                                    handlerClick={()=>{setItemSelector(element.id)}} 
                                    label={element.label}/>)}
                            </View>
                            <View style={StyleMainWindow.labelsIcon}>
                                <FilterIcon color='#AAA' size={30} width={2}/>
                            </View>
                        </View>
                        {/* <View style={StyleMainWindow.fieldContainer}>
                            <View style={{width:'20%',height:'100%'}}></View>
                            <View style={{justifyContent:'center',width:'14%',height:'100%'}}><Text style={StyleMainWindow.textField}>MÓDULO</Text></View>
                            <View style={{justifyContent:'center',width:'9%',height:'100%'}}><Text style={StyleMainWindow.textField}>OCR</Text></View>
                            <View style={{justifyContent:'center',width:'11%',height:'100%'}}><Text style={StyleMainWindow.textField}>TALLA</Text></View>
                            <View style={{justifyContent:'center',width:'16%',height:'100%'}}><Text style={StyleMainWindow.textField}>COLOR</Text></View>
                            <View style={{justifyContent:'center',width:'15%',height:'100%'}}><Text style={StyleMainWindow.textField}>OP</Text></View>
                            <View style={{justifyContent:'center',width:'15%',height:'100%'}}><Text style={StyleMainWindow.textField}>REFERENCIA</Text></View>
                        </View>  */}
                    </View>
                    <View style={StyleMainWindow.root1}>
                        <View style={StyleMainWindow.frame1}>
                        {
                            state.loading?
                            <LoadingComponent label='Cargando lista de registros...'/>:
                            state.error?
                            <EmptyComponent label='Hubo un error en la carga de datos'/>:
                            state.data=== null?
                            <EmptyComponent label='El usuario no cuenta con registros aún'/>:
                            <FlatList 
                            renderItem={(item)=>
                            <InformationModuloComponent 
                            key={item.item.moduloId} 
                            data={item.item} 
                            handlerClick={()=>{
                                navigation.navigate('InfoModuloRevise',item.item);
                            }}/>} 
                            data={state?.data}/>
                        }
                        </View>
                        {/* {contextStorage?.account?.home?.filter(icon=>icon.id===3)[0].actionObject(()=>{
                            })||<></>} */}
                    </View>
                    <View style={StyleMainWindow.root2}>
                        <View style={StyleMainWindow.navigationContainer}>
                        {
                            contextStorage?.account?.home?.map(element=>
                                <ItemNavigation 
                                    handlerClick={()=>{element.NAVIGATE(element.item,navigation)}} 
                                    state={element.id===5} 
                                    key={element.id}>

                                    {element.icon}
                                </ItemNavigation>    
                            )
                        }
                        </View>
                    </View>
                </View>
            </View>
    {
        asideState?  
          
        <Aside 
        navigation={navigation} 
        setActions={{
            setAsideState,
            setNewRegister,
            setModalSegundas
        }}
        handlerClick={()=>{setAsideState(false)}}/>:
        <></>
    }
    {
        newRegister?
        <ModalRegisterOcr 
        handlerClick={()=>setNewRegister(false)} 
        navigation={navigation}/>:
        <></>
    }
    {
        modalSegundas?
        <ModalSegundas handlerClick={()=>{setModalSegundas(false)}}/>:
        <></>
    }
    
    </>
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
        borderRadius:height*0.01,
        // alignSelf:'center'
    },
    root1:{
        height:'70%',
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
        height:'55%',
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
        height:'45%',
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
        alignItems:'flex-end'
    }
});