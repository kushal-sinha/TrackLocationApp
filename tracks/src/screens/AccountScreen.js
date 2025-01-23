import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../../assets/student-avatar.jpg")} // Add a user avatar image
                style={styles.avatar}
            />
            <Text style={styles.title}>Welcome Back!</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Sign Out"
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={signout}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4F4F4",
        padding: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 30,
        textAlign: "center",
    },
    buttonContainer: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default AccountScreen;
