import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Signin from './signin'
import Welcome from './welcome';
import Login from './login'
import ForgetPassword from './forgetPassword'
import Delivering from './Delivering'


import CreateAccount from './createAccount'
const Stack = createStackNavigator();
enableScreens();

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="createAccount" component={CreateAccount} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Delivering" component={Delivering} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;