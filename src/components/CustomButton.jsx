import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
    title,
    icon,
    handlePress,
    containerStyles,
    isLoading,
    children,
    style = "white" | "transparent" | "green",
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`${style == "white" ? "bg-white border-black" : ""} ${
                style == "transparent" ? "bg-transparent border-white" : ""
            } ${
                style == "green" ? "bg-green" : ""
            } rounded-full border py-[10] pl-[20] pr-[10] items-center flex flex-row justify-between ${
                isLoading ? "opacity-50" : ""
            } ${containerStyles}`}
            disabled={isLoading}
        >
            <Text
                className={`font-wregular text-sm ${
                    style == "white" ? "text-black" : ""
                } ${style == "transparent" ? "text-white" : ""} ${
                    style == "green" ? "text-white" : ""
                }`}
            >
                {title}
            </Text>

            <Image className="w-[24] h-[24]" source={icon} />
            {children}
        </TouchableOpacity>
    );
};

export default CustomButton;
