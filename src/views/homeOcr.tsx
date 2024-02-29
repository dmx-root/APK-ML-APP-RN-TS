import { PlusIcon }                                                     from '../public/icons/plusIcon';
import { MenuIcon }                                                     from '../public/icons/menuIcon';
import { SearchIcon }                                                   from '../public/icons/searchIcon';
import { ItemResize }                                                   from '../components/ItemResize';
import { FilterIcon }                                                   from '../public/icons/filterIcon';
import { ItemNavigation }                                               from '../components/itemNavigation';
import { Aside }                                                        from '../components/aside';
import { ModalRegisterOcr }                                             from '../modals/ModalRegisterOcr';
import { useMainContext }                                               from '../contexts/mainContext';
import { LoadingComponent }                                             from '../components/loadingComponent';
import { MainOcrComponent }                                             from '../components/mainOcrComponent';
import { useApiGetOcrByUser }                                           from '../controllers/hooks/customHookGetOcrByUser';
import { EmptyComponent }                                               from '../components/emptyComponent';
import { useApiGetAuthOperations }                                      from '../controllers/hooks/customHookGetAuthOperations';
import { View,StyleSheet, Dimensions, TouchableOpacity,Text,FlatList}   from 'react-native';
import { useState }                                                     from 'react';
import { ModalOcrInfo } from '../modals/modalOcrInfo';
import { OcrProcessesInterface } from '../interfaces/services/ml_api/ocrInterfaces';

const {height,width}=Dimensions.get('screen');

export function HomeOcr({navigation}:any){

    const filterItems=[
        {id:1,label:'Todos'},
        {id:2,label:'Eventualidades'},
        {id:3,label:'Revisados'},
        {id:4,label:'Sin Revisar'},
        {id:5,label:'MOP'},
        {id:6,label:'MOB'}
    ];

    const contextStorage = useMainContext();
    const {state} = useApiGetOcrByUser('1146441925');// Id del usuario 

    const [asideState,setAsideState] = useState<boolean>(false);
    const [newRegister,setNewRegister] = useState<boolean>(false);

    const [modalInfoState,setModalInfoState] = useState<boolean>(false);
    const [ocrProcessData, setOcrProcessData ] = useState<OcrProcessesInterface|null>(null);
    
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
                        {filterItems.map(element=><ItemResize key={element.id} state={false} handlerClick={()=>{}} label={element.label}/>)}
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
                        state.data?.length===0?
                        <EmptyComponent label='El usuario no cuenta con registros aún'/>:
                        <FlatList renderItem={(item)=>
                            <MainOcrComponent 
                            key={item.item.ocrId} 
                            data={item.item} 
                            handlerClick={() => {
                                setOcrProcessData(item.item);
                                setModalInfoState(true);
                            }}/>} 
                        data={state?.data}/>
                    }
                </View>
                <TouchableOpacity style={StyleMainWindow.buttonOCR} onPress={()=>{setNewRegister(true)}}>
                    <PlusIcon color="#777" size={70} width={1}/>
                    <Text style={{color:'#777',fontSize:15,fontWeight:'500'}}>Nueva OCR</Text>
                </TouchableOpacity>
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
        <Aside handlerClick={()=>{setAsideState(false)}}/>:
        <></>
    }
    {
        newRegister?
        <ModalRegisterOcr handlerClick={()=>setNewRegister(false)} navigation={navigation}/>:
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
    {/* <ModalDetailOpList/> */}
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