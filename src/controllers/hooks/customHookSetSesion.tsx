import { statusApi}                     from '../../interfaces/services/ml_api/apiResponse';
import { handlerSaveValueLocalStorage } from '../helpers/handlerValueLocalStorage';
import { useSetSesion }                 from '../helpers/handlerSetSesion';
import { handlerGetAuth }               from '../helpers/handlerGetAuth';
import { useReducer }                   from 'react';

const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

interface sesionState {
    data: any | null;
    loading: boolean;
    error: statusApi | null;
}

interface ApiAction {
    type: string;
    payload?: any;
}

const dataReducer = (state: sesionState, action: ApiAction): sesionState => {
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
  
export const useHandlerSesion = (): { state: sesionState; setDataAuth: (documentId:string,password:string,passwordSaveSate:boolean) => void } => {
  
    const [state, dispatch] = useReducer(dataReducer, {
        data: null,
        loading: false,
        error: null,
    });

    const { setSesion } = useSetSesion();

    async function setDataAuth(documentId:string,password:string,passwordSaveSate:boolean):Promise<void>{
        try {
            dispatch({ type: actionTypes.FETCH_INIT });

            const data = await handlerGetAuth(documentId, password);

            if(data.statusCodeApi===1){

                const response=setSesion(data.data);

                if(response.statusCode===1){
                    if(passwordSaveSate){

                        await handlerSaveValueLocalStorage("token",data.toke);
                        dispatch({ type: actionTypes.FETCH_SUCCESS,payload:{
                            statusCodeApi: 1,
                            statusMessageApi: response.statusMessage
                        }});

                    }else{

                        dispatch({ type: actionTypes.FETCH_FAILURE,payload:{
                            statusCodeApi: 0,
                            statusMessageApi: "Error al intentar guardar los datos en local storage"
                        }});

                    }
                }

                else{
                    dispatch({ type: actionTypes.FETCH_FAILURE,payload:{
                        statusCodeApi: -1,
                        statusMessageApi: response.statusMessage
                    }});
                }
                // const account = handlerGetSesion(data.data.userProfileId);
                // if(account.id!==0){ 
                //     contextStorage?.setAccount(account);
                //     contextStorage?.setCurrentUser({
                //         nombre:data.data.userName,
                //         documentoid:data.data.userDocumentId,
                //         tipoDocumento:data.data.userDocumentType,
                //         rolId:data.data.userProfileId,
                //         rolNombre:data.data.userDocumentId,
                //         descripcion:data.data.userDescription,
                //         creacionFecha:data.data.userCreteDate 
                //     });
                //     if(passwordSaveSate){
                //         await handlerSaveValueLocalStorage("token",data.toke);
                //     }
                // }
                // else{
                //     dispatch({ type: actionTypes.FETCH_FAILURE, payload:{
                //         statusCodeApi: -1,
                //         statusMessageApi: "Error al intentar establecer la sesión"
                //     }});
                // }
            }
            else{
                dispatch({ type: actionTypes.FETCH_FAILURE, payload:data});
            }
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_FAILURE, payload:'Error de proceso'});
        }
    };
  
    return { state, setDataAuth };
};
