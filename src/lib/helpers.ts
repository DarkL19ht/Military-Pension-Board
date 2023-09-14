// export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const getClassNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
};

export function delay(seconds: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000); // Convert seconds to milliseconds
    });
}
