import { OcrProcessesInterface }        from '../../interfaces/services/ml_api/ocrInterfaces';
import { OcrObjectRequest }             from '../../services/ml_api/request/ocrObjectRequest';
import { statusApi}                     from '../../interfaces/services/ml_api/apiResponse';
import { get_all_ocr_production_all }   from '../../endpoints/ml_api/restApiMujerLatina';
import { useEffect, useReducer }        from 'react';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: Array<OcrProcessesInterface> | null;
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
  
export const useApiGetOcrAll = (): { state: ApiState } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function fetchData():Promise<void>{
        try {
            const apiQuery = new OcrObjectRequest()

            dispatch({ type: actionTypes.FETCH_INIT });

            const data=await apiQuery.OcrProductionGetAll(get_all_ocr_production_all);
            // console.log('la informacion se está consumendo correctamenete ')
            if(data?.statusCodeApi===1)dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data.data })
            else dispatch({ type: actionTypes.FETCH_FAILURE, payload:data});
            
        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };
    useEffect(()=>{
        fetchData();
    },[]);
  
    return { state };
};