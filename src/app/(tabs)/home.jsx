import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import axios from "../../api/axios";
import { router, useFocusEffect } from "expo-router";
import { useAuthStore } from "../../store/auth";
import CustomButton from "../../components/CustomButton";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { LinearGradient } from "expo-linear-gradient";
import FoodItem from "../../components/FoodItem";
import StepCounter from "../../components/StepCounter";

const home = () => {
    const { user } = useAuthStore((state) => state);

    const [foodItems, setFoodItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [goal, setGoal] = useState(user.calorie);
    const [foodCalories, setFoodCalories] = useState(0);

    const getFoodItems = () => {
        axios
            .get("/api/foods")
            .then((res) => setFoodItems([...res.data.items]))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    const getCaloricPercentage = () => {
        return Math.round((foodCalories / goal) * 100);
    };

    const getFoodCalories = () => {
        return foodItems.reduce((total, foodItem) => {
            return Math.round(total + foodItem.nutrients.kcal * foodItem.count);
        }, 0);
    };

    useFocusEffect(useCallback(getFoodItems, []));

    useEffect(() => {
        setFoodCalories(getFoodCalories());
    }, [goal, foodItems]);

    return (
        <SafeAreaView className="bg-black h-[calc(100%-74)] flex-1 justify-between px-5 py-5">
            {/* <CustomButton
                title="logout"
                handlePress={logOut}
                style="transparent"
            /> */}

            <View className="border-2 border-gray rounded-lg  w-full">
                <LinearGradient
                    colors={["rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.7)"]}
                    className="w-full rounded-md py-5 px-10 shadow-lg"
                >
                    <View>
                        <Text className="font-wsemibold text-xl text-white">
                            Calories
                        </Text>

                        <Text className="font-wregular text-lg text-gray mb-2">
                            Remaining = Goal - Food
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <AnimatedCircularProgress
                            size={150}
                            width={10}
                            fill={getCaloricPercentage()}
                            padding={5}
                            backgroundWidth={7.5}
                            lineCap="round"
                            children={() => (
                                <View>
                                    <Text className="font-wregular text-white text-2xl text-center">
                                        {goal - foodCalories}
                                    </Text>
                                    <Text className="font-wregular text-gray text-sm text-center">
                                        Remaining
                                    </Text>
                                </View>
                            )}
                            tintColor="#A0AF42"
                            backgroundColor="#EEECE880"
                        />

                        <View>
                            <Text className="font-wregular text-gray text-lg">
                                Base Goal
                            </Text>
                            <Text className="font-wregular text-white text-xl">
                                {goal}
                            </Text>
                            <Text className="font-wregular text-gray text-lg">
                                Food
                            </Text>
                            <Text className="font-wregular text-white text-xl">
                                {foodCalories}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>

            <StepCounter containerStyles="my-5" />

            <Text className="font-wsemibold text-xl text-white">
                Today's food
            </Text>

            {!foodItems.length && (
                <Text className="font-wsemibold text-lg text-white text-center">
                    No items
                </Text>
            )}

            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <FlatList
                    className="mb-[74] mt-3"
                    contentContainerStyle={{
                        gap: 12,
                    }}
                    data={foodItems}
                    renderItem={({ item }) => <FoodItem {...item} />}
                    keyExtractor={(item) => item.foodId}
                />
            )}
        </SafeAreaView>
    );
};

export default home;
