import axios from "axios";
import { BACKEND_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "../store/auth";

// axios.defaults.baseURL = BACKEND_URL;
axios.defaults.baseURL = "https://28ec-194-24-236-45.ngrok-free.app";

axios.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("@token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const { isLoggedIn, logout } = useAuthStore.getState();
        if (error.response?.status === 401 && isLoggedIn) {
            logout();
        }
        return Promise.reject(error);
    }
);

export default axios;
