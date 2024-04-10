import { FilterItem } from "../../interfaces/app/homeRoutes";

export const FILTER_ITEMS_OCR_HOME : FilterItem[] = [
    {id:1,label:'Todos'},
    {id:2,label:'Revisados'},
    {id:3,label:'Sin Revisar'},
    {id:4,label:'MOP'},
    {id:5,label:'MOB'},
    {id:6,label:'Pri.'},
    {id:7,label:'Seg.'},
];

export const FILTER_ITEMS_OP_HOME : FilterItem[] = [
    {id:1,label:'Todas'},
    {id:2,label:'OP Brasier'},
    {id:3,label:'OP Panty'},
    {id:4,label:'Ordenes de Producción Finalizadas'}
]

export const FILTER_ITEMS_MODULOS_HOME : FilterItem[] = [
    {id:1,label:'Todos'},
    {id:2,label:'Módulos activos '},
    {id:3,label:'Módulos inactivos'}
]

export const FILTER_ITEMS_EMPLOYEERS_HOME : FilterItem[] = [
    {id:1,label:'Todos'},
    {id:2,label:'Operarios activos '},
    {id:3,label:'Operarios inactivos'}
]
