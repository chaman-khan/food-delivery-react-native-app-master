import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { RadioButton } from 'react-native-paper';
import FormButton from '../Component/FormButton'
import TopMenu from '../Component/TopMenu'
const MyProfile = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    React.useEffect(() => {
        navigation.setOptions({
          headerShown:false,
        });
      }, [navigation]);
    return (
        <ScrollView contentContainerStyle={myStyle.container}>
            <StatusBar hidden={true} />
            <TopMenu title='My Profile' onPress={() => navigation.goBack()} />
            <Text style={{ marginLeft: 30, color: 'black', fontFamily:'SF-Pro-Rounded-Bold',fontSize: 17 }}>Information</Text>
            <View style={myStyle.semiView}>
                <Image style={myStyle.img2} source={require('../Images/Rectangle6.png')} />
                <View style={{ flexDirection: 'column',padding:15}}>
                    <Text style={{ fontFamily: 'SF-Pro-Rounded-Bold',color: '#000000', fontSize: 17 }}>Marvis Ighedosa</Text>
                    <Text style={{ fontFamily: 'SF-Pro-Rounded-Regular'}}>dosamarvis@gmail.com</Text>
                    <Text style={{ paddingRight: 60,fontFamily: 'SF-Pro-Rounded-Regular'}}>No 15 uti street off ovie palace road effurun delta state</Text>
                </View>
                <TouchableOpacity style={{ position: 'absolute', right: 15, top: 15 }} onPress={()=>navigation.navigate('PersonalDetail')}>
                    <Image source={require('../Images/pencile.png')} />
                </TouchableOpacity>
            </View>

            <Text style={{ marginLeft: 30, color: 'black', fontSize: 17,fontFamily:'SF-Pro-Rounded-Bold'}}>Payment method</Text>
            <View style={myStyle.view}>
                <View style={{ flexDirection: 'row', height: '30%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="first" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')}
                    />
                    <View style={{ justifyContent: 'center', height: '100%', width: '15%', borderRadius: 10, backgroundColor: '#F47B0A' }}>
                        <Image style={{ alignSelf: 'center' }} source={require('../Images/Vector2.png')} />
                    </View>
                    <Text style={{ margin: 5, color: 'black',fontFamily:'SF-Pro-Rounded-Regular', fontSize: 17 }}>Card</Text>
                </View>
                <View style={{ borderWidth: 0.3, width: '80%', alignSelf: 'center', borderColor: 'gray' }}></View>
                <View style={{ flexDirection: 'row', height: '30%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="second" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')}
                    />
                    <View style={{ justifyContent: 'center', height: '100%', width: '15%', borderRadius: 10, backgroundColor: '#EB4796' }}>
                        <Image style={{ alignSelf: 'center' }} source={require('../Images/bank.png')} />
                    </View>
                    <Text style={{ margin: 5, color: 'black',fontFamily:'SF-Pro-Rounded-Regular', fontSize: 17 }}>Bank account</Text>
                </View>
                <View style={{ borderWidth: 0.3, width: '80%', alignSelf: 'center', borderColor: 'gray' }}></View>
                <View style={{ flexDirection: 'row', height: '30%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="third" status={checked === 'third' ? 'checked' : 'unchecked'} onPress={() => setChecked('third')}
                    />

                    <View style={{ justifyContent: 'center', height: '100%', width: '15%', borderRadius: 10, backgroundColor: '#0038FF' }}>
                        <Image style={{ alignSelf: 'center' }} source={require('../Images/paypal.png')} />
                    </View>
                    <Text style={{ margin: 5, color: 'black', fontFamily:'SF-Pro-Rounded-Regular',fontSize: 17 }}>Paypal</Text>
                </View>
            </View>
            <FormButton buttonTitle='Update' onPress={() => navigation.navigate('Payment')} />
        </ScrollView>
    )
}
export default MyProfile
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
        height: windowHeight / 4.4,
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
        width: windowWidth / 7,
        height: windowHeight / 10,
        resizeMode: 'stretch',
        alignSelf: 'center',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: 30,
    },
})