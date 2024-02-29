import { InformationDetOpComponent }    from "../components/informationDetOpComponente"
import { ModalContainerList }           from "../components/modalContainerList"
import { Modal }                        from "../components/modal"
import { GestureResponderEvent }        from "react-native"
import { LoadingComponent }             from "../components/loadingComponent"
import { ModalLoading } from "./modalLoading"

export function ModalDetailOpList({opId,handlerClick}:{
    opId:string | null,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <>
        <ModalLoading handlerClick={()=>{}} label="Cargando OP's"/>
        {/* <Modal handlerClick={handlerClick} >
            <ModalContainerList>
                <InformationDetOpComponent handlerClick={()=>{}}/>
                <InformationDetOpComponent handlerClick={()=>{}}/>
                <InformationDetOpComponent handlerClick={()=>{}}/>
                <InformationDetOpComponent handlerClick={()=>{}}/>
                <InformationDetOpComponent handlerClick={()=>{}}/>
            </ModalContainerList>
        </Modal>  */}
    </>
    
}