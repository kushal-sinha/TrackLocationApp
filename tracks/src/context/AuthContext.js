import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case "signin":
        case "signup":
            return { errorMessage: "", token: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        default:
            return state;
    }
};
const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        // Send a POST request to the server with email and password
        const response = await trackerApi.post('/signup', { email, password });
        // Store the token in AsyncStorage and update the state
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });

        // Navigate to the next screen
        navigate('TrackList');
    } catch (err) {
        // Dispatch an error message to update the state
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
};



const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');



    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
    }


}


const signout = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(authReducer, { signin, signup, signout, clearErrorMessage }, { token: null, errorMessage: '' }
);