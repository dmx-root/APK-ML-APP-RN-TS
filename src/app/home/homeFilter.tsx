import { FilterItem } from "../../interfaces/app/homeRoutes";

export const FILTER_ITEMS_OCR_HOME : FilterItem[] = [
    {id:0,label:'Todos'},
    {id:1,label:'Revisados'},
    {id:2,label:'Sin Revisar'},
    {id:3,label:'MOP'},
    {id:4,label:'MOB'},
    {id:5,label:'Pri.'},
    {id:6,label:'Seg.'},
    {id:7,label:'Anorm.'},
];

export const FILTER_ITEMS_OP_HOME : FilterItem[] = [
    {id:0,label:'Todas'},
    {id:1,label:'OP Brasier'},
    {id:2,label:'OP Panty'},
    {id:3,label:'Ordenes de Producción Finalizadas'}
]

export const FILTER_ITEMS_MODULOS_HOME : FilterItem[] = [
    {id:0,label:'Todos'},
    {id:1,label:'Módulos activos '},
    {id:2,label:'Módulos inactivos'}
]

export const FILTER_ITEMS_EMPLOYEERS_HOME : FilterItem[] = [
    {id:0,label:'Todos'},
    {id:1,label:'Operarios activos '},
    {id:2,label:'Operarios inactivos'}
]
