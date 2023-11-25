import { View, Text, Image, StyleSheet, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import FormButton from '../Component/FormButton'
import Signup from './Signup';
const Login = ({ navigation }) => {
  const [login, setLogin] = useState(true)
  const [signup, setSignup] = useState(false)
  const chnageSetting = () => {
    setLogin(!login)
    setSignup(!signup)
  }
  return (
    <View style={myStyle.container}>
      <StatusBar hidden={true} />
      <View style={myStyle.view}>
        <Image style={myStyle.img2} source={require('../Images/BellaLogo.png')} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View>
            <Text style={{ fontFamily: 'SF-Pro-Rounded-Bold', fontSize: 18, color: "#000000", marginRight: 50 }}
              onPress={() => chnageSetting()}>Login</Text>
            {login ?
              <View style={{ width: '100%', borderWidth: 1.5, borderColor: '#FA4A0C', borderRadius: 20, marginLeft: -60, alignSelf: 'center' }}></View>
              :
              <></>
            }
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "#000000", marginLeft: 50, fontFamily: 'SF-Pro-Rounded-Bold' }}
              onPress={() => chnageSetting()}>Signup</Text>
            {signup ?
              <View style={{ width: '100%', borderWidth: 1.5, borderColor: '#FA4A0C', borderRadius: 20, marginRight: -60, alignSelf: 'center' }}></View>
              :
              <></>
            }
          </View>
        </View>
      </View>
      {login ?
        <View style={myStyle.semiView}>
          <Text style={myStyle.label}>Email address</Text>
          <TextInput style={myStyle.input} textContentType={'emailAddress'} />
          <Text style={myStyle.label}>Password</Text>
          <TextInput style={myStyle.input} secureTextEntry={true} />
          <Text style={{marginLeft:10,color: '#FA4A0C', marginTop: 20, fontFamily: 'SF-Pro-Rounded-Bold' }}>Forget Password?</Text>
          <FormButton buttonTitle='Login' onPress={() => navigation.navigate('DrawerMenu')} />
        </View>
        :
        <Signup />
      }
    </View>
  )
}
export default Login
const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  input: {
    width: windowWidth / 1.2,
    borderBottomWidth: 1,
    fontFamily: 'SF-Pro-Rounded-Bold',
    marginLeft:10,
  },
  label: {
    fontSize: 15,
    marginTop:5,
    marginLeft:10,
    fontFamily: 'SF-Pro-Rounded-Bold'
  },
  view: {
    flex: 1.5,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
    flex: 2,
    margin: 20,
    backgroundColor: '#F2F2F2'
  },
  head: {
    fontFamily: 'SF Pro Rounded',
    fontWeight: '800',
    fontSize: RFPercentage(8),
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  img: {
    width: windowWidth / 2,
    height: windowHeight / 2.5
  },
  img2: {
    width: windowWidth / 3,
    height: windowHeight / 3,
    marginTop: 3,
    resizeMode: 'stretch',
    alignSelf: 'center'
  },
})