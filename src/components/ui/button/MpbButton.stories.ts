import type { Meta, StoryObj } from "@storybook/react";

import { MpbButton } from "./MpbButton";

const meta: Meta<typeof MpbButton> = {
    title: "Component/Button",
    component: MpbButton,
    tags: ["autodocs"],
    argTypes: {
        // backgroundColor: { control: 'color' }
        fullWidth: {
            control: {
                type: "boolean",
                defaultValue: false,
            },
        },
        variant: {
            control: "inline-radio",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: { control: "inline-radio", options: ["default", "sm", "lg", "icon"] },
    },
};

export default meta;
type Story = StoryObj<typeof MpbButton>;

export const Primary: Story = {
    args: {
        variant: "default",
        fullWidth: true,
        title: "Submit",
    },
};
