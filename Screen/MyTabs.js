import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();
import MyProfile from './MyProfile';
import Favourite from './Favourite';
import Home from './Home';
import PersonalDetail from './PersonalDetail';
import React from 'react';
export default function MyTabs({navigation,func}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FA4A0C',
        headerShown:false,
        tabBarInactiveBackgroundColor: '#F2F2F2',
        tabBarActiveBackgroundColor: '#F2F2F2',
      }}
    >
      <Tab.Screen
        name="Home"
        //component={Home}
        children={() => <Home func={func} />}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}