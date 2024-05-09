import axios from "axios";
import { BACKEND_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "../store/auth";

const TEMP_BACKEND_URL = "https://023e-91-214-138-150.ngrok-free.app";

axios.defaults.baseURL = TEMP_BACKEND_URL;

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
