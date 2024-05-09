import { MAIN_OCR }                                                     from '../controllers/helpers/hanlderQueryFilteredObject';
import { handlerRemoveSavedObjectLocalStorage }                         from '../controllers/helpers/handlerObjectLocalStorage';
import { OcrRequestInterface }                                          from '../services/ml_api/request/request.interface.ocr';
import {useApiGetDataFilter }                                           from '../controllers/reducers/reducer.fetchDataFilter';
import { OcrProcessesInterface }                                        from '../interfaces/services/ml_api/ocrInterfaces';
import { MainOcrSegundasComponent }                                     from '../components/mainOcrSegundasComponent';
import { MainOcrAnomalyComponent }                                      from '../components/mainOcrAnomalyComponent';
import { ModalRegisterOcrCurrentOp }                                    from '../modals/modalRegisterOcrCurrentOp';
import { LoadingComponent }                                             from '../components/loadingComponent';
import { MainOcrComponent }                                             from '../components/mainOcrComponent';
import { EmptyComponent }                                               from '../components/emptyComponent';
import { ItemNavigation }                                               from '../components/itemNavigation';
import { FilterIcon }                                                   from '../public/icons/filterIcon';
import { SearchIcon }                                                   from '../public/icons/searchIcon';
import { ModalRegisterOcr }                                             from '../modals/ModalRegisterOcr';
import { MenuIcon }                                                     from '../public/icons/menuIcon';
import { ItemResize }                                                   from '../components/ItemResize';
import { ModalSegundas }                                                from '../modals/modalSegundas';
import { useMainContext }                                               from '../contexts/mainContext';
import { ModalOcrInfo }                                                 from '../modals/modalOcrInfo';
import { Aside }                                                        from '../components/aside';
import { useFilterData }                                                from '../controllers/hooks/customHookFilter';
import { useLoadData }                                                  from '../controllers/reducers/reducer.dispatchData';
import { ObjectDispatchInterface }                                      from '../services/ml_api/dispatch/dispatch.interface.object'
import { ROUTES }                                                       from '../endpoints/ml_api/ep.ml.api';
import { LocalStorageGetObject }                                        from '../services/local_storage/request/request.interface.object';
import { useLocalStorageGetData }                                       from '../controllers/reducers/reducer.getLocalData'
import { View,StyleSheet, Dimensions, TouchableOpacity,Text,FlatList, TextInput}   from 'react-native';
import { useState }                                                     from 'react';

const {height,width}=Dimensions.get('screen');

