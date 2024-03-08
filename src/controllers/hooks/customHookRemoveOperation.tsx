import { OpDetail }                             from '../../interfaces/services/ml_api/detailOpInteface';
import { handlerRemoveSavedObjectLocalStorage } from '../helpers/handlerObjectLocalStorage';
import { useReducer }                           from 'react';
import { handlerRemoveValueLocalStorage } from '../helpers/handlerValueLocalStorage';


const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: Array<OpDetail> | null;
    loading: boolean;
    error: string | null;
}

interface ApiAction {
    type: string;
    payload?: any;
}


const dataReducer = (state: ApiState, action: ApiAction): ApiState => {
    switch (action.type) {
        case actionTypes.FETCH_INIT:
            return { ...state, loading: true, error: null };
        case actionTypes.FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case actionTypes.FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
  
   export const useRemoveDataOperation = (): { state: ApiState; removeDataOperation: ( navigation:any) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function removeDataOperation( navigation:any):Promise<void>{
        try {

            dispatch({ type: actionTypes.FETCH_INIT });
            await handlerRemoveSavedObjectLocalStorage('currentOp')
            await handlerRemoveValueLocalStorage('currentModulo');
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload:'Elementos eliminados correctamente' });
            navigation.navigate('HomeOcr')
            
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error de proceso'});

        }
    };
  
    return { state, removeDataOperation };
};
