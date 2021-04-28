import React, { Component } from 'react';
import { Image, Text, TextInput, ImageBackground, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

import Tab from './tabs'

class Delivery extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "white"
            }}>
                <View style={{
                    flex: .2,
                    width: wp("95%"),
                    alignSelf: 'center',

                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontWeight: "800",
                        color: "#b0b0b0"
                    }}>Delivering to</Text>
                </View>
                <View style={{
                    flex: .2,
                    width: wp("95%"),
                    alignSelf: 'center',
                    alignItems: 'center',
                    alignContent:'center',
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17
                    }}>Current Location</Text>
                    <Entypo name="chevron-small-down" size={27} color="#af9a9b" />

                </View>

                <View style={{
                    flex: .5,

                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>

                    <View style={{
                        flexDirection: 'row',
                        width: wp('88%'),
                        alignItems: 'center',
                        height: 40,
                        backgroundColor: '#f9f9f9',
                        borderRadius: 15
                    }}>
                        <View style = {{
                            marginLeft:15
                        }}>
                        <Feather name="search" size={26} color="black" />
                        </View>
                        <TextInput
                            placeholder="Search foods"
                            fontSize={16}
                            marginLeft={5}
                            />
                            
                    </View>

                    <View>
                    <FontAwesome name="bars" size={25} color="red" />
                    </View>

                </View>


                <View style={{
                    flex: 1,
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>

                  

                    <View style={{
                      
                    }}>
                        <View style={{
                            height: 80,
                            //marginRight:190,
                            flexDirection: "row",
                            alignItems: 'center',
                            width: wp('22%'),
                            borderRadius: 10,
                            justifyContent: 'center',
                            backgroundColor: '#fcefe7'
                        }}>
                            <Image
                                //style={styles.tinyLogo}
                                source={require('./Assets/gift.png')} style={{ width: 60, height: 50 }}
                            />
                        </View>

                        <Text>
                            Offers
                </Text>
                    </View>



                    <View style={{

                    }}>
                        <View style={{
                            height: 80,
                            flexDirection: "row",
                            alignItems: 'center',
                            width: wp('22%'),
                            borderRadius: 10,
                            justifyContent: 'center',
                            backgroundColor: '#fcefe7'
                        }}>
                            <Image
                                source={require('./Assets/gift.png')} style={{ width: 60, height: 50 }}
                            />
                        </View>

                        <Text>
                            Offers
                </Text>
                    </View>




                    <View style={{

                    }}>
                        <View style={{
                            height: 80,
                            flexDirection: "row",
                            alignItems: 'center',
                            width: wp('22%'),
                            borderRadius: 10,
                            justifyContent: 'center',
                            backgroundColor: '#fcefe7'
                        }}>
                            <Image
                                source={require('./Assets/gift.png')} style={{ width: 60, height: 50 }}
                            />
                        </View>

                        <Text>
                            Offers
                </Text>
                    </View>
                   
                </View>
                <View style={{
                    flex: 3.5,
                    width: wp('98%'),
                    alignSelf: 'center',

                }}>
                    <ScrollView>
                        <ImageBackground source={require('./Assets/burger.jpg')} style={{ width: '98%', alignSelf: 'center', height: 200, }}>
                            <View style={{ position: 'absolute', top: 130, left: 0, right: 20, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end',
                                    height: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 20,
                                    width: wp('30%')

                                }}>
                                    <Text style={{

                                        alignSelf: 'center'
                                    }}>20 - 30 mins</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{
                            width: wp("93%"),
                            alignSelf: 'center',
                            height: 45,
                            justifyContent: 'flex-end',

                        }} >
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                            }}>Hollywood starz cafe</Text>
                        </View>
                        <View style={{
                            width: wp('93%'),
                            flexDirection: 'row',
                            alignSelf: 'center',
                            alignContent:'center'
                        }}>
                            <Foundation name="star" size={25} color="red" />
                            <Text style={{
                                fontSize: 17,
                                marginBottom: 20
                            }}> <Text style = {{ color:"#d9cfcf"}}>4.9</Text> (124 ratings) Cafe -Western Food - $$</Text>
                        </View>

                        <ImageBackground source={require('./Assets/burger.jpg')} style={{ width: '98%', alignSelf: 'center', height: 200, }}>
                            <View style={{ position: 'absolute', top: 130, left: 0, right: 20, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end',
                                    height: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 20,
                                    width: wp('30%')

                                }}>
                                    <Text style={{

                                        alignSelf: 'center'
                                    }}>20 - 30 mins</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{
                            width: wp("93%"),
                            alignSelf: 'center',
                            height: 45,
                            justifyContent: 'flex-end',

                        }} >
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                            }}>Hollywood starz cafe</Text>
                        </View>
                        <View style={{
                            width: wp('93%'),
                            flexDirection: 'row',
                            alignSelf: 'center',
                            alignContent:'center'
                        }}>
                            <Foundation name="star" size={25} color="red" />
                            <Text style={{
                                fontSize: 17
                            }}><Text style = {{ color:"#d9cfcf"}}>4.9</Text> (124 ratings) Cafe -Western Food - $$</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Delivery;

const styles = StyleSheet.create({
    img: {
        width: '95%',
        alignSelf: 'center',
        borderRadius: 20,
        height: 250,
        marginTop: 10

    },

    button: {
        width: '92%',
        height: 50,
        paddingLeft: 15,
        alignSelf: 'center',
        backgroundColor: '#f05a5c',
        borderRadius: 25,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    }
});