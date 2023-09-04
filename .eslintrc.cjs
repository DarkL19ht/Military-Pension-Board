module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended"
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
        "prettier/prettier": 0,
        "no-console": "error",
        "import/extensions": 0,
        "react/button-has-type": 0,
        "jsx-a11y/label-has-associated-control": [
            2,
            {
                labelComponents: ["CustomInputLabel"],
                labelAttributes: ["label"],
                controlComponents: ["CustomInput"],
                depth: 3,
            },
        ],
        "react/jsx-props-no-spreading": 0,
        "func-names": 0,
        "prettier/prettier":0,
        "react/button-has-type":0,
        "@typescript-eslint/no-explicit-any": 0, // TODO: remove this after fixing issue with "any"
        // "react/prop-types": 0,
        // "react/no-unused-prop-types": 0,
        // "react/no-unused-prop-types": 0,
    },
};
