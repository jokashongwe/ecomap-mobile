import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import Ionicon from "react-native-vector-icons/Ionicons";
import { LightTheme } from "../configs/theme";


export default function TextField({ setText, placeholder, text, keyboardType, leftIcon, rightIcon, secureTextEntry }) {
    return (
        <View style={styles.container} >
            {leftIcon && <Ionicon color={LightTheme.primary} style={{ marginHorizontal: 10 }} size={24} name={leftIcon} />}
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
                placeholder={placeholder}
                style={{ color: LightTheme.textColor, fontSize: 17, flex: 1 }}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
            {rightIcon && <Ionicon name={rightIcon} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: LightTheme.bg,
        width: '90%',
        marginVertical: 10,
        elevation: 2
    }
})