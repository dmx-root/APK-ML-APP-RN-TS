import { View, StyleSheet, Dimensions, TouchableWithoutFeedback, GestureResponderEvent } from "react-native";

// Doc 
// Este elemento esta diseñado para desplegar un ventana(Modal) en la cual su tamaño no está definido 
// El tamaño del modal está determinado por su componente hijo, de manera que este elemento se adapta al tamaño de su componente hijo
// Este componente tiene la finalidad de definir los eventos del modal que se construya a partir de este, herando estas funcionalidades a sus componentes hijos
// por ende este componente tiene la unica responsabilidad de gestionar los eventos 
// El elemento recibe los siguientes parámetros:
// children: elemento el cual heredará las funcionalidades del modal 
// handlerClick: evento que se dispára al hacer click fuera del modal(cerrar modal)

const {width,height} =Dimensions.get('window')

export function Modal({children,handlerClick}:{
    children:React.ReactNode,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <TouchableWithoutFeedback onPress={handlerClick}>
                <View style={modalStyle.cortain}>
                    <TouchableWithoutFeedback>
                        <View style={modalStyle.modal}>
                            <View>
                                {children}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
}

const modalStyle= StyleSheet.create({
    cortain:{
        position:'absolute',
        backgroundColor:'#00000070',
        width:width,
        height:height,
        zIndex:30,
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
        backgroundColor:'#FFF',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:25,
        paddingRight:25,
        paddingTop:25,

    }
})