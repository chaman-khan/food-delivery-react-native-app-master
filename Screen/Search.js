import { View, Text, StyleSheet,StatusBar, ScrollView,Image } from 'react-native'
import React from 'react'
import TopMenu from '../Component/TopMenu'
import FoodItem from '../Component/FoodItem'
const Search = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <StatusBar hidden={true} />
            <TopMenu title='Spicy chicken' onPress={() => navigation.goBack()} />
            {/* <View style={{ alignItems: 'center', marginTop: 60 }}>
                <Image source={require('../Images/Search.png')} />
                <Image style={{position:'relative',left:40,top:-20}} source={require('../Images/danda.png')} />
                <Text style={myStyle.label}>Item not found</Text>
                <Text style={{fontFamily:'SF-Pro-Rounded-Regular'}}>Try searching the item with</Text>
                <Text style={{fontFamily:'SF-Pro-Rounded-Regular'}}>a different keyword.</Text>
            </View> */}
            <ScrollView contentContainerStyle={{ backgroundColor: '#FFFFFF', padding: 10, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <Text style={{ alignSelf: 'center',fontFamily:'SF-Pro-Rounded-Bold', color: '#000000', fontSize:20, padding: 10 }}>Found Six Results</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{paddingTop:5}}>
                        <FoodItem title='Veggie tomato mix' amount='N1,900' imgUrl={require('../Images/tomato.png')} />
                        <FoodItem title='Egg and cucmber...' amount='N1,900' imgUrl={require('../Images/egg1.png')} />
                        <FoodItem title='Egg and cucmber...' amount='N1,900' imgUrl={require('../Images/egg.png')} />
                        <FoodItem title='Fried chicken m.' amount='N1,900' imgUrl={require('../Images/marchi.png')} />
                    </View>
                    <View style={{paddingTop:40}}>
                        <FoodItem title='Egg and cucmber...' amount='N1,900' imgUrl={require('../Images/egg.png')} />
                        <FoodItem title='Fried chicken m.' amount='N1,900' imgUrl={require('../Images/marchi.png')} />
                        <FoodItem title='Veggie tomato mix' amount='N1,900' imgUrl={require('../Images/meethi.png')} />
                        <FoodItem title='Egg and cucmber...' amount='N1,900' imgUrl={require('../Images/egg.png')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Search
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