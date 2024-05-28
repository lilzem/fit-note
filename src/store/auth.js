import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

export const useAuthStore = create()((set, get) => ({
    user: null,
    token: null,
    isLoggedIn: false,
    setLogin: (token, user) =>
        set({ token: token, user: user, isLoggedIn: true }),
    setLogout: () => set({ token: null, user: null, isLoggedIn: false }),

    login: (token, user) => {
        const { setLogin, logout } = get();
        console.log(user);
        setLogin(token, user);
        AsyncStorage.setItem("@token", token);

        const { exp } = jwtDecode(token);

        const expDate = new Date(exp * 1000);

        setTimeout(() => {
            console.log("TimeOutWork Try Login");
            logout();
        }, +expDate - +new Date());
    },

    logout: () => {
        const { setLogout } = get();
        setLogout();
        AsyncStorage.removeItem("@token");
    },
}));
