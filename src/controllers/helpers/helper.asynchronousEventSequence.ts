interface ControllerResponseInterface {
    code: number,
    message: string,
    data?: any
    information?: string
}

interface LocalStorageDispatchInterface {
    execute(): Promise<ControllerResponseInterface>
}

const asynchronousEventSequence : ( events : LocalStorageDispatchInterface[], callback : () => void) => void = ( events : LocalStorageDispatchInterface[], callback : () => void) =>{
    async function load(){
        try {
            for (const funcion of events) {
                await funcion.execute();
            }
        } catch (error) {
            // Si una función falla, lanzar una excepción para detener la ejecución
            throw new Error(`Error al ejecutar las funciones: ${error}`);
        }
    }
    load();
    callback();
}