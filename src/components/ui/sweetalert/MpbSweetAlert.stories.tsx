import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MpbSweetAlert from "./MpbSweetAlert";

const meta: Meta<typeof MpbSweetAlert> = {
    title: "Component/MpbSweetAlert ",
    component: MpbSweetAlert,
    // tags: ["autodocs"],
    argTypes: {
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg", "xl", "2xl", "3xl", "xlarge"],
        },
        icon: {
            control: "radio",
            options: [
                "success_icon",
                "success_lock_icon",
                "delete_icon",
                "warning_icon",
                "",
            ],
        },
        bgTitle: {
            control: "select",
            options: ["default", "primary", "secondary"],
        },
    },
    decorators: [
        (Story) => (
            <div className="flex h-screen w-full justify-center">
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof MpbSweetAlert>;

export const OpenSweetAlert: Story = {
    args: {
        isOpen: true,
        closeModal: action("close sweetalert button clicked"),
        onConfirm: action("confirm sweetalert button clicked"),
        message: "Are you sure of this action ?",
        size: "md",
        animation: false,
        icon: "success_icon",
        backdrop: true,
        description: "This action cannnot be reverse",
        showCloseButton: false,
        showConfirmButton: true,
        showCancelButton: false,
        showDivider: true,
        bgTitle: "default",
        confirmText: "Submit",
        title: "Alert Title",
        className: "",
        isLoading: false,
    },
};

export const DisableUserAlert: Story = {
    args: {
        isOpen: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmText: "Disable",
        message: "Are you sure you want to disable this user ?",
        description: "This will reflect on your portal immediately",
        showDivider: false,
        isLoading: false,
    },
};
