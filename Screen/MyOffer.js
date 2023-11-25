import { View, Text, StyleSheet,StatusBar} from 'react-native'
import React from 'react'
import TopMenu from '../Component/TopMenu'
const MyOffer = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <StatusBar hidden={true}/>
            <TopMenu onPress={()=>navigation.goBack()}/>
             <Text style={{ marginLeft: 30,color: 'black',fontFamily:'SF-Pro-Rounded-Bold', fontSize: 26}}>My offers</Text>
            <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
                <Text style={myStyle.label}>ohh snap!  No offers yet</Text>
                <Text style={{fontFamily:'SF-Pro-Rounded-Regular'}}>Bella dose’t have any offers</Text>
                <Text style={{fontFamily:'SF-Pro-Rounded-Regular'}}>yet please check again.</Text>
            </View>
        </View>
    )
}
export default MyOffer
const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F9',
    },
    label: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000000',
        marginTop: 10,
        alignSelf: 'center',
        fontFamily:'SF-Pro-Rounded-Semibold'
    },
})