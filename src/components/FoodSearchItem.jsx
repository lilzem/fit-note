import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PlusIcon from "../../assets/images/svgs/plus_circle.svg";
import { LinearGradient } from "expo-linear-gradient";

const FoodSearchItem = ({ label, nutrients, onPress }) => {
    const { kcal } = nutrients;

    return (
        <TouchableOpacity
            activeOpacity={1}
            className="h-fit w-full mt-5 border border-gray rounded-lg"
        >
            <LinearGradient
                colors={["rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.7)"]}
                className="w-full rounded-md p-3 shadow-lg flex-row justify-between items-center"
            >
                <View className="flex flex-1">
                    <Text className="text-white text-left font-wregular text-lg">
                        {label}
                    </Text>

                    <View className="flex-row space-x-1">
                        <Text className="font-wregular text-left text-gray text-nb">
                            {Math.round(kcal)} kcal per 100g
                        </Text>
                    </View>
                </View>

                <PlusIcon
                    width={32}
                    height={32}
                    style={styles.icon}
                    onPress={onPress}
                />
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        color: "#fff",
        // width: 32,
        // height: 32,
        // shadowColor: "#f02a4b",
        // shadowOpacity: 0.7,
        // shadowRadius: 10,
    },
});

export default FoodSearchItem;
