import { get_detail_op }                from '../../endpoints/ml_api/restApiMujerLatina';
import { statusApi}                     from '../../interfaces/services/ml_api/apiResponse'
import { OpObjectRequest }              from '../../services/ml_api/request/opObjectRequest';
import { useReducer }                   from 'react';

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
  
   export const useApiGetDetailsOp = (): { state: ApiState; fetchDataDetailsOp: (op:string) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    const apiQuery=new OpObjectRequest()

    async function fetchDataDetailsOp(op:string):Promise<void>{
        try {

            dispatch({ type: actionTypes.FETCH_INIT });

            const data=await apiQuery.DetailOpGet(get_detail_op,op);
            if(data.statusCodeApi===1)dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data });
            else dispatch({ type: actionTypes.FETCH_FAILURE, payload:data})
           
        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };
  
    return { state, fetchDataDetailsOp };
};
