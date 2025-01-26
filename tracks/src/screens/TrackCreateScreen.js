import '../_mockLocation';
import React, { useContext, useCallback } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from "../hooks/useLocation";
import TrackForm from '../components/TrackForm';
import { FontAwesome } from 'react-native-vector-icons'

const { width } = Dimensions.get("window");

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView >
            <Text h3 style={styles.headerText}>Create a Track</Text>
            <Map />
            {err && <Text style={styles.errorText}>Please enable location services</Text>}
            <View style={styles.formWrapper}>
                <TrackForm />
            </View>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: "Add Track",
    tabBarIcon: <FontAwesome name="plus" size={20} color="black" />,
};


const styles = StyleSheet.create({
    headerText: {
        textAlign: "center",
        marginVertical: 15,
        color: "#333",
    },
    mapContainer: {
        marginHorizontal: 10,
        borderRadius: 10,
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginVertical: 10,
    },
    formWrapper: {
        width: width - 20,
    },
});

export default withNavigationFocus(TrackCreateScreen);
