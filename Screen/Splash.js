import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Splash = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <StatusBar hidden={true} />
            <Image style={{height:'100%',width:"100%",resizeMode:'stretch'}} source={require('../Images/s.png')} />
            <TouchableOpacity style={[myStyle.semiView,{position:'absolute',top:10,left:12}]} onPress={() => navigation.navigate('MyProfile')}>
                <Image style={{ alignSelf: 'center' }} source={require('../Images/Bella-Olonje-logo-1111.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[myStyle.btn,{position:'absolute',bottom:10}]} onPress={() => navigation.replace('Login')}>
                <Text style={myStyle.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Splash
const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FA4A0C'
    },
    semiView: {
        height: windowHeight / 8.5,
        width: windowWidth / 5.5,
        borderRadius: 150,
        justifyContent: 'center',
        margin: 15,
        marginBottom: 5,
        marginLeft: 30,
        backgroundColor: '#FFFFFF'
    },
    head: {
        fontSize: RFPercentage(7.5),
        color: '#FFFFFF',
        marginLeft: 30,
        fontFamily: 'SF-Pro-Rounded-Heavy'
    },
    btn: {
        width: windowWidth / 1.25,
        height: windowHeight / 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnText: {
        alignSelf: 'center',
        color: '#FF460A',
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'SF-Pro-Rounded-Bold'
    },
    img: {
        width: windowWidth / 1.4,
        resizeMode: 'stretch',
        height: windowHeight /2.1,
    },
    img2: {
        width: windowWidth / 2.6,
        resizeMode: 'stretch',
        height: windowHeight / 2.7,
        position: 'relative',
        top: 40,
        right:35
    },
})







