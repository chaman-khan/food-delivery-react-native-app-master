import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import FormButton from '../Component/FormButton'
const Wifi = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <StatusBar  hidden={true}/>
            <View style={{ alignItems: 'center', marginBottom: 30}}>
                <Image source={require('../Images/Wifi.png')} />
                <Text style={myStyle.label}>No internet Connection</Text>
                <Text style={{fontFamily: 'SF-Pro-Rounded-Regular'}}>Your internet connection is currently</Text>
                <Text style={{fontFamily: 'SF-Pro-Rounded-Regular'}}>not available please check or try again.</Text>
            </View>
            <FormButton buttonTitle={'Try Again'} onPress={()=>navigation.navigate('MyOffer')}/>
        </View>
    )
}
export default Wifi
const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F9',
        justifyContent:'center',
        alignItems:'center'
    },
    label: {
        fontSize: 22,
        color: '#000000',
        alignSelf: 'center',
        fontFamily:'SF-Pro-Rounded-Semibold'
    },
    head: {
        fontFamily: 'SF Pro Rounded',
        fontWeight: '800',
        fontSize: RFPercentage(8),
        color: '#FFFFFF',
        alignSelf: 'center'
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