import { useState, useEffect } from "react";
import * as Location from 'expo-location';


export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);
    const startWatching = async () => {
        try {
            // Request location permissions
            const { status } = await Location.requestForegroundPermissionsAsync();
            const sub = await Location.watchPositionAsync({
                timeInterval: 1000,
                accuracy: Location.Accuracy.BestForNavigation,
                distanceInterval: 1,
            }, callback
            );
            setSubscriber(sub);
            if (status !== 'granted') {
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr(e);
        }
    };
    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        }
        else {
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack]);
    return [err];
}