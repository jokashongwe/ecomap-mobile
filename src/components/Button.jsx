import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LightTheme } from "../configs/theme";


export default function Button({ text, onClick, circle }) {
    return (
        <TouchableOpacity style={[styles.container, { borderRadius: circle ? 30 : 10, width: circle ? 50 : "50%" }]} onPress={onClick} >
            <Text style={{ fontSize: 20, color: LightTheme.bg }} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginVertical: 10,
        backgroundColor: LightTheme.secondary,
        justifyContent: "center",
        alignItems: "center",
    }
})