import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { Avatar, Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginPart() {
    const [togglePassword, setTogglePassword] = useState(false);
    const navigation = useNavigation(); 

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar.Image source={require('../assets/avatar.png')} size={180} />
                <Text style={styles.title}>AntonioFlix</Text>
            </View>

            <View style={styles.inputpart}>
                <TextInput
                    textContentType="emailAddress"
                    label="Email"
                    mode="outlined"
                    placeholder="Email"
                    style={styles.input}
                    left={<TextInput.Icon icon="email" size={20} />}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    placeholder="Password"
                    style={styles.input}
                    left={<TextInput.Icon icon="key" size={20} />}
                    right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)} icon={togglePassword ? "eye-off" : "eye"} size={20} />}
                    secureTextEntry={!togglePassword}
                />
            </View>

            <View style={styles.buttonpart}>
                <Button onPress={() => console.log("login")} style={styles.button} mode="contained">
                    Login
                </Button>
                <Button style={styles.forgot} onPress={() => navigation.navigate('ForgotPassword')}>
                    I forgot my password
                </Button>
                <View style={styles.registerContainer}>
                    <Text>Don't have an account?</Text>
                    <Button style={styles.register} onPress={() => navigation.navigate('Register')}>
                        Register
                    </Button>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        color: "purple",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 24,
    },
    inputpart: {
        width: "90%",
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
    },
    buttonpart: {
        width: "90%",
        alignItems: "center",
    },
    button: {
        marginBottom: 10,
        width: 200,
    },
    forgot: {
        marginTop: 20,
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    register: {
        marginLeft: -10,
    },
});
