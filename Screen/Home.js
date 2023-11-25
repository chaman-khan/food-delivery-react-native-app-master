import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, StatusBar} from 'react-native'
import React, {useState } from 'react'
import FormSearch from '../Component/FormSearch'
import FoodItem2 from '../Component/FoodItem2'
const Home = ({ navigation,func}) => {
  const [food, setFood] = useState(true)
  const [drink, setDrink] = useState(false)
  const [snack, setSnack] = useState(false)
  const [sauc, setSauc] = useState(false)
  const changeActive = (item) => {
    if (item == 'Foods') {
      setFood(true)
      setDrink(false)
      setSnack(false)
      setSauc(false)
    }
    else if (item == 'Drinks') {
      setDrink(true)
      setFood(false)
      setSnack(false)
      setSauc(false)
    }
    else if (item == 'Snacks') {
      setSnack(true)
      setFood(false)
      setDrink(false)
      setSauc(false)
    }
    else if (item == 'Saucs') {
      setSauc(true)
      setFood(false)
      setSnack(false)
      setDrink(false)
    }
  }
  return (
    <ScrollView contentContainerStyle={myStyle.container}>
      <StatusBar hidden={true} />
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <TouchableOpacity style={{ flex: 1, padding: 20 }} onPress={()=>func()}>
          <Image style={{ justifyContent: 'flex-start' }} source={require('../Images/home.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, padding: 20 }}>
          <Image style={{ alignSelf: 'flex-end' }} source={require('../Images/or.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '50%' }}>
        <Text style={{ marginLeft: 30, color: 'black', fontFamily: 'SF-Pro-Rounded-Bold', fontSize: 26 }}>Delicious food for you</Text>
      </View>
      <FormSearch placeholderText={'Search'} />

      <View style={myStyle.tab}>
        <View style={myStyle.view}>
          <TouchableOpacity onPress={() => changeActive('Foods')}>
            <Text style={myStyle.tabText}>Foods</Text>
          </TouchableOpacity>
          {food ? <View style={myStyle.emptyView}></View> : <View></View>}
        </View>
        <View style={myStyle.view}>
          <TouchableOpacity onPress={() => changeActive('Drinks')}>
            <Text style={myStyle.tabText}>Drinks</Text>
          </TouchableOpacity>
          {drink ? <View style={myStyle.emptyView}></View> : <View></View>}
        </View>
        <View style={myStyle.view}>
          <TouchableOpacity onPress={() => changeActive('Snacks')}>
            <Text style={myStyle.tabText}>Snacks</Text>
          </TouchableOpacity>
          {snack ? <View style={myStyle.emptyView}></View> : <View></View>}
        </View>
        <View style={myStyle.view}>
          <TouchableOpacity onPress={() => changeActive('Saucs')}>
            <Text style={myStyle.tabText}>Sauc</Text>
          </TouchableOpacity>
          {sauc ? <View style={myStyle.emptyView}></View> : <View></View>}
        </View>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ flexDirection: 'row', marginTop: 40, marginLeft: 10 }}>
        <FoodItem2 title='Veggie tomato mix' amount='N1,900' imgUrl={require('../Images/rec.png')} />
        <FoodItem2 title='Egg and cucmber...' amount='N1,900' imgUrl={require('../Images/rec.png')} />
        <FoodItem2 title='Fried chicken m.' amount='N1,900' imgUrl={require('../Images/marchi.png')} />
        <FoodItem2 title='Egg and cucmber...' amount='N1,900' imgUrl={require('../Images/egg1.png')} />
      </ScrollView>
    </ScrollView>
  )
}
export default Home
const myStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 20,
    fontFamily: 'SF-Pro-Rounded-Regular',
    alignSelf: 'center'
  },
  emptyView: {
    width: '100%',
    borderWidth: 1.7,
    borderColor: '#FA4A0C',
    borderRadius: 20
  },
  view: {
    width: '25%',
    marginLeft: 50
  },
  tab: {
    paddingLeft: 30,
    margin: 20,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
})