/*
    Our home file that users will see once logging in to the app
*/

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Text>
                    Welcome to HitchHike!
                </Text>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        fontSize: 30,
    },

    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',
    },

    signupText: {
        color: '#12799f',
        fontSize: 16,
    },

    signupButton: {
        color: '#12799f',
        fontSize: 16,
        fontWeight: '500',
    },
    formContainer: {
        justifyContent: 'center', //centers flex objects
        alignItems: 'center',
    },

    inputBox: {
        width: 200,
        height: 30,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10,
    },

    button: {
        width: 300,
        backgroundColor: '#ff8700',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
    },
});