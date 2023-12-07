import {View,StyleSheet, Dimensions} from 'react-native';

const {height,width}=Dimensions.get('screen');

export function Home(){
    return(
        <View style={homeStyle.homeContainer}>

        </View>
    )
}

const homeStyle=StyleSheet.create({
    homeContainer:{
        width,
        height
    }
})