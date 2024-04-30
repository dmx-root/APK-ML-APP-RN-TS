import { useMainContext } from '../../contexts/mainContext'
import { AxiosHeaders } from 'axios';
import { ApiConnectionInterface } from '../../interfaces/services/ml_api/apiConnection';

interface ObjectInterface{
    [key:string]: any
}


interface FilterListInterface{
    url:String,
    params?: ObjectInterface,
    headers?: AxiosHeaders
}

export const useSetQueryChain = ({queryList, ApiConnection }:{queryList : FilterListInterface[], ApiConnection : ApiConnectionInterface}) =>{
    const contextStorage = useMainContext();

    // const fetchingDataList = queryList.map(element =>{
    //     const fetchingData : ApiConnectionInterface 
    // })

}