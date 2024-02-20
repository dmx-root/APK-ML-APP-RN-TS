import {Dimensions, StyleSheet, View} from 'react-native'

// Doc 
// Este componente está diseñado con la finalidad de renderizar una lista de elementos en un modal
// Ya que el modal es un elemento el cual no tine un tamaño predefinido, el tamaño del modal lo dará este elemento a la hopra de renderizar la lista de componentes 
// Recibe como parpametro de entrada la lista de elementos los cuales serán renderizados 

const {width} = Dimensions.get('window');

export function ModalContainerList({children}:{
    children:React.ReactNode
}){
    return <View style={modalContainerListStyle.container}>
        {children}
    </View>
}

const modalContainerListStyle=StyleSheet.create({
    container:{
        width:width*0.8,
        height:700,
        alignItems:'center',
        // backgroundColor:'aqua',
        marginBottom:30
    }
});