export function HomeOcr({navigation} : any){

    const contextStorage = useMainContext();

    const [ asideState,setAsideState ] =                 useState<boolean>(false);
    const [ newRegister,setNewRegister ] =               useState<boolean>(false);
    const [ newCurrentRegister,setNewCurrentRegister ] = useState<boolean>(true);
    const [ modalInfoState,setModalInfoState ] =         useState<boolean>(false);
    const [ modalSegundas,setModalSegundas ] =           useState<boolean>(false);

    const [ ocrProcessData, setOcrProcessData ] =        useState<OcrProcessesInterface|null>(null);
    
    const currentOp = useLocalStorageGetData(new LocalStorageGetObject('currentOp'))

    const { state, itemSelector, setItemSelector } = contextStorage?.account?.home?.[0].mainFetch(contextStorage.currentUser?.documentoid);
    // console.log(state)
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
                        {/* <View style={StyleMainWindow.bar}> */}
                            <TextInput value={''}  style={StyleMainWindow.bar} onChangeText={(txt)=>{
                                // setValue(txt)
                            }}/>
                        {/* </View> */}
                        <View style={StyleMainWindow.searchIcon}>
                            <SearchIcon color='#999' size={40} width={2}/>
                        </View>
                    </View>
                </View>
                <View style={StyleMainWindow.fieldItemsSelect}>
                    <View style={StyleMainWindow.labels}>
                        {
                        contextStorage?.account?.home?.filter(icon=>icon.id===1)[0].filterList.map(element=>
                            <ItemResize key={element.id} state={element.id===itemSelector?true:false} handlerClick={()=>{
                                setItemSelector(element.id)
                            }} label={element.label}/>)
                        }
                    </View>
                    <View style={StyleMainWindow.labelsIcon}>
                        <FilterIcon color='#AAA' size={30} width={2}/>
                    </View>
                </View>
                <View style={StyleMainWindow.fieldContainer}>
                    <View style={{width:'13%',height:'100%'}}></View>
                    <View style={{justifyContent:'center',alignItems:'center',width:'18%',height:'100%'}}><Text style={StyleMainWindow.textField}>COLOR</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',width:'8%',height:'100%'}}><Text style={StyleMainWindow.textField}>CANT...</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',width:'10%',height:'100%'}}><Text style={StyleMainWindow.textField}>TALLA</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',width:'12%',height:'100%'}}><Text style={StyleMainWindow.textField}>MODULO</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',width:'18%',height:'100%'}}><Text style={StyleMainWindow.textField}>OP</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',width:'20%',height:'100%'}}><Text style={StyleMainWindow.textField}>REFERENCIA</Text></View>
                </View> 
            </View>
            <View style={StyleMainWindow.root1}>
                <View style={StyleMainWindow.frame1}>
                    {
                        state.loading?
                        <LoadingComponent label='Cargando lista de registros...'/>:
                        state.error?
                        <EmptyComponent label='Hubo un error en la carga de datos'/>:
                        state.data===null?
                        <EmptyComponent label='El usuario no cuenta con registros aún'/>:
                        state.data?
                        <FlatList renderItem={(item)=>
                            item.item.anormalidadCodigo?
                            <MainOcrAnomalyComponent
                            key={item.item.ocrId} 
                            data={item.item} 
                            handlerClick={() => {
                                setOcrProcessData(item.item);
                                setModalInfoState(true);
                            }}/>:
                            item.item.categoriaId===2?
                            <MainOcrSegundasComponent
                            key={item.item.ocrId} 
                            data={item.item} 
                            handlerClick={() => {
                                setOcrProcessData(item.item);
                                setModalInfoState(true);
                            }}/>:
                            <MainOcrComponent
                            key={item.item.ocrId} 
                            data={item.item} 
                            handlerClick={() => {
                                setOcrProcessData(item.item);
                                setModalInfoState(true);
                            }}/>
                        } 
                        data={state?.data}/>:
                        <></>
                    }
                </View>
                {
                
                contextStorage?.account?.home?.filter(icon=>icon.id===1)[0].actionObject(()=>{
                    setNewRegister(true);
                    setNewCurrentRegister(true);
                    // setModalSegundas(true)
                    // load.loadData({
                    //     "op":"MOP4468",
                    //     "color":"1303",
                    //     "talla":"S",
                    //     "inicio":"04:25:52",
                    //     "finalizacion":"05:19:52",
                    //     "modulo":5,
                    //     "unidades":7,
                    //     "anormalidad": null
                    // })
                })||<></>}
            </View>
            <View style={StyleMainWindow.root2}>
                <View style={StyleMainWindow.navigationContainer}>
                    {
                        contextStorage?.account?.home?.map(element=>
                            <ItemNavigation 
                                handlerClick={()=>{element.NAVIGATE(element.item,navigation)}} 
                                state={element.id===1} 
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
            setNewCurrentRegister,
            setModalInfoState,
            setModalSegundas
        }}
        handlerClick={()=>{setAsideState(false)}}/>:
        <></>
    }
    {
        newRegister&&newCurrentRegister&&currentOp.state.data?
        <ModalRegisterOcrCurrentOp 
        navigation={navigation}
        handlerClose={()=>{
            setNewCurrentRegister(false);
            setNewRegister(false);
        }}
        handlerNext={()=>{
            setNewCurrentRegister(false);
            setNewRegister(false);
        }}
        handlerBack={()=>{
            handlerRemoveSavedObjectLocalStorage('currentOp');
            setNewCurrentRegister(false);
        }}
        />:
        newRegister?
        <ModalRegisterOcr 
        handlerClick={()=>setNewRegister(false)} 
        navigation={navigation}/>:
        <></>
    }

    {
        modalInfoState?
        <ModalOcrInfo
        data={ocrProcessData} 
        handlerClick={()=>{
            setModalInfoState(false);
            setOcrProcessData(null)
        }}/>:
        <></>
    }
    {
        modalSegundas?
        <ModalSegundas handlerClick={()=>{setModalSegundas(false)}}/>:
        <></>
    }
    {/* {
        <ModalModulosList
        handlerClick={()=>{

        }}
        navigation={navigation}
        />
    } */}


    </>
}

const currentColorMain='#44329C';   //azul oscuro
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
        alignItems:'flex-end'
    }
});