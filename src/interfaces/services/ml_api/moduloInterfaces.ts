import {statusApi} from './apiResponse'

export interface ModuloProcessInterface{
    moduloId: number,
    numeroTrabajadores: number,
    numeroMaquinas: null,
    moduloEstadoProceso: boolean,
    moduloEstado: boolean,
    moduloEtiqueta: string,
    produccionDiaria:number,
    metaDiaria:number,
    referenciaActual:string,
    opActual:string | null,
    tallaActual: number | string ,
    colorActual: string | null,
    eventualidad: string | null,
    revisorActualId: string | null,
    revisorActualNombre: string | null

}

export interface EmployeerProcessInterface{
    moduloId:number,
    numeroOperarios:number,
    moduloEtiqueta:string,
    operarioCodigo:string,
    operarioNombre:string| null,
    operarioDescripcion:string,
    creacionFecha:Date,
    integracionModuloFecha:Date|null
}

export interface ModuloProcessesResponseInterface extends statusApi{
    data:Array<ModuloProcessInterface>
}

export interface EmployeerProcessResponseInterface extends statusApi{
    data: Array<EmployeerProcessInterface>
}