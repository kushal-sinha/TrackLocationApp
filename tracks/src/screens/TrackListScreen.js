import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Text style={styles.title}>Your Tracks</Text>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("TrackDetail", { _id: item._id })}
                        >
                            <View style={styles.card}>
                                <Text style={styles.trackName}>{item.name}</Text>
                                <Text style={styles.trackDetail}>Tap to view details</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

TrackListScreen.navigationOptions = {
    title: "Tracks",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    trackName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#444",
    },
    trackDetail: {
        fontSize: 14,
        color: "#888",
        marginTop: 5,
    },
});

export default TrackListScreen;
