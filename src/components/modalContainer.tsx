import { View, StyleSheet, Dimensions } from 'react-native'

const {height,width} = Dimensions.get('window');

export function ModalContainer({children,color}:{
    children:React.ReactNode,
    color:string,
    // width:string
}){
    return <View style={[modalContainerStyle.modalContainer,{backgroundColor:color}]}>
                <View style={modalContainerStyle.frame}>
                    {children}
                </View>
            </View>
}

const modalContainerStyle=StyleSheet.create({
    modalContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:25,
        borderRadius:5,
        width:width*0.7,
        marginBottom:25,

    },
    frame:{
        width:'100%'
    }
});