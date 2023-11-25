import { View,Image} from 'react-native'
import React from 'react'
const Food = () => {
  return (
    <View style={{flex:1}}>
        <Image style={{height:'100%',width:'100%',resizeMode:'cover'}} source={require('../Images/food2.png')}/>
    </View>
  )
}
export default Food