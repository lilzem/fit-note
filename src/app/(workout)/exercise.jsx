import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    FlatList,
} from "react-native";
import { workouts_background } from "../../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import Plus from "../../../assets/images/svgs/plus.svg";
import Check from "../../../assets/images/svgs/check_white.svg";
import Set from "../../components/Set";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

const Exercise = () => {
    const { workout_id } = useLocalSearchParams();

    const [sets, setSets] = useState([]);

    console.log(sets);

    const onSetChange = (index, value, type) => {
        sets[index][type] = value;
        setSets(sets);

        console.log("calling", sets);
    };

    const addSet = () => {
        setSets((prev) => [...prev, { weight: 0, reps: 0 }]);
    };

    const removeSet = (index) => {
        const copiedSets = [...sets];
        copiedSets.splice(index, 1);
        setSets(copiedSets);
    };

    // const onSubmit = () => {
    //     console.log(sets);
    //     router.back();
    // };

    useEffect(() => {
        console.log(sets);
    }, [sets]);

    return (
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

                        <View
                            style={styles.bg}
                            className="p-[20] border h-[90vh] mt-3 border-gray rounded-xl bg-opacity-0"
                        >
                            <FormField
                                title="Exercise name"
                                placeholder="Exercise name"
                                containerStyles="bg-black"
                            />

                            <View className="flex-row justify-between mt-[24] mb-[10] items-center">
                                <Text className="text-base text-gray font-wregular">
                                    Sets
                                </Text>

                                <CustomButton
                                    title="Add set"
                                    style="transparent"
                                    containerStyles="border-gray px-[10] py-[5]"
                                    handlePress={addSet}
                                >
                                    <Plus width={15} height={15} />
                                </CustomButton>
                            </View>
                            <FlatList
                                data={sets}
                                renderItem={({ item, index }) => (
                                    <Set
                                        weight={item?.weight}
                                        reps={item?.reps}
                                        handleChange={(value, type) =>
                                            onSetChange(index, value, type)
                                        }
                                        onDelete={() => removeSet(index)}
                                    />
                                )}
                                keyExtractor={(item) => item._id}
                            />

                            <CustomButton
                                style="green"
                                title="Save exercise"
                                containerStyles="mt-[15]"
                                handlePress={onSubmit}
                            >
                                <Check />
                            </CustomButton>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default Exercise;
