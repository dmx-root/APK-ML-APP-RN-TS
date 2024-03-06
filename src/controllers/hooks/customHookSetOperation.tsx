import { DetailProcessResponseInterface, OpDetail }                     from '../../interfaces/services/ml_api/detailOpInteface';
import { useReducer }                   from 'react';
import { handlerGetDetailsOp } from '../helpers/handlerGetDetailsOp';
import { statusApi } from '../../interfaces/services/ml_api/apiResponse';
import { handlerSaveObjectLocalStorage } from '../helpers/handlerObjectLocalStorage';


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
  
   export const useSetOperation = (): { state: ApiState; setDataOperation: (op:string, navigation:any) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function setDataOperation(op:string, navigation:any):Promise<void>{
        try {

            dispatch({ type: actionTypes.FETCH_INIT });
            const response:DetailProcessResponseInterface = await handlerGetDetailsOp(op);
            // console.log(response)
            if(response.statusCodeApi===1){
                dispatch({ type: actionTypes.FETCH_SUCCESS});
                await handlerSaveObjectLocalStorage('currentOp',response.data);
                navigation.navigate('Production');
            }else{
                dispatch({ type: actionTypes.FETCH_FAILURE,payload:response});
            }

        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error de proceso'});

        }
    };
  
    return { state, setDataOperation };
};
