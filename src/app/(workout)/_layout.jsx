import { Stack } from "expo-router";

const WorkoutLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="preview" options={{ headerShown: false }} />
            <Stack.Screen name="exercise" options={{ headerShown: false }} />
        </Stack>
    );
};

export default WorkoutLayout;
