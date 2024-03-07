// import { useLocalStorageLoadData }          from "../controllers/hooks/customHookLoadDataLocalStorage";
import { useApiGetDetailsOp }               from "../controllers/hooks/customHookGetDetailsOp";
import { ButtonFullWidth }                  from "../components/buttonFullWidth";
import { newOperation, OperationInterface } from "../interfaces/view/production";
import { ModalContainer }                   from "../components/modalContainer";
import { InfoIcon }                         from "../public/icons/infoIcon";
import { form }                             from '../interfaces/view/login';
import { FieldInfo }                        from "../components/fieldInfo";
import { Input }                            from "../components/input";
import { Modal }                            from "../components/modal";
import { ModalLoading }                     from "./modalLoading";
import { ModalAlert }                       from "./modalAlert";
import { Alert, GestureResponderEvent }     from 'react-native';
import { useState }                         from "react";
import { useSetOperation }                  from "../controllers/hooks/customHookSetOperation";
import { handlerGetSavedObjectLocalStorage, handlerRemoveSavedObjectLocalStorage } from "../controllers/helpers/handlerObjectLocalStorage";

export function ModalRegisterOcr({handlerClick,navigation}:{
    handlerClick:(event:GestureResponderEvent)=>void,
    navigation:any,
}){

    const [ dataForm, setDataForm ] = useState<form|null>(null);
    const [ alertState, setAlertState ] = useState<boolean>(false);
    const { state, setDataOperation } = useSetOperation();
  
    return<>
        {state.loading?
        <ModalLoading 
        label="Cargando registros" 
        handlerClick={()=>{}}/>:
        state.error?
        <ModalAlert 
        label="Error de consulta" 
        content={typeof(state.data)==='string'?state.data:false||'La consulta falló'} 
        handlerClick={handlerClick}/>:

        <Modal handlerClick={handlerClick}>
            <ModalContainer color='#C7CCEC'>

                <Input 
                color='#44329C' 
                label='OP' 
                handlerInput={(text)=>{
                    setDataForm({...dataForm,op:text});
                }} 
                textType='numeric' 
                placeholder="X-X-X-X" 
                value={dataForm?.['op']?dataForm?.['op']:''}/>

                <Input 
                color='#44329C' 
                label='TIPO OP' 
                handlerInput={(text)=>{
                    setDataForm({...dataForm,opType:text.toUpperCase()})
                }} 
                textType='default' 
                placeholder="MOP/MOB" 
                value={dataForm?.['opType']?dataForm?.['opType']:''}/>

                <Input 
                color='#44329C' 
                label='MODULO' 
                handlerInput={(text)=>{
                    setDataForm({...dataForm,modulo:text})
                }} 
                textType="numeric" 
                placeholder="##" 
                value={dataForm?.['modulo']?dataForm?.['modulo']:''}/>

                <FieldInfo label='Asegurese de llenar todos los campos' color={alertState?'red':'#44329C'}>
                    <InfoIcon color={alertState?'red':'#44329C'} size={24} width={2}/>
                </FieldInfo>
                
                <ButtonFullWidth 
                fontColor='#44329C' 
                color='#FFF' 
                label='Enviar' 
                handlerClick={(e)=>{
                    if(dataForm?.['op']&&dataForm?.['opType']&&dataForm?.['modulo']){

                        const operationData: OperationInterface={
                            ...newOperation,
                            op:                 dataForm?.['opType']+dataForm?.['op'],
                            moduloId:           dataForm?.['modulo'],
                            inicioOperacion:    new Date().toLocaleTimeString(),
                            fechaRegistro:      new Date().toLocaleDateString(),
                            registradoPor:      '1146441925'
                        }

                        setDataOperation(`${dataForm?.['opType']}${dataForm?.['op']}`,operationData,navigation);
                        // handlerClick(e)
                    }
                    else {
                      
                        setAlertState(true);
                        Alert.alert('Campos vacios','Asegúrese de llenar todos los campos');
                        
                    }
                }}/>

            </ModalContainer>
        </Modal>
        }
    </>
}

