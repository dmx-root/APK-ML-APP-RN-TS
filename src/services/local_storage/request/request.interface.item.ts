import AsyncStorage     from '@react-native-async-storage/async-storage';

interface ControllerResponseInterface {
    code: number,
    message: string,
    data?: any
    information?: string
}

interface LocalStorageDispatchInterface {
    execute(): Promise<ControllerResponseInterface>
}

export class LocalStorageGetItem implements LocalStorageDispatchInterface{
    
    private item;

    constructor(item : string){
        this.item = item;
    }

    public async execute(): Promise<ControllerResponseInterface> {
        try {
            const item = await AsyncStorage.getItem(this.item);
            const response : ControllerResponseInterface = {
                code: 1,
                message: 'Elemento fue obtenido con éxito',
                data: item
            }
            return response;
        } catch (error) {
            console.log(error)
            const response : ControllerResponseInterface = {
                code:-1,
                message: 'Error al intentar obtener el dato',
            }
            return response;
        }
    }
}