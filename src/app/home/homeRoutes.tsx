import { FILTER_ITEMS_EMPLOYEERS_HOME, 
        FILTER_ITEMS_MODULOS_HOME, 
        FILTER_ITEMS_OCR_HOME, 
        FILTER_ITEMS_OP_HOME }       from './homeFilter';
import { EditICon }                  from '../../public/icons/editIcon';
import { ModuloRequestInterface }    from '../../services/ml_api/request/request.interface.modulo';
import { ROUTES }                    from '../../endpoints/ml_api/ep.ml.api';
import { useApiGetData }             from '../../controllers/reducers/reducer.fetchData';
import { OcrRequestInterface }       from '../../services/ml_api/request/request.interface.ocr';
import { EmployeerIcon }             from '../../public/icons/employeerIcon';
import { Item }                      from '../../interfaces/app/homeRoutes';
import { ModuloIcon }                from '../../public/icons/moduloIcon';
import { ButtonHome }                from '../../components/buttonHome';
import { PlusIcon }                  from '../../public/icons/plusIcon';
import { OcrIcon }                   from '../../public/icons/ocrIcon';
import { OpIcon }                    from '../../public/icons/opIcon';
import { OpRequestInterface }        from '../../services/ml_api/request/request.interface.op';
import { useApiGetDataFilter }       from '../../controllers/reducers/reducer.fetchDataFilter';
import { useMainOcrParametersFetch } from '../../controllers/helpers/hanlderQueryFilteredObject';
import { useMainOpParametersFetch } from '../../controllers/helpers/hanlderQueryFilteredObject';
import { useMainModuloParametersFetch } from '../../controllers/helpers/hanlderQueryFilteredObject';
import { GestureResponderEvent }     from 'react-native';
import React                         from 'react';

// Doc
//

export const ADMIN_HOME_ROUTES: Item[] = [
    {
        id: 1,

        item: 'HomeOcr',

        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },

        icon: <OcrIcon color='#777' size={35} width={2} />,

        actionObject: (
            handlerClick: (event: GestureResponderEvent) => void
        ) => {
            return <ButtonHome label='Nueva OCR' handlerClick={handlerClick}>
                <PlusIcon color="#777" size={70} width={1} />
            </ButtonHome>
        },

        mainFetch: (documentId?: string) => {
            return useApiGetData(
                new OcrRequestInterface({
                    url:ROUTES.api_ml_production_ocr_get_all
                })
            );
        },
        filterList: FILTER_ITEMS_OCR_HOME
    },
    {
        id: 2,
        item: 'HomeOp',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OpIcon color='#777' size={35} width={2} />,
        actionObject: (
            handlerClick: (event: GestureResponderEvent) => void
        ) => {
            return <ButtonHome label='Abrir OP' handlerClick={handlerClick}>
                <PlusIcon color="#777" size={70} width={1} />
            </ButtonHome>
        },
        mainFetch: () => {
            const fetch = new OpRequestInterface({
                url:ROUTES.api_ml_production_op_get_all
            });
            
            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OP_HOME
    },
    {
        id: 3,
        item: 'HomeModulos',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <ModuloIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <ButtonHome label='Ver Módulos' handlerClick={handlerClick}>
                <ModuloIcon color="#777" size={35} width={1.5} />
            </ButtonHome>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new ModuloRequestInterface({
                url: ROUTES.api_ml_production_modulo_get_all
            });

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_MODULOS_HOME
    },
    {
        id: 4,
        item: 'HomeEmployeers',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <EmployeerIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <ButtonHome label='Adm Operarios' handlerClick={handlerClick}>
                <EmployeerIcon color="#777" size={35} width={1.5} />
            </ButtonHome>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new ModuloRequestInterface({
                url: ROUTES.api_ml_production_modulo_get_all
            });

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_EMPLOYEERS_HOME
    },
    {
        id:5,
        item:'HomeRevise',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <EditICon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new ModuloRequestInterface({
                url: ROUTES.api_ml_production_modulo_get_all
            });

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_MODULOS_HOME
    }
];

