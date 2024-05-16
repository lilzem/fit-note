import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import FoodItem from "../../components/FoodItem";
import axios from "../../api/axios";
import { useFocusEffect } from "expo-router";

const home = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getFoodItems = () => {
        axios
            .get("/api/foods")
            .then((res) => setFoodItems([...res.data.items]))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    useFocusEffect(useCallback(getFoodItems, []));

    return (
        <SafeAreaView className="bg-black h-[calc(100%-74)] flex-1 items-center justify-between px-5 py-5">
            {!foodItems.length && (
                <Text className="font-wsemibold text-lg text-white text-center">
                    No items
                </Text>
            )}

            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <FlatList
                    className="mb-[74]"
                    data={foodItems}
                    renderItem={({ item }) => <FoodItem {...item} />}
                    keyExtractor={(item) => item.foodId}
                />
            )}
        </SafeAreaView>
    );
};

export default home;
