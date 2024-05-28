import { View, Text } from "react-native";
import React from "react";
import Select from "../../components/Select.jsx";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import { icons } from "../../constants/icons.js";
import Header from "../../components/Header.jsx";
import axios from "../../api/axios.js";
import { router, useLocalSearchParams } from "expo-router";
import { useAuthStore } from "../../store/auth.js";
import { handleKeyDown } from "../../util/input.js";

const SEX = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
];

const GOALS = [
    { label: "I want to lose weight", value: "loss" },
    { label: "I want to gain weight", value: "gain" },
    { label: "I want to maintain weight", value: "maintain" },
];

const ACTIVITY = [
    {
        label: "Sedentary(daily living, without additional exercise)",
        value: "sedentary",
    },
    {
        label: "Low activity(daily living, plus 30-60 minutes per day of moderate activity, such as walking 3-4 mph)",
        value: "low",
    },
    {
        label: "Normal activity(daily living, plus at least 60 minutes per day of moderate activity)",
        value: "normal",
    },
    {
        label: "High activity(at least 60 minutes per day of moderate activity, plus an additional 120 minutes of moderate activity or 60 minutes of vigorous activity)",
        value: "high",
    },
];

const Survey = () => {
    const { token } = useLocalSearchParams();

    const { setLogin } = useAuthStore((state) => state);

    const [personalInfo, setPersonalInfo] = useState({
        age: 0,
        height: 0,
        weight: 0,
        sex: "",
        goal: "",
        activity: "",
    });

    const handlePersonalInfoChange = (key, event) => {
        setPersonalInfo({ ...personalInfo, [key]: event });
    };

    const handleSubmit = () => {
        axios
            .patch("api/users/me", personalInfo)
            .then((res) => setLogin(token, res.data.user))
            .then(() => router.replace("/home"))
            .catch((err) => console.log(err));
    };

    return (
        <SafeAreaView className="h-full bg-black flex justify-between pb-5">
            <View className="w-full flex justify-center min-h-[85] px-5 py-4">
                <Header />

                <Text className="text-left font-wregular text-white text-base">
                    SHARE YOUR GOALS AND BODY PARAMETRES
                </Text>

                <Select
                    options={SEX}
                    containerStyles="mt-3"
                    label="Choose your sex"
                    value={personalInfo.sex}
                    handleChange={(item) =>
                        handlePersonalInfoChange("sex", item.value)
                    }
                />

                <FormField
                    title="Age"
                    value={personalInfo.age}
                    placeholder="Type in your age"
                    styles="my-3"
                    onKeyPress={handleKeyDown}
                    keyboardType="numeric"
                    handleChange={(e) => handlePersonalInfoChange("age", e)}
                />
                <FormField
                    title="Height"
                    value={personalInfo.height}
                    placeholder="Type in your height in cm"
                    styles="my-3"
                    keyboardType="numeric"
                    onKeyPress={handleKeyDown}
                    handleChange={(e) => handlePersonalInfoChange("height", e)}
                />
                <FormField
                    title="Weight"
                    value={personalInfo.weight}
                    placeholder="Type in your weight in kg"
                    styles="my-3 mb-6"
                    keyboardType="numeric"
                    onKeyPress={handleKeyDown}
                    handleChange={(e) => handlePersonalInfoChange("weight", e)}
                />

                <Select
                    options={GOALS}
                    containerStyles="my-3 mb-6"
                    label="Choose your goal"
                    value={personalInfo.goal}
                    handleChange={(item) =>
                        handlePersonalInfoChange("goal", item.value)
                    }
                />

                <Select
                    options={ACTIVITY}
                    containerStyles="my-3"
                    label="Choose your Activity Level"
                    value={personalInfo.activity}
                    handleChange={(item) =>
                        handlePersonalInfoChange("activity", item.value)
                    }
                />
            </View>

            <View className="w-full px-4">
                <CustomButton
                    title="Continue"
                    style="white"
                    containerStyles="w-full"
                    icon={icons.continue_icon}
                    handlePress={handleSubmit}
                />
            </View>
        </SafeAreaView>
    );
};

export default Survey;
