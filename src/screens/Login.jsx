import React, { useState } from "react"
import { StyleSheet, Text, View, ActivityIndicator } from "react-native"
import LoginScreen from "react-native-login-screen";
import { auth } from "../api";

export default function Login({ navigation }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container} >
            <LoginScreen
                logoImageSource={require('../../assets/images/logo-rmd.png')}
                disableEmailTooltip
                onLoginPress={() => {
                    setLoading(true);
                    if (username && password) {
                        auth(username, password)
                            .then(data => {
                                setLoading(false);
                                setUserInfo(data);
                                navigation.navigate("Home", data)
                            })
                            .catch(ex => {
                                setLoading(false);
                                console.log("EX: ", ex)
                            })
                    }
                }}

                onEmailChange={setUsername}
                onPasswordChange={setPassword}
                disableSignup
                disableDivider
                loginButtonText={"Se connecter"}
                emailPlaceholder="Utilisateur"
                passwordPlaceholder="Mot de passe"
                style={{ justifyContent: "center" }}
                disableSocialButtons
                enablePasswordValidation
            />
            <ActivityIndicator animating={loading} size={"small"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})