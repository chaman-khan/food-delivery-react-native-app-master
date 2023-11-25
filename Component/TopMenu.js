import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const TopMenu = ({ title,...rest}) => {
    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>
            <TouchableOpacity {...rest}>
                <Image style={{ margin: 20 }} source={require('../Images/back.png')} />
            </TouchableOpacity>
            <Text style={{ color: '#000000', alignSelf: 'center', marginLeft: 70,fontWeight:'bold'}}>{title}</Text>
        </View>
    )
}
export default TopMenu