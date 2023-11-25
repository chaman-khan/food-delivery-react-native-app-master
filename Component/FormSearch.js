import React from 'react';
import {View, TextInput, StyleSheet,Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
const FormSearch = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.img} source={require('../Images/miniSearch.png')}/>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormSearch;
const styles = StyleSheet.create({
  inputContainer: {
      marginTop: 10,
      marginBottom: 10,
      width: windowWidth/1.2,
      height: windowHeight / 11,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#EFEEEE',
      color:'#A1A1A1',
      borderRadius:30,
      fontFamily:'Poppins-Light',
      paddingLeft:10,
      alignSelf:'center',
      shadowColor: '#EBEBF6',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 10.19,
      elevation: 10,
    },
    input:{
        marginTop:10,
        marginBottom:10,
        width:'90%',
        height:windowHeight/11,
        borderRadius:30,
        paddingLeft:10,
        color:'#A1A1A1',
        backgroundColor: '#EFEEEE',
        borderColor:'#FFFFFF',
        fontFamily:'SF-Pro-Rounded-Bold',
   },
  img:{
    marginLeft:10
  }
});
