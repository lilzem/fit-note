import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
];

const Select = ({ label, options, value, handleChange, containerStyles }) => {
    return (
        <Dropdown
            className={`h-[49] border-gray border rounded-lg p-4 font-wregular text-gray relative ${containerStyles}`}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.containerStyle}
            itemContainerStyle={styles.itemContainerStyle}
            itemTextStyle={styles.itemTextStyle}
            activeColor="transparent"
            data={options}
            labelField="label"
            valueField="value"
            placeholder={label}
            value={value}
            onChange={handleChange}
        />
    );
};

export default Select;

const styles = StyleSheet.create({
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: "#EEECE880",
    },
    selectedTextStyle: {
        fontSize: 16,
        color: "#EEECE880",
    },
    containerStyle: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#000",
        color: "#EEECE880",
        paddingHorizontal: 8,
    },
    itemContainerStyle: {
        backgroundColor: "transparent",
        color: "#EEECE880",
        fontFamily: "WorkSans-Regular",
    },
    itemTextStyle: {
        fontSize: 16,
        color: "#EEECE880",
        fontFamily: "WorkSans-Regular",
    },
});
