import { Alert }                            from 'react-native';
import { useEffect, useReducer, useState }  from 'react';
import {  OpDetail }                        from '../../interfaces/services/ml_api/detailOpInteface';
import { useMainContext }                   from '../../contexts/mainContext';


const actionTypes = {
    READER_SUCCES: 'READER_SUCCES',
    READER_FAILURE: 'READER_FAILURE',
    PROCESS_FAILURE: 'PROCESS_FAILURE',
};

interface ApiState {
    data: OperationSegundasInterface[] | null;
    error: string | null | number;
}

interface ApiAction {
    type: string;
    payload?: any;
}

interface OperationInterface{
    op:string,
    colorId:string,
    talla:string,
    operarioId:string,
    moduloId:number,
    unidades:number
}

interface OperationSegundasInterface extends OperationInterface{
    ean: string
}

const dataReducer = (state: ApiState, action: ApiAction): ApiState => {
    switch (action.type) {
        case actionTypes.READER_SUCCES:
            return { ...state, data: action.payload, error: null };
        case actionTypes.READER_FAILURE:
            return { ...state, data: action.payload, error: null };
        case actionTypes.PROCESS_FAILURE:
            return { ...state, data:null, error: action.payload };
        default:
            return state;
    }
};
  
export const useDeviceReader : () => {deviceReader : (opDetails: OpDetail[] | null,value : string, modulo: number) => void, state : ApiState } = () => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        error: null,
    });

    const [data, setData] = useState<OperationSegundasInterface[] | null>(null);
    const contextStorage = useMainContext();

    const filterData : ( list : OperationSegundasInterface[]) => OperationInterface[] = ( list : OperationSegundasInterface[]) => {
        
        const cleanData = list.map(element =>{
            const newData : OperationInterface = {
                op:         element.op,
                colorId :   element.colorId,
                talla:      element.talla,
                unidades:   element.unidades,
                moduloId:   element.moduloId,
                operarioId: element.operarioId
            }
            return newData;
        });

        return cleanData;
    }

    async function deviceReader(opDetails: OpDetail[] |null, value : string, modulo : number){
        try {
           
            if(value.length > 12){
                const filter = opDetails?.filter(element => element.ean === value);
                if(filter&&filter.length !== 0){

                    const newData: OperationSegundasInterface = {
                        op:         filter[0].op,
                        colorId:    filter[0].colorCodigo,
                        talla:      filter[0].talla,
                        ean:        filter[0].ean,
                        operarioId: contextStorage?.currentUser?.documentoid||'',
                        moduloId:   modulo,
                        unidades:   1
                    } 
                    if(data){
                        if(data.find(elm =>elm.ean === filter[0].ean)){
                            const newList = data.map(elm => {
                                if(elm.ean === filter[0].ean){
                                    return {...elm,unidades: elm.unidades+1}
                                }
                                return elm;
                            });
                            setData(newList);
                            const cleenData = filterData(newList);
                            dispatch({ type: actionTypes.READER_SUCCES, payload:cleenData});

                        }
                        else{
                            const newElement = [...data,newData];
                            setData(newElement);
                            const cleenData = filterData(newElement);
                            dispatch({ type: actionTypes.READER_SUCCES, payload:cleenData});
                        }
                        
                    }else{
                        setData([newData]);
                        const cleenData = filterData([newData])
                        dispatch({ type: actionTypes.READER_SUCCES, payload:cleenData});
                    }

                } else{
                    dispatch({ type: actionTypes.READER_FAILURE, payload:"El código de barras no pertenece a la OP seleccionada" });
                    // Alert.alert("ERROR DE LECTURA", "El código de barras no pertenece a la OP seleccionada")
                }
            }

        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.PROCESS_FAILURE, payload:'El elemento no pertenece a la OP seleccionada'});

        }
    };

    return { state, deviceReader};
};
