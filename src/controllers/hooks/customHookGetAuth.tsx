import { useMainContext }           from '../../contexts/mainContext';
import { get_auth }                 from '../../endpoints/ml_api/restApiMujerLatina';
import { AuthObjectRequest }        from '../../services/ml_api/request/authObjectRequest';
import { statusApi}                 from '../../interfaces/services/ml_api/apiResponse'
import { useGetSesion }             from './customHookGetSesion';
import { useReducer }               from 'react';

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
  
   export const useApiGetAuth = (): { state: ApiState; fetchDataAuth: (documentId:string,password:string) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    // const storage= useMainContext();
    const { sesionState,getSesion } = useGetSesion();
  
    const apiQuery=new AuthObjectRequest();

    async function fetchDataAuth(documentId:string,password:string):Promise<void>{
        try {

            dispatch({ type: actionTypes.FETCH_INIT });

            const data=await apiQuery.authGet(get_auth,{documentId,password});
            if(data?.statusCodeApi===1){

                getSesion(data.data.userProfileId);
                if(sesionState.data){
                    dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data });
                }

            }
            else{
                dispatch({ type: actionTypes.FETCH_FAILURE, payload:data});
            }     
            
        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };
  
    return { state, fetchDataAuth };
};
