import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

class Login extends Component {
    render(props) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fbfaf8'
            }}>

                <View style={{
                    width: wp('95%'),
                    height: 45,
                    flex: .3,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>
                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('login')} >
             <Icon name="chevron-back-outline" size={25}/>
             </TouchableOpacity>
                </View>

                <View style={{
                    width: wp("45%"),
                    height: 100,
                    flex: .5,
                    marginLeft: 25,
                }}>

                    <Text style={{
                        fontSize: 25,
                        color: '#bb6870',
                        fontWeight: 'bold'
                    }}>
                        Log in to your account
        </Text>

                </View>

                <View style={{
                    flex: 1.7
                }}>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#b8b8b8"
                        autoCorrect={true}
                    />


                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        justifyContent: 'space-between',
                        width: '92%',
                        height: 50,
                        paddingLeft: 15,
                        paddingRight: 10,
                        alignSelf: 'center',
                        backgroundColor: '#ffffff',
                        borderRadius: 25,
                    }}>
                        <TextInput
                            //   style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#b8b8b8"
                            autoCorrect={true}
                        />

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('forgetPassword')}>
                            <Text style={{
                                color: '#bfabac',
                                fontWeight: 'bold',
                                fontSize: 15,
                                paddingRight: 5
                            }}>Forgot?</Text>
                        </TouchableOpacity>

                    </View>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Delivering')}
                     style={styles.button} >
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>

                </View>


                <View style={{
                    //height:120,
                    flex: .6,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "700",
                            paddingRight: 3
                        }}>Dont have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('createAccount')}>
                            <Text style={{
                                color: '#ccb0b5'
                            }}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

export default Login;



const styles = StyleSheet.create({
    input: {
        width: '92%',
        height: 50,
        paddingLeft: 15,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginBottom: 10,
        fontSize: 15

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