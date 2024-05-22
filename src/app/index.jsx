import { Link, Redirect, router } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import { images } from "../constants/images.js";
import { icons } from "../constants/icons.js";
import CustomButton from "../components/CustomButton.jsx";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import axios from "../api/axios.js";
import { useAuthStore } from "../store/auth.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const { login, logout } = useAuthStore((state) => state);

    useEffect(() => {
        setIsLoading(true);

        const fetchLogin = async () => {
            const token = await AsyncStorage.getItem("@token");
            console.log(token);
            if (token === null || token === undefined) {
                console.log("TOKEN IS NULL OR UNDEFINED");
                logout();
                setIsLoading(false);
            } else {
                try {
                    const response = await axios.get("/api/users/me");
                    const user = response.data;
                    login(token, user);
                    router.replace("/home");
                } catch (err) {
                    console.log("error: ", err);
                    logout();
                    router.replace("/sign-in");
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchLogin();
    }, []);

    return isLoading ? (
        <View className="flex-1 flex justify-center h-full bg-black">
            <Text className="text-white text-3xl text-center font-wbold">
                Loading...
            </Text>
        </View>
    ) : (
        <View className="flex-1 h-full">
            <ImageBackground
                source={images.background}
                resizeMode="cover"
                className="flex-1 flex items-center justify-between px-5"
            >
                <Text className="text-center m-14 text-white-100 font-wbold text-xl">
                    FitNote
                </Text>

                <View>
                    <Text className="text-center mt-64  text-white font-wregular text-base">
                        CREATE ACCOUNT OR LOGIN
                    </Text>
                    <Text className="text-center max-w-[280] text-gray font-wregular">
                        Start track your workouts and exercises and share them
                        with your friends
                    </Text>
                </View>

                <View className="items-center">
                    <CustomButton
                        title="Continue with email"
                        icon={icons.email}
                        style="white"
                        containerStyles="w-full mt-48"
                        handlePress={() => router.push("/sign-in")}
                    />
                    {/* <CustomButton
                        title="Continue with google"
                        icon={icons.google_white}
                        style="transparent"
                        containerStyles="w-full mt-[10]"
                        handlePress={() => {}}
                    /> */}

                    {/* <Text className="font-wregular text-gray text-sm mt-[10]">
                        Don't have an account?{" "}
                        <Link className="text-white underline" href="/sign-up">
                            Sign Up
                        </Link>
                    </Text> */}
                </View>
            </ImageBackground>

            <StatusBar style="auto" />
        </View>
    );
}
