import { CurrentUser, account } from '../app/account';
import { OcrProcessesInterface } from '../services/ml_api/ocrInterfaces';
import { OperationsInterfaces } from '../services/ml_api/operations';
import { ModuloProcessInterface }       from "../../interfaces/services/ml_api/moduloInterfaces";
import { AnomalyInterface }       from "../../interfaces/services/ml_api/anomalyInterfaces";


export interface MainContextInterface{
    account:account|null,
    setAccount:React.Dispatch<React.SetStateAction<account|null>>,
    currentUser:CurrentUser|null,
    setCurrentUser:React.Dispatch<React.SetStateAction<CurrentUser|null>>,
    concurrentOperations:Array<OperationsInterfaces>|null, 
    setConcurrentOperations: React.Dispatch<React.SetStateAction<Array<OperationsInterfaces>|null>>,
    concurrentModulos: Array<ModuloProcessInterface>|null,
    setConcurrentModulos: React.Dispatch<React.SetStateAction<Array<ModuloProcessInterface>|null>>,
    concurrentAnomalys:Array<AnomalyInterface> | null,
    setConcurrentAnomalys: React.Dispatch<React.SetStateAction<Array<AnomalyInterface>|null>>, 
    ocrProcessData: OcrProcessesInterface|null, 
    setOcrProcessData: React.Dispatch<React.SetStateAction<OcrProcessesInterface|null>>
}