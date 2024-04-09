import { api_ml_production_op_details_get }                from '../../endpoints/ml_api/restApiMujerLatina';
import { OpDetail }                     from '../../interfaces/services/ml_api/detailOpInteface';
import { OpObjectRequest }              from '../../services/ml_api/request/opObjectRequest';
import { useReducer }                   from 'react';
import { handlerSaveObjectLocalStorage } from '../helpers/handlerObjectLocalStorage';

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
    data: Array<OpDetail> | null;
    loading: boolean;
    error: string | null;
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

            const data=await apiQuery.DetailOpGet(api_ml_production_op_details_get,op);
            
            data?.statusCodeApi===1?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data.data }):
            data?.statusCodeApi===0?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: 0 }):
            dispatch({ type: actionTypes.FETCH_FAILURE});
           
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };
  
    return { state, fetchDataDetailsOp };
};
