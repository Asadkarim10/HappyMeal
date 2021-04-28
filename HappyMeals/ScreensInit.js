import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import  Welcome  from './welcome';
import Login from './login'
import SignIn from './signin'
import Delivering from './Delivering'
import CreateAccount from './createAccount'
import ForgetPassword from './forgetPassword' 

const { width } = Dimensions.get('window');

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerTransparent: true,
  headerTitle: null,
  headerLeft: null,
};

const StackRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Welcome'
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Welcome" component={Welcome} />
      
    </Stack.Navigator>
  );
}
// const SettingStackNavigator = (navigation) => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//     </Stack.Navigator>
//   );
// }




