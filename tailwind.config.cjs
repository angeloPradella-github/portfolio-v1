module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                lg: { raw: "(min-width: 1024px)" },
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["lg"],
            textColor: ["lg"],
            padding: ["lg"],
            fontWeight: ["lg"],
        },
    },
    plugins: [],
};
