import { api_ml_production_ocr_get_by_op }          from '../../endpoints/ml_api/restApiMujerLatina';
import { statusApi}                                 from '../../interfaces/services/ml_api/apiResponse'
import { OcrProcessesInterface }                    from '../../interfaces/services/ml_api/ocrInterfaces';
import { OcrObjectRequest, InterfaceOCRRequest }    from '../../services/ml_api/request/ocrObjectRequest';
import { useEffect, useReducer }    from 'react';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: Array<OcrProcessesInterface> | null;
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
  
export const useApiGetOcrByOP = ({op,color,talla}:{op:string,color:string,talla:number}): { state: ApiState } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function fetchData(params : FetchInterface ) : Promise<void>{
        try {

            const fetch = new InterfaceOCRRequest();

            dispatch({ type: actionTypes.FETCH_INIT });

            const response = await fetch.productionData(params);
            console.log(response)
            response.statusCodeApi===1?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data }):
            response?.statusCodeApi===0?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: null }):
            dispatch({ type: actionTypes.FETCH_FAILURE});
            
        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error'});

        }
    };

    useEffect(()=>{
        fetchData({
            url: api_ml_production_ocr_get_by_op,
            params: {
                op,
                color,
                talla
            }
        });
    },[]);
  
    return { state };
};