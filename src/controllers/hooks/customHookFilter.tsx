
import { statusApi } from '../../interfaces/services/ml_api/apiResponse'
import { useEffect, useReducer, useState } from 'react';


interface ApiState {
    data: any[] | null;
    loading: boolean;
    error: statusApi | null;
}


interface params {
    data: ApiState,
    ref: string,
    useApiGetData?: () => {    
        state: ApiState;
        setItemSelector: React.Dispatch<React.SetStateAction<number>>;
        itemSelector: number;}
}

export const useFilterData: ({ data, ref }: params) =>
    {
        elements: any[] | null,
        value: string,
        setValue: React.Dispatch<React.SetStateAction<string>>
    } =
    ({ data, ref }: params) => {

        const [value, setValue] = useState('');
        const [ elements, setElements] = useState<any[]>([]);

        const filterData: () => void = () => {
            
            if(data.data && !data.loading){
                if(elements.length!==0){
                    setElements(data.data)
                }
                const findValue = data.data?.filter(element => element[ref].includes(value));
                setElements(findValue);
            }
            else{
                setElements([]);
            }
        };

        useEffect(()=>{
            filterData();
        },[value]);

        if(elements.length===0){
            const ele = data.data||null
            return { value, setValue, elements:ele };
        }else{
            return { value, setValue, elements };
        }

    };