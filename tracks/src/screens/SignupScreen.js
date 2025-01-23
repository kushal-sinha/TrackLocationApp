import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <Spacer />
            <View behavior="height" style={styles.container}>
                <AuthForm headerText="Sign-Up for Tracker" onSubmit={signup} errorMessage={state.errorMessage} submitButtonText="sign-up" />
                <NavLink message="Already have an account" text="Sign in" routename="Signin" />

            </View>
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


});

export default SignupScreen;
