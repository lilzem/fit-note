import { View, Text, Button, TouchableOpacity } from "react-native";
import Minus from "../../assets/images/svgs/minus.svg";
import Plus from "../../assets/images/svgs/plus_grey.svg";
import { useRef, useState } from "react";

const NumericInput = ({ title, value, onChange }) => {
    const timer = useRef(null);

    const handleIncrement = () => {
        onChange((prev) => prev + 1);

        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(handleIncrement, 100);
    };

    const handleDecrement = () => {
        onChange((prev) => (prev > 0 ? prev - 1 : prev));

        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(handleDecrement, 100);
    };

    const stopTimer = () => {
        clearTimeout(timer.current);
    };

    return (
        <View>
            <View className="flex-row justify-center items-center relative py-[10] px-[20] w-[140] border border-gray rounded-lg bg-black">
                <TouchableOpacity
                    onPressIn={handleDecrement}
                    onPressOut={stopTimer}
                    activeOpacity={1}
                    className="absolute w-[50] h-[39] left-0 flex justify-center items-center"
                >
                    <Minus width={10} height={15} />
                </TouchableOpacity>

                <Text className="text-white font-wregular text-base">
                    {value}
                </Text>

                <TouchableOpacity
                    onPressIn={handleIncrement}
                    onPressOut={stopTimer}
                    activeOpacity={1}
                    className="absolute w-[50] h-[39] right-0 flex justify-center items-center"
                >
                    <Plus width={15} height={15} />
                </TouchableOpacity>
            </View>

            <Text className="text-xs font-wregular text-gray text-center mt-[5]">
                {title}
            </Text>
        </View>
    );
};

export default NumericInput;
