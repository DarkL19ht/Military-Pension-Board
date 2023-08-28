import MpbModal from "@/components/ui/MpbModal";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

export default function ChangeRoleModal({ isOpen, closeModal }: IProps) {
    return (
        <MpbModal isOpen={isOpen} closeModal={closeModal}>
            <div className="p-5">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
                    modi accusamus sequi placeat libero ratione corrupti, quae architecto
                    quos nulla magnam harum fugit eveniet dolorem dolorum incidunt,
                    voluptas expedita sint?
                </p>
            </div>
        </MpbModal>
    );
}
