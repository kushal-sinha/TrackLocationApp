import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { StyleSheet, View } from "react-native";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <Spacer>
                <Text h3 style={styles.title}>
                    {headerText}
                </Text>
            </Spacer>
            <Spacer>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    leftIcon={{ type: "material", name: "email", color: "#007BFF" }}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer />
            <Input
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                leftIcon={{ type: "material", name: "lock", color: "#007BFF" }}
                inputStyle={styles.input}
                labelStyle={styles.label}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />


            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}

            <Spacer>
                <Button
                    title={submitButtonText}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={() => onSubmit({ email, password })}

                />
            </Spacer>
        </>
    )
}

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
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
    }
});

export default AuthForm;