export const PROCESSES_HOME_ROUTES: Item[] = [
    {
        id: 1,
        item: 'HomeOcr',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OcrIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <ButtonHome label='' handlerClick={handlerClick}>
                <PlusIcon color="#777" size={70} width={1} />
            </ButtonHome>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new OcrRequestInterface({
                url:ROUTES.api_ml_production_ocr_get_all
            })

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OCR_HOME
    },
    {
        id: 2,
        item: 'HomeOp',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OpIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <ButtonHome label='' handlerClick={handlerClick}>
                <PlusIcon color="#777" size={70} width={1} />
            </ButtonHome>
        },
        mainFetch: () => {
            const fetch = new OpRequestInterface({
                url:ROUTES.api_ml_production_op_get_all
            });
            
            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OCR_HOME
    },
    {
        id: 3,
        item: 'HomeModulos',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <ModuloIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <ButtonHome label='' handlerClick={handlerClick}>
                <ModuloIcon color="#777" size={35} width={1.5} />
            </ButtonHome>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new ModuloRequestInterface({
                url: ROUTES.api_ml_production_modulo_get_all
            });

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OCR_HOME
    },
    {
        id: 4,
        item: 'HomeEmployeers',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <EmployeerIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <ButtonHome label='' handlerClick={handlerClick}>
                <EmployeerIcon color="#777" size={35} width={1.5} />
            </ButtonHome>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new ModuloRequestInterface({
                url: ROUTES.api_ml_production_modulo_get_all
            });

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OCR_HOME
    },
    {
        id: 5,
        item:'HomeRevise',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <EditICon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new ModuloRequestInterface({
                url: ROUTES.api_ml_production_modulo_get_all
            });

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_MODULOS_HOME
    }
];

export const PLANTA_HOME_ROUTES: Item[] = [
    {
        id: 1,
        item: 'HomeOcr',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OcrIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <ButtonHome label='Nueva OCR' handlerClick={handlerClick}>
                <PlusIcon color="#777" size={70} width={1} />
            </ButtonHome>
        },
        mainFetch: (documentId?: string) => {
            const ListParametersFetch = useMainOcrParametersFetch(documentId);
            return useApiGetDataFilter({
                queryChain:ListParametersFetch,
                ApiConnection: new OcrRequestInterface({})
            });
        },
        filterList: FILTER_ITEMS_OCR_HOME
    },
    {
        id: 2,
        item: 'HomeOp',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OpIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <ButtonHome label='Nueva OCR' handlerClick={handlerClick}>
                <PlusIcon color="#777" size={70} width={1} />
            </ButtonHome>
        }
        ,
        mainFetch: (documentId?: string) => {
            const ListParametersFetch = useMainOpParametersFetch(documentId);
            return useApiGetDataFilter({
                queryChain:ListParametersFetch,
                ApiConnection: new OpRequestInterface({})
            });
        },
        filterList: FILTER_ITEMS_OP_HOME
    },
    {
        id: 3,
        item: 'HomeModulos',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <ModuloIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: (documentId?: string) => {
            const ListParametersFetch = useMainModuloParametersFetch(documentId);
            return useApiGetDataFilter({
                queryChain:ListParametersFetch,
                ApiConnection: new ModuloRequestInterface({})
            });
        },
        filterList: FILTER_ITEMS_MODULOS_HOME
    }
];

export const FACTURACION_HOME_ROUTES: Item[] = [
    {
        id: 1,
        item: 'HomeOcr',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OcrIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new OcrRequestInterface({
                url:ROUTES.api_ml_production_ocr_get_all
            })

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OCR_HOME
    },
    {
        id: 2,
        item: 'HomeOp',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OpIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: () => {
            const fetch = new OpRequestInterface({
                url:ROUTES.api_ml_production_op_get_all
            });
            
            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OP_HOME
    },
    {
        id: 3,
        item:'HomeRevise',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <EditICon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new ModuloRequestInterface({
                url: ROUTES.api_ml_production_modulo_get_all
            });

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_MODULOS_HOME
    }
];

export const GUEST_HOME_ROUTES: Item[] = [
    {
        id: 1,
        item: 'HomeOcr',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OcrIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new OcrRequestInterface({
                url:ROUTES.api_ml_production_ocr_get_all
            })

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OCR_HOME
    },
    {
        id: 2,
        item: 'HomeOp',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <OpIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: () => {
            const fetch = new OpRequestInterface({
                url:ROUTES.api_ml_production_op_get_all
            });
            
            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_OP_HOME
    },
    {
        id: 3,
        item: 'HomeModulos',
        NAVIGATE: (view: string, dispatch: any) => { dispatch.navigate(view) },
        icon: <ModuloIcon color='#777' size={35} width={2} />,
        actionObject: (handlerClick: (event: GestureResponderEvent) => void) => {
            return <></>
        },
        mainFetch: (documentId?: string) => {
            const fetch = new ModuloRequestInterface({
                url: ROUTES.api_ml_production_modulo_get_all
            });

            return useApiGetData(fetch);
        },
        filterList: FILTER_ITEMS_MODULOS_HOME
    }
]; 