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
}

const SearchCard = ({
    recent = false,
    txt
}: SearchCardProps) => {
    return (
        <TouchableOpacity
            style={styles.card}
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