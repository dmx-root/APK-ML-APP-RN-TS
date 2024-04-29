import { View,StyleSheet, Dimensions, TouchableOpacity,Text, FlatList} from 'react-native';
import { MenuIcon }                                         from '../public/icons/menuIcon';
import { SearchIcon }                                       from '../public/icons/searchIcon';
import { ItemResize }                                       from '../components/ItemResize';
import { FilterIcon }                                       from '../public/icons/filterIcon';
import { InformationOcrComponent }                          from '../components/informationOcrComponent';
import { RowLeftIcon }                                      from '../public/icons/rowLeftIcon';
// import { InformationHeaderViewComponentModulo }             from '../components/InformationHeaderViewComponentModulo';
import { InformationHeaderViewComponentRevise }             from '../components/InformationHeaderViewComponentRevise';
import { ModuloProcessInterface }                           from '../interfaces/services/ml_api/moduloInterfaces';
import { LoadingComponent }                                 from '../components/loadingComponent';
import { EmptyComponent }                                   from '../components/emptyComponent';
import { OcrProcessesInterface }                            from '../interfaces/services/ml_api/ocrInterfaces';
import { ModalOcrInfo }                                     from '../modals/modalOcrInfo';
import { InformationOcrEventsComponent }                    from '../components/informationOcrEventsComponent';
import { InformationOcrCheckComponent }                     from '../components/informationOcrCheckComponent';
import { useState }                                         from 'react';
import { useApiGetModuloElementsAll }                       from '../controllers/hooks/customHookGetAllModuloFilter';
import { MainEmployeerComponent }                           from '../components/mainEmployeerComponent';
import { EmployeerProcessInterface } from '../interfaces/services/ml_api/moduloInterfaces'
import { InformationOcrSegundaComponent } from '../components/informationOcrSegundaComponent'
import { useApiGetOcrByModulo } from '../controllers/hooks/customHookGetOcrByModulo';
// import {} from '../interfaces/services/ml_api/'

const {height,width}=Dimensions.get('screen');

export function InformationModuloRevise({route,navigation}:any){

    const filterItems=[
        {id:1,label:'Registros del Módulo'},
        {id:2,label:'Operarios del módulo'},
    ]

    const moduloData : ModuloProcessInterface = route.params;

    const { state } = useApiGetOcrByModulo(moduloData.moduloId.toString());

    // const {state, itemSelector, setItemSelector} =  useApiGetModuloElementsAll(moduloData.moduloId.toString())

    const [modalInfoState, setModalInfoState ] =    useState<boolean>(false);
    const [ocrProcessData, setOcrProcessData ] =    useState<OcrProcessesInterface|null>(null);

    // console.log(state.loading, state.data?.length)
    return<>
    <View style={{height,width}}>
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
                        {/* {filterItems.map(element=>
                        <ItemResize
                            key={element.id} 
                            state={itemSelector === element.id} 
                            handlerClick={()=>{
                                setItemSelector(element.id)
                            }} 
                            label={element.label}/>)} */}
                    </View>
                    <View style={StyleMainWindow.labelsIcon}>
                        <FilterIcon color='#AAA' size={30} width={2}/>
                    </View>
                </View>
            </View>
            <View style={StyleMainWindow.root1}>
                <View style={StyleMainWindow.frame1}>
                <InformationHeaderViewComponentRevise 
                data={moduloData} 
                info={{
                    elementosRevisados:state.data?.filter(element =>element.revisadoPorId!==null).length || 0,
                    elementosSinRevisar:state.data?.filter(element =>element.revisadoPorId===null).length || 0
                }}/>
                    
                    {
                    state.loading ?
                    <LoadingComponent label='Cargando Información...'/>:
                    state.error?
                    <EmptyComponent label='Hubo un error al momento de cargar los datos, inténtelo más tarde'/>:
                    state.data===null?
                    <EmptyComponent label='EL módulo no cuenta con registros aún...'/>:
                    <>
                        

                        <FlatList 
                        renderItem={(item)=>
                            item.item.revisadoFecha?
                            <InformationOcrCheckComponent
                            key={item.item.ocrId} 
                            data={item.item} 
                            handlerClick={()=>{
                                setModalInfoState(true);
                                setOcrProcessData(item.item);
                            }}/>:
                            item.item.anormalidadCodigo?
                            <InformationOcrEventsComponent
                            key={item.item.ocrId} 
                            data={item.item} 
                            handlerClick={()=>{
                                setModalInfoState(true);
                                setOcrProcessData(item.item);
                            }}/>:
                            <InformationOcrComponent
                            key={item.item.ocrId} 
                            data={item.item} 
                            handlerClick={()=>{
                                setModalInfoState(true);
                                setOcrProcessData(item.item);
                            }}/>
                        }
                        data={state.data}/>
                    </>
                    }
                </View>
                <TouchableOpacity style={StyleMainWindow.buttonOCR} onPress={()=>{navigation.navigate('HomeModulos')}}>
                    <RowLeftIcon color="#777" size={40} width={1.5}/>
                    <Text style={{color:'#777',fontSize:15,fontWeight:'500'}}>Regresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    {
        modalInfoState?
        <ModalOcrInfo 
        data={ocrProcessData} 
        handlerClick={()=>{
            setModalInfoState(false);
            setOcrProcessData(null);
        }}/>:
        <></>
    }
    </>
}

const currentColorMain='#44329C';   //azul oscuro

const StyleMainWindow=StyleSheet.create({
    headerBack:{
        width:'100%',
        height:'10%',
        backgroundColor:currentColorMain
    },
    backRoots:{
        height:'100%',
        width:'100%',
        backgroundColor:'#FFF'
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
        // backgroundColor:'aqua',
        borderRadius:height*0.01,
        alignSelf:'center',
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