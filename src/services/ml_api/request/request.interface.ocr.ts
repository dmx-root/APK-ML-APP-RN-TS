import { OcrProcessesInterface }        from '../../../interfaces/services/ml_api/ocrInterfaces';
import { ApiConnectionInterface }       from '../../../interfaces/services/ml_api/apiConnection';
import { handlerAxiosError }            from '../../../utilities/handlerAxiosError';
import { ConectionRequestInterface }    from '../conection/request.connection';
import { AxiosHeaders }                 from 'axios';
//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(RES_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le solicitará información 
//  para este componente se hizo uso de la programación orientada a objetos (OOP)
interface ParamsInterface {
    [key: string]: any
}

interface PropertiesInterface {
    url?: string;
    params?: ParamsInterface;
    headers?: ParamsInterface
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

export class OcrRequestInterface extends ConectionRequestInterface implements ApiConnectionInterface {
    constructor(properties: PropertiesInterface) {
        super(properties)
    }
    // este controlador permite modelar los datos que son recibidos de la APi
    // Esto con la finalidad de normalizar la información que será consumida en toda la aplicación
    // De manera que si el nombre de algún campo cambia, solo se tendrá que hacer el cambio en esta interface 
    async executeQuery(): Promise<ControllerResponseInterface> {
        // Este metódo permite obtener la información relacionada al proceso
        try {
            const response: ApiResponse = (await this.getData()).data;

            const dataClear: OcrProcessesInterface[] = response.data?.map((element: any) => {
                return {
                    ocrId: element.ocr_id,
                    op: element.op_id,
                    referencia: element.referencia,
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
                    revisadoporNombre: ''
                }
            });

            const ocrProcessInterface: ControllerResponseInterface = {
                statusCodeApi: response.apiCode,
                statusMessageApi: response.apiMessage,
                statusCode: 200,
                data: dataClear
            }
            return ocrProcessInterface;

        } catch (error) {
            const err = handlerAxiosError(error);

            const apiResponse: ControllerResponseInterface = {
                statusCodeApi: -1,
                statusMessageApi: err.statusMessageApi,
                statusCode: err.statusCode
            }
            return apiResponse;
        }
    }   
}
