import { InformationDetOpComponent } from "../components/informationDetOpComponente"
import { InformationModuloComponent } from "../components/informationModuloComponent"
import { InformationUserComponent } from "../components/informationUserComponent"
import { Modal } from "../components/modal"
import { ModalContainer } from "../components/modalContainer"
import { ModalContainerList } from "../components/modalContainerList"
import { InformationDetailOp } from "../views/informationDetailOp"


export function ModalDetailOpList(){
    return  <Modal handlerClick={()=>{}} >
                <ModalContainerList>
                    <InformationDetOpComponent handlerClick={()=>{}}/>
                    <InformationDetOpComponent handlerClick={()=>{}}/>
                    <InformationDetOpComponent handlerClick={()=>{}}/>
                    <InformationModuloComponent handlerClick={()=>{}}/>
                    <InformationUserComponent handlerClick={()=>{}}/>
                    {/* <InformationDetOpComponent handlerClick={()=>{}}/> */}
                    {/* <InformationDetOpComponent handlerClick={()=>{}}/> */}
                </ModalContainerList>
            </Modal> 
}