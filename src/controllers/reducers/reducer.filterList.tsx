import { ROUTES } from '../../endpoints/ml_api/ep.ml.api'
import { AxiosHeaders } from 'axios';


interface ObjectInterface{
    [key:string]: any
}

interface FilterListInterface{
    url:String,
    params?: ObjectInterface,
    headers?: AxiosHeaders
}

const mainOcr : FilterListInterface[] = [

]


const FETCH_DATA_FILTER = {
    ['MAIN_OCR']:[
        {
            url: ROUTES.api_ml_production_ocr_get_all
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_revise,
            params: {
                state: 1
            }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_revise,
            params: {
                state: 0,
            }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_op_type,
            params: {
                type: 'MOP',
            }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_op_type,
            params: {
                type: 'MOB',
            }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_category,
            params: {
                category: 1
            }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_category,
            params: {
                category: 2
            }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_anomaly,
        }
    ]
    
}
