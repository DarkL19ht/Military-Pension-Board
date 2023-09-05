import { useReducer } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ChevronLeft, Plus, Trash2 } from "lucide-react";
import { CiUser } from "react-icons/ci";
import UploadCsvFileModal from "./UploadCsvFileModal";
import { reducer, initialState, ReducerActionType } from "./reducer";
import {
    MpbSweetAlert as RegistraionSuccessModal,
    MpbSweetAlert as MaxLimitManualModal,
    MpbTextField,
    MpbButton,
} from "@/components";
import MpbReactSelectField from "@/components/@form/MpbReactSelectField";
import appConfig from "@/config";

interface FormValues {
    dataFields: {
        accountNo: string;
        bankCode: string;
        bvn: string;
        email: string;
        firstName: string;
        lastName: string;
        otherName: string;
        phone: string;
        rank: number;
        serviceNo: string;
    }[];
}

const initialFormValues = {
    accountNo: "",
    bankCode: "",
    bvn: "",
    email: "",
    firstName: "",
    lastName: "",
    otherName: "",
    phone: "",
    rank: 0,
    serviceNo: "",
};

export default function Pensioner() {
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { isRegSuccess, isUploadCsv, hasReachedLimit } = state;
    const {
        control,
        // handleSubmit,
        // watch
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            dataFields: [{ ...initialFormValues }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "dataFields",
    });

    // const handlePensionerForm = (values: FormValues) => {

    // };
    return (
        <div className="w-[95%] pl-14 md:w-[75%]">
            <div className="my-5 flex gap-1">
                <ChevronLeft />
                <h4>Back to pensioner verification</h4>
            </div>
            <div className="mb-20 w-full overflow-auto rounded-md border border-gray-100 p-5 shadow-md">
                <div className="mb-5 flex flex-col gap-2 py-6">
                    <h4 className="text-2xl font-medium text-gray-600">
                        New Pensioners Form
                    </h4>
                    <div className="text-gray-500">
                        <span>
                            You can add a maximum of three(3) pensioners manually or click
                            here to{" "}
                            <MpbButton
                                title="Upload CSV"
                                variant="link"
                                className="text-base"
                                onClick={() => {
                                    runDispatch({
                                        type: ReducerActionType.OPEN_UPLOAD_CSV_MODAL,
                                    });
                                }}
                            />
                            to add more.
                        </span>
                    </div>
                </div>
                <div>
                    {/* TODO: user correct icon for each field */}
                    {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
                    <form>
                        {fields.map((field, index) => {
                            return (
                                <div
                                    key={field.id}
                                    className="mb-5 flex w-full flex-col gap-5"
                                >
                                    {index > 0 && <hr className="h-1 bg-green-600 " />}

                                    <div className="mb-5 flex items-center justify-between">
                                        <h4 className="text-green-600">
                                            Form {index + 1}
                                        </h4>
                                        {index > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                            >
                                                <Trash2 size={20} color="red" />
                                            </button>
                                        )}
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="w-full md:w-1/2">
                                            <MpbTextField
                                                label="First name"
                                                name={`dataFields.${index}.firstName`}
                                                type="text"
                                                icon={<CiUser size={20} />}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "First name is required",
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <MpbTextField
                                                label="Last name"
                                                name={`dataFields.${index}.lastName`}
                                                type="text"
                                                icon={<CiUser size={20} />}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Last name is required",
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="flex gap-3">
                                        <div className=" w-full md:w-1/2">
                                            <MpbTextField
                                                label="Other Name"
                                                name={`dataFields.${index}.otherName`}
                                                type="text"
                                                icon={<CiUser size={20} />}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Other name is required",
                                                    },
                                                }}
                                                // asterik={false}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <MpbTextField
                                                label="Phone number"
                                                name={`dataFields.${index}.phone`}
                                                placeholder="Enter Phone Number"
                                                type="number"
                                                icon={<CiUser size={20} />}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Phone number is required",
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="flex gap-3">
                                        <div className="w-full md:w-1/2">
                                            <MpbTextField
                                                label="Email Address"
                                                name={`dataFields.${index}.email`}
                                                type="text"
                                                icon={<CiUser size={20} />}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Email address is required",
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <MpbTextField
                                                label="Bank Verification Number(BVN)"
                                                name={`dataFields.${index}.bvn`}
                                                type="number"
                                                icon={<CiUser size={20} />}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Service ID is required",
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="flex gap-3">
                                        <div className="w-full md:w-1/2">
                                            <MpbReactSelectField
                                                label="Bank"
                                                control={control}
                                                name={`dataFields.${index}.bankCode`}
                                                options={[]}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Please select a bank",
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <MpbTextField
                                                label="Account Number"
                                                name={`dataFields.${index}.accountNo`}
                                                type="number"
                                                icon={<CiUser size={20} />}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Account number is required",
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-full md:w-1/2">
                                            <MpbTextField
                                                label="Service ID"
                                                name={`dataFields.${index}.serviceNo`}
                                                type="text"
                                                icon={<CiUser size={20} />}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Service ID is required",
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <MpbReactSelectField
                                                label="Rank"
                                                control={control}
                                                name={`dataFields.${index}.rank`}
                                                options={[]}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Please choose a rank",
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            );
                        })}
                        <div className="flex w-full justify-end py-2.5">
                            <MpbButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (
                                        fields.length ===
                                        appConfig.maxLimitForManualPensionerForm
                                    ) {
                                        runDispatch({
                                            type: ReducerActionType.OPEN_LIMIT_MODAL,
                                        });
                                    } else {
                                        append({ ...initialFormValues });
                                    }
                                }}
                                title="Add New Pensioner"
                                icon={<Plus />}
                            />
                        </div>
                        <div className="flex justify-center">
                            <MpbButton
                                variant="outline-primary"
                                type="button"
                                onClick={() =>
                                    runDispatch({
                                        type: ReducerActionType.OPEN_REG_SUCCESS_MODAL,
                                    })
                                }
                                title="Submit"
                                className="my-5 w-3/5"
                            />
                        </div>
                    </form>
                </div>
            </div>

            <RegistraionSuccessModal
                onConfirm={() => undefined}
                isOpen={isRegSuccess}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_REG_SUCCESS_MODAL })
                }
                message="Registration Successful"
                description="Your registration has been sent to the super admin"
                icon="success_icon"
                confirmText="Done"
                showDivider={false}
            />
            <MaxLimitManualModal
                isOpen={hasReachedLimit}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_LIMIT__MODAL })
                }
                onConfirm={() => {
                    runDispatch({
                        type: ReducerActionType.OPEN_UPLOAD_CSV_MODAL,
                    });
                    runDispatch({ type: ReducerActionType.CLOSE_LIMIT__MODAL });
                }}
                message="Maximum number reached"
                description={
                    <p className="px-5 text-center">
                        You can add a maximum of three(3) pensioners manually. Kindly,
                        upload a CSV to add more.
                    </p>
                }
                icon="warning_icon"
                confirmText="Upload CSV"
                showDivider={false}
            />
            <UploadCsvFileModal
                isOpen={isUploadCsv}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_UPLOAD_CSV_MODAL })
                }
            />
        </div>
    );
}
