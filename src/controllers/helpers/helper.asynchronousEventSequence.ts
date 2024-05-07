interface ControllerResponseInterface {
    code: number,
    message: string,
    data?: any
    information?: string
}

interface LocalStorageDispatchInterface {
    execute(): Promise<ControllerResponseInterface>
}

export const asynchronousEventSequence: (events: LocalStorageDispatchInterface[], callback: () => void) => void = (events: LocalStorageDispatchInterface[], callback: () => void) => {
    async function load() {
        try {
            for (const funcion of events) {
                await funcion.execute();
                console.log('ejecucion exitosa')
            }
        } catch (error) {
            throw new Error(`Error al ejecutar las funciones: ${error}`);
        }
    }
    load();
    callback();
    console.log(events[0])
}