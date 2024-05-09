import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from "react-native";
import { workouts_background } from "../../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import Plus from "../../../assets/images/svgs/plus.svg";
import NumericInput from "../../components/NumericInput";
import Check from "../../../assets/images/svgs/check_white.svg";
import Set from "../../components/Set";

const Exercise = () => {
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
                                >
                                    <Plus width={15} height={15} />
                                </CustomButton>
                            </View>
                            <ScrollView>
                                <Set />
                                <Set />
                                <Set />
                                <Set />
                            </ScrollView>

                            <CustomButton
                                style="green"
                                title="Save exercise"
                                containerStyles="mt-[15]"
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
