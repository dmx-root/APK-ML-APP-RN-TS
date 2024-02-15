import { ButtonFullWidth }  from "../components/buttonFullWidth"
import { FieldInfo }        from "../components/fieldInfo"
import { Input }            from "../components/input"
import { Modal }            from "../components/modal"
import { ModalContainer }   from "../components/modalContainer"
import { InfoIcon }         from "../public/icons/infoIcon"


export function ModalRegisterOcr(){
    return <Modal handlerClick={()=>{console.log('click')}}>
                <ModalContainer color='#C7CCEC'>
                    <Input color='#44329C' label='OP'/>
                    <Input color='#44329C' label='TIPO OP'/>
                    <Input color='#44329C' label='MODULO'/>
                    <FieldInfo label='Asegurese de llenar todos los campos' color='#44329C'>
                        <InfoIcon color='#44329C' size={24} width={2}/>
                    </FieldInfo>
                </ModalContainer>
                <ModalContainer color='#C7CCEC'>
                    <ButtonFullWidth fontColor='#44329C' color='#FFF' label='Enviar'/>
                </ModalContainer>
            </Modal>
}