import { StyleSheet, View, Text} from 'react-native';
import { Modal } from '../components/modal';
import { ModalContainer } from '../components/modalContainer';
import { ButtonFullWidth } from '../components/buttonFullWidth';

export function ModalProductionRegister(){
    return <Modal handlerClick={()=>{}}>
                <ModalContainer color='#FFF'>
                    <View style={prodRegister.container}>
                        <View style={prodRegister.row}>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>COLOR</Text>
                            </View>
                            <View style={prodRegister.column}></View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>EAN</Text>
                            </View>
                            <View style={prodRegister.column}></View>
                        </View>
                        <View style={prodRegister.row}>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>TALLA</Text>
                            </View>
                            <View style={prodRegister.column}></View>
                            <View style={prodRegister.column}>
                                <Text style={prodRegister.title}>UNIDADES</Text>
                            </View>
                            <View style={prodRegister.column}></View>
                        </View>
                        <View style={prodRegister.row}>
                            <View style={[prodRegister.column,{width:'50%'}]}>
                                <Text style={[prodRegister.title,{alignItems:'center'}]}>REGISTRO EAN</Text>
                            </View>
                            <View style={[prodRegister.column,{width:'50%'}]}></View>
                        </View>
                    </View>
                    <ButtonFullWidth color='#44329C' label='Cerrar' fontColor='#C7CCEC'/>
                </ModalContainer>
            </Modal>
}

const prodRegister=StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        marginBottom:20,
        // backgroundColor:'aqua'
    },
    row:{
        flexDirection:'row',
        height:55,
        width:'100%',
        // backgroundColor:'aqua',
        marginBottom:2

    },
    column:{
        height:'100%',
        width:'25%',
        borderColor:'#DDD',
        borderWidth:1,
        justifyContent:'center',
        // alignItems:'center',
        paddingLeft:20

    },
    title:{
        fontSize:15,
        color:'#777',
        fontWeight:'700',

    }

});