import { TouchableOpacity, View } from "react-native";
import Typography from "@/shared/ui/Typography";
import Recent from "@/shared/assets/icons/interface/Recent";
import { colors } from "@/shared/lib/theme";
import ArrowUp from "@/shared/assets/icons/interface/ArrowUp";
import Fire from "@/shared/assets/icons/interface/Fire";
import styles from "./styles";

type SearchCardProps = {
    /** @default false */
    recent?: boolean
    txt: string
    onPress?: () => void
}

const SearchCard = ({
    recent = false,
    txt,
    onPress
}: SearchCardProps) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => onPress?.()}
        >
            <View
                style={styles.content}
            >
                {recent ? (
                    <Recent size={20} fill={colors.light} />
                ) : (
                    <Fire size={22} fill={colors.light} />
                )}
                <Typography>{txt}</Typography>
            </View>
            <ArrowUp size={15} fill={colors.light} />
        </TouchableOpacity>
    );
};

export default SearchCard;