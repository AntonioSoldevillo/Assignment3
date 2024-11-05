import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { Avatar, Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const navigation = useNavigation();
    const [togglePassword, setTogglePassword] = useState(false);

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
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    left={<TextInput.Icon icon="email" size={20} />}
                />
                <TextInput
                    textContentType="newPassword"
                    label="New Password"
                    mode="outlined"
                    placeholder="Enter your new Password"
                    value={newPassword}
                    onChangeText={text => setNewPassword(text)}
                    style={styles.input}
                    left={<TextInput.Icon icon="lock" size={20} />}
                    right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)} icon={togglePassword ? "eye-off" : "eye"} size={20} />}
                    secureTextEntry={!togglePassword}
                />
                <TextInput
                    textContentType="newPassword"
                    label="Re-enter Password"
                    mode="outlined"
                    placeholder="Re-enter your password"
                    value={reEnterPassword}
                    onChangeText={text => setReEnterPassword(text)}
                    style={styles.input}
                    left={<TextInput.Icon icon="lock" size={20} />}
                    right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)} icon={togglePassword ? "eye-off" : "eye"} size={20} />}
                    secureTextEntry={!togglePassword}
                />
            </View>

            <View style={styles.buttonpart}>
                <Button
                    onPress={() => {
                        if (newPassword === reEnterPassword) {
                            console.log("Password Reset");
                            
                        } else {
                            console.log("Passwords do not match");
                        }
                    }}
                    style={styles.button}
                    mode="contained"
                >
                    Reset Password
                </Button>
                <Button style={styles.backButton} onPress={() => navigation.goBack()}>
                    Back to Login
                </Button>
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
    backButton: {
        marginTop: 20,
    },
});
