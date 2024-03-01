import {uri} from './config';

export const get_auth = `${uri}/api/ml/auth/login/`;
export const get_detail_op = `${uri}/api/ml/op/complete/`;
export const get_all_modulos = `${uri}/api/ml/modulo/getAll/`;
export const get_all_op_basic = `${uri}/api/ml/op/getAll`;
export const get_all_ocr_by_op = `${uri}/api/ml/ocr/getByOp/`;
export const get_all_ocr_process = `${uri}/api/ml/ocr/getAll/0`;
export const get_auth_operations = `${uri}/api/ml/auth/movil/operations/`;
export const get_all_ocr_by_modulo = `${uri}/api/ml/modulo/get/`;
export const get_all_op_production = `${uri}/api/ml/op/getAll/byUser/`;
export const get_all_ocr_production = `${uri}/api/ml/ocr/getAll/byUser/`;
export const get_employeers_by_modulo = `${uri}/api/ml/modulo/employee/get/`;