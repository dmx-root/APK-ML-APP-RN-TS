import { OcrProcessesInterface } from '../../interfaces/services/ml_api/ocrInterfaces';
import { InterfaceOCRRequest } from '../../services/ml_api/request/ocrObjectRequest';
import { statusApi } from '../../interfaces/services/ml_api/apiResponse';
import { useEffect, useReducer, useState } from 'react';

import {
    api_ml_production_ocr_get_all,
    api_ml_production_ocr_get_by_revise,
    api_ml_production_ocr_get_by_op_type,
    api_ml_production_ocr_get_by_category
} from '../../endpoints/ml_api/restApiMujerLatina';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface ApiState {
    data: OcrProcessesInterface[] | null;
    loading: boolean;
    error: statusApi | null;
}

interface ApiAction {
    type: string;
    payload?: any;
}

interface FetchInterface {
    url: string,
    params?: {
        [key: string]: any
    }
    token?: string,
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

export const useApiGetOcrAll: () => {
    state: ApiState;
    setValueFilter: React.Dispatch<React.SetStateAction<string>>;
    filterData: OcrProcessesInterface[] | null;
    valueFilter: string;
    setItemSelector: React.Dispatch<React.SetStateAction<number>>;
    itemSelector: number
} = () => {

    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });
    const [itemSelector, setItemSelector] = useState<number>(1);
    const [valueFilter, setValueFilter] = useState<string>('');
    const [filterData, setFilterData] = useState<OcrProcessesInterface[] | null>(null)

    async function fetchData(params: FetchInterface): Promise<void> {
        try {
            const fetch = new InterfaceOCRRequest();

            dispatch({ type: actionTypes.FETCH_INIT });

            const response = await fetch.productionData(params);

            if(response?.statusCodeApi === 1){

                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data });
                setFilterData(response.data!)

            }else if(response?.statusCodeApi === 0){
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: null }) 
            }else{
                dispatch({ type: actionTypes.FETCH_FAILURE });
            }

        } catch (error) {

            dispatch({ type: actionTypes.FETCH_FAILURE, payload: 'Error' });

        }
    };

    useEffect(() => {
        switch (itemSelector) {
            case 1:
                fetchData({
                    url: api_ml_production_ocr_get_all
                });
                break;
            case 2:
                fetchData({
                    url: api_ml_production_ocr_get_by_revise,
                    params: {
                        state: 1,
                        // user:'1146441925'
                    }
                });
                break;
            case 3:
                fetchData({
                    url: api_ml_production_ocr_get_by_revise,
                    params: {
                        state: 0,
                        // user:'1146441925'
                    }
                });
                break;
            case 4:
                fetchData({
                    url: api_ml_production_ocr_get_by_op_type,
                    params: {
                        type: 'MOP',
                        // user:'1146441925'
                    }
                })
                break;
            case 5:
                fetchData({
                    url: api_ml_production_ocr_get_by_op_type,
                    params: {
                        type: 'MOB',
                        // user:'1146441925'
                    }
                })
                break;
            case 6:
                fetchData({
                    url: api_ml_production_ocr_get_by_category,
                    params: {
                        // user:'1152460381',
                        category: 1
                    }
                })
                break;
            case 7:
                fetchData({
                    url: api_ml_production_ocr_get_by_category,
                    params: {
                        // user:'1152460381',
                        category: 2
                    }
                })
                break;

        }
    }, [itemSelector]);

    useEffect(() => {
        if(filterData){
            const newData = state.data?.filter(element => element.registroFecha.toString().includes(valueFilter));
            newData?
            setFilterData(newData):
            setFilterData([]);
        }
    }, [valueFilter])

    return { state, setItemSelector, itemSelector,valueFilter, setValueFilter,filterData };
};
