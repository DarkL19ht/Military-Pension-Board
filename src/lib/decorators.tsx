/* eslint-disable import/no-extraneous-dependencies */
import { Decorator } from "@storybook/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const withCentered: Decorator = (Story, _context) => {
    // console.log(context)
    return (
        <div className="flex h-[60vh] w-full items-center justify-center">
            <div className="flex w-3/5 items-center justify-center">
                <Story />
            </div>
        </div>
    );
};

export const globalDecorators = [withCentered];
