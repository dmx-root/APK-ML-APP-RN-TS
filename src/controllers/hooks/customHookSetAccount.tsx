import { accountNavigators }    from '../../app/navigators/accountNavigators';
import { account }              from '../../interfaces/controller/navigator';
import { useMainContext }       from '../../contexts/mainContext';
import { useState }             from 'react';

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