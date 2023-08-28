import MpbModal from "@/components/ui/MpbModal";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

export default function ResetPasswordModal({ isOpen, closeModal }: IProps) {
    return (
        <MpbModal title="Reset Password" isOpen={isOpen} closeModal={closeModal}>
            <div>
                <form action="">
                    <div>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </MpbModal>
    );
}
