import { useMainContext }               from '../../contexts/mainContext';
import { account }                      from '../../interfaces/controller/navigator'
import { accountNavigators }            from '../../structure/accountNavigators';
import { useReducer, useState}          from 'react';

const actionTypes = {
    FIND_INIT: 'FETCH_INIT',
    FIND_SUCCESS: 'FETCH_SUCCESS',
    FIND_FAILURE: 'FETCH_FAILURE',
};

interface findState {
    data: any | null;
    loading: boolean;
    error: string | null;
}

interface findAction {
    type: string;
    payload?: any;
}


const dataReducer = (state: findState, action: findAction): findState => {
    switch (action.type) {
        case actionTypes.FIND_INIT:
            return { ...state, loading: true, data: action.payload };
        case actionTypes.FIND_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case actionTypes.FIND_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
  
export const useGetSesion = (): { sesionState: findState; getSesion: (accountId:number) => void } => {
  
    const [sesionState, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    const storage= useMainContext();
    // const [account,setAccount] = useState<account>(accountNavigators['auth']);
    


    function getSesion(accountId:number):void{
        try {

            dispatch({ type: actionTypes.FIND_INIT,payload:0 });

            Object.keys(accountNavigators).forEach(element=>{
                if(accountNavigators[element].id===accountId){

                    // setAccount(accountNavigators[element]);
                    storage?.setAccount(accountNavigators[element]);
                    dispatch({ type: actionTypes.FIND_SUCCESS, payload:1});

                }
            });

            
        } catch (error) {
            dispatch({ type: actionTypes.FIND_FAILURE, payload:-1});
        }
    };
  
    return { sesionState, getSesion };
};
