import AsyncStorage from "@react-native-async-storage/async-storage";

export const recentSearchHistory = {
    storageKey: "recentSearches",

    async load(): Promise<string[]> {
        const storedSearches = await AsyncStorage.getItem(this.storageKey);
        return storedSearches ? JSON.parse(storedSearches) : [];
    },

    async add(search: string): Promise<string[]> {
        const currentSearches = await this.load();
        const updatedSearches = [
            search,
            ...currentSearches.filter((item) => item !== search),
        ].slice(0, 5); // Limit to 5 items
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(updatedSearches));
        return updatedSearches;
    },
 
    async clear(): Promise<void> {
        await AsyncStorage.removeItem(this.storageKey);
    },
};