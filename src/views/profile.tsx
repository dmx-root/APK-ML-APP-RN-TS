import {View,StyleSheet, Dimensions} from 'react-native';

const {height,width}=Dimensions.get('screen');

export function Profile(){
    return(
        <View style={profileStyle.profileContainer}>

        </View>
    )
}

const profileStyle=StyleSheet.create({
    profileContainer:{
        width,
        height
    }
})