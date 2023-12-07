import {View,StyleSheet, Dimensions} from 'react-native';

const {height,width}=Dimensions.get('screen');

export function Login(){
    return(
        <View style={loginStyle.loginContainer}>

        </View>
    )
}

const loginStyle=StyleSheet.create({
    loginContainer:{
        width,
        height
    }
})