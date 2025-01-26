import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext"; // Correct import
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from '../navigationRef'
export default () => {
    const { createTrack } = useContext(TrackContext); // Use TrackContext for createTrack
    const {
        state: { locations, name }, reset
    } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
        navigate('TrackList');
    };

    return [saveTrack];
};
