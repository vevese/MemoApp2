import React from 'react';
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LogInScreen() {
    return (
        <View style={styles.container}>
            <AppBar/>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value="Email Address"/>
                <TextInput style={styles.input} value="Password"/>
                <Button label="submit"/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Sign up here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8'
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footerText: {
        fontSize: 14,
        lineheight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 15,
        lineHeight: 24,
        color: '#467fd3',
        bottom: 4,
    },
    footer: {
        flexDirection: 'row',
    }
});
