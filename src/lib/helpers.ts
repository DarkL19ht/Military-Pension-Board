/* eslint-disable import/prefer-default-export */

// export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const getClassNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
};
