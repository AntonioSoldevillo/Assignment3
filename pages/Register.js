import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Avatar, Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();
    const [togglePassword, setTogglePassword] = useState(false);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar.Image source={require('../assets/avatar.png')} size={150} />
                <Text style={styles.title}>AntonioFlix</Text>
            </View>

            <View style={styles.inputpart}>
                <TextInput
                    label="First Name"
                    mode="outlined"
                    value={firstName}
                    onChangeText={setFirstName}
                    style={styles.input}
                />
                <TextInput
                    label="Last Name"
                    mode="outlined"
                    value={lastName}
                    onChangeText={setLastName}
                    style={styles.input}
                />
                <TextInput
                    label="Email"
                    mode="outlined"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    left={<TextInput.Icon icon="email" size={20} />}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    left={<TextInput.Icon icon="lock" size={20} />}
                    right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)} icon={togglePassword ? "eye-off" : "eye"} size={20} />}
                    secureTextEntry={!togglePassword}
                />
                <TextInput
                    label="Confirm Password"
                    mode="outlined"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={styles.input}
                    left={<TextInput.Icon icon="lock" size={20} />}
                    right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)} icon={togglePassword ? "eye-off" : "eye"} size={20} />}
                    secureTextEntry={!togglePassword}
                />
            </View>

            <View style={styles.buttonpart}>
                <Button onPress={() => console.log("Registering...")} style={styles.button} mode="contained">
                    Register
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
        paddingTop: 20,
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
        marginTop: 1,
    },
});
