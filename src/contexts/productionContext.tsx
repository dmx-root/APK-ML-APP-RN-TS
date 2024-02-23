import {createContext,useContext, FC, ReactNode} from 'react'
import {ProductionContextInterface} from '../interfaces/context/productionContextInterface';

const ProductionContext=createContext<ProductionContextInterface|undefined>(undefined);

export const useProductionContext=()=>{
    const context=useContext(ProductionContext);
    if(!context){
        return new Error('El elemento se encuentra fuera del contexto');
    }
    return context;
}

interface ContextProps{
    children:ReactNode
}

export const ProductionContextProvider:FC<ContextProps>=({children})=>{
    const data: ProductionContextInterface={

    }
    return(
        <ProductionContext.Provider value={data}>
            {children}
        </ProductionContext.Provider>
    )
}