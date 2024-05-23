import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useStepsStore } from "../store/steps";
// import {
//     parseStepData,
//     startStepCounterUpdate,
// } from "@dongminyu/react-native-step-counter";

const CALORIES_PER_STEP = 0.05;

const StepCounter = ({ containerStyles }) => {
    const { steps, setSteps } = useStepsStore((state) => state);
    const [_steps, _setSteps] = useState(steps);
    const [lastY, setLastY] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const [lastTimeStamp, setLastTimeStamp] = useState(0);

    const caloriesBurned = (CALORIES_PER_STEP * _steps).toFixed(2);

    // async function startStepCounter() {
    //     startStepCounterUpdate(new Date(), (data) => {
    //         console.debug(parseStepData(data));
    //         _setSteps(data.steps);
    //         setSteps(data.steps);
    //     });
    // }

    // useEffect(startStepCounter, []);

    return (
        <View className={`border-2 border-gray rounded-lg ${containerStyles}`}>
            <LinearGradient
                colors={["rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.7)"]}
                className="w-full rounded-md p-3 shadow-lg"
            >
                <View className="flex-row items-center space-x-5">
                    <Text className="font-wsemibold text-white text-xl">
                        Step Counter
                    </Text>

                    <Text className="font-wregular text-green text-xl">
                        {_steps}
                    </Text>
                </View>

                <Text className="font-wregular text-gray text-base">
                    Estimated calories burned: {caloriesBurned}
                </Text>
            </LinearGradient>
        </View>
    );
};

export default StepCounter;
