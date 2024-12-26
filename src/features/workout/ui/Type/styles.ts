import { colors } from "@/shared/lib/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    type: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: "31%",
        height: 40,
        backgroundColor: colors.dark
    },
    type_active: {
        backgroundColor: colors.primary
    }
});

export default styles;