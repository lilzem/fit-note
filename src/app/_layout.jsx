import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { createNotifications } from "react-native-notificated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const { NotificationsProvider } = createNotifications({
        defaultStylesSettings: {
            darkMode: true,
            globalConfig: {},
            successConfig: {},
            errorConfig: {},
            warningConfig: {},
            infoConfig: {},
        },
    });

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
        <GestureHandlerRootView>
            <NotificationsProvider>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(auth)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(workout)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </NotificationsProvider>
        </GestureHandlerRootView>
    );
};

export default RootLayout;
