import { ROUTES } from "../../endpoints/ml_api/ep.ml.api";

interface QueryObjectInterface {
    url: string;
    params?: any;
    headers?: any
}

export const MAIN_OCR: QueryObjectInterface[] = [
    {
        url: ROUTES.api_ml_production_ocr_get_all
    },
    {
        url: ROUTES.api_ml_production_ocr_get_by_revise,
        params: { state: 1 }
    },
    {
        url: ROUTES.api_ml_production_ocr_get_by_revise,
        params: { state: 0 }
    },
    {
        url: ROUTES.api_ml_production_ocr_get_by_op_type,
        params: { type: 'MOP' }
    },
    {
        url: ROUTES.api_ml_production_ocr_get_by_op_type,
        params: { type: 'MOB' }
    },
    {
        url: ROUTES.api_ml_production_ocr_get_by_category,
        params: { category: 1 }
    },
    {
        url: ROUTES.api_ml_production_ocr_get_by_category,
        params: { category: 2 }
    },
    {
        url: ROUTES.api_ml_production_ocr_get_by_anomaly
    }

]

export const MAIN_OP: QueryObjectInterface[] = [
    {
        url:ROUTES.api_ml_production_op_get_all,
    },
    {
        url:ROUTES.api_ml_production_op_get_by_type,
        params:{type:'MOB'}
    },
    {
        url:ROUTES.api_ml_production_op_get_by_type,
        params:{type:'MOP'}
    },
    {
        url:ROUTES.api_ml_production_op_get_by_state,
        params:{state:1}
    }
]

export const MAIN_MODULO: QueryObjectInterface[] = [
    {
        url:ROUTES.api_ml_production_modulo_get_all
    },
    {
        url:ROUTES.api_ml_production_modulo_get_by_state+'1'
    },
    {
        url:ROUTES.api_ml_production_modulo_get_by_state+'0'
    }
]
