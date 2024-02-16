import { StyleSheet, View } from 'react-native'

export function ViewContainer({children}:{
    children:React.ReactNode,
}){
    return <View style={viewContainerStyle.container}>
        <View style={viewContainerStyle.frame}>
            {children}
        </View>
    </View>

}

const viewContainerStyle=StyleSheet.create({
    container:{
        width:'98%',
        backgroundColor:'#FFF',
        borderRadius:5,
        padding:10,
        alignItems:'center',
        marginBottom:15
    },
    frame:{
        width:'98%',
        backgroundColor:'#C7E5FD',
        borderRadius:5,
        padding:10
    }
})