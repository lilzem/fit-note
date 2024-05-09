import { View, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import FormField from "./FormField";
import { icons } from "../constants/icons";

const InputModal = ({ isVisible = false, handlePress }) => {
    return (
        <Modal
            isVisible={isVisible}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            onBackButtonPress={handlePress}
            className="justify-end items-center"
        >
            <View className=" bg-black p-[10] m-3 w-full rounded-lg border border-gray">
                <Text className="text-white font-wregular text-lg">
                    Workout Name
                </Text>

                <View className="flex-row justify-between items-center mt-[10]">
                    <FormField
                        styles="w-[70vw]"
                        placeholder="Type in workout name"
                        isAutoFocus
                    />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="px-[10] py-[12.5] border border-gray rounded-lg h-[49]"
                        onPress={handlePress}
                    >
                        <Image
                            className="w-[24] h-[24]"
                            source={icons.check_white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default InputModal;
