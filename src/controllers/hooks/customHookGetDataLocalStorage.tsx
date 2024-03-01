import { get_all_ocr_by_op }        from '../../endpoints/ml_api/restApiMujerLatina';
import { statusApi}                 from '../../interfaces/services/ml_api/apiResponse'
import { OcrProcessesInterface }    from '../../interfaces/services/ml_api/ocrInterfaces';
import { OcrObjectRequest }         from '../../services/ml_api/request/ocrObjectRequest';
import { useEffect, useReducer }    from 'react';
import { handlerGetSavedObjectLocalStorage } from '../helpers/handlerSaveObjectLocalStorage';
import { items } from '../../interfaces/storage/items';

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
  
export const useLocalStorageGetData = (item:items): { state: ApiState } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function fetchData():Promise<void>{
        try {
            dispatch({ type: actionTypes.FETCH_INIT });

            const data=await handlerGetSavedObjectLocalStorage(item);

            if(data)dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data})
            
            else dispatch({ type: actionTypes.FETCH_FAILURE, payload:null});
            
        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };

    useEffect(()=>{
        fetchData();
    },[]);
  
    return { state };
};