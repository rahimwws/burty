import React, { useCallback, useRef, useState } from "react";
import { SearchInput } from "@/features/search/ui";
import ScreenLayout from "@/shared/ui/Layout";
import SearchList from "@/components/list/SearchList";
import { SearchInputRef } from "@/features/search/ui/SearchInput/SearchInput";
import { useFilteredSpaces } from "@/features/spaces";

const Search = () => {

  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<SearchInputRef | null>(null);
  const items: any[] = [{}];
  const {
    data: places,
    isLoading: placesLoading
  } = useFilteredSpaces({
    search: searchValue
  })

  const handleEditingEnd = useCallback(() => {
    if (searchRef.current)
      setSearchValue(searchRef.current.getValue())
  }, []);

  return (
    <ScreenLayout>
      <SearchInput
        ref={searchRef}
        onEndEditing={handleEditingEnd}
      />
      <SearchList
        items={
          searchValue && places?.data.length ?
            places.data : []
        }
        itemsLoading={placesLoading}
      />
    </ScreenLayout>
  );
};

export default Search;
