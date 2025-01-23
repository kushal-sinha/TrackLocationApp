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
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};
const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('Signup');
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


const signout = (dispatch) => async () => {
    // Clear the token from AsyncStorage or any local storage
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    // Optionally navigate to a login screen
    navigate('Signin');
};



export const { Provider, Context } = createDataContext(authReducer, { signin, signup, signout, clearErrorMessage, tryLocalSignin, signout }, { token: null, errorMessage: '' }
);