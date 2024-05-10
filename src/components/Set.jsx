import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import NumericInput from "./NumericInput";
import Trash from "../../assets/images/svgs/trash_circle.svg";

const Set = ({ weight, reps, handleChange, onDelete }) => {
    const [_weight, setWeight] = useState(weight);
    const [_reps, setReps] = useState(reps);

    const onInputChange = (event, type) => {
        const setter = type == "weight" ? setWeight : setReps;
        const value = event;
        setter(value);
        handleChange(value, type);
    };

    return (
        <View className="pt-[10]">
            <View className="flex-row justify-between">
                <NumericInput
                    title="Weight(kg)"
                    value={_weight}
                    onChange={(e) => onInputChange(e, "weight")}
                />
                <NumericInput
                    title="Repetitions"
                    value={_reps}
                    onChange={(e) => onInputChange(e, "reps")}
                />

                <TouchableOpacity
                    activeOpacity={1}
                    className="mt-[9]"
                    onPress={onDelete}
                >
                    <Trash width={30} height={30} />
                </TouchableOpacity>
            </View>

            <View className="w-full border-b border-gray h-[1] mt-[10]" />
        </View>
    );
};

export default Set;
