import { statusApi}                                 from '../../interfaces/services/ml_api/apiResponse'
import { useEffect, useReducer }                    from 'react';
import { SesionAnomalyRequestInterface }            from '../../services/ml_api/request/request.interface.sesion'
import { api_ml_sesion_mobile_get_anomaly }         from '../../endpoints/ml_api/restApiMujerLatina'

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface AnomalyInterface {
    codigoAnormalidad: string,
    etiqueta: string,
}

interface ApiState {
    data: AnomalyInterface[] | null;
    loading: boolean;
    error: statusApi | null;
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
  
export const useApiGetAnomalyList = (): { state: ApiState } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });


    async function loaddata():Promise<void>{
        
        try {
            const fetch = new SesionAnomalyRequestInterface({
                url: api_ml_sesion_mobile_get_anomaly
            });

            const response = await fetch.productionData();

            dispatch({ type: actionTypes.FETCH_INIT });

            response.statusCodeApi===1?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data }):
            response.statusCodeApi===0?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: 0 }):
            dispatch({ type: actionTypes.FETCH_FAILURE});
            
        } catch (error) {
            dispatch({type: actionTypes.FETCH_FAILURE, payload: null})         
        }
            
    };

    useEffect(()=>{
        loaddata()
    },[]);

    return { state };
};