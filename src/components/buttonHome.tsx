import { GestureResponderEvent, TouchableOpacity,Text, StyleSheet, Dimensions } from "react-native"

// Doc 
// Este componente tiene como finalidad actuar como disparador de eventos dependiendo de la vista en la que sea renderizado 
// Sus usos más comunes pueden ser para crear o registrar información, para integrar un nuevo operario, para revisar registros, etc.
// Recibe como parámetros de entrada:
// children: Recibe un elemento hijo como prop, el cual es el icono que quiere ser renderizado en el boton
// label: Mensaje que quiere que se imprima sobre el boton, esto para dar mas información sobre el evento 
// handlerClick: manejador de evento, el cual es un callback que se ejecutará al momento de ser presionado el botón

const {height } = Dimensions.get('window');
export function ButtonHome({children,label,handlerClick}:{
    children:React.ReactElement,
    label: String,
    handlerClick:(event:GestureResponderEvent)=>void 
}){
    return <TouchableOpacity style={buttonStyle.buttonOCR} onPress={handlerClick}>
                {children}
                <Text style={{color:'#777',fontSize:15,fontWeight:'500'}}>{label}</Text>
            </TouchableOpacity>
}

const buttonStyle = StyleSheet.create({
    buttonOCR:{
        position:'absolute',
        zIndex:20,
        height:50,
        width:160,
        right:0,
        bottom:0,
        marginRight:'5%',
        marginBottom:'5%',
        borderRadius:25,
        backgroundColor:'#C7E5FD',
        elevation:height*0.006,
        flexDirection:'row',
        paddingLeft:8,
        alignItems:'center'
    },
})