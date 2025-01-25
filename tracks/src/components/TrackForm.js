import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, KeyboardAvoidingViewBase, KeyboardAvoidingViewComponent, ScrollView, StyleSheet } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <>
            <ScrollView>
                <KeyboardAvoidingView style={{ marginBottom: 200 }} behavior="height">
                    <Input
                        style={styles.input}
                        placeholder="Enter track name"
                        placeholderTextColor="#888"
                        onChangeText={changeName}
                        value={name}
                    />
                    {recording ? (
                        <Button
                            title="Stop Recording"
                            onPress={stopRecording}
                            titleStyle={styles.buttonText}
                            buttonStyle={styles.button}
                        />
                    ) : (
                        <Button
                            title="Start Recording"
                            buttonStyle={styles.button}
                            titleStyle={styles.buttonText}
                            onPress={startRecording}
                        />
                    )}
                    {
                        !recording && locations.length > 0 ? <Button onPress={saveTrack} buttonStyle={styles.button}
                            titleStyle={styles.buttonText} title="save recording" /> : null
                    }
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: "#333",
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#6c63ff",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 12,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});


export default TrackForm;
