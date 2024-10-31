import { View, Text, Pressable, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
    label: string;
    theme?: "primary" | "secondary";
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme === "primary") {
        return (
            <View
                style={[
                    styles.buttonContainer,
                    { borderWidth: 4 },
                ]}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#fff' }]}
                    onPress={(onPress)}>
                    <FontAwesome name="picture-o" size={18} color="#000" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#000' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
    },
    button: {
        backgroundColor: "#000",
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        flexDirection: "row",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontWeight: "bold",
    },
})