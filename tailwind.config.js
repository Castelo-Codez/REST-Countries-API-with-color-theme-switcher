/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    darkMode: "selector",
    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            colors: {
                "dark-DarkBlue": "hsl(209, 23%, 22%)",
                "dark-VeryDarkBlue": " hsl(207, 26%, 17%)",
                "light-DarkGray": " hsl(0, 0%, 52%)",
                "light-veryLightGray": "hsl(0, 0%, 98%)",
                "primary-white": "hsl(0, 0%, 100%)",
            },
            container: {
                center: true,
                padding: "15px",
                screens: {
                    "576px": "540px",
                    "768px": "720px",
                    "992px": "960px",
                    "1200px": "1140px",
                    "1400px": "1320px",
                },
            },
        },
    },
    plugins: [],
};
