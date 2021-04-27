import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Home extends Component {
  render() {
    return (
        <View style = {{
            flex:1,
            justifyContent:"center"
        }}>
      <Text>Hello, I am your cat asad karim mughal!</Text>
      </View>
    );
  }
}

export default Home;