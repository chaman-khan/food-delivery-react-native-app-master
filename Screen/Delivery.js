import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { RadioButton } from 'react-native-paper';
import FormButton from '../Component/FormButton'
import TopMenu from '../Component/TopMenu'
const Delivery = ({ navigation }) => {
    const [select, setSelect] = React.useState('door');
    return (
        <ScrollView contentContainerStyle={myStyle.container}>
            <StatusBar hidden={true} />
            <TopMenu title='Checkout' onPress={() => navigation.goBack()} />
            <Text style={{ marginLeft: 30, marginBottom: 10, color: 'black', fontFamily: 'SF-Pro-Rounded-Bold', fontSize: 25 }}>Delivery</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{ marginLeft: 30, color: 'black', fontFamily: 'SF-Pro-Rounded-Semibold', fontSize: 17, textAlign: 'left' }}>Address details</Text>
                <Text style={{ fontFamily: 'SF-Pro-Rounded-Regular', color: '#F47B0A', textAlign: 'right', fontSize: 15, position: 'relative', right: -110, top:0}}>Change</Text>
            </View>

            <View style={myStyle.view}>
                <Text style={{ paddingLeft: 15, paddingTop: 5, color: 'black', fontFamily: 'SF-Pro-Rounded-Semibold', fontSize: 17 }}>Marvis Kparobo</Text>
                <View style={{ borderWidth: 0.3, width: '90%', alignSelf: 'center', borderColor: 'gray' }}></View>
                <Text style={{ paddingLeft: 15, padding: 5, color: 'black', fontFamily: 'SF-Pro-Rounded-Regular', fontSize: 15 }}>Km 5 refinery road oppsite re public road, effurun, delta state</Text>
                <View style={{ borderWidth: 0.3, width: '90%', alignSelf: 'center', borderColor: 'gray' }}></View>
                <Text style={{ paddingLeft: 15, padding: 5, color: 'black', fontFamily: 'SF-Pro-Rounded-Regular', fontSize: 15 }}>+234 9011039271</Text>
            </View>

            <Text style={{ marginLeft: 30, color: 'black', fontFamily: 'SF-Pro-Rounded-Semibold', fontSize: 17 }}>Delivery method</Text>
            <View style={myStyle.view2}>
                <View style={{ flexDirection: 'row', height: '50%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="door" status={select === 'door' ? 'checked' : 'unchecked'} onPress={() => setSelect('door')}
                    />
                    <Text style={{ padding: 5, paddingTop: 2, color: 'black', fontFamily: 'SF-Pro-Rounded-Regular', fontSize: 17 }}>Door delivery</Text>
                </View>
                <View style={{ borderWidth: 0.3, width: '80%', alignSelf: 'center', borderColor: 'gray' }}></View>
                <View style={{ flexDirection: 'row', height: '50%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="pick" status={select === 'pick' ? 'checked' : 'unchecked'} onPress={() => setSelect('pick')}
                    />
                    <Text style={{ padding: 5, paddingTop: 2, color: 'black', fontFamily: 'SF-Pro-Rounded-Regular', fontSize: 17 }}>Pick up</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row',alignContent:'space-between'}}>
                <Text style={{fontFamily: 'SF-Pro-Rounded-Regular',marginLeft: 30, color: 'black', fontSize: 17 }}>Total</Text>
                <Text style={{fontFamily: 'SF-Pro-Rounded-Semibold',color: 'black', fontSize: 17, position: 'relative', right: -190 }}>23,000</Text>
            </View>
            <FormButton buttonTitle='Proceed to payment' onPress={() => navigation.navigate('AddToCart')} />
        </ScrollView>
    )
}
export default Delivery
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F8',
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 20
    },
    view: {
        width: windowWidth / 1.25,
        height: windowHeight / 4,
        padding: 12,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
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
    view2: {
        width: windowWidth / 1.25,
        alignSelf: 'center',
        height: windowHeight / 5.5,
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