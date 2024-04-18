import { ButtonFullWidth }                  from "../components/buttonFullWidth";
import { ModalContainer }                   from "../components/modalContainer";
import { form }                             from '../interfaces/view/login';
import { InfoIcon }                         from "../public/icons/infoIcon";
import { useMainContext }                   from "../contexts/mainContext";
import { FieldInfo }                        from "../components/fieldInfo";
import { Input }                            from "../components/input";
import { Modal }                            from "../components/modal";
import { GestureResponderEvent }            from 'react-native';

export function ModalRegisterOcrSegundas({handlerClick, handlerNext, setDataForm, dataForm }:{
    handlerClick: (event:GestureResponderEvent)=>void,
    handlerNext: (event:GestureResponderEvent)=>void,
    setDataForm: React.Dispatch<React.SetStateAction<form|null>>,
    dataForm: form | null
}){

    const contextStorage = useMainContext();

    return<>
        {
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

                <FieldInfo label='Asegurese de llenar todos los campos' color={'#44329C'}>
                    <InfoIcon color={'#44329C'} size={24} width={2}/>
                </FieldInfo>
                
                <ButtonFullWidth 
                fontColor='#44329C' 
                color='#FFF' 
                label='Registrar' 
                handlerClick={handlerNext}/>

            </ModalContainer>
        </Modal>
        }
    </>
}