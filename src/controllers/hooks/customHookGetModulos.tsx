
import { api_ml_production_modulo_get_all }                 from '../../endpoints/ml_api/restApiMujerLatina';
import { statusApi}                 from '../../interfaces/services/ml_api/apiResponse'
import { useEffect, useReducer }               from 'react';
import { ModuloProcessInterface } from '../../interfaces/services/ml_api/moduloInterfaces';
import { InterfaceModuloRequest } from '../../services/ml_api/request/moduloObjectRequest'

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: Array<ModuloProcessInterface> | null;
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
  
export const useApiGetModulos = (): { state: ApiState } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });


    async function fetchData():Promise<void>{
        try {
            const fetch = new InterfaceModuloRequest();

            dispatch({ type: actionTypes.FETCH_INIT });

            const data=await fetch.productionData({
                url:api_ml_production_modulo_get_all
            })

            data?.statusCodeApi===1?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data.data }):
            data?.statusCodeApi===0?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: null }):
            dispatch({ type: actionTypes.FETCH_FAILURE});
            
            
        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };
    useEffect(()=>{
        fetchData();
    },[]);
  
    return { state };
};