import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LightTheme } from "../configs/theme";


export default function Button({ text, onClick }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onClick} >
            <Text style={{ fontSize: 20, color: LightTheme.bg }} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginVertical: 10,
        backgroundColor: LightTheme.secondary,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 10
    }
})