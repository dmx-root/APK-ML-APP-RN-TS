import AsyncStorage     from '@react-native-async-storage/async-storage';

interface ControllerResponseInterface {
    code: number,
    message: string,
    data?: any
    information?: string
}

interface LocalStorageDispatchInterface {
    execute(data: object): Promise<ControllerResponseInterface>
}

export class LocalStorageSaveObject implements LocalStorageDispatchInterface {
    
    private item;
    private data;
    
    constructor(item : string, data: string){
        this.item = item;
        this.data = data;
    }

    public async execute(): Promise<ControllerResponseInterface> {
        try {
            await AsyncStorage.setItem(this.item,this.data);
            const response : ControllerResponseInterface = {
                code: 1,
                message: 'Elemento almacenado con éxito'
            }
            return response;
        } catch (error) {
            console.log(error)
            const response : ControllerResponseInterface = {
                code:-1,
                message: 'Error al intentar almacenar el dato',
            }
            return response;
        }
    }
}