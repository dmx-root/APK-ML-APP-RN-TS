import { InformationDetOpComponent }    from "../components/informationDetOpComponente"
import { ModalContainerList }           from "../components/modalContainerList"
import { Modal }                        from "../components/modal"
import { LoadingComponent }             from "../components/loadingComponent"
import { useApiGetDetailsOp }           from "../controllers/hooks/customHookGetDetailsOp"
import { EmptyComponent }               from "../components/emptyComponent"
import { GestureResponderEvent, View, Dimensions, StyleSheet}  from "react-native"
import { useEffect }                    from "react"

//  Doc 
//  Este componente tiene la finalidad de renderizar la lista de detalles de cada OP
//  Recibe como parametor de entrada:
//  OpId: el id de la op a la cual se le quiere solicitar la lista de detalles
//  handlerClick: Manejador de eventos al momento de hacer click fuera del modal 

const {width} = Dimensions.get('window');
export function ModalDetailOpList({opId,handlerClick,navigation}:{
    opId:string | null,
    handlerClick:(event:GestureResponderEvent)=>void,
    navigation:any
}){
    const { state, fetchDataDetailsOp } = useApiGetDetailsOp();
    useEffect(()=>{fetchDataDetailsOp(opId||'')},[]);

    return <>
        {
        <Modal handlerClick={handlerClick} >

                {
                    state.loading?
                    <ModalContainerList>
                        <LoadingComponent label="Cargando lista de OP's..."/>
                    </ModalContainerList>:
                    state.error?
                    <ModalContainerList>
                        <EmptyComponent label="Hubo un error en la carga de los datos"/> 
                    </ModalContainerList>:
                    state.data?.length===0?
                    <ModalContainerList>
                        <EmptyComponent label="No se encontraron datos para este elemento" />:
                    </ModalContainerList>:
                    <View style={modalContainerListStyle.container}>
                         {
                        state.data?.map(element=>
                        <InformationDetOpComponent 
                        data={element} 
                        handlerClick={(e)=>{
                            handlerClick(e);
                            navigation.navigate('InfoDetailOp',element)
                        }} 
                        key={element.talla}/>)
                        }
                    </View>
                }
        </Modal>}
    </>
    
}

const modalContainerListStyle=StyleSheet.create({
    container:{
        width:width*0.8,
        // height:700,
        alignItems:'center',
        // backgroundColor:'aqua',
        marginBottom:30
    }
});