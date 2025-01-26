import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { FontAwesome, Ionicons } from "react-native-vector-icons";

// Define trackListFlow stack navigator
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

// Assign navigation options to trackListFlow with a beautiful icon and custom color
trackListFlow.navigationOptions = {
  tabBarIcon: <Ionicons name="ios-list" size={24} color="#fff" />,
  tabBarLabel: "Track List",
  tabBarOptions: {
    activeTintColor: "#fff",
    inactiveTintColor: "#c1c1c1",
    style: {
      backgroundColor: "#4CAF50", // Green color for the active tab
    },
  },
};

// Add a custom tab bar with icons for other tabs
const switchNavigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator(
    {
      trackListFlow,
      TrackCreate: {
        screen: TrackCreateScreen,
        navigationOptions: {
          tabBarIcon: <FontAwesome name="plus" size={24} color="white" />,
          tabBarLabel: "Create Track",
        },
      },
      Account: {
        screen: AccountScreen,
        navigationOptions: {
          tabBarIcon: <Ionicons name="ios-settings" size={24} color="white" />,
          tabBarLabel: "Account",
        },
      },
    },
    {
      activeColor: "#fff", // White color for active icon
      inactiveColor: "#c1c1c1", // Gray for inactive icon
      barStyle: { backgroundColor: "#333" }, // Dark background for the tab bar
      shifting: true, // Tab icons shift on active state
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
