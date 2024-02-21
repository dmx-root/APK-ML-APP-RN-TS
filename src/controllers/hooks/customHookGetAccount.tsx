import { useState } from 'react';
import { accountNavigators }            from '../../structure/accountNavigators';
import {account} from '../../structure/accountNavigators'
import { useMainContext } from '../../contexts/mainContext';

export const useGetAccount = () => {

    const [account,setAccount] = useState<account>(accountNavigators['auth']);
    const storage = useMainContext();

    const setSesion = (accountId:number) => {
        Object.keys(accountNavigators).forEach(element=>{
            if(accountNavigators[element].id===accountId){
                setAccount(accountNavigators[element]);
                storage?.setAccount(accountNavigators[element]);
            }
        });

    };

    const removeSesion = () => {
        setAccount(accountNavigators['auth'])
    };
    return { account, setSesion, removeSesion }
}