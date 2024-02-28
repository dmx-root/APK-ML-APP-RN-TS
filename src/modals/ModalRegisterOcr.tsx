import { ButtonFullWidth }                  from "../components/buttonFullWidth";
import { FieldInfo }                        from "../components/fieldInfo";
import { Input }                            from "../components/input";
import { Modal }                            from "../components/modal";
import { ModalContainer }                   from "../components/modalContainer";
import { InfoIcon }                         from "../public/icons/infoIcon";
import { form }                             from '../interfaces/view/login';
import { useApiGetDetailsOp }               from "../controllers/hooks/customHookGetDetailsOp";
import { ModalLoading }                     from "./modalLoading";
import { ModalAlert }                       from "./modalAlert";
import { get_employeers_by_modulo, }        from "../endpoints/ml_api/restApiMujerLatina";
import { ModuloObjectRequest }              from "../services/ml_api/request/moduloObjectRequest";
import { Alert, GestureResponderEvent }     from 'react-native';
import { useState }                         from "react";

export function ModalRegisterOcr({handlerClick,navigation}:{
    handlerClick:(event:GestureResponderEvent)=>void,
    navigation:any
}){

    const [ dataForm, setDataForm] = useState<form|null>(null);
    const [ alertState, setAlertState] = useState<boolean>(false);
    const { state, fetchDataDetailsOp } = useApiGetDetailsOp();
    
    async function loadData (){
        const apiQuery = new ModuloObjectRequest();
        try {
            const response = await apiQuery.EmployeersByModuloGet(get_employeers_by_modulo,'2');
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return<>
        {state.loading?
        <ModalLoading 
        label="Cargando registros" 
        handlerClick={()=>{}}/>:

        state.error?
        <ModalAlert 
        label="Error de consulta" 
        content={state.data?.statusMessageApi||'LA consulta falló'} 
        handlerClick={handlerClick}/>:

        <Modal handlerClick={handlerClick}>
            <ModalContainer color='#C7CCEC'>

                <Input 
                color='#44329C' 
                label='OP' 
                handlerInput={(text)=>setDataForm({...dataForm,op:text})} 
                textType='numeric' 
                placeholder="X-X-X-X" 
                value={dataForm?.['op']?dataForm?.['op']:''}/>

                <Input 
                color='#44329C' 
                label='TIPO OP' 
                handlerInput={(text)=>setDataForm({...dataForm,opType:text.toUpperCase()})} 
                textType='default' 
                placeholder="MOP/MOB" 
                value={dataForm?.['opType']?dataForm?.['opType']:''}/>

                <Input 
                color='#44329C' 
                label='MODULO' 
                handlerInput={(text)=>setDataForm({...dataForm,modulo:text})} 
                textType="numeric" 
                placeholder="##" 
                value={dataForm?.['modulo']?dataForm?.['modulo']:''}/>

                <FieldInfo label='Asegurese de llenar todos los campos' color={alertState?'red':'#44329C'}>
                    <InfoIcon color={alertState?'red':'#44329C'} size={24} width={2}/>
                </FieldInfo>
                
            </ModalContainer> 
            <ModalContainer color='#C7CCEC'>

                <ButtonFullWidth 
                fontColor='#44329C' 
                color='#FFF' 
                label='Enviar' 
                handlerClick={(e)=>{
                    // loadData();
                    if(dataForm?.['op']&&dataForm?.['opType']&&dataForm?.['modulo']){
                        fetchDataDetailsOp(`${dataForm?.['opType']}${dataForm?.['op']}`);
                        navigation.navigate('Production');
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