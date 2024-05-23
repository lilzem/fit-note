import { View, Text, ScrollView, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants/icons";
import Header from "../../components/Header";
import axios from "../../api/axios.js";
import { Link, router } from "expo-router";
import { useAuthStore } from "../../store/auth";

const SignUp = () => {
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
            Alert.alert("Error", "Fill in all fields");
        }

        setisSubmitting(true);

        try {
            const res = await axios.post("api/auth/register", form);
            const { user, token } = res.data;
            login(token, user);
            Alert.alert("Success", "You successfully signed up");
            router.replace({ href: "/survey", params: { token } });
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setisSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="h-full bg-black flex justify-between pb-5">
            <View className="w-full flex justify-center min-h-[85] px-5 py-4">
                <Header />

                <Text className="text-left font-wregular text-white text-base">
                    SIGN UP YOUR ACCOUNT
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
                    Already have an account?{"  "}
                    <Link className="text-white underline" href="/sign-in">
                        Sign In
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

export default SignUp;
