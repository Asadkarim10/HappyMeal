import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Home'
import quickDelivery from './quickDelivery'
import Easyshopping from './easyshopping'
//import Splash from './SplashScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTransparent: true,
  headerTitle: null,
  headerLeft: null,
};

// const StackSplash = ({ navigation }) => {
//   return (
//     <Stack.Navigator
//       initialRouteName='Splash'
//       screenOptions={
//         {
//           headerTransparent: true,
//           headerTitle: null,
//           headerLeft: null,
//         }
//       }>
//       <Stack.Screen name="Splash" component={Splash} />
//     </Stack.Navigator>
//   );
// }




function ScreensInit() {
  return (
    <NavigationContainer>   
      <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="easyshopping" component={Easyshopping} />

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


export default ScreensInit;
