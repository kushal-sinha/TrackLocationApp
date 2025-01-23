import React, { useContext } from "react";
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Trigger clearErrorMessage on screen navigation */}
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <Spacer />
            <KeyboardAvoidingView behavior="height" style={styles.container}>
                <AuthForm
                    headerText="Sign In for Tracker"
                    onSubmit={signin}
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign In"
                />
                <NavLink
                    message="Don't have an account?"
                    text="Sign Up"
                    routename="Signup"
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        marginBottom: 200,
    },
});

export default SigninScreen;
