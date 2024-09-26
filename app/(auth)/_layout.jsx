import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Layout = () => {
    return (
        <Stack>
        <Stack.Screen
            name = "sign-in"
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen
            name = "sign-up"
            options={{
                headerShown:false
            }}
        />
        <StatusBar hidden/>
    </Stack>
    );
}

export default Layout;
