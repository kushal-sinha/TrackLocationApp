import { useState, useEffect } from "react";
import * as Location from 'expo-location';


export default (callback) => {
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            // Request location permissions
            const { status } = await Location.requestForegroundPermissionsAsync();
            await Location.watchPositionAsync({
                timeInterval: 1000,
                accuracy: Location.Accuracy.BestForNavigation,
                distanceInterval: 1,
            }, callback
            );
            if (status !== 'granted') {
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr(e);
        }
    };
    useEffect(() => {
        startWatching();
    }, []);
    return [err];
}