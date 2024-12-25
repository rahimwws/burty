import { View, TextInput } from "react-native";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/shared/lib/theme";
import SearchSvg from "@/shared/assets/icons/interface/SearchSvg";
import { useAppNavigation } from "@/shared/lib/navigation";
import styles from "./style";

type SearchInputProps = {
    /** @default false */
    map?: boolean;
    searchValue?: string
    onEndEditing?: Function
}

export type SearchInputRef = {
    getValue: () => string
}

const SearchInput = forwardRef<SearchInputRef, SearchInputProps>(({
    map = false,
    searchValue = "",
    onEndEditing
}, ref) => {
    const [value, setValue] = useState(searchValue);
    const insects = useSafeAreaInsets();
    const navigation = useAppNavigation();

    useEffect(() => {
        setValue(searchValue)
    }, [searchValue])

    useImperativeHandle(ref, () => {
        return {
            getValue: () => {
                return value
            }
        }
    })

    return (
        <View
            style={[
                styles.wrap,
                { marginTop: insects.top + 10, }
            ]}
        >
            <View
                style={[
                    styles.search,
                    {
                        backgroundColor: colors.dark,
                    }
                ]}
            >
                <SearchSvg size={25} fill="#FFFFFF80" />
                <TextInput
                    style={[
                        styles.input,
                        {
                            width: map ? "90%" : "95%",
                            color: colors.light,
                        }
                    ]}
                    value={value}
                    placeholder="Search your place"
                    placeholderTextColor={"#FFFFFF80"}
                    onPress={() => map && navigation.navigate("Search")}
                    autoFocus={!map}
                    onChangeText={setValue}
                    onEndEditing={() => onEndEditing?.()}
                />
            </View>
        </View>
    );
});

export default SearchInput;
