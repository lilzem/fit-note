import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from "react-native";
import Edit from "../../../assets/images/svgs/edit_circle.svg";
import Trash from "../../../assets/images/svgs/trash_circle.svg";
import { images, workouts_background } from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import PressableIcon from "../../components/PressableIcon";
import { icons } from "../../constants/icons";
import { LinearGradient } from "expo-linear-gradient";
import WorkoutItem from "../../components/WorkoutItem";
import CustomButton from "../../components/CustomButton";
import { Modal } from "../../components/Modal";
import InputModal from "../../components/InputModal";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const Preview = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useLocalSearchParams();
    const [workout, setWorkout] = useState({});

    useEffect(() => {
        axios
            .get(`api/trainings/${id}`)
            .then((res) => setWorkout(res.data.data.training))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [id]);

    return isLoading ? (
        <Text>Loading...</Text>
    ) : (
        <View className="flex-1 h-full">
            <ImageBackground
                source={workouts_background.fitnote_workout_54}
                resizeMode="cover"
                className="flex-1 flex items-center "
            >
                <LinearGradient
                    className="h-full flex-1"
                    colors={["transparent", "#000"]}
                    end={{ x: 0.5, y: 0.4 }}
                >
                    <SafeAreaView className="h-ful flex justify-between py-2 px-[20]">
                        <Header isWorkout />

                        <View className="flex-row justify-between mt-48 items-center py-[20]">
                            <View>
                                <Text className="text-gray font-wregular text-sm">
                                    February 21, 2023
                                </Text>
                                <Text className="text-white font-wregular text-[32px]">
                                    {workout.name}
                                </Text>
                                <Text className="text-gray font-wregular text-sm">
                                    {workout.exercises?.length} Exercises
                                </Text>
                            </View>

                            <View className="flex flex-row justify-between space-x-2">
                                <Edit width={40} height={40} />
                                <Trash width={40} height={40} />
                                {/* <PressableIcon
                                    icon={icons.edit_circle}
                                    width="6"
                                    handlePress={() => {}}
                                />
                                <PressableIcon
                                    icon={icons.trash_white}
                                    width="6"
                                    handlePress={() => {}}
                                /> */}
                            </View>
                        </View>

                        <Text className="text-white">Exercises</Text>

                        <View className="w-full border-b border-gray h-[1] mt-[10]" />

                        <ScrollView className="w-full flex-1">
                            <WorkoutItem />
                        </ScrollView>

                        <CustomButton
                            title="Add Exercise"
                            style="white"
                            icon={icons.add}
                            containerStyles="w-[150] m-[15] mr-auto ml-auto "
                            handlePress={() => router.push("/exercise")}
                        />
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

export default Preview;
