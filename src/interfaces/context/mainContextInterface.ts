import { account } from '../app/account';

export interface MainContextInterface{
    account:account|null,
    setAccount:React.Dispatch<React.SetStateAction<account|null>>
}