import { DetailProcessResponseInterface, OpDetail }     from '../../interfaces/services/ml_api/detailOpInteface';
import { statusApi }                                    from '../../interfaces/services/ml_api/apiResponse';
import { OperationInterface }                           from '../../interfaces/view/production';
import { handlerSaveObjectLocalStorage }                from '../helpers/handlerObjectLocalStorage';
import { handlerGetDetailsOp }                          from '../helpers/handlerGetDetailsOp';
import { useReducer }                                   from 'react';

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

interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    data? : DetailProcessResponseInterface[],
    statusCode? : number
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
  
// Este compoenente tiene la finalidad de cargar la información en el almacenamiento local
// Una vez se ha cargado la informacion se cambia a la vista de producción 
// recibe como parámetros de entrada:
// op: la orden de produccion a la cual se le solicita cada uno de sus detalles 
// operation: es la información relacionada con la operación en produccion 

export const useSetOperation = (): { state: ApiState; setDataOperation: (op:string, operation:OperationInterface, navigation:any) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function setDataOperation( op : string, operation : OperationInterface, navigation : any) : Promise <void>{
        try {

            dispatch({ type: actionTypes.FETCH_INIT });

            const response : ControllerResponseInterface = await handlerGetDetailsOp(op);

            if(response.statusCodeApi===1){

                await handlerSaveObjectLocalStorage('currentOp',response.data);
                await handlerSaveObjectLocalStorage('currentModulo',operation.moduloId);
                navigation.navigate('Production',operation);

                dispatch({ type: actionTypes.FETCH_SUCCESS});

            }
            else {
                dispatch({ type: actionTypes.FETCH_FAILURE,payload:response.statusMessageApi});
            }
            

        } catch (error) {
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error de proceso'});
        }
    };
  
    return { state, setDataOperation };
};
