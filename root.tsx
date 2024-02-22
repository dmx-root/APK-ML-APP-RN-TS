import { createStackNavigator }         from '@react-navigation/stack';
import { NavigationContainer }          from '@react-navigation/native';
import { accountNavigators }            from './src/structure/accountNavigators';
import { SCREENS }                      from './src/structure/screens';
import { useMainContext }               from './src/contexts/mainContext';
import React, { useEffect, useState }   from 'react'

interface account{
    id:number,
    initialRoute:string,
    routes:any, 
    context:any
}

const Stack=createStackNavigator();

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
                                name={route}
                                component={SCREENS[routes[route]]}
                                options={{headerShown:false}}
                            />
                        ))}
                    </Stack.Navigator>
                </NavigationContainer>
            </ContextProvider>
}
