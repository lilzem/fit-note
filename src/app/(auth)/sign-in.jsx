import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import { icons } from "../../constants/icons.js";
import Header from "../../components/Header.jsx";
import axios from "../../api/axios.js";
import { Link, router } from "expo-router";
import { useAuthStore } from "../../store/auth.js";
import { useNotifications } from "react-native-notificated";

const SignIn = () => {
    const { notify } = useNotifications();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const { login } = useAuthStore((state) => state);
    const [isSubmitting, setisSubmitting] = useState(false);

    const handleFormChange = (key, event) => {
        setForm({ ...form, [key]: event });
    };

    const onSubmit = async () => {
        if (!form.email || !form.password) {
            notify("error", {
                params: {
                    description: "Fill in all fields",
                    title: "Error",
                },
            });
        }

        setisSubmitting(true);

        try {
            const res = await axios.post("api/auth/login", form);
            const { user, token } = res.data;
            login(token, user);
            notify("success", {
                params: {
                    description: "You successfully signed in",
                    title: "Success",
                },
            });
            router.replace("/home");
        } catch (error) {
            notify("error", {
                params: {
                    description: `${error.message}`,
                    title: "Error",
                },
            });
            console.log(error);
        } finally {
            setisSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="h-full bg-black flex justify-between pb-5">
            <View className="w-full flex justify-center min-h-[85] px-5 py-4">
                <Header />

                <Text className="text-left font-wregular text-white text-base">
                    SIGN IN YOUR ACCOUNT
                </Text>

                <FormField
                    title="Your email"
                    value={form.email}
                    placeholder="you@example.com"
                    styles="my-3"
                    handleChange={(e) => handleFormChange("email", e)}
                    keyboardType="email-address"
                />
                <FormField
                    title="Your password"
                    value={form.password}
                    placeholder="password"
                    handleChange={(e) => handleFormChange("password", e)}
                    password
                />

                <Text className="font-wregular text-gray text-sm mt-[10]">
                    Don't have an account?{"  "}
                    <Link className="text-white underline" href="/sign-up">
                        Sign Up
                    </Link>
                </Text>
            </View>

            <View className="w-full px-4">
                <CustomButton
                    title="Continue"
                    style="white"
                    containerStyles="w-full"
                    icon={icons.continue_icon}
                    isLoading={isSubmitting}
                    handlePress={onSubmit}
                />
            </View>
        </SafeAreaView>
    );
};

export default SignIn;
