import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native'

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTintColor: "#fff",
                tabBarActiveTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor: "#000",
                    borderTopWidth: 1,
                    borderTopColor: "gray",
                },
                headerStyle: {
                    backgroundColor: "#000",
                    borderBottomWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerTitleStyle: styles.head,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
                    ),
                    tabBarShowLabel: false,
                }} />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    headerTitleStyle: styles.head,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={24} color={color} />
                    ),
                    tabBarShowLabel: false,
                }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    head: {
        fontWeight: 'bold',
    },
});