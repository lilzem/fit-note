import { View, Text } from "react-native";
import PressableIcon from "./PressableIcon";
import { icons } from "../constants/icons";
import Edit from "../../assets/images/svgs/edit.svg";
import Move from "../../assets/images/svgs/move.svg";

const WorkoutItem = ({ name, sets, onEdit, onDelete }) => {
    return (
        <>
            <View className="w-full py-[9] flex flex-row justify-between items-center">
                <View>
                    <Text className="text-white font-wregular text-base">
                        {name}
                    </Text>
                    <View className="flex flex-row space-x-2">
                        <Text className="font-wregular text-gray text-xs">
                            Weight {sets.map((item) => `${item.weight} `)}
                        </Text>
                        <Text className="font-wregular text-gray text-xs">
                            Reps {sets.map((item) => `${item.reps} `)}
                        </Text>
                    </View>
                </View>

                <View className="flex-row space-x-2">
                    <Edit height={14} width={14} onPress={onEdit} />
                    <Move height={14} width={14} onPress={onDelete} />
                </View>
            </View>

            <View className="w-full border-b border-gray h-[1]" />
        </>
    );
};

export default WorkoutItem;
