import { View, Text } from "react-native";
import PressableIcon from "./PressableIcon";
import { icons } from "../constants/icons";
import Edit from "../../assets/images/svgs/edit.svg";
import Move from "../../assets/images/svgs/move.svg";

const WorkoutItem = () => {
    return (
        <>
            <View className="w-full py-[9] flex flex-row justify-between items-center">
                <View>
                    <Text className="text-white font-wregular text-base">
                        Pull-ups
                    </Text>
                    <View className="flex flex-row space-x-2">
                        <Text className="font-wregular text-gray text-xs">
                            Weight 15 25 30 30
                        </Text>
                        <Text className="font-wregular text-gray text-xs">
                            Reps 15 25 30 30
                        </Text>
                    </View>
                </View>

                <View className="flex-row space-x-2">
                    <Edit height={14} width={14} />
                    <Move height={14} width={14} />
                </View>
            </View>

            <View className="w-full border-b border-gray h-[1]" />
        </>
    );
};

export default WorkoutItem;
