import React from "react";
import { StyleSheet, View } from "react-native";

const Spacer = ({ children = null }) => {
    return <View style={{ margin: 15 }}>{children}</View>;
};


export default Spacer;