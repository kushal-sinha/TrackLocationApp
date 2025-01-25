import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext"; // Correct import
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
    const { createTrack } = useContext(TrackContext); // Use TrackContext for createTrack
    const {
        state: { locations, name },
    } = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(name, locations);
    };

    return [saveTrack];
};
