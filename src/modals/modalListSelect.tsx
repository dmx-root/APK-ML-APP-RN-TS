import { GestureResponderEvent } from "react-native";
import { Modal } from "../components/modal";
import { ModalContainerList } from "../components/modalContainerList";




export function ModalListSelect({children, handlerClose}:{
    children : React.ReactNode
    handlerClose : (event : GestureResponderEvent) => void
}){
    return <Modal handlerClick={handlerClose}>
                <ModalContainerList>
                    <>{children}</>
                </ModalContainerList>
            </Modal>
}