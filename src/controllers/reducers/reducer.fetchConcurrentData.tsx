import { ApiConnectionInterface }   from '../../interfaces/services/ml_api/apiConnection';
import { statusApi }                from '../../interfaces/services/ml_api/apiResponse';
import { useEffect, useReducer }    from 'react';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: any[] | null;
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
        
export const useApiGetConcurrentData: ({}:{apiConnection: ApiConnectionInterface, setState:React.Dispatch<any>,stateData: any[]}) => {
    state: ApiState;
} = ({apiConnection,setState,stateData}:{
    apiConnection: ApiConnectionInterface, 
    setState: React.Dispatch<any>,
    stateData: any[]
}) => {

    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function fetchData(): Promise<void> {
        try {

            dispatch({ type: actionTypes.FETCH_INIT });

            const response = await apiConnection.executeQuery();

            if(response?.statusCodeApi === 1 ){
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data }) 
                setState(response.data);
            }
            else if (response?.statusCodeApi === 0){ 
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: null })
            } 
            else{
                dispatch({ type: actionTypes.FETCH_FAILURE })   
            }

        } catch (error) {
            dispatch({ type: actionTypes.FETCH_FAILURE, payload: 'Error' })
        }
    };

    useEffect(() => {
        stateData.length===0?
        fetchData():
        dispatch({ type: actionTypes.FETCH_SUCCESS, payload: stateData }) 
    }, []);

    return { state };
};
