/* eslint-disable react/require-default-props */
import MpbModal from "../modal/MpbModal";
import { ICON_LIST, cn } from "@/lib";
import type { IProps as IModal } from "../modal/MpbModal";
import { MpbButton } from "../button/MpbButton";

// this contain props for only modal
type ModalType = Pick<
    IModal,
    "isOpen" | "size" | "closeModal" | "backdrop" | "bgTitle" | "title" | "showDivider"
>;

// This contain props for only sweetalert
interface ISweetAlert {
    onConfirm: () => void;
    message: string;
    animation?: boolean;
    icon?: "success_icon" | "success_lock_icon" | "delete_icon" | "warning_icon" | "";
    description?: string | any;
    confirmText?: string;
    showConfirmButton?: boolean;
    showCloseButton?: boolean;
    showCancelButton?: boolean;
    className?: string;
    messageClassName?: string;
    descriptionClassName?: string;
    isLoading?: boolean;
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
    isLoading = false,
    bgTitle = "default",
    confirmText = "",
    title = "",
    className = "",
    messageClassName = "",
    descriptionClassName = "",
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
            <div className="flex flex-col items-center justify-center gap-3 pt-5">
                {icon && (
                    <div className={`${animation && "animate-bounce"}`}>
                        {ICON_LIST[icon]}
                    </div>
                )}
                {message && (
                    <h4 className={cn("text-base font-medium", messageClassName)}>
                        {message}
                    </h4>
                )}
                {description && (
                    <p className={cn("text-gray-500", descriptionClassName)}>
                        {description}
                    </p>
                )}
                <div className="my-5 flex gap-5">
                    {showCancelButton && (
                        <MpbButton
                            title="Cancel"
                            variant="cancel"
                            onClick={closeModal}
                            className="px-10"
                            disabled={isLoading}
                        />
                    )}
                    {showConfirmButton && (
                        <MpbButton
                            title={confirmText}
                            variant="primary"
                            onClick={onConfirm}
                            className={className}
                            isLoading={isLoading}
                            disabled={isLoading}
                            type="submit"
                        />
                    )}
                </div>
            </div>
        </MpbModal>
    );
}
