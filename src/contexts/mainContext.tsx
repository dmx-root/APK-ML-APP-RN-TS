import {createContext, useContext, FC, ReactNode, useState} from 'react'
import {MainContextInterface} from '../interfaces/mainContextInterface';

interface account{
    id:number,
    initialRoute:string,
    routes:any, 
    context:any
}

const MainContext=createContext<MainContextInterface|undefined>(undefined);

export const useMainContext=()=>{
    const context=useContext(MainContext);
    return context
}

interface ContextProps {
    children:ReactNode
}

export const MainContextProvider:FC<ContextProps>=({children})=>{

    const [account, setAccount] = useState<account|null>(null);
    const data:MainContextInterface ={
        account,
        setAccount
    }
    return(
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}