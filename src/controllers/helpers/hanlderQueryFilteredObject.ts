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

