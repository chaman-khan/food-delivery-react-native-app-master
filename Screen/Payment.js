import { View, Text, Image, StyleSheet, StatusBar, Modal, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { RadioButton } from 'react-native-paper';
import FormButton from '../Component/FormButton'
import TopMenu from '../Component/TopMenu'
const Payment = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    const [select, setSelect] = React.useState('door');
    const [modalVisible, setModalVisible] = useState(false);
    const clickHandle=()=>{
        setModalVisible(!modalVisible)
        navigation.navigate('Delivery');
    }
    return (
        <ScrollView contentContainerStyle={myStyle.container}>
            <StatusBar hidden={true} />
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={myStyle.centeredView}>
                    <View style={myStyle.modalView}>
                        <View style={{flex:1,backgroundColor:'#EDEDED',borderTopLeftRadius:30,borderTopRightRadius:30}}>
                            <Text style={[myStyle.modalText,{marginLeft:30,paddingTop:15,fontSize:20,fontFamily:'Poppins-Medium'}]}>Please note</Text>
                        </View>
                        <View style={{flex:3,backgroundColor:'#FFFFFF',padding:15,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
                            <Text style={myStyle.modalText}>Delivery to Mainland</Text>
                            <Text style={myStyle.modalText2}> N1000 - N2000</Text>
                            <View style={{ borderWidth: 0.3, width: '80%', alignSelf: 'center', borderColor: 'gray' }}></View>
                            <Text style={myStyle.modalText}>Delivery to island</Text>
                            <Text style={myStyle.modalText2}>N2000 - N3000</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'baseline'}}>
                                <TouchableOpacity style={{marginLeft:20}} onPress={()=>setModalVisible(!modalVisible)}>
                                    <Text style={{fontSize:17,fontFamily:'Poppins-SemiBold'}}>Cancle</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderRadius: 30, justifyContent: 'center', backgroundColor: '#FA4A0C', width: '48%', height: '65%',marginLeft:30}} onPress={()=>clickHandle()}>
                                    <Text style={{fontFamily: 'SF-Pro-Rounded-Semibold',color: '#FFFFFF', alignSelf: 'center' }}>Proceed</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
            <TopMenu title='Checkout' onPress={() => navigation.goBack()} />
            <Text style={{ marginLeft: 30, marginBottom: 10, color: 'black',fontFamily: 'SF-Pro-Rounded-Bold',fontSize: 26 }}>Payment</Text>
            <Text style={{ marginLeft: 30, color: 'black',fontFamily: 'SF-Pro-Rounded-Semibold', fontSize: 17, textAlign: 'left' }}>Payment method</Text>
            <View style={myStyle.view}>
                <View style={{ flexDirection: 'row', height: '40%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="first" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')}
                    />
                    <View style={{ justifyContent: 'center', height: '100%', width: '18%', borderRadius: 10, backgroundColor: '#F47B0A' }}>
                        <Image style={{ alignSelf: 'center' }} source={require('../Images/Vector2.png')} />
                    </View>
                    <Text style={{ margin: 5, color: 'black',fontFamily: 'SF-Pro-Rounded-Regular', fontSize: 17 }}>Card</Text>
                </View>
                <View style={{ borderWidth: 0.3, width: '80%', alignSelf: 'center', borderColor: 'gray' }}></View>
                <View style={{ flexDirection: 'row', height: '40%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="second" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')}
                    />
                    <View style={{ justifyContent: 'center', height: '100%', width: '18%', borderRadius: 10, backgroundColor: '#EB4796' }}>
                        <Image style={{ alignSelf: 'center' }} source={require('../Images/bank.png')} />
                    </View>
                    <Text style={{ margin: 5, color: 'black',fontFamily: 'SF-Pro-Rounded-Regular', fontSize: 17 }}>Bank account</Text>
                </View>
            </View>

            <Text style={{ marginLeft: 30, color: 'black',fontFamily: 'SF-Pro-Rounded-Semibold', fontSize: 17 }}>Delivery method</Text>
            <View style={myStyle.view2}>
                <View style={{ flexDirection: 'row', height: '50%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="door" status={select === 'door' ? 'checked' : 'unchecked'} onPress={() => setSelect('door')}
                    />
                    <Text style={{ margin: 5, color: 'black',fontFamily: 'SF-Pro-Rounded-Regular', fontSize: 17 }}>Door delivery</Text>
                </View>
                <View style={{ borderWidth: 0.3, width: '80%', alignSelf: 'center', borderColor: 'gray' }}></View>
                <View style={{ flexDirection: 'row', height: '50%', padding: 10 }}>
                    <RadioButton color='#FA4A0C' value="pick" status={select === 'pick' ? 'checked' : 'unchecked'} onPress={() => setSelect('pick')}
                    />
                    <Text style={{ margin: 5, color: 'black',fontFamily: 'SF-Pro-Rounded-Regular',fontSize: 17 }}>Pick up</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginLeft: 30, color: 'black', fontSize: 17,fontFamily: 'SF-Pro-Rounded-Regular'}}>Total</Text>
                <Text style={{ color: 'black', fontSize: 17, position: 'absolute', right: 50,fontFamily: 'SF-Pro-Rounded-Semibold'}}>23,000</Text>
            </View>
            <FormButton buttonTitle='Proceed to payment' onPress={() => setModalVisible(!modalVisible)} />
        </ScrollView>
    )
}
export default Payment
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F8',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: windowWidth / 1.3,
        height: windowHeight /2.2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 14,
        color: '#000000',
        fontFamily:'Poppins-Regular'
    },
    modalText2: {
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 15,
        color: '#000000',
        fontFamily:'Poppins-Medium'
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 20
    },
    view: {
        width: windowWidth / 1.25,
        height: windowHeight / 4.2,
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
        height: windowHeight /5.5,
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