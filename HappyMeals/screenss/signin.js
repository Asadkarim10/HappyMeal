import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImgSwipper from './imgSwipper';
//import Tab from '../screens/tabs'
import EvilIcons from 'react-native-vector-icons/EvilIcons';


class SignIn extends Component {
    render(props) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white'
            }}>

                <View style={{
                    flex: .4,
                    backgroundColor: "white",
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: wp('95%'),
                    justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('login')} >
                        <Text style={{
                            fontSize: 20,
                            color: '#cbb1b1',
                            fontWeight: '600'
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 4,
                    backgroundColor: 'white'

                }}>

                    <ImgSwipper />

                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start'
                }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('createAccount')}
                        style={{
                            borderRadius: 15,
                            width: wp("90%"),
                            backgroundColor: '#f25c5c',
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 40

                        }}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderRadius: 15,
                        flexDirection: 'row',
                        width: wp("90%"),
                        backgroundColor: '#f1f0f7',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 40,
                        marginTop: 10

                    }}>
                        <EvilIcons name="sc-facebook" size={25} />

                        <Text>Continue with facebook</Text>
                    </TouchableOpacity>

                </View>


            </View>
        );
    }
}

export default SignIn;