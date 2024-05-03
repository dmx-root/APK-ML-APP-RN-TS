import { api_ml_production_ocr_post }       from '../../endpoints/ml_api/restApiMujerLatina';
import {  OpDetail }                        from '../../interfaces/services/ml_api/detailOpInteface';
import { OperationInterface }               from '../../interfaces/view/production';
import { InterfaceOcrDispatch }             from '../../services/ml_api/dispatch/dispatch.ocrObject';
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

interface ProductionInterface{
    op:     string,
    color:  string,
    talla:  number | string,
    inicio: string | Date,
    finalizacion:string | Date,
    operarioId:string,
    modulo:number,
    unidades:number,
    anormalidad: string | null
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
  
   export const useLoadDataOperation = (): { state: ApiState; loadDataOperation: (operation:OperationInterface,detailsOp:Array<OpDetail>, navigation:any) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function loadDataOperation(operation:OperationInterface , detailsOp:Array<OpDetail>, navigation:any):Promise<void>{
        try {
            const  fetch = new InterfaceOcrDispatch({
                url:api_ml_production_ocr_post
            });

            dispatch({ type: actionTypes.FETCH_INIT });


            const response = await fetch.productionData({
                finalizacion:       new Date().toLocaleTimeString().slice(0,8).trim(),
                inicio:             operation.inicioOperacion.toLocaleString().slice(0,8).trim(),
                operarioId:         operation.registradoPor,
                modulo:             operation.moduloId,
                unidades:           operation.cantidad,
                color:              operation.colorId,
                talla:              operation.tallaId,
                op:                 operation.op, 
                anormalidad:        operation.eventualidadId 
            });


            console.log(response)

            if(response.statusCodeApi===1){
                const modifyValue = detailsOp.map(element=>{
                    if (element.ean===operation.ean){
                        const newCant= element.opLoteCompletado+operation.cantidad;
                        return {
                            ...element,
                            opLoteCompletado:newCant
                        }
                    }
                    return element;
                });

                await handlerSaveObjectLocalStorage('currentOp', modifyValue); // alteramos la informacion del local estorage 
                dispatch({ type: actionTypes.FETCH_SUCCESS});
                navigation.navigate('HomeOcr')
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
