import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const HomeLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="game-home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="leaderboard-screen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="game-end"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}

export default HomeLayout;