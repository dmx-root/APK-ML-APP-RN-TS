import {createContext, useContext, FC, ReactNode} from 'react'
import {BodegaContextInterface} from '../interfaces/bodegaContextInterface';

const BodegaContext=createContext<BodegaContextInterface|undefined>(undefined);

export const useBodegaContext=()=>{
    const context=useContext(BodegaContext);
    if(!context){
        return new Error('El elemento se encuentra fuera del contexto');
    }
    return context
}

interface ContextProps {
    children:ReactNode
}

export const BodegaContextProvider:FC<ContextProps>=({children})=>{
    const data:BodegaContextInterface ={

    }
    return(
        <BodegaContext.Provider value={data}>
            {children}
        </BodegaContext.Provider>
    )
}