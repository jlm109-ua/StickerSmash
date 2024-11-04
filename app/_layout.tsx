import { Stack } from "expo-router";
import { StyleSheet } from 'react-native';
import { setStatusBarStyle } from 'expo-status-bar';
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle('light');
    }, 0);
  }, []);

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