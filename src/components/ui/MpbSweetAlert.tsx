/* eslint-disable react/require-default-props */
import MpbModal from "./MpbModal";
import { ICON_LIST } from "@/lib";
import type { IProps as IModal } from "./MpbModal";

// this contain props for only modal
type ModalType = Pick<
    IModal,
    "isOpen" | "size" | "closeModal" | "backdrop" | "showCloseButton"
>;

// This contain props for only sweetalert
interface ISweetAlert {
    onConfirm: () => void;
    animation?: boolean;
    icon?: "success_icon" | "success_lock_icon";
    message: string;
    description?: string;
}

// this contain props for both modal and sweetalert
interface IProps extends ModalType, ISweetAlert {}

export default function MpbSweetAlert({
    isOpen,
    closeModal,
    onConfirm,
    message,
    size = "md",
    animation = false,
    icon = "success_icon",
    backdrop = true,
    description = "",
    showCloseButton = false,
}: IProps) {
    return (
        <MpbModal
            showCloseButton={showCloseButton}
            backdrop={backdrop}
            isOpen={isOpen}
            size={size}
            closeModal={closeModal}
        >
            <div className="flex flex-col items-center justify-center gap-4 pt-10">
                {icon && (
                    <div className={`${animation && "animate-bounce"}`}>
                        {ICON_LIST[icon]}
                    </div>
                )}
                {message && (
                    <h4 className="text-lg font-medium text-green-600">
                        Registration Successfull
                    </h4>
                )}
                {description && (
                    <p className="text-gray-500">
                        Your registration has been sent to the super admin
                    </p>
                )}
                <button
                    type="button"
                    className="mb-5 rounded-md bg-green-600 px-10 py-2 text-white"
                    onClick={onConfirm}
                >
                    Done
                </button>
            </div>
        </MpbModal>
    );
}
