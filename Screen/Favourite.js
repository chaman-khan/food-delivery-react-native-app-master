import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, StatusBar, } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartItem from '../Component/CartItem';
const Favourite = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);
    const data = [
        {
            id: 1,
            title: 'Veggie tomato mix',
            amount: '#1,900',
            imgurl: require("../Images/tomato.png")
        },
        {
            id: 2,
            title: 'Fishwith mix orange.....',
            amount: '#1,900',
            imgurl: require("../Images/marchi.png")
        },
        {
            id: 3,
            title: 'Veggie tomato mix',
            amount: '1,900',
            imgurl: require("../Images/egg1.png")
        },
        {
            id: 4,
            title: 'Fishwith mix orange.....',
            amount: '#1,900',
            imgurl: require("../Images/tomato.png")
        },
    ];
    const [listData, setListData] = useState(
        data.map((item, index) => ({
          key: `${index}`,
          title: item.title,
          amount: item.amount,
          imgUrl: item.imgurl,
        })),
      );
    const closeRow = (rowMap, rowKey) => {
        alert("close row key is:"+rowKey)
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };
    const deleteRow = (rowMap, rowKey) => {
        alert("dlete row key is:"+rowKey)
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.id === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const HiddenItemWithActions = props => {
        const {
            swipeAnimatedValue,
            leftActionActivated,
            rightActionActivated,
            rowActionAnimatedValue,
            rowHeightAnimatedValue,
            onClose,
            onDelete,
        } = props;

        if (rightActionActivated) {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 75,
                useNativeDriver: false
            }).start();
        }

        return (
            <Animated.View style={styles.rowBack}>
                {!leftActionActivated && (
                    <TouchableOpacity style={{ marginTop: 8, position: 'relative', right: -190, borderRadius: 50, height: '42%', marginRight: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DF2C2C', width: '17%' }} onPress={onClose}>
                        <MaterialCommunityIcons
                            name="heart"
                            size={25}
                            color="#fff"
                        />
                    </TouchableOpacity>
                )}

                {!leftActionActivated && (
                    <TouchableOpacity style={{ marginTop: 8, borderRadius: 50, height: '42%', marginRight: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DF2C2C', width: '17%' }} onPress={onDelete}>
                        <MaterialCommunityIcons
                            name="trash-can-outline"
                            size={25}
                            color="#fff"
                        />
                    </TouchableOpacity>
                )}
            </Animated.View>
        );
    };
    const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75);
        const rowHeightAnimatedValue = new Animated.Value(20);

        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                rowActionAnimatedValue={rowActionAnimatedValue}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <SwipeListView
                data={listData}
                renderItem={(listData, rowMap) => (
                    <CartItem title={listData.item.title} amount={listData.item.amount} imgUrl={listData.item.imgUrl} />
                )}
                disableRightSwipe
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-140}
            />
        </View>
    );
};
export default Favourite;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F8',
        flex: 1,
    },
    rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        margin: 5,
        marginBottom: 15,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
});
