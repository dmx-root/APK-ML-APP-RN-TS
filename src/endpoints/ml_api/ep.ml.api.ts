import {uri} from './config'

export const ROUTES = {
    api_ml_local_auth_get :                    `${uri}/api/ml/auth/local/login`,
    api_ml_local_auth_get_by_token :           `${uri}/api/ml/auth/local/auth-by-token/`,
    api_ml_sesion_mobile_get_operations :      `${uri}/api/ml/sesion/mobile/operation/`,
    api_ml_sesion_mobile_get_anomaly :         `${uri}/api/ml/sesion/mobile/anomaly/list`,
    api_ml_production_ocr_get_all :            `${uri}/api/ml/production/ocr/list/`,
    api_ml_production_op_get_all :             `${uri}/api/ml/production/op/list/`,
    api_ml_production_modulo_get_all :         `${uri}/api/ml/production/modulo/list/`,
    api_ml_production_op_details_get :         `${uri}/api/ml/production/op/list-details/`,
    api_ml_production_ocr_get_by_op :          `${uri}/api/ml/production/ocr/list-filter-by-op-detail/`,
    api_ml_production_ocr_get_by_modulo :      `${uri}/api/ml/production/ocr/list-filter-by-modulo/`,
    get_ml_production_ocr_get_by_user :        `${uri}/api/ml/production/ocr/list-filter-by-user/`,
    api_ml_production_ocr_get_by_revise :      `${uri}/api/ml/production/ocr/list-filter-by-revise`,
    api_ml_production_ocr_get_by_op_type :     `${uri}/api/ml/production/ocr/list-filter-by-op-type`,
    api_ml_production_ocr_get_by_category :    `${uri}/api/ml/production/ocr/list-filter-by-category`,
    api_ml_production_ocr_get_by_anomaly :     `${uri}/api/ml/production/ocr/list-filter-by-event/`,
    api_ml_production_op_get_by_type :         `${uri}/api/ml/production/op/list-filter-by-type`,
    api_ml_production_op_get_by_user :         `${uri}/api/ml/production/op/list-filter-by-user`,
    api_ml_production_op_get_by_state :        `${uri}/api/ml/production/op/list-filter-by-state`,
    api_ml_production_modulo_get_by_state :    `${uri}/api/ml/production/modulo/list-filter-by-state/`,
    api_ml_production_employees_list :         `${uri}/api/ml/production/modulo/list-all-employees`,
    api_ml_production_employees_by_modulo :    `${uri}/api/ml/production/modulo/list-filter-employee/`,
    api_ml_production_ocr_post :               `${uri}/api/ml/production/ocr/element/`,
    api_ml_production_ocr_segundas_post :      `${uri}/api/ml/production/ocr/segundas/`,
    api_ml_production_op_open :                `${uri}/api/ml/production/op/element/`,
    api_ml_production_ocr_revise :             `${uri}/api/ml/production/ocr/element/`
}