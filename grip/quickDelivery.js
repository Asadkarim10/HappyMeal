import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Text, View, Image,StyleSheet  } from 'react-native';

class QuickDelivery extends Component {
  render() {
    return (
        <View>
      
      <View style  = {{
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:"white"
        }}>
 <Image
       style={styles.tinyLogo}
source={require('./Assets/quickdelivery.jpg')}      /> 

        </View>


      </View>
    );
  }
}

export default QuickDelivery;

const styles = StyleSheet.create({
 
    tinyLogo: {
      width: 200,
      height: 160,
      alignSelf:'center'
    },
   
  });