module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        // "eslint:recommended",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint", "react", "prettier"],
    rules: {
        "react/react-in-jsx-scope": 0,
        "no-param-reassign": 0,
        "no-console": "error",
        "import/extensions": 0,
        "prettier/prettier": 0,
        "react/button-has-type": 0,
        // "react/prop-types": 0,
        // "react/no-unused-prop-types": 0,
        // "react/no-unused-prop-types": 0,
    },
};
