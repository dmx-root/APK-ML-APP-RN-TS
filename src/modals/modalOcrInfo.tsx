import { InfoLineButton }   from "../components/InfoLineButton";
import { FieldInfo }        from "../components/fieldInfo";
import { InfoLine }         from "../components/infoLine";
import { InfoLineDouble }   from "../components/infoLineDouble";
import { Modal }            from "../components/modal";
import { ModalContainer }   from "../components/modalContainer";
import { CheckIcon }        from "../public/icons/CheckIcon";
import { AlertIcon }        from "../public/icons/alertIcon";
import { InfoIcon }         from "../public/icons/infoIcon";

// Doc 
// ESte componente tiene la finalidad de exponer la información de los registros 
// 

export function ModalOcrInfo(){
    return <Modal handlerClick={()=>{}}>
                <ModalContainer color='#C7CCEC'>
                    <InfoLine title='TIPO DE REGISTRO' content='NORMAL'/>
                    <InfoLine title='REGISTRADO POR' content='David Esteban Morales Ñustes'/>
                    <InfoLine title='FECHA DE REGISTRO' content='12/21/2020'/>
                    <>
                        <InfoLine title='REVISADO POR' content='David esteban Morales Ñustes'/>
                        <InfoLine title='FECHA DE REVISIÓN' content='12/21/2020'/>
                    </>
                    <InfoLine title='MODULO' content='1'/>
                    {/* <InfoLineButton handlerClick={()=>{}} title='Cantidad' content='10' colorBtn='#44329C' fontBtn='#FFF' labelBtn='Editar...'/> */}
                </ModalContainer>
                <ModalContainer color='#C7CCEC'>
                    <>
                        <FieldInfo label='Elemento Revisado' color='#44329C'>
                            <CheckIcon color="#44329C" size={24} width={2}/>
                        </FieldInfo>
                    </>
                    <>
                        {/* <FieldInfo label='Elemento sin revisar ' color='#44329C'>
                            <InfoIcon color="#44329C" size={24} width={2}/>
                        </FieldInfo> */}
                    </>
                    <InfoLineDouble title1='REFERENCIA' content1='MAR824651' title2='OP' content2='MOP3548'/>
                    <InfoLineDouble title1='COLOR' content1='PIEL' title2='COD-COLOR' content2='1203'/>
                    <InfoLineDouble title1='INICIO' content1='10:45:21' title2='FIN' content2='11:42:12'/>
                    <InfoLineDouble title1='TALLA' content1='XL' title2='CANTIDAD' content2='45'/>
                    <InfoLine title='EAN' content='111564462123'/>
                </ModalContainer>
                <>
                    {/* <ModalContainer color='pink'>
                        <FieldInfo label='Paro inmediato' color='red'>
                            <AlertIcon color="red" size={24} width={2}/>
                        </FieldInfo>
                        <InfoLineDouble title1='EVENTO' content1='DAÑO MEC.' title2='COD-EVENT' content2='10'/>
                    </ModalContainer> */}
                </>
            </Modal>
}