import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrap: {
        width: "100%",
        position: "absolute",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    search: {
        flexDirection: "row",
        gap: 7,
        alignItems: "center",
        height: 45,
        borderRadius: 7,
        paddingLeft: 10,
    },
    input: {
        height: 45,
        fontSize: 16,
        fontFamily: "r",
    }
})

export default styles;