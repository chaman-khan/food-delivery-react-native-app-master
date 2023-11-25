import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
const CartItem = ({title,amount,imgUrl}) => {
    return (
        <View style={myStyle.view}>
            <Image style={myStyle.viewImg} source={imgUrl} />
            <View style={{ padding: 10 }}>
                <Text style={{fontFamily:'SF-Pro-Rounded-Semibold', fontSize: 17, color: '#000000' }}>{title}</Text>
                <Text style={{ marginTop: 10,fontFamily: 'SF-Pro-Rounded-Semibold', fontSize: 15, color: '#FA4A0C' }}>{amount}</Text>
            </View>
            <TouchableOpacity style={{ position: 'absolute', right: 15, top: 65, justifyContent: 'center', backgroundColor: '#FA4A0C', width: '25%', height: '30%', borderRadius: 30 }}>
                <Text style={{fontFamily: 'SF-Pro-Rounded-Semibold',alignSelf: 'center', color: '#FFFFFF'}}>- 1 +</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CartItem
const myStyle = StyleSheet.create({
    viewImg: {
        width: '25%',
        height: '75%',
        resizeMode: 'stretch',
        margin: 10
    },
    view: {
        width: windowWidth / 1.15,
        alignSelf: 'center',
        height: windowHeight / 5,
        flexDirection: 'row',
        padding: 10,
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
})