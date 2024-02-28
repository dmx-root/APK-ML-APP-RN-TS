import { createStackNavigator }         from '@react-navigation/stack';
import { NavigationContainer }          from '@react-navigation/native';
import { accountNavigators }            from './src/app/navigators/accountNavigators';
import { SCREENS }                      from './src/app/screens/screens';
import { useMainContext }               from './src/contexts/mainContext';
import { RootStackParamList }           from './src/interfaces/screens/screensInterfaces';
import { account }                      from './src/interfaces/app/account';
import React, { useEffect, useState }   from 'react';

const Stack=createStackNavigator<RootStackParamList>();

export function Root() {

    const [account, setAccount] = useState<account>(accountNavigators['auth']);
    const storage = useMainContext();

    useEffect(()=>{

        storage?.account?
        setAccount(storage?.account):
        setAccount(accountNavigators['auth']);

    }, [storage?.account]);

    const ContextProvider = account.context ? account.context : React.Fragment;
    const initialRoute = account.initialRoute;
    const routes = account.routes;

    return  <ContextProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        {Object.keys(routes).map((route) => (
                            <Stack.Screen
                                key={route}
                                name={routes[route]}
                                component={SCREENS[routes[route]]}
                                options={{headerShown:false}}
                            />
                        ))}
                    </Stack.Navigator>
                </NavigationContainer>
            </ContextProvider>
}
