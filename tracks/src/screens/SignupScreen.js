import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3 style={styles.title}>
                    Sign Up for Tracker
                </Text>
            </Spacer>
            <Spacer>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    leftIcon={{ type: "material", name: "email", color: "#007BFF" }}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                />
            </Spacer>
            <Spacer>
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry
                    leftIcon={{ type: "material", name: "lock", color: "#007BFF" }}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                />
            </Spacer>
            <Spacer>
                <Button
                    title="Sign Up"
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={() => {
                        // Handle sign-up logic here
                    }}
                />
            </Spacer>
            <Spacer>
                <Text style={styles.signInText}>
                    Already have an account?{" "}
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate("Signin")}
                    >
                        Sign In
                    </Text>
                </Text>
            </Spacer>
        </View>
    );
};
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        marginBottom: 200
    },
    title: {
        textAlign: "center",
        color: "#007BFF",
        marginBottom: 20,
    },
    input: {
        color: "#333",
    },
    label: {
        color: "#007BFF",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#007BFF",
        borderRadius: 25,
        paddingVertical: 10,
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    signInText: {
        textAlign: "center",
        color: "#333",
    },
    link: {
        color: "#007BFF",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
});

export default SignupScreen;
