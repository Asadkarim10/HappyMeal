import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StackNavigator } from 'react-navigation';
import { enableScreens } from 'react-native-screens';
import Signin from '../signin'
import Welcome from '../welcome';
import Login from '../login'
import ForgetPassword from '../forgetPassword'
import Delivering from '../Delivering'
//import { withNavigation } from 'react-navigation';






import CreateAccount from '../screens/createAccount'
const Stack = createStackNavigator();
// enableScreens();

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

const MyStack = ({navigation}) => {
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

const SettingStackNavigator = (navigation) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    </Stack.Navigator>
  );
}

export default () => {
  return <MyStack />
}

