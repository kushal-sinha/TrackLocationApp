import React, { useContext, useEffect, useRef } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle } from 'react-native-maps';
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);
    const mapRef = useRef(null);

    useEffect(() => {
        if (currentLocation && mapRef.current) {
            mapRef.current.getMapBoundaries().then((bounds) => {
                const { northEast, southWest } = bounds;
                const { latitude, longitude } = currentLocation.coords;

                const isOutOfBounds =
                    latitude > northEast.latitude || latitude < southWest.latitude ||
                    longitude > northEast.longitude || longitude < southWest.longitude;

                if (isOutOfBounds) {
                    mapRef.current.animateToRegion({
                        ...currentLocation.coords,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }, 1000);
                }
            });
        }
    }, [currentLocation]);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    return (
        <MapView
            ref={mapRef}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            style={styles.map}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,0.3)"
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;
