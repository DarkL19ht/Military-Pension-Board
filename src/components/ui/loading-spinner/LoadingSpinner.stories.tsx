import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

const meta: Meta<typeof LoadingSpinner> = {
    title: "Component/LoadingSpinner",
    component: LoadingSpinner,
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const SearchInput: Story = {
    args: {
        bgColor: "bg-black",
    },
};
