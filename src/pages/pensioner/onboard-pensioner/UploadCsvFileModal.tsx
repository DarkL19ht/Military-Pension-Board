import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
    CSVLink,
    // CSVDownload
} from "react-csv";
import MpbModal from "@/components/ui/modal/MpbModal";
import { sampleCsvHeaders, sampleCsvData, bankCodeHeaders } from "./sample-template";
import useGetBanks from "@/api/bank-controller/useGetBanks";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

const percentage = 50;

interface IFileDetails {
    [key: string]: any;
    preview: string;
    hasFile: boolean;
}

const initialState = {
    result: {},
    preview: "",
    hasFile: false,
};

export default function UploadCsvFileModal({ isOpen, closeModal }: IProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    // const [files, setFiles] = useState([])
    const [file, setFile] = useState<IFileDetails>(initialState);
    const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files
        if (acceptedFiles?.length) {
            setFile({
                result: acceptedFiles[0],
                preview: URL.createObjectURL(acceptedFiles[0]),
                hasFile: true,
            });
        }
        // if (acceptedFiles?.length) {
        //     setFiles((previousFiles) => [
        //         ...previousFiles,
        //         ...acceptedFiles.map((file) =>
        //             Object.assign(file, { preview: URL.createObjectURL(file) })
        //         ),
        //     ]);
        // }
    }, []);

    const handleCloseModal = () => {
        closeModal();
        setFile(initialState);
        setIsProcessing(!isProcessing);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "text/csv": [".csv"],
        },
    });

    const { data: banks } = useGetBanks();

    const listOfBankCodes = banks?.reduce((acc: any, items: any) => {
        return [...acc, { bankName: items.label, bankCode: items.value }];
    }, []);

    const csvSampleReport = {
        filename: "sample_csv_upload.csv",
        headers: sampleCsvHeaders,
        data: sampleCsvData,
        target: "_blank",
        className: "text-green-600",
    };

    /** TODO: change this to  */
    const csvBankCodes = {
        filename: "list_of_bank_codes.csv",
        headers: bankCodeHeaders,
        data: listOfBankCodes,
        target: "_blank",
        className: "text-green-600",
    };

    return (
        <MpbModal
            showDivider={false}
            title="Upload CSV"
            isOpen={isOpen}
            closeModal={handleCloseModal}
            size="lg"
        >
            {isProcessing ? null : (
                <div className="mx-5 flex justify-between bg-green-50 px-5 py-3">
                    <div className="flex gap-1">
                        <CSVLink {...csvSampleReport}>Download</CSVLink>
                        <span>CSV template</span>
                    </div>
                    <div className="flex gap-1">
                        <CSVLink {...csvBankCodes}>Download</CSVLink>
                        <span>Bank Codes</span>
                    </div>
                </div>
            )}
            <div
                {...getRootProps({
                    className: "p-5",
                })}
            >
                <label
                    className="flex w-full cursor-pointer 
                    appearance-none items-center 
                    justify-center rounded-md border-2 border-dashed 
                    border-gray-200 p-10 transition-all hover:border-gray-300"
                >
                    {isProcessing ? (
                        <div className="flex flex-col items-center gap-2">
                            <div style={{ width: 100, height: 100 }}>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={5}
                                    styles={buildStyles({
                                        textColor: "#696261",
                                        pathColor: "green",
                                        trailColor: "#696261",
                                        textSize: "20px",
                                    })}
                                />
                            </div>
                            <p>Uploading Files</p>
                            <button
                                type="button"
                                className="rounded-lg bg-gray-200 px-10 py-2 text-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <div>
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
                                {isDragActive && <p>Drop the files here ...</p>}
                                {file?.hasFile && <div>{file?.result?.name}</div>}
                                {!isDragActive && !file?.hasFile && (
                                    <div className="flex flex-col gap-1 text-gray-600">
                                        <button
                                            type="button"
                                            className="text-primary-500 hover:text-primary-700 font-medium"
                                        >
                                            Click to upload &nbsp; or drag and drop
                                        </button>
                                        <p className="text-sm text-gray-500">
                                            CSV file only (max. 800x400px)
                                        </p>
                                    </div>
                                )}
                            </div>
                            <input
                                id="csvUpload"
                                type="file"
                                className="sr-only"
                                {...getInputProps()}
                                accept=".csv"
                            />
                        </div>
                    )}
                </label>
            </div>
        </MpbModal>
    );
}
