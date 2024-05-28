import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";

const ConfirmationModal = ({
    isVisible = false,
    handlePress,
    handleSubmit,
    message,
}) => {
    return (
        <Modal
            isVisible={isVisible}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            onBackButtonPress={handlePress}
            className="justify-center items-center"
        >
            <View className="p-[20] m-3 w-full rounded-lg border border-black bg-white-100">
                <Text className="font-wregular text-xl text-black text-center">
                    {message}
                </Text>

                <View className="flex-row justify-between mt-[30] space-x-4">
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={handlePress}
                        className="p-[10] flex-row rounded-lg justify-center border-gray-300 border bg-white flex-1"
                    >
                        <Text className="font-wregular text-black text-base">
                            Cancel
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={handleSubmit}
                        className="p-[10] flex-row rounded-lg justify-center border-white border bg-black flex-1"
                    >
                        <Text className="font-wregular text-white text-base">
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationModal;
