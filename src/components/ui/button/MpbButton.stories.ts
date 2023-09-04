import type { Meta, StoryObj } from "@storybook/react";
import { MpbButton } from "./MpbButton";
import { withCentered } from "@/lib/decorators";

const meta: Meta<typeof MpbButton> = {
    title: "Component/MpbButton",
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
            options: [
                "primary",
                "secondary",
                "warning",
                "outline-primary",
                "outline-secondary",
                "cancel",
                "link",
            ],
        },
        size: { control: "inline-radio", options: ["default", "sm", "md", "lg"] },
    },
    decorators: [withCentered],
};

export default meta;
type Story = StoryObj<typeof MpbButton>;

export const Primary: Story = {
    args: {
        variant: "primary",
        fullWidth: false,
        title: "Submit",
        disabled: false,
        isLoading: false,
        loadingText: "Please wait",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        fullWidth: false,
        title: "Submit",
        disabled: false,
    },
};

export const FullWidth: Story = {
    args: {
        variant: "primary",
        fullWidth: true,
        title: "Submit",
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        variant: "primary",
        fullWidth: true,
        title: "Submit",
        disabled: true,
    },
};

export const Loading: Story = {
    args: {
        variant: "primary",
        fullWidth: false,
        title: "Submit",
        disabled: false,
        isLoading: true,
        loadingText: "Please wait",
        className: "",
    },
};
