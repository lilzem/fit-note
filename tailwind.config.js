/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: "#000",
                },
                white: {
                    DEFAULT: "#fff",
                    100: "#EEECE8",
                },
                gray: {
                    DEFAULT: "#EEECE880",
                },
                green: "#A0AF42",
            },
            fontFamily: {
                wregular: ["WorkSans-Regular", "sans-serif"],
                wmedium: ["WorkSans-Medium", "sans-serif"],
                wsemibold: ["WorkSans-SemiBold", "sans-serif"],
                wbold: ["WorkSans-Bold", "sans-serif"],
            },
        },
    },
    plugins: [],
};
