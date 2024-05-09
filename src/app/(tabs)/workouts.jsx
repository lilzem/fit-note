import { View, Text, ScrollView, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getRandomWorkoutImage } from "../../constants/images";
import TrainingCard from "../../components/TrainingCard";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants/icons";
import { router } from "expo-router";
import InputModal from "../../components/InputModal";
import axios from "../../api/axios";

const workouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const onSubmit = (name) => {
        axios.post("api/trainings", { name, exercises: [] }).then((res) =>
            router.push({
                pathname: "/preview",
                params: { id: res.data.training._id },
            })
        );
    };

    const onCardClick = (id) => {
        router.push({
            pathname: "/preview",
            params: { id },
        });
    };

    useEffect(() => {
        axios
            .get("api/trainings")
            .then((res) => setWorkouts([...res.data.trainings]))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <SafeAreaView className="bg-black h-[calc(100%-74)] px-5 flex-1 justify-between items-center">
                <ScrollView className="w-full mb-[74]">
                    <Text className="text-white font-wregular text-base mt-7">
                        ALL TRAININGS
                    </Text>

                    <FlatList
                        data={workouts}
                        renderItem={({ item }) => (
                            <TrainingCard
                                image={getRandomWorkoutImage()}
                                name={item.name}
                                handlePress={() => onCardClick(item._id)}
                            />
                        )}
                        keyExtractor={(item) => item._id}
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
            <InputModal
                isVisible={isModalVisible}
                handlePress={handleModal}
                handleSubmit={onSubmit}
            />
        </>
    );
};

export default workouts;
