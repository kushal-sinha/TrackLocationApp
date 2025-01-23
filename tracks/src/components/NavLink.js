import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routename, message }) => {
    return (
        <Spacer>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(routename)}>
                <Text style={styles.signInText}>
                    {message}?{' '}
                    <Text style={styles.link}>
                        {text}
                    </Text>
                </Text>
            </TouchableOpacity>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    signInText: {
        fontSize: 16,
        color: '#333',
    },
    link: {
        color: '#007BFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default withNavigation(NavLink);
