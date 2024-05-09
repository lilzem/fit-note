import { View, Text, TextInput } from "react-native";
import React from "react";

const FormField = ({
    title,
    value,
    handleChange,
    placeholder,
    keyboardType,
    password,
    styles,
    containerStyles,
    isAutoFocus = false,
}) => {
    return (
        <View className={`${styles} ${title ? "space-y-2" : ""}`}>
            {title && <Text className="font-wregular text-gray">{title}</Text>}

            <View
                className={`border border-gray rounded-lg w-full px-3 py-1 flex justify-center bg-transparent h-[49] ${containerStyles}`}
            >
                <TextInput
                    className="text-gray font-wregular text-base h-full"
                    placeholder={placeholder}
                    placeholderTextColor="#EEECE880"
                    value={value}
                    autoFocus={isAutoFocus}
                    onChangeText={handleChange}
                    secureTextEntry={password}
                    keyboardType={keyboardType}
                />
            </View>
        </View>
    );
};

export default FormField;
