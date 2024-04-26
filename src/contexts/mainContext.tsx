import { createContext, useContext, FC, ReactNode, useState} from 'react'
import { MainContextInterface } from '../interfaces/context/mainContextInterface';
import { CurrentUser, account } from '../interfaces/app/account' 
import { OperationsInterfaces } from '../interfaces/services/ml_api/operations';
import { OcrProcessesInterface } from '../interfaces/services/ml_api/ocrInterfaces';


const MainContext = createContext<MainContextInterface | undefined>(undefined);

export const useMainContext = () => {
    const context = useContext(MainContext);
    return context
}

interface ContextProps {
    children: ReactNode
}

export const MainContextProvider: FC<ContextProps> = ({ children }) => {

    const [account, setAccount] = useState<account | null>(null);
    const [operations, setOperations] = useState<Array<OperationsInterfaces> | null>(null);
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null)

    const [ocrProcessData, setOcrProcessData] = useState<OcrProcessesInterface | null>(null);

    const data: MainContextInterface = {
        account,
        setAccount,
        operations,
        setOperations,
        ocrProcessData,
        setOcrProcessData,
        currentUser,
        setCurrentUser
    }
    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}