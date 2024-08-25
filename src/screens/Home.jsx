import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image, FlatList, Pressable } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import { LightTheme } from "../configs/theme";

import Ionicon from "react-native-vector-icons/Ionicons"

import Logo from "../../assets/images/logo-rmd.png"
import { producteurs } from "../fake/data";

import Animated, {
    withDelay,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

import FloatingActionButton from "../components/FloatingActionButton";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Home({ navigation, route }) {

    const HomeHeader = ({ }) => {
        return (
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 10,
                height: 55,
                borderBottomWidth: 2,

                borderBottomColor: "#ddd",
                alignSelf: "center",
                alignItems: "center"
            }} >
                <Image
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                    resizeMode="cover"
                    source={Logo}
                />
                <Text style={{ fontSize: 20, color: LightTheme.textColor, fontWeight: "600" }} >Mes Producteurs</Text>
                <TouchableOpacity>
                    <Ionicon
                        name="person-circle-outline"
                        size={40}
                        color={LightTheme.primary}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const ProducerItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                flexDirection: "row",
                width: "95%",
                overflow: "hidden",
                borderRadius: 8,
                alignSelf: "center",
                marginVertical: 10,
                elevation: 2,
                height: 100,
                backgroundColor: LightTheme.bg,
            }} >
                <Image
                    source={item?.imagePrimary}
                    style={{ width: 100, height: 100, resizeMode: "cover" }}
                />
                <View style={{
                    padding: 10
                }} >
                    <Text style={{ color: LightTheme.textColor, fontSize: 14 }} >Prénom: {item?.firstname}</Text>
                    <Text style={{ color: LightTheme.textColor, fontSize: 14 }} >Nom: {item?.lastname}</Text>
                    <View>
                        <Text style={{ color: LightTheme.textColor, fontSize: 14, fontWeight: "bold" }} >Produits :</Text>
                        <View style={{ flexDirection: "row", }} >
                            {item?.products && item.products.map(prod =>
                                <Text key={"PR-" + prod.id} style={{ color: LightTheme.textColor }} >
                                    {prod.name + "  "}
                                </Text>)}
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    const EmptyList = () => {
        return (
            <View>
                <Text>Aucun Producteur</Text>
            </View>
        )
    }

    const isExpanded = useSharedValue(false);

    const handlePress = () => {
        isExpanded.value = !isExpanded.value;
    };

    const plusIconStyle = useAnimatedStyle(() => {
        const moveValue = interpolate(Number(isExpanded.value), [0, 1], [0, 2]);
        const translateValue = withTiming(moveValue);
        const rotateValue = isExpanded.value ? '45deg' : '0deg';

        return {
            transform: [
                { translateX: translateValue },
                { rotate: withTiming(rotateValue) },
            ],
        };
    });

    const ProducerList = ({ data }) => {
        return (
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={ProducerItem}
                ListEmptyComponent={EmptyList}
                ListFooterComponent={<View style={{ height: 20 }} />}
            />
        )
    }

    return (
        <View style={styles.container} >
            <HomeHeader />
            <ProducerList
                data={producteurs}
            />
            <View style={styles.buttonContainer}>
                <AnimatedPressable
                    onPress={handlePress}
                    style={[styles.shadow, mainButtonStyles.button]}>
                    <Animated.Text style={[plusIconStyle, mainButtonStyles.content]}>
                        +
                    </Animated.Text>
                </AnimatedPressable>

                <FloatingActionButton
                    isExpanded={isExpanded}
                    index={3}
                    buttonLetter={'Nouveau'}
                />

                <FloatingActionButton
                    isExpanded={isExpanded}
                    index={2}
                    buttonLetter={'Rechercher'}
                />

                <FloatingActionButton
                    isExpanded={isExpanded}
                    index={1}
                    buttonLetter={'Mon Profil'}
                />


            </View>
        </View>
    )
}

const mainButtonStyles = StyleSheet.create({
    button: {
        zIndex: 1,
        height: 56,
        width: 56,
        borderRadius: 100,
        backgroundColor: LightTheme.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        fontSize: 24,
        color: '#f8f9ff',
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: LightTheme.bg
    },
    sectionHeader: {
        position: "absolute",
        backgroundColor: "#fff",
        top: -12,
        fontSize: 16,
        fontWeight: "bold",
        left: 10
    },
    mainContainer: {
        position: 'relative',
        height: 100,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: LightTheme.primary,
        position: 'absolute',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -2,
        flexDirection: 'row',
    },
    buttonContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bottom: 20,
        right: 20
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -0.5, height: 3.5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    content: {
        color: '#f8f9ff',
        fontWeight: 500,
    },
})