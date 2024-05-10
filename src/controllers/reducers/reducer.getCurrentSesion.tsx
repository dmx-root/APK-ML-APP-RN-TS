import { statusApi}                     from '../../interfaces/services/ml_api/apiResponse'
import { handlerGetValueLocalStorage }  from '../helpers/handlerValueLocalStorage';
import { useEffect, useReducer }        from 'react';
import { AuthRequestInterface }         from '../../services/ml_api/request/request.interface.auth';
import { ROUTES }                       from '../../endpoints/ml_api/ep.ml.api';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: any;
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
        try { 
            
            const fetch = new AuthRequestInterface({
                url: ROUTES.api_ml_local_auth_get_by_token,
                headers:{
                    'Authenticate-Token':token
                }
            });
            
            const data = await fetch.authByToken();
            if(data.statusCodeApi===1 && data.data){
                
                const nowInSeconds = Math.floor(Date.now() / 1000);
                const expInSeconds = data.data[0].userDateTokenExp;
                const timeRemaining = expInSeconds - nowInSeconds;
                
                if(timeRemaining < 172800){
                    dispatch({ type: actionTypes.FETCH_SUCCESS, payload: {...data, sesionState: true} });
                }else{
                    dispatch({ type: actionTypes.FETCH_SUCCESS, payload: {...data, sesionState: false} });
                }
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
