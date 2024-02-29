import { get_auth_operations }      from '../../endpoints/ml_api/restApiMujerLatina';
import { AuthObjectRequest }        from '../../services/ml_api/request/authObjectRequest';
import { statusApi}                 from '../../interfaces/services/ml_api/apiResponse'
import { OperationsInterfaces }     from '../../interfaces/services/ml_api/operations';
import { useEffect, useReducer }    from 'react';
import { useMainContext } from '../../contexts/mainContext';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: Array<OperationsInterfaces> | null;
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
  
export const useApiGetAuthOperations = (): { state: ApiState, fetchDataOperation: (profileId:string) => void  } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    const contextStorage = useMainContext()

    async function fetchDataOperation(profileId:string):Promise<void>{
        try {
            const apiQuery = new AuthObjectRequest();
            dispatch({ type: actionTypes.FETCH_INIT });

            const data=await apiQuery.authGetOperations(get_auth_operations,profileId);

            if(data?.statusCodeApi===1){
                contextStorage?.setOperations(data.data);
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data.data});

            }
            else dispatch({ type: actionTypes.FETCH_FAILURE, payload:data});
            
        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };

  
    return { state, fetchDataOperation};
};