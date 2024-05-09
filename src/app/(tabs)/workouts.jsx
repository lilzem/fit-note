import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getRandomWorkoutImage } from "../../constants/images";
import TrainingCard from "../../components/TrainingCard";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants/icons";
import { router } from "expo-router";
import InputModal from "../../components/InputModal";

const workouts = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return (
        <>
            <SafeAreaView className="bg-black h-[calc(100%-74)] px-5 flex-1 justify-between items-center">
                <ScrollView className="w-full mb-[74]">
                    <Text className="text-white font-wregular text-base mt-7">
                        ALL TRAININGS
                    </Text>

                    {/* <FlatList></FlatList> */}

                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                        handlePress={() => router.push("/preview")}
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                    <TrainingCard
                        image={getRandomWorkoutImage()}
                        name="Back workout"
                    />
                </ScrollView>

                <CustomButton
                    title="Add Workout"
                    style="white"
                    icon={icons.add}
                    containerStyles="w-[150] absolute bottom-[80] z-1"
                    handlePress={handleModal}
                />
            </SafeAreaView>
            <InputModal isVisible={isModalVisible} handlePress={handleModal} />
        </>
    );
};

export default workouts;
