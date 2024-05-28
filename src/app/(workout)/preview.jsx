import { View, Text, ImageBackground, FlatList } from "react-native";
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
import InputModal from "../../components/InputModal";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const Preview = () => {
    const { id, image } = useLocalSearchParams();

    const [isLoading, setIsLoading] = useState(true);
    const [workout, setWorkout] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const { name, exercises } = workout;

    const deleteWorkout = () => {
        axios
            .delete(`api/trainings/${id}`)
            .then(() => router.replace("/workouts"))
            .catch((err) => console.log(err));
    };

    const editWorkout = (name) => {
        axios
            .patch(`api/trainings/${id}`, { name })
            .then(() => {
                setWorkout((prev) => ({ ...prev, name }));
                handleModal();
            })
            .catch((err) => console.log(err));
    };

    const deleteExercise = (exercise_id) => {
        axios
            .delete(`api/trainings/${id}/exercises/${exercise_id}`)
            .then(() => {
                const filtered = exercises.filter(
                    (exercise) => exercise._id !== exercise_id
                );
                setWorkout((prev) => ({ ...prev, exercises: [...filtered] }));
            })
            .then(() =>
                notify("success", {
                    params: {
                        description: "Exercise has been deleted",
                        title: "Success",
                    },
                })
            );
    };

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
        <>
            <View className="flex-1 h-full">
                <ImageBackground
                    source={{ uri: image }}
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
                                        {name}
                                    </Text>
                                    <Text className="text-gray font-wregular text-sm">
                                        {exercises?.length}{" "}
                                        {exercises?.length == 1
                                            ? "Exercise"
                                            : "Exercises"}
                                    </Text>
                                </View>

                                <View className="flex flex-row justify-between space-x-2">
                                    <Edit
                                        width={40}
                                        height={40}
                                        onPress={handleModal}
                                    />
                                    <Trash
                                        width={40}
                                        height={40}
                                        onPress={deleteWorkout}
                                    />
                                </View>
                            </View>

                            <Text className="text-white">Exercises</Text>

                            <View className="w-full border-b border-gray h-[1] mt-[10]" />

                            {/* <ScrollView className="w-full flex-1">
                            <WorkoutItem />
                        </ScrollView> */}
                            <FlatList
                                data={exercises}
                                renderItem={({ item }) => (
                                    <WorkoutItem
                                        name={item.name}
                                        sets={item.sets}
                                        onEdit={() =>
                                            router.replace({
                                                pathname: "/exercise",
                                                params: {
                                                    workout_id: id,
                                                    exercise_id: item._id,
                                                    image,
                                                },
                                            })
                                        }
                                        onDelete={() =>
                                            deleteExercise(item._id)
                                        }
                                    />
                                )}
                                keyExtractor={(item) => item._id}
                            />

                            <CustomButton
                                title="Add Exercise"
                                style="white"
                                icon={icons.add}
                                containerStyles="w-[150] m-[15] mr-auto ml-auto "
                                handlePress={() =>
                                    router.push({
                                        pathname: "/exercise",
                                        params: { workout_id: id, image },
                                    })
                                }
                            />
                        </SafeAreaView>
                    </LinearGradient>
                </ImageBackground>
            </View>

            <InputModal
                isVisible={isModalVisible}
                handlePress={handleModal}
                handleSubmit={editWorkout}
            />
        </>
    );
};

export default Preview;
