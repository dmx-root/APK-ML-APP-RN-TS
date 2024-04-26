import { View,StyleSheet,TouchableOpacity, GestureResponderEvent} from 'react-native';

//  Doc 
// este elemento permite gestionar el redirecionamiento de vistas en la vista principal
// el componente recibe como parámetros de entrada:
// children: por medio de este se pasa el incono que representa el item
// state: esta variable nos permite determinar el estado de seleción del elemento
// handlerClic: nos permite pasar un manejador de eventos para el click como parámetro de entrada 

export function ItemNavigation({children,state, handlerClick}:{
    children:React.ReactElement,
    state:boolean,
    handlerClick:(event:GestureResponderEvent)=>void
}){
    return <TouchableOpacity onPress={handlerClick} style={state?[itemNavigationStyle.container,{backgroundColor:'#C7E5FD'}]:itemNavigationStyle.container}>
                <View>
                    {children}
                </View>
            </TouchableOpacity>
}

const itemNavigationStyle=StyleSheet.create({
    container:{
        width:70,
        height:70,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'
    },
});