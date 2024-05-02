import { Modal }                        from "../components/modal"
import { LoadingComponent }             from "../components/loadingComponent"
import { EmptyComponent }               from "../components/emptyComponent"
import { GestureResponderEvent, View, Dimensions, StyleSheet, FlatList}  from "react-native"
import { FieldInfo }                    from "../components/fieldInfo"
import { InfoIcon }                     from "../public/icons/infoIcon"
import { InformationModuloComponent }   from "../components/informationModuloComponent"
import { ModuloRequestInterface}        from '../services/ml_api/request/request.interface.modulo';
import { useApiGetData }                from '../controllers/reducers/reducer.fetchData';
import { ROUTES }                       from "../endpoints/ml_api/ep.ml.api"

//  Doc 
//  Este componente tiene la finalidad de renderizar la lista de módulos
//  Recibe como parametor de entrada:
//  handlerClick: Manejador de eventos al momento de hacer click fuera del modal 
//  navigation: Es elemento que nos permite navegar atraves de vistas, en este caso a la vista del módulo el cual contine la producción

const {width} = Dimensions.get('window');
export function ModalModulosList({handlerClick,navigation}:{
    handlerClick:(event : GestureResponderEvent) => void,
    navigation : any
}){
    
    const fetch = new ModuloRequestInterface({
        url: ROUTES.api_ml_production_modulo_get_all
    });

    const { state } = useApiGetData(fetch);
    
    return <>
            {
            <Modal handlerClick={handlerClick} >
                <View style={modalContainerListStyle.container}>
                    <FieldInfo label='Seleccione el módulo' color={false?'red':'#44329C'}>
                        <InfoIcon color={false?'red':'#44329C'} size={24} width={2}/>
                    </FieldInfo>
                    {
                        state.loading?
                        <LoadingComponent label='Cargando lista de registros...'/>:
                        state.error?
                        <EmptyComponent label='Hubo un error en la carga de datos'/>:
                        state.data===null?
                        <EmptyComponent label='El usuario no cuenta con registros aún'/>:
                        state.data?
                        <FlatList renderItem={(item)=>
                            <InformationModuloComponent 
                            data={item.item}
                            key={item.item.moduloId} 
                            handlerClick={()=>{
                                navigation.navigate('InfoModuloRevise',item.item);
                            }}/>
                        }
                        data={state?.data}/>:
                        <></>
                    }
                </View>
            </Modal>
            }
        </>
    
}

const modalContainerListStyle=StyleSheet.create({
    container:{
        width:width*0.8,
        maxHeight:700,
        // height:700,
        alignItems:'center',
        // backgroundColor:'aqua',
        marginBottom:30
    }
});