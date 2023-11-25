import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
const FoodItem2 = ({title,amount,imgUrl}) => {
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
export default FoodItem2
const myStyle = StyleSheet.create({
    viewImg: {
        width: '80%',
        height: '55%',
        resizeMode: 'stretch',
        alignSelf:'center',
        position:'relative',
        top:-25
    },
    view: {
        width: windowWidth / 2.5,
        alignSelf: 'center',
        height: windowHeight /3.2,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
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