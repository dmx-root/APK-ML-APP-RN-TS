import { statusApi}                             from '../../interfaces/services/ml_api/apiResponse'
import { handlerSaveObjectLocalStorage }    from '../helpers/handlerSaveObjectLocalStorage';
import { items }                                from '../../interfaces/storage/items';
import { useReducer }                from 'react';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: any | null;
    loading: boolean;
    error: statusApi | null;
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
  
export const useLocalStorageLoadData = (): { state: ApiState,loadDataLocalStorage:(item:items,data:any)=>void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function loadDataLocalStorage(item:items,data:any):Promise<void>{
        try {
            dispatch({ type: actionTypes.FETCH_INIT });

            await handlerSaveObjectLocalStorage(item,data);

            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: 'Success'})
            
        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };

    return { state, loadDataLocalStorage };
};