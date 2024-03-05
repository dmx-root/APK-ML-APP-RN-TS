import { CurrentUser, account } from '../app/account';
import { OcrProcessesInterface } from '../services/ml_api/ocrInterfaces';
import { OperationsInterfaces } from '../services/ml_api/operations';

export interface MainContextInterface{
    account:account|null,
    setAccount:React.Dispatch<React.SetStateAction<account|null>>,
    currentUser:CurrentUser|null,
    setCurrentUser:React.Dispatch<React.SetStateAction<CurrentUser|null>>,
    operations:Array<OperationsInterfaces>|null, 
    setOperations: React.Dispatch<React.SetStateAction<Array<OperationsInterfaces>|null>>,
    ocrProcessData: OcrProcessesInterface|null, 
    setOcrProcessData: React.Dispatch<React.SetStateAction<OcrProcessesInterface|null>>
}