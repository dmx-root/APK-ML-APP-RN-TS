import { createStackNavigator }         from '@react-navigation/stack';
import React                            from 'react'
import { MainContextProvider }          from './src/contexts/mainContext';
import { Root } from './root';


const Stack=createStackNavigator();

export default function App() {
    return <MainContextProvider>
                <Root/>
            </MainContextProvider>
}
