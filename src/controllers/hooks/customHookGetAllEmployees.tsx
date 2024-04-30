import { api_ml_production_employees_list }     from '../../endpoints/ml_api/restApiMujerLatina';
import { EmployeerProcessInterface }                            from '../../interfaces/services/ml_api/moduloInterfaces';
import { EmployeeRequestInterface }             from '../../services/ml_api/request/request.interface.employees';
import { useEffect, useReducer }                from 'react';

//  Doc 
//  Este reducer tiene la finalidad de solicitar la lista de detalles de la Op que le sea solicitada 
//  El elemento devuelve el estado de la consulta y el callback, al cual se le deve pasar como parámetro de entrada el Id de la OP  de la cual se quiera solicitar sus detalles 
//  Este elemento está siendo utilizado por los siguientes componentes:
//  ModalRegisterOcr -  ModalDetailOpList - 

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: EmployeerProcessInterface[] | null;
    loading: boolean;
    error: string | null;
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
  
export const useApiGetEmployees : () => { state: ApiState} = (): { state: ApiState} => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function fetchData() : Promise <void>{
        try {
            
            const fetch = new EmployeeRequestInterface({
                url: api_ml_production_employees_list
            });

            dispatch({ type: actionTypes.FETCH_INIT });

            const response = await fetch.productionData();
            
            response?.statusCodeApi===1?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data }):
            response?.statusCodeApi===0?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: 0 }):
            dispatch({ type: actionTypes.FETCH_FAILURE});
           
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});
        }
    };
    useEffect(()=>{
        fetchData();
    },[])
  
    return { state };
};