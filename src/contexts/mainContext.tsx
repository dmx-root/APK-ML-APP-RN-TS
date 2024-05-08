import { createContext, useContext, FC, ReactNode, useState} from 'react'
import { MainContextInterface } from '../interfaces/context/mainContextInterface';
import { CurrentUser, account } from '../interfaces/app/account' 
import { OperationsInterfaces } from '../interfaces/services/ml_api/operations';
import { OcrProcessesInterface } from '../interfaces/services/ml_api/ocrInterfaces';
import { ModuloProcessInterface } from '../interfaces/services/ml_api/moduloInterfaces';
import { AnomalyInterface }       from "../interfaces/services/ml_api/anomalyInterfaces";

const MainContext = createContext<MainContextInterface | undefined>(undefined);

export const useMainContext = () => {
    const context = useContext(MainContext);
    return context
}

interface ContextProps {
    children: ReactNode
}

export const MainContextProvider: FC<ContextProps> = ({ children }) => {

    const [account, setAccount] =                           useState<account | null>(null);
    const [concurrentOperations, setConcurrentOperations] = useState<Array<OperationsInterfaces> | null>(null);
    const [concurrentModulos, setConcurrentModulos] =       useState<Array<ModuloProcessInterface> | null>(null);
    const [concurrentAnomalys, setConcurrentAnomalys] =     useState<Array<AnomalyInterface> | null>(null);
    const [currentUser, setCurrentUser] =                   useState<CurrentUser | null>(null)

    const [ocrProcessData, setOcrProcessData] = useState<OcrProcessesInterface | null>(null);

    const data: MainContextInterface = {
        account,
        setAccount,
        concurrentOperations,
        setConcurrentOperations,
        concurrentModulos,
        setConcurrentModulos,
        concurrentAnomalys, 
        setConcurrentAnomalys,
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