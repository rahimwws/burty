import React, { useCallback, useEffect, useRef, useState } from "react";
import { SearchInput } from "@/features/search/ui";
import ScreenLayout from "@/shared/ui/Layout";
import SearchList from "@/components/list/SearchList";
import { SearchInputRef } from "@/features/search/ui/SearchInput/SearchInput";
import { useFilteredSpaces } from "@/features/spaces";
import { recentSearchHistory } from "@/features/search/model/recentSearchHistory";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<SearchInputRef | null>(null);

  const {
    data: places,
    isLoading: placesLoading,
    isSuccess: placesGotSuccess,
  } = useFilteredSpaces({
    search: searchValue,
    maxDistance: 100000
  });

  const handleEditingEnd = useCallback(() => {
    if (searchRef.current) {
      setSearchValue(searchRef.current.getValue())
    }
  }, []);

  useEffect(() => {
    if (placesGotSuccess && searchValue.trim()) {
      recentSearchHistory.add(searchValue);
    }
  }, [placesGotSuccess])

  return (
    <ScreenLayout>
      <SearchInput
        ref={searchRef}
        searchValue={searchValue}
        onEndEditing={handleEditingEnd}
      />
      <SearchList
        items={
          searchValue && places?.data.length ?
            places.data : []
        }
        itemsLoading={placesLoading}
        isSearching={!!searchValue.length}
        onPress={(searchValue) => setSearchValue(searchValue)}
      />
    </ScreenLayout>
  );
};

export default Search;
