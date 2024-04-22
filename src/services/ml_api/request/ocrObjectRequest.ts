import { OcrProcessesInterface, OcrProcessesResponseInterface } from '../../../interfaces/services/ml_api/ocrInterfaces';
import { statusApi } from '../../../interfaces/services/ml_api/apiResponse';
import { ConectionObjectRequest, ConectionInterfaceRequest } from '../conection/conectionObjectRequest';
import { handlerAxiosError } from '../../../utilities/handlerAxiosError';
//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)

export class OcrObjectRequest extends ConectionObjectRequest {
    async OcrProductionGetByUser(uri: string, documentId: string, token?: string): Promise<any> {
        try {
            const response = (await this.getData((uri + documentId), null, token)).data;
            // console.log(response)
            if (response.apiCode === 1) {
                const dataClear: OcrProcessesInterface[] = response.data.map((element: any) => {
                    return {
                        ocrId: element.ocr_id,
                        op: element.op_id,
                        referencia: element.ref || 'No asignado',
                        colorId: element.clr_id,
                        tallaId: element.tll_id,
                        tallaEtiqueta: element.tll_etiqueta,
                        ean: element.ean || 'No definido',
                        colorEtiqueta: element.clr_etiqueta,
                        moduloId: element.mdl_id,
                        moduloEtiqueta: element.mdl_etiqueta,
                        registradoPorId: element.documento_id_revisor_modulo,
                        registradoPorNombre: element.nombre_revisor_modulo,
                        registroFecha: element.fecha_registro,
                        inicioOperacion: element.inicio_operacion,
                        finOperacion: element.fin_operacion,
                        cantidadUnidades: element.cantidad,
                        ocrState: element.ocr_estado || 'No definido',
                        anormalidadCodigo: element.anm_id,
                        anormalidadEtiqueta: element.anm_etiqueta,
                        revisadoPorId: element.documento_id_revisor_facturacion,
                        revisadoPorNombre: element.nombre_revisor_facturacion,
                        revisadoFecha: element.fecha_revision,
                        estadoActualProceso: element.pdm_etiqueta,
                        categoriaId: element.ctg_id,
                        categoriaEtiqueta: element.ctg_etiqueta,
                        estadoProceso: element.prc_state || 'No se asiganado',
                    }
                });

                const ocrProcessInterface: OcrProcessesResponseInterface = {
                    statusCodeApi: response.apiCode,
                    statusMessageApi: response.apiMessage,
                    data: dataClear
                }
                return ocrProcessInterface;
            }

            const ocrProcessInterface: statusApi = {
                statusCodeApi: response.apiCode,
                statusMessageApi: response.apiMessage,
            }
            return ocrProcessInterface;

        } catch (error) {
            console.log(error)
            const ocrProcessInterface: statusApi = {
                statusCodeApi: -1,
                statusMessageApi: 'Error de consulta',
            }
            return ocrProcessInterface;
        }
    }
    async OcrProductionGetByOP(uri: string, { op, color, talla }: { op: string, color: string, talla: number }, token?: string): Promise<any> {
        try {
            const response = (await this.getData(uri, { op, color, talla }, token)).data;
            if (response.apiCode === 1) {
                const dataClear: Array<OcrProcessesInterface> = response.data.map((element: any) => {
                    return {
                        ocrId: element.ocr_id,
                        op: element.op_id,
                        referencia: element.ref || 'No asignado',
                        colorId: element.clr_id,
                        tallaId: element.tll_id,
                        tallaEtiqueta: element.tll_etiqueta,
                        ean: element.ean || 'No definido',
                        colorEtiqueta: element.clr_etiqueta,
                        moduloId: element.mdl_id,
                        moduloEtiqueta: element.mdl_etiqueta,
                        registradoPorId: element.documento_id_revisor_modulo,
                        registradoPorNombre: element.nombre_revisor_modulo,
                        registroFecha: element.fecha_registro,
                        inicioOperacion: element.inicio_operacion,
                        finOperacion: element.fin_operacion,
                        cantidadUnidades: element.cantidad,
                        ocrState: element.ocr_estado || 'No definido',
                        anormalidadCodigo: element.anm_id,
                        anormalidadEtiqueta: element.anm_etiqueta,
                        revisadoPorId: element.documento_id_revisor_facturacion,
                        revisadoPorNombre: element.nombre_revisor_facturacion,
                        revisadoFecha: element.fecha_revision,
                        estadoActualProceso: element.pdm_etiqueta,
                        categoriaId: element.ctg_id,
                        categoriaEtiqueta: element.ctg_etiqueta,
                        estadoProceso: element.prc_state || 'No se asiganado',
                    }
                });

                const ocrProcessInterface: OcrProcessesResponseInterface = {
                    statusCodeApi: response.apiCode,
                    statusMessageApi: response.apiCode,
                    data: dataClear
                }
                return ocrProcessInterface;
            }

            const ocrProcessInterface: statusApi = {
                statusCodeApi: response.apiCode,
                statusMessageApi: response.apiCode,
            }
            return ocrProcessInterface;

        } catch (error) {
            console.log(error)
            const ocrProcessInterface: statusApi = {
                statusCodeApi: -1,
                statusMessageApi: 'Error de consulta',
            }
            return ocrProcessInterface;
        }
    }
    async OcrProductionGetByReviseState({ uri, state, user, token }: { uri: string, state: number, user?: string, token?: string }): Promise<any> {
        try {
            const response = (await this.getData(uri, { state, user: user || null }, token)).data;

            if (response.apiCode === 1) {
                const dataClear: OcrProcessesInterface[] = response.data.map((element: any) => {
                    return {
                        ocrId: element.ocr_id,
                        op: element.op_id,
                        referencia: element.ref || 'No asignado',
                        colorId: element.clr_id,
                        tallaId: element.tll_id,
                        tallaEtiqueta: element.tll_etiqueta,
                        ean: element.ean || 'No definido',
                        colorEtiqueta: element.clr_etiqueta,
                        moduloId: element.mdl_id,
                        moduloEtiqueta: element.mdl_etiqueta,
                        registradoPorId: element.documento_id_revisor_modulo,
                        registradoPorNombre: element.nombre_revisor_modulo,
                        registroFecha: element.fecha_registro,
                        inicioOperacion: element.inicio_operacion,
                        finOperacion: element.fin_operacion,
                        cantidadUnidades: element.cantidad,
                        ocrState: element.ocr_estado || 'No definido',
                        anormalidadCodigo: element.anm_id,
                        anormalidadEtiqueta: element.anm_etiqueta,
                        revisadoPorId: element.documento_id_revisor_facturacion,
                        revisadoPorNombre: element.nombre_revisor_facturacion,
                        revisadoFecha: element.fecha_revision,
                        estadoActualProceso: element.pdm_etiqueta,
                        categoriaId: element.ctg_id,
                        categoriaEtiqueta: element.ctg_etiqueta,
                        estadoProceso: element.prc_state || 'No definido',
                    }
                });

                const ocrProcessInterface: OcrProcessesResponseInterface = {
                    statusCodeApi: response.apiCode,
                    statusMessageApi: response.apiMessage,
                    data: dataClear
                }
                return ocrProcessInterface;
            }

            const ocrProcessInterface: statusApi = {
                statusCodeApi: response.apiCode,
                statusMessageApi: response.apiMessage,
            }
            return ocrProcessInterface;

        } catch (error) {
            const response = handlerAxiosError(error);
            return response
        }
    }
    async OcrProductionGetByOpType({ uri, type, user, token }: { uri: string, type: 'MOP' | 'MOB', user?: string, token?: string }): Promise<any> {
        try {
            const response = (await this.getData(uri, { type, user: user || null }, token)).data;

            if (response.apiCode === 1) {
                const dataClear: OcrProcessesInterface[] = response.data.map((element: any) => {
                    return {
                        ocrId: element.ocr_id,
                        op: element.op_id,
                        referencia: element.ref || 'No asignado',
                        colorId: element.clr_id,
                        tallaId: element.tll_id,
                        tallaEtiqueta: element.tll_etiqueta,
                        ean: element.ean || 'No definido',
                        colorEtiqueta: element.clr_etiqueta,
                        moduloId: element.mdl_id,
                        moduloEtiqueta: element.mdl_etiqueta,
                        registradoPorId: element.documento_id_revisor_modulo,
                        registradoPorNombre: element.nombre_revisor_modulo,
                        registroFecha: element.fecha_registro,
                        inicioOperacion: element.inicio_operacion,
                        finOperacion: element.fin_operacion,
                        cantidadUnidades: element.cantidad,
                        ocrState: element.ocr_estado || 'No definido',
                        anormalidadCodigo: element.anm_id,
                        anormalidadEtiqueta: element.anm_etiqueta,
                        revisadoPorId: element.documento_id_revisor_facturacion,
                        revisadoPorNombre: element.nombre_revisor_facturacion,
                        revisadoFecha: element.fecha_revision,
                        estadoActualProceso: element.pdm_etiqueta,
                        categoriaId: element.ctg_id,
                        categoriaEtiqueta: element.ctg_etiqueta,
                        estadoProceso: element.prc_state || 'No definido',
                    }
                });

                const ocrProcessInterface: OcrProcessesResponseInterface = {
                    statusCodeApi: response.apiCode,
                    statusMessageApi: response.apiMessage,
                    data: dataClear
                }
                return ocrProcessInterface;
            }

            const ocrProcessInterface: statusApi = {
                statusCodeApi: response.apiCode,
                statusMessageApi: response.apiMessage,
            }
            return ocrProcessInterface;

        } catch (error) {
            const response = handlerAxiosError(error);
            return response
        }
    }

}

