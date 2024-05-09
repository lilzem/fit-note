import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import NumericInput from "./NumericInput";
import Trash from "../../assets/images/svgs/trash_circle.svg";

const Set = () => {
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);

    return (
        <View className="pt-[10]">
            <View className="flex-row justify-between">
                <NumericInput
                    title="Weight(kg)"
                    value={weight}
                    onChange={setWeight}
                />
                <NumericInput
                    title="Repetitions"
                    value={reps}
                    onChange={setReps}
                />

                <TouchableOpacity activeOpacity={1} className="mt-[9]">
                    <Trash width={30} height={30} />
                </TouchableOpacity>
            </View>

            <View className="w-full border-b border-gray h-[1] mt-[10]" />
        </View>
    );
};

export default Set;
