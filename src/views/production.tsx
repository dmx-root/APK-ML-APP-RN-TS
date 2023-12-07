import {View,StyleSheet, Dimensions} from 'react-native';

const {height,width}=Dimensions.get('screen');

export function Production(){
    return(
        <View style={productionStyle.productionContainer}>

        </View>
    )
}

const productionStyle=StyleSheet.create({
    productionContainer:{
        width,
        height
    }
})