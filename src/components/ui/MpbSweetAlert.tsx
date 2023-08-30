/* eslint-disable react/require-default-props */
import MpbModal from "./MpbModal";
import { ICON_LIST, cn } from "@/lib";
import type { IProps as IModal } from "./MpbModal";

// this contain props for only modal
type ModalType = Pick<
    IModal,
    | "isOpen"
    | "size"
    | "closeModal"
    | "backdrop"
    | "showCloseButton"
    | "bgTitle"
    | "title"
    | "showDivider"
>;

// This contain props for only sweetalert
interface ISweetAlert {
    onConfirm: () => void;
    message: string;
    animation?: boolean;
    icon?: "success_icon" | "success_lock_icon" | "";
    description?: string;
    confirmText?: string;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    className?: string;
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
    icon = "",
    backdrop = true,
    description = "",
    showCloseButton = false,
    showConfirmButton = true,
    showCancelButton = false,
    showDivider = true,
    bgTitle = "default",
    confirmText = "",
    title = "",
    className = "",
}: IProps) {
    return (
        <MpbModal
            showCloseButton={showCloseButton}
            showDivider={showDivider}
            bgTitle={bgTitle}
            title={title}
            backdrop={backdrop}
            isOpen={isOpen}
            size={size}
            closeModal={closeModal}
        >
            <div className="flex flex-col items-center justify-center gap-5 pt-10">
                {icon && (
                    <div className={`${animation && "animate-bounce"}`}>
                        {ICON_LIST[icon]}
                    </div>
                )}
                {message && (
                    <h4 className="mb-2 text-base font-medium text-green-500">
                        {message}
                    </h4>
                )}
                {description && <p className="text-gray-500">{description}</p>}
                <div className="flex gap-5">
                    {showCancelButton && (
                        <button
                            type="button"
                            className="mb-5 rounded-md border border-green-500 px-10 py-2 text-green-500"
                            onClick={closeModal}
                        >
                            cancel
                        </button>
                    )}
                    {showConfirmButton && (
                        <button
                            type="button"
                            className={cn(
                                "mb-5 rounded-md bg-green-600 px-10 py-2 text-white",
                                className
                            )}
                            onClick={onConfirm}
                        >
                            {confirmText}
                        </button>
                    )}
                </div>
            </div>
        </MpbModal>
    );
}
