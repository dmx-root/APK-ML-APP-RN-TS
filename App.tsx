import React                            from 'react'
import { MainContextProvider }          from './src/contexts/mainContext';
import { Root } from './root';

export default function App() {
    return <MainContextProvider>
                <Root/>
            </MainContextProvider>
}
