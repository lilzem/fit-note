import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "WorkSans-Regular": require("../../assets/fonts/WorkSans-Regular.ttf"),
        "WorkSans-Medium": require("../../assets/fonts/WorkSans-Medium.ttf"),
        "WorkSans-SemiBold": require("../../assets/fonts/WorkSans-SemiBold.ttf"),
        "WorkSans-Bold": require("../../assets/fonts/WorkSans-Bold.ttf"),
    });

    useEffect(() => {
        if (error) {
            throw error;
        }

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(workout)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default RootLayout;
