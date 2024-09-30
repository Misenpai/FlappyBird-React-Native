import { Stack } from 'expo-router';

export default function GameLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="Game"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
