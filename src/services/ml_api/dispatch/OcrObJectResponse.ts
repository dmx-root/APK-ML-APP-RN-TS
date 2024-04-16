import { OperationInformationInterface }    from "../../../interfaces/services/ml_api/ocrInterfaces";
import { statusApi }                        from "../../../interfaces/services/ml_api/apiResponse";
import { ConectionObjectResponse }          from "../conection/conectionObjectResponse";

//  Doc 
//  Este componente tiene la finalidad de establecer la conexión entre nuestro front y un servicio(REST_API_ML)
//  Por lo tanto el componente establece una interfaz intermedia que permite definir los parámetros entre la interacción del front y el servicio al cual solo se le enviará información  0
//  para este componente se hizo uso de la programación orientada a objetos (POO)

export class OcrObjectResponse extends ConectionObjectResponse{

    async OcrLoadNewData(uri:string, data:OperationInformationInterface){
        const response =(await (this.postData(uri,{
            startTime:      data.inicioOperacion,
            finishTime:     data.finOperacion,
            registerById:   data.registradoPorId,
            moduloId:       data.moduloId,
            unitsCant:      data.cantidadUnidades,
            colorId:        data.colorId,
            tallaId:        data.tallaId,
            opId:           data.op,
            categoryId:     data.categoriaId
        }))).data;

        const ocrProcessInterface:statusApi={
            statusCodeApi:      response.statusCodeApi,
            statusMessageApi:   response.statusMessageApi,
        }
        console.log(ocrProcessInterface,data)
        return ocrProcessInterface;
    }
}