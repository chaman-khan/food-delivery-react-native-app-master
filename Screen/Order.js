import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import TopMenu from '../Component/TopMenu'
import FormButton from '../Component/FormButton'
const Order = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <StatusBar hidden={true}/>
            <TopMenu title='Order' onPress={()=>navigation.goBack()}/>
            <View style={{ alignItems: 'center', marginTop: 60 }}>
                <Image source={require('../Images/Order.png')} />
                <View style={{flexDirection:'row'}}>
                    <Image style={{marginRight:20}} source={require('../Images/circle1.png')} />
                    <Image style={{marginRight:-30}} source={require('../Images/circle1.png')} />
                </View>
                <Text style={myStyle.label}>No orders yet</Text>
                <Text style={{fontFamily: 'SF-Pro-Rounded-Regular'}}>Hit the orange button down</Text>
                <Text style={{fontFamily: 'SF-Pro-Rounded-Regular'}}>below to Create an order</Text>
            </View>
            <View style={{flex:1,justifyContent: 'flex-end',padding:20}}>
                <FormButton buttonTitle={'Start odering'} onPress={() => navigation.navigate('Wifi')} />
            </View>
        </View>
    )
}
export default Order
const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F9',
    },
    label: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000000',
        marginTop: 10,
        alignSelf: 'center',
        fontFamily: 'SF-Pro-Rounded-Semibold'
    },
    img2: {
        width: windowWidth / 7,
        height: windowHeight / 10,
        resizeMode: 'stretch',
        alignSelf: 'center',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: 30,
    },
})