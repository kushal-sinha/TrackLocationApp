import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case "add_track":
            return { ...state, tracks: [...state.tracks, action.payload] };
        default:
            return state;
    }
};

const fetchTracks = dispatch => () => {
    // Fetch logic here if needed
};

const createTrack = dispatch => async (name, locations) => {
    try {
        await trackerApi.post('/tracks', { name, locations });
    } catch (err) {
        console.error("Error creating track:", err.message);
    }
};


export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    { tracks: [] }
);
