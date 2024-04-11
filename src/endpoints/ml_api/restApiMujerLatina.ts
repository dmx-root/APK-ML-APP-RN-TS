import {uri} from './config';

export const post_ocr_data_process =            `${uri}/api/ml/ocr/register`;

// nuevos endpoints
//************************************************************************ */

export const api_ml_local_auth_get =                `${uri}/api/ml/auth/local/login`;
export const api_ml_local_auth_get_by_token =       `${uri}/api/ml/auth/local/auth-by-token/`;
export const api_ml_production_ocr_get_all =        `${uri}/api/ml/production/ocr/list/`;
export const api_ml_production_op_get_all =         `${uri}/api/ml/production/op/list/`;
export const api_ml_production_modulo_get_all =     `${uri}/api/ml/production/modulo/list/`;
export const api_ml_production_op_details_get =     `${uri}/api/ml/production/op/list-details/`;
export const api_ml_production_ocr_get_by_op =      `${uri}/api/ml/production/ocr/list-filter-by-op-detail/`;
export const api_ml_production_ocr_get_by_modulo =  `${uri}/api/ml/production/ocr/list-filter-by-modulo/`;
export const get_ml_production_ocr_get_by_user =    `${uri}/api/ml/production/ocr/list-filter-by-user/`;
export const api_ml_sesion_mobile_get_operations =  `${uri}/api/ml/sesion/mobile/operation/`;

export const api_ml_production_ocr_get_by_revise =      `${uri}/api/ml/production/ocr/list-filter-by-revise`;
export const api_ml_production_ocr_get_by_op_type =     `${uri}/api/ml/production/ocr/list-filter-by-op-type`;
export const api_ml_production_ocr_get_by_category =    `${uri}/api/ml/production/ocr/list-filter-by-category`;
export const api_ml_production_op_get_by_type=          `${uri}/api/ml/production/op/list-filter-by-type`;
export const api_ml_production_op_get_by_user =         `${uri}/api/ml/production/op/list-filter-by-user`;
export const api_ml_production_op_get_by_state =        `${uri}/api/ml/production/op/list-filter-by-state`;
export const api_ml_production_modulo_get_by_state =    `${uri}/api/ml/production/modulo/list-filter-by-state/`;
export const api_ml_production_employees_list =         `${uri}/api/ml/production/modulo/list-all-employees`;
