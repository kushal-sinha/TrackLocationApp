import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };

        default:
            return state;
    }

};
const signup = (dispatch) => async ({ email, password }) => {
    try {
        // Send a POST request to the server with email and password
        const response = await trackerApi.post('/signup', { email, password });

        // Log the server's response to check if the token is present
        console.log("Server Response:", response.data);

        // Store the token in AsyncStorage and update the state
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });

        // Navigate to the next screen
        navigate('TrackList');
    } catch (err) {
        // Log the error to see the details
        console.error("Signup Error:", err.response?.data || err.message);

        // Dispatch an error message to update the state
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
};



const signin = (dispatch) => {
    return ({ email, password }) => {

    }
}

const signout = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(authReducer, { signin, signup, signout }, { token: null, errorMessage: '' }
);