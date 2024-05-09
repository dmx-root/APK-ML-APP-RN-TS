import { statusApi }                from '../../interfaces/services/ml_api/apiResponse';
import { useEffect, useReducer }    from 'react';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: any | null;
    loading: boolean;
    error: statusApi | null;
}

interface ApiAction {
    type: string;
    payload?: any;
}

interface ControllerResponseInterface {
    code: number,
    message: string,
    data?: any
    information?: string
}

interface LocalStorageInterface {
    execute(): Promise<ControllerResponseInterface>
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

export const useLocalStorageGetData: (localConnection: LocalStorageInterface) => {
    state: ApiState;
} = (localConnection: LocalStorageInterface) => {

    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    async function fetchData(): Promise<void> {
        try {

            dispatch({ type: actionTypes.FETCH_INIT });

            const response = await localConnection.execute();
            // console.log(response)
            response.code === 1 ?
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data }) :
                dispatch({ type: actionTypes.FETCH_FAILURE });

        } catch (error) {
            dispatch({ type: actionTypes.FETCH_FAILURE, payload: 'Error' })
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { state };
};
