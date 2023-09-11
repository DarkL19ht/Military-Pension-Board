export const VALIDATE_EMAIL = {
    value: /.{2,}@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/i,
    message: "Please enter a valid email address",
};

export const ALPHABET_ONLY = {
    value: /^[A-Za-z\s]+$/,
    message: "Please enter alphabets only",
};

export const NUMBER_ONLY = {
    value: /^[0-9]+$/,
    message: "please enter numbers only",
};

export const VALIDATE_NAME = (values: string) => {
    const value = values?.trim().length >= 3;
    return value || "Atleast 3 characters name is require";
};
