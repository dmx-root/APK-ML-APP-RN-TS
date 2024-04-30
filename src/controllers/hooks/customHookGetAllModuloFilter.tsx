import { OcrProcessesInterface }                from '../../interfaces/services/ml_api/ocrInterfaces';
import { EmployeerProcessInterface } from '../../interfaces/services/ml_api/moduloInterfaces'
import { OcrRequestInterface }                  from '../../services/ml_api/request/request.interface.ocr';
import { EmployeeRequestInterface }             from '../../services/ml_api/request/request.interface.employees';
import { statusApi}                             from '../../interfaces/services/ml_api/apiResponse';
import { useEffect, useReducer, useState }      from 'react';
import {    api_ml_production_employees_by_modulo,
            api_ml_production_ocr_get_by_modulo
}from '../../endpoints/ml_api/restApiMujerLatina';

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
  
export const useApiGetModuloElementsAll: (moduloId:string) => {
    state: ApiState;
    setItemSelector: React.Dispatch<React.SetStateAction<number>>;
    itemSelector: number
} = (moduloId:string) => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });
    const [ itemSelector, setItemSelector ] = useState<number>(1);

    async function fetchData1() : Promise <void> {
        try {
            const fetch = new OcrRequestInterface({
                url:api_ml_production_ocr_get_by_modulo+moduloId
            });

            dispatch({ type: actionTypes.FETCH_INIT });
    
            const response =await fetch.productionData();
    
            response?.statusCodeApi===1?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data }):
            response?.statusCodeApi===0?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload:null}):
            dispatch({ type: actionTypes.FETCH_FAILURE});
            
        } catch (error) {
    
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});
    
        }
    };
    async function fetchData2() : Promise <void> {
        try {
            const fetch = new EmployeeRequestInterface({
                url:api_ml_production_employees_by_modulo+moduloId
            });

            dispatch({ type: actionTypes.FETCH_INIT });
    
            const response =await fetch.productionData();
    
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
                fetchData1();
                break;
            case 2:
                fetchData2();
                break;
        }
    },[itemSelector]);
  
    return { state, setItemSelector, itemSelector };
};
