import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Splash from './Splash';
import AddToCart from './AddToCart';
import MyProfile from './MyProfile';
import Order from './Order';
import History from './History';
import Search from './Search';
import Wifi from './Wifi';
import MyOffer from './MyOffer';
import PersonalDetail from './PersonalDetail';
import Payment from './Payment';
import Delivery from './Delivery';
import Cart from './Cart';
import Food from './Food';
import Home from './Home';
import Favourite from './Favourite';
import DrawerMenu from './DrawerMenu';
import MyTabs from './MyTabs';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="AddToCart" component={AddToCart} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Wifi" component={Wifi} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="MyOffer" component={MyOffer} />
        <Stack.Screen name="PersonalDetail" component={PersonalDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
          <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;