import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {windowHeight, windowWidth} from '../utils/Dimentions';
const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={myStyle.btn} {...rest}>
            <Text style={myStyle.btnText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
export default FormButton
const myStyle = StyleSheet.create({
    btn: {
        width: windowWidth / 1.25,
        height: windowHeight / 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#FA4A0C',
        borderRadius: 150,
        justifyContent: 'center',
        alignSelf:'center'
      },
      btnText: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600',
        fontFamily:'SF-Pro-Rounded-Semibold'
      },
})