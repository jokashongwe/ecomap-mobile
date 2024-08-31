import { ScrollView, StyleSheet, Text, View, ActivityIndicator, Alert } from "react-native";
import TextField from "./TextField";
import { useState } from "react";
import Button from "./Button";

import axios from "axios";

import RNPickerSelect from 'react-native-picker-select';
import { LightTheme } from "../configs/theme";

import GetLocation from 'react-native-get-location'
import { createdProducer } from "../api";

export default function ProducerForm({ producer, mode, navigation }) {

    const [loading, setLoading] = useState(false)

    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [age, setAge] = useState()
    const [phone, setPhone] = useState()
    const [province, setProvince] = useState()
    const [village, setVillage] = useState()
    const [secteur, setSecteur] = useState()
    const [territoire, setTerritoire] = useState()


    const [surface, setSurface] = useState()
    const [cultureText, setCultureText] = useState()
    const [qteText, setQte] = useState()
    const [cultures, setCultures] = useState([])

    const [averageMonthIncome, setAverageMonthIncome] = useState()
    const [numberOfChildren, setNumberOfChildren] = useState(0)

    const [engrais, setEngrais] = useState([])
    const [season, setSeason] = useState([])
    const [engraisText, setEngraisText] = useState()

    const statuts = [{ label: 'Sémi', value: "SEMI" }, { label: 'Moisson', value: 'MOISSON' }, { label: 'Laboure', value: 'LABOUR' }]
    const [selectedStatus, setSelectedStatus] = useState(null)

    const objectif = [{ label: 'Consommation', value: "CONSOM" }, { label: 'Commerce', value: 'COMM' }, { label: 'Conso. & Commerce', value: 'COMM_AND_CONSOM' }]
    const [selectedObjective, setSelectedObjective] = useState(null)

    const genderLabels = [{ label: 'Homme', value: "MALE" }, { label: 'Femme', value: 'FEMALE' }]
    const [selectedGender, setSelectedGender] = useState(null)

    const maritalLabels = [{ label: 'Marié', value: "MARIED" }, { label: 'Célibataire', value: 'SINGLE' }, { label: 'Veuf/Veuve', value: 'VEUF' }, { label: 'Divorcé', value: 'DIVORCED' }]
    const [maritalStatus, setMaritalStatus] = useState(null)

    const handicapLabels = [{ label: 'Oui', value: "YES" }, { label: 'Non', value: 'NO' }]
    const [handicap, setHandicap] = useState(null)

    const handleSaveClick = async () => {
        try {
            setLoading(true)
            const location = await GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 60000,
            })

            let fertilizer = ""
            engrais.forEach(eng => fertilizer += eng)

            const birthdate = (new Date().getFullYear() - age) + "-01-01"  

            console.log({birthdate})

            let data = {
                "producer": {
                    "firstname": name,
                    "lastname": lastName,
                    "middlename": "",
                    "phone": phone,
                    "gender": selectedGender,
                    "numberOfChildren": 0,
                    "maritalStatus": maritalStatus,
                    "birthdate": birthdate,
                    "handicap": handicap,
                    "averageMonthIncome": averageMonthIncome,
                    "corporations": null,
                    "address": {
                        "country": "DR Congo",
                        "province": province,
                        "city": "NA",
                        "territory": territoire,
                        "sector": secteur,
                        "village": village
                    }
                },
                
                "fields": [
                    {
                        "surface_acres": surface,
                        "status": selectedStatus,
                        "products": cultures,
                        "productId": "",
                        "address": {
                            "province": province,
                            "territory": territoire,
                            "district": territoire,
                            "sector": secteur,
                            "village": village,
                            "lat": location.latitude,
                            "lng": location.longitude
                        },
                        productionPhases: [{
                            "title": selectedStatus,
                            "seedSource": 'N.A',
                            "operationnalMode": 'N.A',
                            "season": 'A',
                            "year": (new Date().getFullYear()),
                            "fertilizer": fertilizer,
                        }]
                    }
                ],
            }

            let resD = await createdProducer(data, null)
            
            setLoading(false)

            navigation.navigate("Home")
        } catch (error) {
            console.log(error)
            Alert.alert("Erreur de connexion", "Impossible de sauvegarder les données!")
            setLoading(false)
        }
    }


    return (
        <ScrollView style={styles.container} >

            <View style={styles.section} >
                <Text style={{ fontSize: 16, color: "#333", fontWeight: "bold" }} >Informations Personnelles </Text>
                <TextField text={name} placeholder={"Prénom"} setText={setName} />
                <TextField text={lastName} placeholder={"Nom"} setText={setLastName} />
                <View style={styles.selectContainer} >
                    <RNPickerSelect
                        items={genderLabels}
                        placeholder={{ label: "Sexe", value: null }}
                        value={selectedGender}

                        onValueChange={value => {
                            setSelectedGender(value);
                        }}
                    />
                </View>
                <View style={styles.selectContainer} >
                    <RNPickerSelect
                        items={maritalLabels}
                        placeholder={{ label: "Etat Civil", value: null }}
                        value={maritalStatus}

                        onValueChange={value => {
                            setMaritalStatus(value);
                        }}
                    />
                </View>
                <TextField text={numberOfChildren} placeholder={"Nombre d'enfants"} setText={setNumberOfChildren} keyboardType={"numeric"} />
                <View style={styles.selectContainer} >
                    <RNPickerSelect
                        items={handicapLabels}
                        placeholder={{ label: "As-t-il un handicap ?", value: null }}
                        value={handicap}

                        onValueChange={value => {
                            setHandicap(value);
                        }}
                    />
                </View>
                <TextField text={age} placeholder={"Age"} setText={setAge} keyboardType={"numeric"} />
                <TextField text={averageMonthIncome} placeholder={"Revenu Moyen par Mois"} setText={setAverageMonthIncome} keyboardType={"numeric"} />

            </View>
            <View style={styles.section} >
                <TextField text={phone} placeholder={"N° Téléphone"} setText={setPhone} keyboardType={"phone-pad"} />
                <TextField text={province} placeholder={"Province"} setText={setProvince} />
                <TextField text={territoire} placeholder={"Térritoire/District"} setText={setTerritoire} />
                <TextField text={secteur} placeholder={"Secteur/Commune"} setText={setSecteur} />
                <TextField text={village} placeholder={"Village/quartier"} setText={setVillage} />
            </View>
            <View style={{ margin: 10, borderWidth: 1, borderColor: "#ddd" }} />
            <View style={styles.section} >
                <Text style={{ fontSize: 16, color: "#333", fontWeight: "bold" }} >Exploitations </Text>
                <TextField text={surface} placeholder={"Superficie (m2)"} setText={setSurface} keyboardType={"numeric"} />

                <View>
                    <Text style={{ fontSize: 16, color: "#333", fontWeight: "bold" }} >Liste des Produits Agricole: </Text>
                    {cultures.map((culture, index) => (
                        <Text style={{ color: '#333', fontSize: 14 }} key={"culture-" + index}>{'- ' + culture.nom + ' Qté: ' + culture.qte}</Text>
                    ))}
                </View>
                <View style={{ flexDirection: "row", columnGap: 2 }} >
                    <View style={{ width: '40%' }} >
                        <TextField text={cultureText} placeholder={"Produit"} setText={setCultureText} />
                    </View>
                    <View style={{ width: '40%' }} >
                        <TextField text={qteText} placeholder={"Qté Attendues"} setText={setQte} />
                    </View>
                    <View style={{ width: '40%' }} >

                        <Button circle text={'+'} onClick={() => {
                            const upperCultr = cultures.map(curl => curl.nom.toUpperCase())
                            if (cultureText && !upperCultr.includes(cultureText.toUpperCase())) {
                                setCultures([...cultures, { nom: cultureText, qte: qteText }])
                            }
                            setCultureText(null)
                        }} />
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 16, color: "#333", fontWeight: "bold" }} >Engrais/Fertilisants: </Text>
                    {engrais.map((engrai, index) => (
                        <Text style={{ color: '#333', fontSize: 14 }} key={"engr-" + index}>{(index + 1) + '. ' + engrai}</Text>
                    ))}
                </View>
                <View style={{ flexDirection: "row", columnGap: 2 }} >
                    <View style={{ width: '80%' }} >
                        <TextField text={engraisText} placeholder={"Engrais"} setText={setEngraisText} />
                    </View>
                    <View style={{ width: '40%' }} >
                        <Button circle text={'+'} onClick={() => {
                            const upperCultr = engrais.map(curl => curl.toUpperCase())
                            if (engraisText && !upperCultr.includes(engraisText.toUpperCase())) {
                                setEngrais([...engrais, engraisText])
                            }
                            setQte(null)
                            setEngraisText(null)
                        }} />
                    </View>
                </View>
                <View style={styles.selectContainer} >
                    <RNPickerSelect
                        items={statuts}
                        placeholder={{ label: 'Statut Exploitation', value: null }}
                        value={selectedStatus}

                        onValueChange={value => {
                            setSelectedStatus(value);
                        }}
                    />
                </View>
                <View style={styles.selectContainer} >
                    <RNPickerSelect
                        items={objectif}
                        placeholder={{ label: "Objectif", value: null }}
                        value={selectedObjective}

                        onValueChange={value => {
                            setSelectedObjective(value);
                        }}
                    />
                </View>

            </View>
            {loading && (
                <ActivityIndicator animating={loading} size={"large"} />
            )}
            <View style={[styles.section, { width: '100%', justifyContent: "center", alignItems: 'center' }]} >
                <Button text={'Enregistrer'} onClick={() => handleSaveClick()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    section: {
        paddingHorizontal: 20,
        paddingTop: 10
    },
    selectContainer: {
        height: 50,

        borderRadius: 8,
        backgroundColor: LightTheme.bg,
        width: '100%',
        marginVertical: 10,
        elevation: 2,
        paddingLeft: 10
    }
})