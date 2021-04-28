import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

class ForgetPassword extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fbfaf8'
            }}>

                <View style={{
                    width: wp('95%'),
                    height: 45,
                    flex: .5,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('login')} >
                        <Icon name="chevron-back-outline" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: wp("55%"),
                    // alignSelf:'center',
                    height: 100,
                    flex: .3,
                    marginLeft: 30,
                }}>

                    <Text style={{
                        fontSize: 25,
                        color: '#bb6870',
                        fontWeight: 'bold'
                    }}>
                        Forgot  password
        </Text>

                </View>

                <View style={{
                    flex: .5,
                    alignSelf: 'center',

                }}>
                    <Text style={{
                        color: '#aeaeae',
                        fontSize: 15

                    }}>Please enter your email to recieve a link to create a new password via email</Text>
                </View>

                <View style={{
                    flex: 3
                }}>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#b8b8b8"
                        autoCorrect={true}
                    />



                    <TouchableOpacity style={styles.button} >

                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>

                </View>




            </View>

        );
    }
}

export default ForgetPassword;



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