import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import FormButton from '../Component/FormButton'
import FormInput from '../Component/FormInput'
import TopMenu from '../Component/TopMenu'
const PersonalDetail = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
          headerShown:false,
        });
      }, [navigation]);
    return (
        <ScrollView contentContainerStyle={myStyle.container}>
            <StatusBar hidden={true} />
            <TopMenu title='My Profile' onPress={() => navigation.goBack()} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginLeft: 30, color: 'black', fontFamily: 'SF-Pro-Rounded-Bold', fontSize: 23 }}>My profile</Text>
                <Text style={{  fontFamily: 'SF-Pro-Rounded-Regular',color: '#F47B0A', fontSize: 15, position: 'relative', right:-120,top:8}}>Change</Text>
            </View>
            <View style={myStyle.semiView}>
                <Image style={myStyle.img2} source={require('../Images/Rectangle6.png')} />
                <View style={{ flexDirection: 'column', padding: 16 }}>
                    <Text style={{ fontFamily: 'SF-Pro-Rounded-Bold', color: '#000000', fontSize: 17 }}>Marvis Ighedosa</Text>
                    <View style={{borderWidth: 0.3, width: '70%', borderColor: 'gray', marginTop: 5 }}></View>
                    <Text style={{fontFamily: 'SF-Pro-Rounded-Regular' }}>+234 9011039271</Text>
                    <View style={{borderWidth: 0.3, width: '70%', borderColor: 'gray', marginTop: 5 }}></View>
                    <Text style={{ paddingRight:60, fontFamily: 'SF-Pro-Rounded-Regular' }}>No 15 uti street off ovie palace road effurun delta state</Text>
                </View>
            </View>
            <FormInput placeholder='Orders' />
            <FormInput placeholder='Pending reviews' />
            <FormInput placeholder='Faq' />
            <FormInput placeholder='Help' />
            <FormButton buttonTitle='Update' onPress={() => navigation.navigate('History')} />
        </ScrollView>
    )
}
export default PersonalDetail
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F8',
    },
    input: {
        width: windowWidth / 1.1,
        borderBottomWidth: 1,
        color: '#000000',
        fontWeight: 'bold'
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 20
    },
    view: {
        width: windowWidth / 1.25,
        height: windowHeight / 3,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        margin: 10,
        shadowColor: "#F2F2F2",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    semiView: {
        width: windowWidth / 1.25,
        height: windowHeight / 4,
        margin: 10,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 20,
        shadowColor: "#F2F2F2",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    head: {
        fontFamily: 'SF Pro Rounded',
        fontWeight: '800',
        fontSize: RFPercentage(8),
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    btn: {
        width: windowWidth / 1.1,
        height: windowHeight / 10,
        marginTop: 10,
        backgroundColor: '#FA4A0C',
        borderRadius: 150,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnText: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600'
    },
    img2: {
        width: windowWidth / 6,
        height: windowHeight / 6.5,
        resizeMode: 'stretch',
        marginLeft: 10,
        marginTop: 20,
    },
})