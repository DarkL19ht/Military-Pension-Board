import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import AdminUserPage from "./index";

const meta = {
    title: "page/AdminUserPage ",
    component: AdminUserPage,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} satisfies Meta<typeof AdminUserPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const AddNewUser: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const addButton = await canvas.getByRole("button", {
            name: /Add Admin User/i,
        });
        await userEvent.click(addButton);
    },
};
