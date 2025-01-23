import React from "react";

import { StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 30 }}>
            TrackListScreen
        </Text>
        <Button title="Go to Track Detail" onPress={() => navigation.navigate("TrackDetail")} />
    </>
}

const styles = StyleSheet.create({

})

export default TrackListScreen;