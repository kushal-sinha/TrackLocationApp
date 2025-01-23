import React, { useContext } from "react";
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm"
const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Spacer />
            <KeyboardAvoidingView behavior="height" style={styles.container}>
                <AuthForm headerText="Sign-up" onSubmit={signup} errorMessage={state.errorMessage} submitButtonText="sign-up" />
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
            </KeyboardAvoidingView>
        </SafeAreaView>
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
