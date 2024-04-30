import { GestureResponderEvent } from "react-native";
import { InfoLineButton }   from "../components/InfoLineButton";
import { FieldInfo }        from "../components/fieldInfo";
import { InfoLine }         from "../components/infoLine";
import { InfoLineDouble }   from "../components/infoLineDouble";
import { Modal }            from "../components/modal";
import { ModalContainer }   from "../components/modalContainer";
import { OcrProcessesInterface } from "../interfaces/services/ml_api/ocrInterfaces";
import { CheckIcon }        from "../public/icons/CheckIcon";
import { AlertIcon }        from "../public/icons/alertIcon";
import { InfoLineButton2 }  from "../components/InfoLineButton2";
import { ModalListSelect }  from "./modalListSelect";
import { ModalItemList }    from "../components/modalItemList";
import { useState }         from "react";
import { ModalAlertEvents } from "./modalAlertEvents";

// Doc 
// ESte componente tiene la finalidad de exponer la información de los registros 
// 

export function ModalOcrInformationRevise({ data, handlerClick }: {
    data: OcrProcessesInterface | null,
    handlerClick: (event: GestureResponderEvent) => void
}) {
    const [modalEventState, setModalEventState] = useState<boolean>(false);
    const [modalItemsState, setModalItemsState] = useState<boolean>(false);
    const [modalAlertState, setModalAlertState] = useState<boolean>(false);

    return <>
        <Modal handlerClick={handlerClick}>
            <ModalContainer color='#C7CCEC'>
                <InfoLine title='TIPO DE REGISTRO' content={data?.categoriaEtiqueta || 'No def'} />
                <InfoLine title='REGISTRADO POR' content={data?.registradoPorNombre.slice(0, 25) + '...' || 'No def'} />
                <InfoLine title='FECHA DE REGISTRO' content={data?.registroFecha.toLocaleString().slice(0, 10) || 'No def'} />
                {
                    data?.revisadoFecha ?
                        <>
                            <InfoLine title='REVISADO POR' content={data?.revisadoPorId || 'No def'} />
                            <InfoLine title='FECHA DE REVISIÓN' content={data?.revisadoFecha?.toLocaleString().slice(0, 10) || 'No def'} />
                        </> :
                        <></>
                }
                <InfoLine title='MODULO' content={data?.moduloEtiqueta || 'No def'} />
                {/* <InfoLineButton handlerClick={()=>{}} title='Cantidad' content='10' colorBtn='#44329C' fontBtn='#FFF' labelBtn='Editar...'/> */}
            </ModalContainer>
            <ModalContainer color='#C7CCEC'>

                <InfoLineDouble title1='REFERENCIA' content1={data?.referencia || 'No def'} title2='OP' content2={data?.op || 'No def'} />
                <InfoLineDouble title1='COLOR' content1={data?.colorEtiqueta || 'No def'} title2='COD-COLOR' content2={data?.colorId || 'No def'} />
                {
                    data?.categoriaId === 1 ?
                        <InfoLineDouble title1='INICIO' content1={data?.inicioOperacion?.toLocaleString().slice(11, 19) || 'No def'} title2='FIN' content2={data?.finOperacion?.toLocaleString().slice(11, 19) || 'No def'} /> :
                        <></>
                }
                <InfoLineDouble title1='TALLA' content1={data?.tallaId.toString() || 'No def'} title2='CANTIDAD' content2={data?.cantidadUnidades.toString() || 'No def'} />
                <InfoLine title='EAN' content={data?.ean || 'No def'} />
            </ModalContainer>

            {
                data?.anormalidadCodigo ?
                    <ModalContainer color='pink'>
                        <FieldInfo label='Paro inmediato' color='red'>
                            <AlertIcon color="red" size={24} width={2} />
                        </FieldInfo>
                        <InfoLine title='EVENTO' content={data?.anormalidadEtiqueta.slice(0, 20) + '...'} />
                        {/* <InfoLine title='REGISTRADO POR' content={data?.registradoPorId||'No def'}/> */}
                        {/* <InfoLineDouble title1='EVENTO' content1={data?.anormalidadEtiqueta.slice(0,8)+'...'} title2='COD-EVENT' content2={data.anormalidadCodigo}/> */}
                    </ModalContainer> :
                    <></>
            }
            <ModalContainer color='#C7CCEC'>

                {
                    data?.revisadoFecha ?
                        <FieldInfo label='El elemento ya ha sido revisado' color='#44329C'>
                            <CheckIcon color="#44329C" size={24} width={2} />
                        </FieldInfo> :
                        <>
                            <InfoLineButton colorBtn='#44329C' fontBtn='#FFF' labelBtn='Nuevo...' title='Evento' content={'Sin eventos...'} handlerClick={() => { setModalEventState(true) }} />
                            <InfoLineButton2 colorBtn='#44329C' fontBtn='#FFF' labelBtn='Establecer revisión' title='Revisar elemento' handlerClick={() => { setModalAlertState(true) }} />
                        </>
                }

            </ModalContainer>
        </Modal>
        {
            modalEventState ?
                <Modal handlerClick={() => { setModalEventState(false) }}>
                    <ModalContainer color='#C7CCEC'>
                        <InfoLineButton2 colorBtn='#44329C' fontBtn='#FFF' labelBtn='Seleccionar...' title='Seleccione el evento' handlerClick={() => { setModalItemsState(true) }} />
                        <InfoLine title='Ingrese las unidades recibidas' content={''} />
                    </ModalContainer>
                </Modal> :
                <></>
        }
        {
            modalItemsState ?
                <ModalListSelect handlerClose={() => { setModalItemsState(false) }}>
                    <ModalItemList handlerClick={() => { setModalItemsState(false) }} label='Se recibieron unidades de más' position='center' />
                    <ModalItemList handlerClick={() => { setModalItemsState(false) }} label='Se recibieron unidades incompletas' position='center' />
                </ModalListSelect> :
                <></>
        }
        {
            modalAlertState ?
                <ModalAlertEvents
                    label='La acción será ejecutada'
                    content='¿Está seguro de establecer la revisión del elemento?'
                    textButtonCancel='Cancelar'
                    textButtonOk='Revisar'
                    handlerOk={() => {

                    }}
                    handlerCancel={() => {
                        setModalAlertState(false)
                    }}
                /> :
                <></>
        }
    </>

}