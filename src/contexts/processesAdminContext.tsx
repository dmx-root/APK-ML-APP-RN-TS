import {createContext, useContext, FC,ReactNode} from 'react';
import {ProcessesAdminContextInterface} from '../interfaces/context/processesAdminContext';

const ProcessesAdminContext=createContext<ProcessesAdminContextInterface|undefined>(undefined);

export const useProcessesAdmin=()=>{
    const context=useContext(ProcessesAdminContext);
    if(!context){
        return new Error('El elemento se encuentra fuera del contexto');
    }
    return context;
}

interface ContextProps{
    children:ReactNode
}

export const ProcessesAdminContextProvider:FC<ContextProps>=({children})=>{
    const data:ProcessesAdminContextInterface={

    }
    return(
        <ProcessesAdminContext.Provider value={data}>
            {children}
        </ProcessesAdminContext.Provider>
    )
}