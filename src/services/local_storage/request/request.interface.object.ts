import AsyncStorage     from '@react-native-async-storage/async-storage';
import { LocalStorageRemoveItem } from '../dispatch/dispatch.interface.removeData'

interface ControllerResponseInterface {
    code: number,
    message: string,
    data?: any
    information?: string
}

interface LocalStorageDispatchInterface {
    execute(): Promise<ControllerResponseInterface>
}

export class LocalStorageGetObject implements LocalStorageDispatchInterface{
    
    private item;

    constructor(item : string){
        this.item = item;
    }

    public async execute(): Promise<ControllerResponseInterface> {
        try {
            const item = await AsyncStorage.getItem(this.item);

            if(!item){
                const response : ControllerResponseInterface = {
                    code: 0,
                    message: 'No hay datos almacenados'
                }
                return response;
            }
            const convertion = JSON.parse(item||'');

            const response : ControllerResponseInterface = {
                code: 1,
                message: 'Elemento fue obtenido con éxito',
                data: convertion
            }
            return response;
        } catch (error) {
            console.log(error)
            try {
                const remove = new LocalStorageRemoveItem(this.item)
                await remove.execute();
            } catch (error) {
                const response : ControllerResponseInterface = {
                    code:-1,
                    message: 'Error al intentar remover el dato',
                }
                return response;
            }
            const response : ControllerResponseInterface = {
                code:-1,
                message: 'Error al intentar obtener el dato',
            }
            return response;
        }
    }
}