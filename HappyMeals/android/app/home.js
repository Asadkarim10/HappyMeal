import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Home extends Component {
  render() {
    return (
        <View  style = {{
            flex:1,
            backgroundColor:'white'
        }}>
            <View style = {{
                flex:3,
                
            }}>
                            <ScrollView>


<Image
          style={styles.tinyLogo}
          source={require("../Assets/HM.jpeg")}
        />
            </ScrollView>

            </View>
            <View style = {{
                flex:1.3,
                backgroundColor:"#f15b5d",
                borderTopRightRadius:30,
                borderTopLeftRadius:30

            }}>
            
            
            <View style = {{
                height:80,
                width:wp("70%"),
                justifyContent:'center',
                alignItems:'center'

            }}>
                <Text style = {{
                    fontSize:40,
                    fontWeight:'bold',
                    color:'white'
                }}>Happy Meals</Text>
            </View>

                <View style = {{
                    width:wp("96%"),
                    alignSelf:'center'
                }}>
                <View style = {{
                    height:60,
                    justifyContent:'center',
                    width:wp("80%"),
                    
                    alignItems:'center',
                   // alignSelf:'center'
                }}>
                    <Text style = {{
                        fontSize:22,
                        color:"white",
                        fontWeight:"600"
                    }}>
                        Discover the best foods from over 1,000 restaurents.
                    </Text>
                </View>
                </View>
                <View style = {{
                    height:70,
                    justifyContent:'center',
                    width:wp('90%'),
                    alignSelf:'center',
                }}>
                    <TouchableOpacity style = {{
                        backgroundColor:"white",
                        width:wp("40%"),
                        height:46,
                        justifyContent:'center',
                        borderRadius:20,
                        alignItems:"center"
                    }}>
                        <Text style = {{
                            fontWeight:'bold',
                            fontSize:16
                        }}>Get Started</Text>
                    </TouchableOpacity>
                </View>

            </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
    tinyLogo: {
      width: 350,
      alignSelf:'center',
      height: 520,
    },
    
  });