import { Decorator } from "@storybook/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const withCentered: Decorator = (Story, _context) => {
    // console.log(context)
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <Story />
        </div>
    );
};

export const globalDecorators = [withCentered];
