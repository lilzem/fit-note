import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useRef, useState } from "react";
import Search from "../../components/Search";
import FoodItem from "../../components/FoodItem";
import axios from "../../api/axios";
import useDebounce from "../../hooks/useDebounce";
import debounce from "lodash.debounce";

const nutrition = () => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchFoods = (search) => {
        axios
            .get(`/api/foods/search?ingr=${search}`)
            .then((res) => setFoods([...res.data.foods]))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    const debouncedSearch = useRef(debounce(searchFoods, 1000));

    const handleSearch = (text) => {
        debouncedSearch.current.cancel();

        if (!text) {
            setFoods([]);
            return;
        }

        setIsLoading(true);
        debouncedSearch.current(text);
    };

    const saveFood = (item) => {
        axios
            .post("/api/foods", item)
            .then(() => Alert.alert("success", "food has been saved"))
            .catch((err) => console.log(err));
    };

    return (
        <SafeAreaView className="bg-black h-[calc(100%-74)] flex-1 items-center justify-between px-5 py-5">
            <Search
                placeholder="Search for food..."
                handleChange={handleSearch}
            />
            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <FlatList
                    className="mb-[74]"
                    data={foods}
                    renderItem={({ item }) => (
                        <FoodItem {...item} onPress={() => saveFood(item)} />
                    )}
                    keyExtractor={(item) => item.foodId}
                />
            )}
        </SafeAreaView>
    );
};

export default nutrition;
