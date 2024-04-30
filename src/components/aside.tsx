import { useOperationHandler }                              from '../app/operations/operations';
import { useApiGetAuthOperations }                          from '../controllers/hooks/customHookGetAuthOperations';
import { useMainContext }                                   from '../contexts/mainContext';
import { AsideItem }                                        from './asideItem';
import { LoadingComponent }                                 from './loadingComponent';
import { EmptyComponent }                                   from './emptyComponent';
import { TouchableWithoutFeedback, View}                    from 'react-native'
import { ImageBackground, GestureResponderEvent, FlatList } from 'react-native'
import { StyleSheet, Dimensions }                           from 'react-native'

// Doc
// Aside es un tipo de modal que permite desplegar todas las operaciones del aplicativo (Para cada sesión)
// Este elemento tiene como parámetros de entrada:

const { width, height } = Dimensions.get('window');
const currentColorMain = '#44329C';   //azul oscuro

interface SetStateDispatchInterface {
    [key: string]: React.Dispatch<React.SetStateAction<boolean>>
}

export function Aside({ navigation, handlerClick, setActions }: {
    navigation: any,
    handlerClick: (event: GestureResponderEvent) => void;
    setActions: SetStateDispatchInterface
}) {

    const contextStorage = useMainContext();
    const { state } = useApiGetAuthOperations(contextStorage?.currentUser?.rolId || '');

    const { OPERATIONS_ITEMS } = useOperationHandler({
        navigation,
        setStateActions: setActions
    });

    return <TouchableWithoutFeedback onPress={handlerClick}>
        <View style={StyleAside.courtain}>
            <TouchableWithoutFeedback onPress={() => { }}>
                <View style={StyleAside.aside}>
                    <View style={StyleAside.headerAside}>
                        <ImageBackground
                            source={require('../public/img/transparentLogo.png')}
                            style={StyleAside.backgroundImage}
                            imageStyle={StyleAside.imageStyle}
                            blurRadius={8} />
                    </View>
                    <View style={StyleAside.bodyAside}>
                        {state.loading ?
                            <LoadingComponent label='Cargando lista de operaciones' /> :
                            state.data?.length === 0 || !state.data ?
                                <EmptyComponent label='No se encontraron operaciones disponibles' /> :
                                <FlatList renderItem={(item) =>
                                    <AsideItem
                                        label={item.item.operacionEtiqueta}
                                        handlerClick={OPERATIONS_ITEMS[item.item.operacionId].handlerClick}
                                        key={item.item.operacionId}>
                                        {OPERATIONS_ITEMS[item.item.operacionId].icon}
                                    </AsideItem>}
                                    data={contextStorage?.operations} />
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </TouchableWithoutFeedback>
}

const StyleAside = StyleSheet.create({
    aside: {
        height: height,
        width: width * 0.55,
        zIndex: 40,
        alignItems: 'center',
        backgroundColor: currentColorMain
    },
    courtain: {
        position: 'absolute',
        backgroundColor: '#00000070',
        width: width,
        height: height,
        zIndex: 30,
    }
    , headerAside: {
        width: '80%',
        height: '10%',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: '30%'
    },
    buttonMenu2: {
        position: 'absolute',
        zIndex: 40,
        elevation: height * 0.01,
        width: height * 0.07,
        height: height * 0.07,
        borderRadius: height * 0.01,
        backgroundColor: currentColorMain,
        left: '75%',
        top: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: height * 0.003,
        borderColor: '#FFF'
    },
    img: {
        alignSelf: 'center',
        flex: 1,
        resizeMode: 'repeat'
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        width: '100%', // Ajusta según tus necesidades
        height: '120%', // Ajusta según tus necesidades
        opacity: 1, // Puedes ajustar la opacidad si lo deseas
    },
    bodyAside: {
        width: '100%',
        height: '70%',
        paddingTop: '10%'
    },
    fieldOptionContainer: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    iconOptionContainer: {
        height: '100%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentOptionContainer: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    contentOptions: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: height * 0.02
    }
});
