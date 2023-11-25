import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import FormButton from '../Component/FormButton'
const AddToCart = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={myStyle.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ flex: 1, padding: 20 }} onPress={() => navigation.goBack()}>
          <Image style={{ justifyContent: 'flex-start' }} source={require('../Images/back.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, padding: 20 }} onPress={() => navigation.navigate('Favourite')}>
          <Image style={{ alignSelf: 'flex-end' }} source={require('../Images/heart.png')} />
        </TouchableOpacity>
      </View>

      <Image style={myStyle.img2} source={require('../Images/tomato.png')} />
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{fontFamily: 'SF-Pro-Rounded-Bold', color: '#FA4A0C', fontSize: 25, alignSelf: 'center' }}>.</Text>
        <Text style={{fontFamily: 'SF-Pro-Rounded-Bold', color: 'gray', fontSize: 25, alignSelf: 'center' }}>...</Text>
      </View>
      <Text style={{ fontFamily: 'SF-Pro-Rounded-Bold', color: '#000000', fontSize: 22, alignSelf: 'center' }}>Veggie tomato mix</Text>
      <Text style={{ fontFamily: 'SF-Pro-Rounded-Medium', color: '#FA4A0C', fontSize: 18, alignSelf: 'center' }}>N1,900</Text>
      <View style={{ padding: 8, width: windowWidth / 1.2,alignSelf:'center'}}>
        <Text style={{ fontFamily: 'SF-Pro-Rounded-Semibold', color: '#000000', fontSize: 17 }}>Delivery info</Text>
        <Text style={{ fontFamily: 'SF-Pro-Rounded-Regular',fontSize:15}}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
      </View>
      <View style={{ padding:8, width: windowWidth / 1.2,alignSelf:'center'}}>
        <Text style={{ fontFamily: 'SF-Pro-Rounded-Semibold', color: '#000000', fontSize: 17}}>Return policy</Text>
        <Text style={{ fontFamily: 'SF-Pro-Rounded-Regular',fontSize:15}}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
      </View>
      <FormButton buttonTitle='Add to cart' onPress={() => navigation.navigate('Cart')} />
    </ScrollView>
  )
}
export default AddToCart
const myStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F9',
  },
  head: {
    fontFamily: 'SF Pro Rounded',
    fontWeight: '800',
    fontSize: RFPercentage(8),
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  img2: {
    width: windowWidth / 3,
    height: windowHeight / 6,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
})