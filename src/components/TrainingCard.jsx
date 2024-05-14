import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DumbellIcon from "../../assets/images/svgs/dumbell_circle.svg";
import React from "react";
import { icons } from "../constants/icons";
import { getRandomWorkoutImage } from "../constants/images";

const TrainingCard = ({ image, name, exercises, handlePress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            className="h-fit w-full bg-gradient-to-b from-white to-black mt-5"
            onPress={handlePress}
        >
            <ImageBackground
                source={{ uri: image }}
                resizeMode="cover"
                className="  flex-row flex justify-between items-center shadow-lg "
                imageStyle={{
                    borderRadius: 10,
                    borderWidth: 0.4,
                    borderColor: "#EEECE8",
                }}
            >
                <LinearGradient
                    colors={["rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.5)"]}
                    className="rounded-xl w-full p-5 h-[73] flex-row flex justify-between items-center shadow-lg"
                >
                    <View className="flex flex-col justify-center">
                        <Text className="text-white text-left font-wregular text-base">
                            {name}
                        </Text>

                        <Text className="font-wregular text-left text-gray text-xs ml-0.5">
                            {exercises?.length} exercises
                        </Text>
                    </View>

                    {/* <Image
                        className="w-[32] h-[32]"
                        source={icons.start_workouts}
                    /> */}
                    <DumbellIcon width={32} height={32} />
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default TrainingCard;
