import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SearchHeader } from "@/components/header";
import ScreenLayout from "@/shared/ui/Layout";
import SearchList from "@/components/list/SearchList";

const Search = () => {
  const [value, setValue] = useState("");
  const items: any[] = [{}];
  console.log(value);

  return (
    <ScreenLayout>
      <SearchHeader value={value} setValue={(text) => setValue(text)} />
      <SearchList items={value ? items : []} />
    </ScreenLayout>
  );
};

export default Search;
