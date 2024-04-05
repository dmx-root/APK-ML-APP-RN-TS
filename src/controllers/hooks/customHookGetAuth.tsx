import { useMainContext }               from '../../contexts/mainContext';
import { api_ml_local_auth_get_by_token }                     from '../../endpoints/ml_api/restApiMujerLatina';
import { AuthObjectRequest }            from '../../services/ml_api/request/authObjectRequest';
import { statusApi}                     from '../../interfaces/services/ml_api/apiResponse'
import { authResponseInterface }        from '../../interfaces/services/ml_api/authInterfaces';
import { handlerGetValueLocalStorage }  from '../helpers/handlerValueLocalStorage';
import { useEffect, useReducer }        from 'react';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: authResponseInterface | null;
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
  
   export const useApiGetAuth = (): { state: ApiState } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function fetchDataAuth(token:string):Promise<void>{
        const apiQuery=new AuthObjectRequest();
        try {     
            // const data=await apiQuery.authGet(get_auth,null,token);
            const data = await apiQuery.authGetByToken(api_ml_local_auth_get_by_token,token);
            // console.log(data)
            if(data?.apiCode===1){
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data });   
            }
            else{
                dispatch({ type: actionTypes.FETCH_FAILURE, payload:data});
            }     
            
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});
        }
    };

    async function loadData(){
        try {
            dispatch({ type: actionTypes.FETCH_INIT });
            const response = await handlerGetValueLocalStorage('token');
            // console.log(response)
            if(typeof(response)==='string'){
                await fetchDataAuth(response);
            }
            else{
                dispatch({ type: actionTypes.FETCH_FAILURE, payload:response}); 
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadData()
    },[])
  
    return { state };
};
