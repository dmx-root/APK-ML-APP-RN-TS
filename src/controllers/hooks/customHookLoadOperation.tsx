import { DetailProcessResponseInterface, OpDetail }   from '../../interfaces/services/ml_api/detailOpInteface';
import { useReducer }                   from 'react';
import { handlerGetDetailsOp } from '../helpers/handlerGetDetailsOp';
import { statusApi } from '../../interfaces/services/ml_api/apiResponse';
import { handlerSaveObjectLocalStorage } from '../helpers/handlerObjectLocalStorage';
import { OperationInterface } from '../../interfaces/view/production';


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
  
   export const useLoadDataOperation = (): { state: ApiState; loadDataOperation: (operation:OperationInterface | null,detailsOp:Array<OpDetail>, navigation:any) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function loadDataOperation(operation:OperationInterface | null, detailsOp:Array<OpDetail>, navigation:any):Promise<void>{
        try {

            dispatch({ type: actionTypes.FETCH_INIT });

            if(operation){
                const ocr:OperationInterface={
                    ...operation,
                    cantidad:0,
                    fechaRegistro:'',
                    inicioOperacion:'',
                    finOperacion:'',
                }
                
                await handlerSaveObjectLocalStorage('currentOcr',ocr); // Reestablecemos la operacion en el local estorage

                const modifyValue = detailsOp.map(element=>{
                    if (element.ean===operation.ean){
                        return {
                            ...element,
                            opLoteCompletado:++operation.cantidad
                        }
                    }
                    return element;
                });

                await handlerSaveObjectLocalStorage('currentOp', modifyValue); // alteramos la informacion del local estorage 
                
                // await handlerSaveObjectLocalStorage('detailOp',modifyValue);

                dispatch({ type: actionTypes.FETCH_SUCCESS});

            }else{
                dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Falló la carga de la información en el local storage'});
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error de proceso'});

        }
    };
  
    return { state, loadDataOperation };
};
