import * as Location from 'expo-location'; // Correct import for location APIs

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 77.49932756626667 + increment * tenMetersWithDegrees,
            latitude: 12.905126323015455 + increment * tenMetersWithDegrees,
        }

    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000)