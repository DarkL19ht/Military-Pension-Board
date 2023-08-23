/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                latoBlack: "LatoBlack, sans-serif",
                latoBold: "LatoBold, sans-serif",
                latoLight: "LatoLight, sans-serif",
                latoRegular: "LatoRegular, sans-serif",
                latoThin: "LatoThin, sans-serif",
                Montserrat: "Montserrat",
            },
        },
    },
    plugins: [],
};
