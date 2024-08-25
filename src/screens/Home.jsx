import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Alert } from "react-native"
import RNPickerSelect from 'react-native-picker-select';

export default function Home({ navigation, route }) {

    return (
        <View style={styles.container} >
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#fff"
    },
    sectionHeader: {
        position: "absolute",
        backgroundColor: "#fff",
        top: -12,
        fontSize: 16,
        fontWeight: "bold",
        left: 10
    }
})