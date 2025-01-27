import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image, Animated, Easing } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);
    const fadeAnim = new Animated.Value(0); // Initial opacity for fade-in effect
    const scaleAnim = new Animated.Value(0.5); // Initial scale for zoom effect

    useEffect(() => {
        // Animate fade-in and scaling
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1.5),
                useNativeDriver: true,
            }),
        ]).start();

        // Trigger navigation after 2 seconds
        const timer = setTimeout(() => {
            tryLocalSignin();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.logoContainer,
                    { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
                ]}
            >
                <Image
                    source={require("../../assests/map.jpg")} // Add your logo/image here
                    style={styles.logo}
                />
                <Text style={styles.title}>TrackMate</Text>
            </Animated.View>
            <Text style={styles.subtitle}>Welcome 😊!!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#007BFF",
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "#fff",
        marginBottom: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "300",
        color: "#f0f0f0",
        marginTop: 20,
        textAlign: "center",
        paddingHorizontal: 40,
    },
});

export default ResolveAuthScreen;
