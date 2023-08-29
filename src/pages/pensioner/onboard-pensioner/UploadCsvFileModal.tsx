import MpbModal from "@/components/ui/MpbModal";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

export default function UploadCsvFileModal({ isOpen, closeModal }: IProps) {
    return (
        <MpbModal
            showDivider={false}
            title="Upload CSV"
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <div className="p-5">
                <label
                    className="flex w-full cursor-pointer 
                    appearance-none items-center 
                    justify-center rounded-md border-2 border-dashed 
                    border-gray-200 p-10 transition-all hover:border-gray-300"
                >
                    <div className="space-y-1 text-center">
                        <div
                            className="mx-auto inline-flex h-10 w-10 
                            items-center justify-center 
                            rounded-full bg-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                            </svg>
                        </div>
                        <div className="text-gray-600">
                            <button
                                type="button"
                                className="text-primary-500 hover:text-primary-700 font-medium"
                            >
                                Click to upload
                            </button>
                            &nbsp; or drag and drop
                        </div>
                        <p className="text-sm text-gray-500">
                            CSV file only (max. 800x400px)
                        </p>
                    </div>
                    <input id="example5" type="file" className="sr-only" />
                </label>
            </div>
        </MpbModal>
    );
}
