import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PlusIcon from "../../assets/images/svgs/plus_circle.svg";
import { LinearGradient } from "expo-linear-gradient";

const FoodItem = ({ label, weight, count, nutrients }) => {
    const { kcal } = nutrients;

    return (
        <TouchableOpacity
            activeOpacity={1}
            className="h-fit w-full flex-row justify-between items-center  border-2 border-gray rounded-lg"
        >
            <LinearGradient
                colors={["rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.7)"]}
                className="w-full rounded-md p-3 shadow-lg"
            >
                <View className="flex flex-1">
                    <Text className="text-white text-left font-wregular text-lg">
                        {label}
                    </Text>

                    <View className="flex-row space-x-1">
                        <Text className="font-wregular text-left text-gray text-nb">
                            {Math.round(kcal * count)} calories,{" "}
                            {weight * count}g
                        </Text>
                    </View>
                </View>

                <View></View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default FoodItem;
