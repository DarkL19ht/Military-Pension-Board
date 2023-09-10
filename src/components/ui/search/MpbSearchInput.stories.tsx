import type { Meta, StoryObj } from "@storybook/react";
import { withCentered } from "@/lib/decorators";
import MpbSearchInput from "./MpbSearchInput";

const meta: Meta<typeof MpbSearchInput> = {
    title: "Component/MpbSearchInput",
    component: MpbSearchInput,
    // tags: ["autodocs"],x
    decorators: [
        (Story) => {
            return (
                <div className="w-2/5 bg-gray-100 p-5">
                    <Story />
                </div>
            );
        }, // second wrapper
        withCentered, // first wrapper
    ],
};

export default meta;
type Story = StoryObj<typeof MpbSearchInput>;

export const SearchInput: Story = {
    args: {
        placeholder: "Search by pensioner's name...",
        className: "",
    },
};
