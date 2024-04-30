import { InformationDetOpComponent }    from "../components/informationDetOpComponente"
import { ModalContainerList }           from "../components/modalContainerList"
import { Modal }                        from "../components/modal"
import { LoadingComponent }             from "../components/loadingComponent"
import { useApiGetDetailsOp }           from "../controllers/hooks/customHookGetDetailsOp"
import { EmptyComponent }               from "../components/emptyComponent"
import { GestureResponderEvent, View, Dimensions, StyleSheet, FlatList}  from "react-native"
import { useEffect }                    from "react"
import { FieldInfo } from "../components/fieldInfo"
import { InfoIcon } from "../public/icons/infoIcon"
import { useApiGetModulosAll } from "../controllers/hooks/customHookGetModulosGetAllFilter"
import { MainModuloComponent } from "../components/mainModuloComponent"
import { InformationModuloComponent } from "../components/informationModuloComponent"

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
    const { state } = useApiGetModulosAll();

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