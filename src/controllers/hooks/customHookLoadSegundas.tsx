import { api_ml_production_ocr_segundas_post } from '../../endpoints/ml_api/restApiMujerLatina';
import {  OpDetail }                        from '../../interfaces/services/ml_api/detailOpInteface';
import { OperationInterface } from '../../interfaces/view/production';
import { InterfaceOcrDispatch } from '../../services/ml_api/dispatch/dispatch.ocrObject';
import { handlerSaveObjectLocalStorage }    from '../helpers/handlerObjectLocalStorage';
import { useReducer }                       from 'react';


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

interface OperationSegundasInterface{
    op:string,
    colorId:string,
    talla:string,
    operarioId:string,
    moduloId:number,
    unidades:number
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
  
   export const useLoadDataSegundasOperation = (): { state: ApiState; loadDataOperation: (operation:OperationSegundasInterface[]) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function loadDataOperation(operation:OperationSegundasInterface[]):Promise<void>{
        try {
            const  fetch = new InterfaceOcrDispatch({
                url:api_ml_production_ocr_segundas_post
            });

            
            dispatch({ type: actionTypes.FETCH_INIT });
            
            
            const response = await fetch.productionData2(operation);
            console.log(response)

            if(response.statusCodeApi===1){
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload:response});
            }
            else{
                dispatch({ type: actionTypes.FETCH_FAILURE, payload:response});
            }
            

        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error de proceso'});

        }
    };
  
    return { state, loadDataOperation };
};
