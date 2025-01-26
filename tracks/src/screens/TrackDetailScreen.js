import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import { AntDesign } from 'react-native-vector-icons';  // Importing a different icon set

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id');
    const { state } = useContext(TrackContext);
    const track = state.find((t) => t._id === _id);
    const initalCoords = track.locations[0].coords;

    if (!track) {
        return <Text style={{ fontSize: 30 }}>Track not found</Text>;
    }

    // Optional: Calculate the distance if your data supports it
    const totalDistance = track.locations.reduce((total, loc, index, arr) => {
        if (index === 0) return total;
        const prevLoc = arr[index - 1];
        const distance = Math.sqrt(
            Math.pow(loc.coords.latitude - prevLoc.coords.latitude, 2) +
            Math.pow(loc.coords.longitude - prevLoc.coords.longitude, 2)
        );
        return total + distance;
    }, 0).toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.trackTitle}>{track.name}</Text>

            {/* Optional: Display Track Details */}
            <Text style={styles.trackDetails}>Total Distance: {totalDistance} km</Text>

            {/* Map View */}
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initalCoords,
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} strokeColor="#FF6347" strokeWidth={4} />
            </MapView>

            {/* Optional: Action Button */}
            <Button title="Go Back" onPress={() => navigation.goBack()} />

            {/* Back to Track List Button (with an Icon) */}
            <AntDesign name="arrowleft" size={30} color="black" style={styles.backIcon} onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    trackTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    trackDetails: {
        fontSize: 18,
        color: '#555',
        marginBottom: 20,
    },
    map: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    backIcon: {
        marginTop: 10,
        padding: 10,
    }
});

export default TrackDetailScreen;
