import { View, Text,StyleSheet, TextInput, StatusBar} from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../utils/Dimentions'
import FormButton from '../Component/FormButton'
const Signup = () => {
  return (
    <View style={myStyle.semiView}>
      <Text style={myStyle.label}>User name</Text>
      <TextInput style={myStyle.input} />
      <Text style={myStyle.label}>Email address</Text>
      <TextInput style={myStyle.input} textContentType={'emailAddress'} />
      <Text style={myStyle.label}>Password</Text>
      <TextInput style={myStyle.input} secureTextEntry={true} />
      <FormButton buttonTitle='Signup' onPress={() =>alert('Data saved successfully')} />
    </View>
  )
}
export default Signup
const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  input: {
    width: windowWidth / 1.2,
    borderBottomWidth: 1,
    color: '#000000',
    fontFamily: 'SF-Pro-Rounded-Bold',
    marginLeft:10
  },
  label: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'SF-Pro-Rounded-Bold',
    marginLeft:10
  },
  semiView: {
    flex: 2,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: '#F2F2F2'
  },
})