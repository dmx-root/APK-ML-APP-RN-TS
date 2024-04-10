import { InterfaceModuloRequest } from '../../services/ml_api/request/moduloObjectRequest'
import { statusApi}                             from '../../interfaces/services/ml_api/apiResponse';
import { useEffect, useReducer, useState }      from 'react';
import { ModuloProcessInterface }               from '../../interfaces/services/ml_api/moduloInterfaces'

import {    
    api_ml_production_modulo_get_all,
    api_ml_production_modulo_get_by_state
}from '../../endpoints/ml_api/restApiMujerLatina';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: ModuloProcessInterface[] | null;
    loading: boolean;
    error: statusApi | null;
}

interface ApiAction {
    type: string;
    payload?: any;
}

interface FetchInterface {
    url : string,
    params? : {
        [key : string] :any
    }
    token? : string,
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
  
export const useApiGetModulosAll: () => {
    state: ApiState;
    setItemSelector: React.Dispatch<React.SetStateAction<number>>;
    itemSelector: number
} = ( ) => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });
    const [ itemSelector, setItemSelector ] = useState<number>(1);

    async function fetchData(params: FetchInterface) : Promise <void> {
        try {
            const fetch = new InterfaceModuloRequest();
    
            dispatch({ type: actionTypes.FETCH_INIT });
    
            const response =await fetch.productionData(params);
    
            response?.statusCodeApi===1?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data }):
            response?.statusCodeApi===0?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload:null}):
            dispatch({ type: actionTypes.FETCH_FAILURE});
            
        } catch (error) {
    
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});
    
        }
    };

    useEffect(()=>{

        switch(itemSelector){
            case 1:
                fetchData({
                    url:api_ml_production_modulo_get_all
                });
                break;
            case 2:
                fetchData({
                    url:`${api_ml_production_modulo_get_by_state}1`
                });
                break;
            case 3:
                fetchData({
                    url:`${api_ml_production_modulo_get_by_state}0`
                });
                break;

        }
        // console.log('Se ejecutó')
    },[itemSelector]);
  
    return { state, setItemSelector, itemSelector };
};
