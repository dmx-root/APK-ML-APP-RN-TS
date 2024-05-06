import { useReducer } from 'react';

const actionTypes = {
    FETCH_INIT:     'FETCH_INIT',
    FETCH_SUCCESS:  'FETCH_SUCCESS',
    FETCH_FAILURE:  'FETCH_FAILURE',
};

interface ApiState {
    data: any []| null;
    loading: boolean;
    error: string | null;
}

interface ApiAction {
    type: string;
    payload?: any;
}

interface ObjectInterface{
    [key : string] : any
}

interface ControllerResponseInterface {
    statusCodeApi : number,
    statusMessageApi : string,
    statusCode? : number
}

interface ApiConnectionInterface {
    executeQuery(data?: ObjectInterface): Promise<ControllerResponseInterface>;
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
  
export const useLoadData : (ApiConnection : ApiConnectionInterface ) => { state: ApiState; loadData: (data?:ObjectInterface) => void } = (ApiConnection : ApiConnectionInterface)=>{
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function loadData(data?:ObjectInterface){
        try {
            dispatch({ type: actionTypes.FETCH_INIT });
            const response = await ApiConnection.executeQuery(data);

            response.statusCodeApi===1?
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response}):
            dispatch({ type: actionTypes.FETCH_FAILURE, payload: response});
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error de proceso'});
        }
    };
  
    return { state, loadData };
};
