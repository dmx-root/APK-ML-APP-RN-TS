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

export const useMainOcrParametersFetch : (user?:string) =>QueryObjectInterface[] = (user?:string)=>{
    const MAIN_OCR: QueryObjectInterface[] = [
        {
            url: ROUTES.get_ml_production_ocr_get_by_user,
            params:{user}
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_revise,
            params: { state: 1, user}
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_revise,
            params: { state: 0, user }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_op_type,
            params: { type: 'MOP', user }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_op_type,
            params: { type: 'MOB', user }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_category,
            params: { category: 1, user }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_category,
            params: { category: 2, user }
        },
        {
            url: ROUTES.api_ml_production_ocr_get_by_anomaly,
            params: {user}
        }
    
    ]

    return MAIN_OCR;
}

export const useMainOpParametersFetch : (user?:string) =>QueryObjectInterface[] = (user?:string)=>{
    const MAIN_OP: QueryObjectInterface[] = [
        {
            url:ROUTES.api_ml_production_op_get_by_user,
            params:{user, page:1, pageSize:5}
        },
        {
            url:ROUTES.api_ml_production_op_get_by_type,
            params:{type:'MOB',user}
        },
        {
            url:ROUTES.api_ml_production_op_get_by_type,
            params:{type:'MOP',user}
        },
        {
            url:ROUTES.api_ml_production_op_get_by_state,
            params:{state:1,user}
        }
    ]
    
    return MAIN_OP;
}

export const useMainModuloParametersFetch : (user?:string) =>QueryObjectInterface[] = (user?:string)=>{
    const MAIN_MODULO: QueryObjectInterface[] = [
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
    return MAIN_MODULO
}