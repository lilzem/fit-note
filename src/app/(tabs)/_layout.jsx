import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants/icons.js";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({ defaultIcon, activeIcon, name, focused }) => {
    return (
        <View className="items-center justify-center">
            <Image
                source={focused ? activeIcon : defaultIcon}
                resizeMode="contain"
                className="w-6 h-6"
            />
            {focused && (
                <Text className="font-wregular text-xs text-white absolute top-6">
                    {name}
                </Text>
            )}
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,

                    tabBarStyle: {
                        height: 74,
                        backgroundColor: "transparent",
                        borderTopWidth: 0,
                        position: "absolute",
                        elevation: 0,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                defaultIcon={icons.home}
                                activeIcon={icons.home_active}
                                name="Home"
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="workouts"
                    options={{
                        title: "Workouts",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                defaultIcon={icons.workouts}
                                activeIcon={icons.workouts_active}
                                name="Workouts"
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="nutrition"
                    options={{
                        title: "Nutrition",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                defaultIcon={icons.nutrition}
                                activeIcon={icons.nutrition_active}
                                name="Nutrition"
                            />
                        ),
                    }}
                />
            </Tabs>

            <StatusBar style="light" />
        </>
    );
};

export default TabsLayout;
