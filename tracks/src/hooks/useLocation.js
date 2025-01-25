import { useState, useEffect } from "react";
import * as Location from 'expo-location';


export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                // Request location permissions
                const { status } = await Location.requestForegroundPermissionsAsync();
                subscriber = await Location.watchPositionAsync({
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
        if (shouldTrack) {
            startWatching();
        }
        else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback]);
    return [err];
}