import { Stack } from "expo-router";
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: styles.head,
        headerStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  head: {
    fontWeight: 'bold',
  }
});