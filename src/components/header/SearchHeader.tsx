import { View, Text, TextInput } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/shared/lib/theme";
import SearchSvg from "@/shared/assets/icons/interface/SearchSvg";
import { useAppNavigation } from "@/shared/lib/navigation";

const SearchHeader = ({
  map = false,
  value,
  setValue,
}: {
  map?: boolean;
  value?: string;
  setValue?: (text: string) => void;
}) => {
  const insects = useSafeAreaInsets();
  const navigation = useAppNavigation();
  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        marginTop: insects.top,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 7,
          backgroundColor: colors.dark,
          alignItems: "center",
          height: 45,
          borderRadius: 7,
          paddingLeft: 10,
        }}
      >
        <SearchSvg size={25} fill="#FFFFFF80" />
        <TextInput
          style={{
            width: map ? "90%" : "95%",
            height: 45,
            backgroundColor: colors.dark,
            borderRadius: 7,
            fontSize: 16,
            color: colors.light,
            fontFamily: "r",
          }}
          placeholder="Search your place"
          placeholderTextColor={"#FFFFFF80"}
          onPress={() => map && navigation.navigate("Search")}
          autoFocus={!map}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
};

export default SearchHeader;
