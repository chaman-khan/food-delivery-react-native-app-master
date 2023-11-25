import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import MyTabs from './MyTabs';
const DrawerMenu = ({ navigation }) => {
    const [showMenu, setShowMenu] = useState(false)
    const moveToRight = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const myFunc = () => {
        Animated.timing(scale, {
            toValue: showMenu ? 1 : 0.8,
            duration: 300,
            useNativeDriver: true
        }).start()
        Animated.timing(moveToRight, {
            toValue: showMenu ? 0 : 250,
            duration: 300,
            useNativeDriver: true
        }).start()
        setShowMenu(!showMenu)
    }
    return (
        <View style={myStyle.container}>
            <View style={{ borderRadius:20, height: '77%', width: '50%', backgroundColor: '#fc7c4e', position: 'absolute', left: 215, bottom:40 }}>
            </View>
            <Animated.View style={{ borderRadius: 50, flex: 1, backgroundColor: 'blue', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, transform: [{ scale: scale }, { translateX: moveToRight }] }}>
                <MyTabs func={myFunc} />
            </Animated.View>
            {showMenu ?
                <>
                    <View style={{ marginLeft: 15, marginBottom: 60 }}>
                        <TouchableOpacity style={myStyle.viewRow}>
                            <Image style={{ resizeMode: 'stretch' }} source={require('../Images/pro.png')} />
                            <Text style={myStyle.itemText}>Profile</Text>
                        </TouchableOpacity>
                        <View style={myStyle.emptyView}></View>

                        <TouchableOpacity style={myStyle.viewRow}>
                            <Image style={{ resizeMode: 'stretch' }} source={require('../Images/order2.png')} />
                            <Text style={myStyle.itemText}>Orders</Text>
                        </TouchableOpacity>
                        <View style={myStyle.emptyView}></View>

                        <TouchableOpacity style={myStyle.viewRow}>
                            <Image style={{ resizeMode: 'stretch' }} source={require('../Images/offer.png')} />
                            <Text style={myStyle.itemText}>offer and promo</Text>
                        </TouchableOpacity>
                        <View style={myStyle.emptyView}></View>

                        <TouchableOpacity style={myStyle.viewRow}>
                            <Image style={{ resizeMode: 'stretch' }} source={require('../Images/sheet.png')} />
                            <Text style={myStyle.itemText}>Privacy policy</Text>
                        </TouchableOpacity>

                        <View style={myStyle.emptyView}></View>
                        <TouchableOpacity style={myStyle.viewRow}>
                            <Image style={{ resizeMode: 'stretch' }} source={require('../Images/security.png')} />
                            <Text style={myStyle.itemText}>Security</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.replace('Login')} style={[myStyle.viewRow, { position: 'absolute', bottom: 40, left: 10 }]}>
                        <Text style={myStyle.itemText}>Sign-out </Text>
                        <Image style={{ resizeMode: 'stretch' }} source={require('../Images/nxt.png')} />
                    </TouchableOpacity>
                </>
                :
                <></>
            }
        </View>
    )
}
export default DrawerMenu
const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FA4A0C',
        //backgroundColor:'#E33224',
        justifyContent: 'center'
    },
    viewRow: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center'
    },
    itemText: {
        color: '#F5F5F8',
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold'
    },
    emptyView: {
        borderWidth: 0.3,
        borderColor: '#F4F4F8',
        width: '36%',
        marginLeft: 50,
        margin: 5
    }
})
