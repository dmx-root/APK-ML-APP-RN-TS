import { ApiConnectionInterface }   from '../../interfaces/services/ml_api/apiConnection';
import { statusApi }                from '../../interfaces/services/ml_api/apiResponse';
import { useEffect, useReducer, useState }    from 'react';
import { OcrRequestInterface } from '../../services/ml_api/request/request.interface.ocr'
import { useMainContext } from '../../contexts/mainContext';
import { ConectionRequestInterface } from '../../services/ml_api/conection/request.connection'

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
interface QueryObjectInterface {
    url: string;
    params?: any;
    headers?: any
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

const handlerQueryOCr: (queryObjectList: QueryObjectInterface[],ApiConnection: ApiConnectionInterface) => ApiConnectionInterface[] = (queryObjectList: QueryObjectInterface[],ApiConnection: ApiConnectionInterface) => {
    const fetchInstance = queryObjectList.map(element => {
        const newObj = Object.create(ApiConnection);
        newObj._headers = element.headers;
        newObj._params = element.params;
        newObj._url = element.url;
        return newObj;
    });
    return fetchInstance;
}

export const useApiGetDataFilter: ({queryChain, ApiConnection}:{queryChain:QueryObjectInterface[],ApiConnection: ApiConnectionInterface }) => {
    state: ApiState;
    itemSelector: number, 
    setItemSelector: React.Dispatch<React.SetStateAction<number>>
} = ({queryChain, ApiConnection}:{queryChain:QueryObjectInterface[], ApiConnection: ApiConnectionInterface }) => {

    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });
    
    const contextStorage = useMainContext();
    const [ itemSelector, setItemSelector ] = useState<number>(0);


    async function fetchData(apiConnection: ApiConnectionInterface): Promise<void> {
        try {

            dispatch({ type: actionTypes.FETCH_INIT });

            const response = await apiConnection.productionData();

            response?.statusCodeApi === 1 ?
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data }) :
                response?.statusCodeApi === 0 ?
                    dispatch({ type: actionTypes.FETCH_SUCCESS, payload: null }) :
                    dispatch({ type: actionTypes.FETCH_FAILURE });

        } catch (error) {
            dispatch({ type: actionTypes.FETCH_FAILURE, payload: 'Error' })
        }
    };

    useEffect(() => {
        const fetchInstance = handlerQueryOCr(queryChain,ApiConnection);
        itemSelector <= (fetchInstance.length-1)?
        fetchData(fetchInstance[itemSelector]):
        console.log('Parámetro fuera')

        console.log(fetchInstance)
    }, [itemSelector]);

    return { state,itemSelector, setItemSelector  };
};
