import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { LightTheme } from "../configs/theme";



export default function ImageLoader({ img, desc, btnText, onPress }) {
    return (
        <View style={{
            margin: 10,
            flexWrap: "wrap",
            backgroundColor: "#FFF",
            flexDirection: "row",
            padding: 10,
            borderRadius: 10,
        }} >
            <Image source={img} style={{ height: 100, width: 100, borderRadius: 5, backgroundColor: "#e0dede" }} />
            <View style={{ marginHorizontal: 10, width: "60%" }} >
                <CustomButton
                    name={btnText}
                    textStyle={{
                        fontSize: 14,
                        textTransform: "uppercase",
                        color: "#FFF"
                    }}
                    leftIcon={"upload"}
                    onPress={onPress}
                    containerStyle={{
                        width: "80%",
                        backgroundColor: LightTheme.secondary,
                        marginVertical: 5
                    }}
                />
                <Text style={{ fontSize: 12 }}>{desc}</Text>
            </View>

        </View>
    )
}