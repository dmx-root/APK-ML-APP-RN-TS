import {uri} from './config';

export const get_all_op_basic =                 `${uri}/api/ml/op/getAll`;
export const get_detail_op =                    `${uri}/api/ml/op/complete/`;
export const get_all_op_production =            `${uri}/api/ml/op/getAll`;
export const get_all_op_production_by_user =    `${uri}/api/ml/op/getAll/byUser/`;
export const get_all_ocr_by_op =                `${uri}/api/ml/ocr/getByOp/`;
export const get_all_ocr_production =           `${uri}/api/ml/ocr/getAll/byUser/`;
export const get_all_ocr_production_all =       `${uri}/api/ml/ocr/getAll/0`;
export const get_all_ocr_by_modulo =            `${uri}/api/ml/modulo/get/`;
export const get_all_modulos =                  `${uri}/api/ml/modulo/getAll/`;
export const get_employeers_by_modulo =         `${uri}/api/ml/modulo/employee/get/`;


export const get_auth_operations =              `${uri}/api/ml/auth/movil/operations/`;

export const post_ocr_data_process =            `${uri}/api/ml/ocr/register`;

// nuevos endpoints
//************************************************************************ */

export const api_ml_local_auth_get =            `${uri}/api/ml/auth/local/login`;
export const api_ml_local_auth_get_by_token =   `${uri}/api/ml/auth/local/auth-by-token/`;
export const api_ml_production_ocr_get_all =    `${uri}/api/ml/production/ocr/list/`;
export const api_ml_production_op_get_all =     `${uri}/api/ml/production/op/list/`;
export const api_ml_production_modulo_get_all = `${uri}/api/ml/production/modulo/list/`;