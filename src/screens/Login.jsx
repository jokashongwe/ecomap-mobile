import React, { useState } from "react"
import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView } from "react-native"
//import LoginScreen from "react-native-login-screen";
import { auth } from "../api";
import TextField from "../components/TextField";
import { LightTheme } from "../configs/theme";

import Logo from "../../assets/images/logo-rmd.png"
import Button from "../components/Button";

export default function Login({ navigation }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    return (
        <ScrollView style={styles.container} >
            <View style={{ flex: 1, marginVertical: "30%", alignItems: "center" }} >
                <View style={{ flexDirection: "row", width: "90%", overflow: "hidden", alignItems: "center" }} >
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                        resizeMode="cover"
                        source={Logo}
                    />
                    <View style={{ marginHorizontal: 10 }} >
                        <Text style={{ fontWeight: "bold", fontSize: 34, color: LightTheme.textColor }} >Bienvenue!</Text>
                        <Text style={{ color: LightTheme.textColor, fontSize: 14, marginBottom: 5, width: "80%" }} >BeID est le système d'identification des
                            producteurs en RDC.  </Text>
                    </View>
                </View>
                <TextField
                    text={username}
                    setText={setUsername}
                    leftIcon={"person-circle"}
                    placeholder={"Utilisateur"}
                />
                <TextField
                    text={password}
                    setText={setPassword}
                    leftIcon={"lock-closed"}
                    secureTextEntry
                    placeholder={"Mot de passe"}
                />
                <Button
                    onClick={() => {
                        navigation.navigate("Home")
                    }}
                    text={"Se connecter"}
                />
            </View>

            <ActivityIndicator animating={loading} size={"small"} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LightTheme.bg
    }
})