interface ParamsInterface {
    [key: string]: any
}

interface PropertiesInterface {
    url: string;
    params?: ParamsInterface;
    token?: string
}

interface ApiResponse {
    apiCode: -1 | 0 | 1,
    apiMessage: string,
    data?: any
}

interface ControllerResponseInterface {
    statusCodeApi: number,
    statusMessageApi: string,
    data?: OcrProcessesInterface[],
    statusCode?: number
}

export class InterfaceOCRRequest extends ConectionInterfaceRequest {
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface 
    async productionData(properties: PropertiesInterface): Promise<ControllerResponseInterface> {
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response: ApiResponse = (await this.getData(properties)).data;

            const dataClear: OcrProcessesInterface[] = response.data.map((element: any) => {
                return {
                    ocrId:                  element.ocr_id,
                    op:                     element.op_id,
                    referencia:             element.referencia,
                    colorId:                element.clr_id,
                    tallaId:                element.tll_id,
                    tallaEtiqueta:          element.tll_etiqueta,
                    ean:                    element.ean || 'No definido',
                    colorEtiqueta:          element.clr_etiqueta,
                    moduloId:               element.mdl_id,
                    moduloEtiqueta:         element.mdl_etiqueta,
                    registradoPorId:        element.documento_id_revisor_modulo,
                    registradoPorNombre:    element.nombre_revisor_modulo,
                    registroFecha:          element.fecha_registro,
                    inicioOperacion:        element.inicio_operacion,
                    finOperacion:           element.fin_operacion,
                    cantidadUnidades:       element.cantidad,
                    ocrState:               element.ocr_estado || 'No definido',
                    anormalidadCodigo:      element.anm_id,
                    anormalidadEtiqueta:    element.anm_etiqueta,
                    revisadoPorId:          element.documento_id_revisor_facturacion,
                    revisadoPorNombre:      element.nombre_revisor_facturacion,
                    revisadoFecha:          element.fecha_revision,
                    estadoActualProceso:    element.pdm_etiqueta,
                    categoriaId:            element.ctg_id,
                    categoriaEtiqueta:      element.ctg_etiqueta,
                    estadoProceso:          element.prc_state || 'No definido',
                }
            })

            const controllerResponse: ControllerResponseInterface = {
                statusCodeApi: response.apiCode,
                statusMessageApi: response.apiMessage,
                statusCode: 200,
                data: dataClear
            }
            return controllerResponse;

        } catch (error) {
            const err = handlerAxiosError(error);
            const response: ControllerResponseInterface = {
                statusCodeApi: err.statusCodeApi,
                statusMessageApi: err.statusMessageApi,
                statusCode: err.statusCode
            }
            return response
        }
    }
}