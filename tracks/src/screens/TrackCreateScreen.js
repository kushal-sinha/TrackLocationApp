import React from "react";

import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map"

const TrackCreateScreen = () => {
    return (
        <SafeAreaView style={{ marginTop: 28 }}>
            <Text h3>Create a Track</Text>
            <Map />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;