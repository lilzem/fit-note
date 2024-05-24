import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useStepsStore } from "../store/steps";
import RNSamsungHealth from "rn-samsung-health";

const StepCounter = ({ containerStyles }) => {
    const { steps, setSteps } = useStepsStore((state) => state);
    const [_steps, _setSteps] = useState(steps);

    const distance = steps / 1300;
    const distanceCovered = distance.toFixed(2);
    const cal = distanceCovered * 60;
    const caloriesBurnt = cal.toFixed(2);

    useEffect(() => {
        health();
    }, []);

    const health = async () => {
        try {
            const auth = await RNSamsungHealth.authorize();
            let startDate = new Date().setDate(new Date().getDate() - 30); // 30 days back date
            let endDate = new Date().getTime(); //today's date
            let opt = { startDate, endDate };
            const steps = await RNSamsungHealth.getDailyStepCount(opt);
        } catch (error) {
            console.log("error ", error);
        }
    };

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

                <Text className="font-wregular text-white text-base">
                    Distance covered: {distanceCovered}
                </Text>

                <Text className="font-wregular text-gray text-base">
                    Estimated calories burned: {caloriesBurnt}
                </Text>
            </LinearGradient>
        </View>
    );
};

export default StepCounter;
