import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];
    for (let i = 0; i < 20; i++) {
        points.push({
            latitude: 12.905 + i * 0.001,
            longitude: 77.499298 + i * 0.001
        })
    }
    return (
        <MapView initialRegion={{
            latitude: 12.905,
            longitude: 77.499298,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }} style={styles.map} >
            <Polyline coordinates={points} />
        </MapView>

    );
};

const styles = StyleSheet.create({

    map: {
        height: 300,
    },
});

export default Map;
