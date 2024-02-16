import { StatusBar }                    from 'expo-status-bar';
import { StyleSheet, Text, View }       from 'react-native';
import { createStackNavigator }         from '@react-navigation/stack';
import { NavigationContainer }          from '@react-navigation/native';
import { Login }                        from './src/views/login'
import { Home }                         from './src/views/home';
import { HomeOcr }                      from './src/views/homeOcr';
import { HomeOP }                       from './src/views/homeOp';
import { HomeModulos }                  from './src/views/homeModulo'
import { HomeEmployeer }                from './src/views/homeEmployeers'
import { Production } from './src/views/production';

const Stack=createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='homeOcr' component={HomeOcr} options={{headerShown:false}}/> */}
        <Stack.Screen name='production' component={Production} options={{headerShown:false}}/>
        {/* <Stack.Screen name='homeOp' component={HomeOP} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name='homeModulos' component={HomeModulos} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name='homeEmployeers' component={HomeEmployeer} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

