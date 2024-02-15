import {createContext,useContext}   from 'react'
import {FC, ReactNode}              from 'react'
import {AdminContextInterface}      from '../interfaces/adminContextInterface'

const AdminContext=createContext<AdminContextInterface|undefined>(undefined);

export const useAdminContext=()=>{
    const context=useContext(AdminContext);
    if(!context){
        return new Error('El elemento debe usarse dentro del context');
    }
    return context;
}

interface ContextProps {
    children: ReactNode;
  }

export const  AdminContextProvider:FC<ContextProps>=({children})=>{
    const data:AdminContextInterface={

    }
    return(
        <AdminContext.Provider value={data}>
            {children}
        </AdminContext.Provider>
    )
}