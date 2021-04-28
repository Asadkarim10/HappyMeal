import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

class CreateAccount extends Component {
    render(props) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fbfaf8'
            }}>

                <View style={{
                    width: wp('95%'),
                    height: 45,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>
                    <Icon name="chevron-back-outline" size={25} />
                </View>

                <View style={{
                    width: wp("40%"),
                    alignItems: 'center',
                    height: 100,
                    marginLeft: 25,
                }}>

                    <Text style={{
                        fontSize: 25,
                        color: '#bb6870',
                        fontWeight: 'bold'
                    }}>
                        Create your account
        </Text>

                </View>



                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#b8b8b8"
                    autoCorrect={true}
                />


                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#b8b8b8"
                    autoCorrect={true}
                />



                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#b8b8b8"
                    autoCorrect={true}
                />



                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    placeholderTextColor="#b8b8b8"
                    autoCorrect={true}
                />

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('login')} >

                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <View style={{
                    width: wp("75%"),
                    alignSelf: 'center',
                    height: 60,
                    justifyContent: "flex-end",
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                        By clicking sign up you agree to the our terms and conditions
            </Text>

                </View>


                <View style={{
                    height: 120,
                    justifyContent: 'flex-end'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "700",
                            paddingRight: 3
                        }}>Already an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Delivering')} >
                            <Text style={{
                                color: '#ccb0b5'
                            }}> log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

        );
    }
}

export default CreateAccount;



const styles = StyleSheet.create({
    input: {
        width: '88%',
        height: 50,
        paddingLeft: 15,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginBottom: 10
    },

    button: {
        width: '88%',
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