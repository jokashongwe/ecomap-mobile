import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Alert } from "react-native"
import { Input } from '@rneui/themed';
import { Icon } from "@rneui/base";
import TextField from "../components/TextField";
import Button from "../components/Button";
import DateField from "../components/DateField";
import RNPickerSelect from 'react-native-picker-select';
import { getProducts } from "../api";

export default function Home({ navigation, route }) {

    const { token } = route.params;

    const [stepIndex, setStepIndex] = useState(0);
    const [identity, setIdentity] = useState({});
    const [address, setAddress] = useState({});
    const [fields, setFields] = useState([])

    ///console.log("Token: ", token);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(token)
            .then(data => {
                if (data) {
                    let elts = []
                    
                    data.data.forEach((it) => {
                        elts.push({
                            'label': it.name,
                            'value': it.id
                        })
                    })
                    setProducts(elts);
                }
            })
            .catch(e => {
                console.log(e);
                Alert.alert("Erreur", "Impossible de charger le produits");
            })
    }, [])



    const renderIdentification = () => {
        return (
            <View style={{ justifyContent: "flex-start", flex: 1, paddingTop: 20 }} >
                <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", marginVertical: 30 }} >Formulaire d'Identification</Text>
                <View style={{ margin: 10, paddingHorizontal: 10, paddingTop: 10 }} >
                    <TextField
                        placeholder="Prénom"
                    />
                    <TextField
                        placeholder="Nom"
                    />

                    <TextField
                        placeholder="Postnom"
                    />
                    <TextField
                        placeholder="N° Téléphone"
                    />
                    <TextField
                        placeholder="Nombre d'enfants"
                        keyboardType={"numeric"}
                    />
                    <TextField
                        placeholder="Revenu Mensuel"
                        keyboardType={"numeric"}
                    />
                    <Text style={styles.sectionHeader}  >{stepIndex + 1} - Informations Personnelles</Text>
                </View>
                <View style={{ width: '50%', alignSelf: 'flex-end' }} >
                    <Button mid text={stepIndex == 5 ? "Terminer" : "Suivant"} onPress={() => {
                        setStepIndex(stepIndex + 1)
                    }} />
                </View>
            </View>
        )
    }

    const renderAdresse = () => {
        return (
            <View style={{ justifyContent: "flex-start", flex: 1, paddingTop: 20, }} >
                <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", marginVertical: 30 }} >Formulaire d'Identification</Text>
                <View style={{ margin: 10, paddingHorizontal: 10 }} >
                    <TextField
                        placeholder="Province"
                    />
                    <TextField
                        placeholder="Territoire"
                    />

                    <TextField
                        placeholder="Secteur"
                    />
                    <TextField
                        placeholder="Village"
                    />
                    <Text style={styles.sectionHeader}  >{stepIndex + 1} - Adresse Personnelle</Text>
                </View>
                <View style={{ width: 200, alignSelf: 'flex-end', flexDirection: "row", columnGap: 10, marginRight: '30%' }} >
                    <Button color={"#999"} mid text={"Précédent"} onPress={() => {
                        setStepIndex(stepIndex - 1)
                    }} />
                    <Button mid text={stepIndex == 5 ? "Terminer" : "Suivant"} onPress={() => {
                        setStepIndex(stepIndex + 1)
                    }} />
                </View>
            </View>
        )
    }

    const renderFields = () => {
        return (
            <View style={{ justifyContent: "flex-start", flex: 1, paddingTop: 20 }} >
                <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", marginVertical: 30 }} >Formulaire d'Identification</Text>
                <View style={{ margin: 10, paddingHorizontal: 10 }} >
                    <TextField
                        keyboardType={"numeric"}
                        placeholder="Surface du Champ"
                    />
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={products}
                    />

                    <TextField
                        placeholder="Secteur"
                    />
                    <TextField
                        placeholder="Village"
                    />
                    <Text style={styles.sectionHeader}  >{stepIndex + 1} - Exploitations</Text>
                </View>
                <View style={{ width: 200, alignSelf: 'flex-end', marginRight: '30%', flexDirection: 'row', columnGap: 10 }} >
                    <Button mid color={"#999"} text={"Précédent"} onPress={() => {
                        setStepIndex(stepIndex - 1)
                    }} />
                    <Button mid text={stepIndex == 5 ? "Terminer" : "Suivant"} onPress={() => {
                        setStepIndex(stepIndex + 1)
                    }} />
                </View>
            </View>
        )
    }

    const RenderSteps = ({ index }) => {
        switch (index) {
            case 0:
                return renderIdentification()
            case 1:
                return renderAdresse()
            case 2:
                return renderFields()
            default:
                break;
        }
        return <View><Text>Not Found!</Text></View>
    }

    return (
        <View style={styles.container} >
            <RenderSteps index={stepIndex} />
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