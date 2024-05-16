import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PlusIcon from "../../assets/images/svgs/plus_circle.svg";

const FoodItem = ({ label, nutrients, onPress }) => {
    const { kcal } = nutrients;

    return (
        <TouchableOpacity
            activeOpacity={1}
            className="h-fit w-full mt-5 flex-row justify-between items-center p-3 border border-gray rounded-lg"
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

            <View>
                {onPress && (
                    <PlusIcon
                        width={32}
                        height={32}
                        style={styles.icon}
                        onPress={onPress}
                    />
                )}
            </View>
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

export default FoodItem;
