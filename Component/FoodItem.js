import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
const FoodItem = ({title,amount,imgUrl}) => {
    return (
        <View style={myStyle.view}>
            <Image style={myStyle.viewImg} source={imgUrl} />
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:18, color: '#000000',paddingLeft:10,fontFamily:'SF-Pro-Rounded-Semibold'}}>{title}</Text>
                <Text style={{fontSize: 16, color: '#FA4A0C',fontFamily:'SF-Pro-Rounded-Bold'}}>{amount}</Text>
            </View>
        </View>
    )
}
export default FoodItem
const myStyle = StyleSheet.create({
    viewImg: {
        width: '90%',
        height: '50%',
        resizeMode: 'stretch',
        position:'relative',
        top:-20,
        left:5
    },
    view: {
        width: windowWidth / 2.6,
        alignSelf: 'center',
        height: windowHeight /3.2,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        margin: 20,
        marginLeft:15,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
})