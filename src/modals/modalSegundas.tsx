import { ModalRegisterOcrSegundas}  from './modalRegisterOcrSegundas';
import { ModalProductionSegundas}   from './modalProductionSegundas';
import { useState }                 from 'react';
import { Alert, GestureResponderEvent }     from 'react-native';

interface form{
    [key:string]:string
}

export function ModalSegundas({handlerClick}:{
    handlerClick : (event : GestureResponderEvent) => void 
}){

    const [ infoState, setInfoState ] =   useState(false);
    const [ dataForm, setDataForm ] =     useState<form | null>(null);

    const handlerNextInformation : (event : GestureResponderEvent) => void = () =>{
        if(dataForm?.op && dataForm?.opType && dataForm?.modulo){
            setInfoState(true);
        }else{
            Alert.alert('Campos vacios','No se obtuvo los campos necesarios');
        }
    }

    return  <>
                {
                    !infoState?
                    <ModalRegisterOcrSegundas 
                    handlerClick={handlerClick} 
                    handlerNext={handlerNextInformation} 
                    setDataForm={setDataForm} 
                    dataForm={dataForm}/>:
   
                    <ModalProductionSegundas 
                    formData={dataForm}
                    handlerNext={()=>{}}
                    handlerClick={handlerClick}/>
                }
            </>
}
