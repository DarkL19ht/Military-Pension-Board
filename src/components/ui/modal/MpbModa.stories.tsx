import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MpbModal from "./MpbModal";

const meta: Meta<typeof MpbModal> = {
    title: "Component/MpbModal",
    component: MpbModal,
    // tags: ["autodocs"],
    argTypes: {
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg", "xl", "2xl", "3xl", "xlarge"],
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

type Story = StoryObj<typeof MpbModal>;

export const OpenModal: Story = {
    args: {
        title: "Create Admin User",
        closeModal: action("close modal"),
        isOpen: true,
        // closeModal: action("close modal"),
        children: (
            <div className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsum
                aliquam dolor quibusdam, eos eaque eius ducimus nam autem eligendi!
            </div>
        ),
        backdrop: true,
        hasBackArrow: true,
        showCloseButton: true,
        showDivider: true,
        size: "lg",
    },
};

export const SmallModal: Story = {
    args: {
        title: "Create Admin User",
        closeModal: action("close modal"),
        isOpen: true,
        // closeModal: action("close modal"),
        children: (
            <div className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsum
                aliquam dolor quibusdam, eos eaque eius ducimus nam autem eligendi!
            </div>
        ),
        backdrop: true,
        hasBackArrow: true,
        showCloseButton: true,
        showDivider: true,
        size: "sm",
    },
};

export const MediumModal: Story = {
    args: {
        title: "Create Admin User",
        closeModal: action("close modal"),
        isOpen: true,
        // closeModal: action("close modal"),
        children: (
            <div className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsum
                aliquam dolor quibusdam, eos eaque eius ducimus nam autem eligendi!
            </div>
        ),
        backdrop: true,
        hasBackArrow: true,
        showCloseButton: true,
        showDivider: true,
        size: "md",
    },
};

export const XModal: Story = {
    args: {
        title: "Create Admin User",
        closeModal: action("close modal"),
        isOpen: true,
        // closeModal: action("close modal"),
        children: (
            <div className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsum
                aliquam dolor quibusdam, eos eaque eius ducimus nam autem eligendi!
            </div>
        ),
        backdrop: true,
        hasBackArrow: true,
        showCloseButton: true,
        showDivider: true,
        size: "xl",
    },
};

export const X2Modal: Story = {
    args: {
        title: "Create Admin User",
        closeModal: action("close modal"),
        isOpen: true,
        // closeModal: action("close modal"),
        children: (
            <div className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsum
                aliquam dolor quibusdam, eos eaque eius ducimus nam autem eligendi!
            </div>
        ),
        backdrop: true,
        hasBackArrow: true,
        showCloseButton: true,
        showDivider: true,
        size: "2xl",
    },
};

export const X3Modal: Story = {
    args: {
        title: "Create Admin User",
        closeModal: action("close modal"),
        isOpen: true,
        // closeModal: action("close modal"),
        children: (
            <div className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsum
                aliquam dolor quibusdam, eos eaque eius ducimus nam autem eligendi!
            </div>
        ),
        backdrop: true,
        hasBackArrow: true,
        showCloseButton: true,
        showDivider: true,
        size: "3xl",
    },
};

export const XLargeModal: Story = {
    args: {
        title: "Create Admin User",
        closeModal: action("close modal"),
        isOpen: true,
        // closeModal: action("close modal"),
        children: (
            <div className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsum
                aliquam dolor quibusdam, eos eaque eius ducimus nam autem eligendi!
            </div>
        ),
        backdrop: true,
        hasBackArrow: true,
        showCloseButton: true,
        showDivider: true,
        size: "xlarge",
    },
};
