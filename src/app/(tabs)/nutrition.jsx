import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useRef, useState } from "react";
import Search from "../../components/Search";
import FoodSearchItem from "../../components/FoodSearchItem";
import axios from "../../api/axios";
import debounce from "lodash.debounce";
import { notify } from "react-native-notificated";

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
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        debouncedSearch.current(text);
    };

    const saveFood = (item) => {
        axios
            .post("/api/foods", item)
            .then(() =>
                notify("success", {
                    params: {
                        description: "Your meal has been added",
                        title: "Success",
                    },
                })
            )
            .catch((err) => console.log(err));
    };

    return (
        <SafeAreaView className="bg-black h-[calc(100%-74)] flex-1 items-center justify-between px-5 py-5">
            <Search
                placeholder="Search for food..."
                handleChange={handleSearch}
                isLoading={isLoading}
            />

            <FlatList
                className="mb-[74]"
                data={foods}
                renderItem={({ item }) => (
                    <FoodSearchItem {...item} onPress={() => saveFood(item)} />
                )}
                keyExtractor={(item) => item.foodId}
            />
        </SafeAreaView>
    );
};

export default nutrition;
