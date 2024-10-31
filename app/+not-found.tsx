import { View, Text, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
    return (
        <>
            <Stack.Screen options={{ title: "Whoops! Not found" }} />
            <View style={styles.container}>
                <Text style={styles.text}>Whoops! This page does not exist.</Text>
                <Link
                    href="/"
                    style={styles.link}
                >Go Back Home</Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
    },
    link: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "skyblue",
    }
});