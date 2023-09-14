import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { ChevronLeft, Plus, Trash2 } from "lucide-react";
import { CiUser } from "react-icons/ci";
import UploadCsvFileModal from "./UploadCsvFileModal";
import { reducer, initialState, ReducerActionType } from "./reducer";
import {
    MpbSweetAlert as RegistraionSuccessModal,
    MpbSweetAlert as MaxLimitManualModal,
    MpbTextField,
    MpbReactSelectField,
    MpbButton,
} from "@/components";
import appConfig from "@/config";
import useCreatePensioner from "@/api/pensioner-controller/useCreatePensioner";
import useGetRanks from "@/api/rank-controller/useGetRanks";
import useGetBanks from "@/api/bank-controller/useGetBanks";
import { useToast } from "@/components/ui/toast/use-toast";
import { delay } from "@/lib/helpers";

interface FormValues {
    dataFields: {
        accountNo: string;
        bankCode: string | any;
        bvn: string;
        email: string;
        firstName: string;
        lastName: string;
        otherName: string;
        phone: string;
        rankCode: string | any;
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
    rankCode: "",
    serviceNo: "",
};

export default function Pensioner() {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { isRegSuccess, isUploadCsv, hasReachedLimit } = state;
    const [successMessage, setSuccessMessage] = useState("");
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
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
    /** apiCall for ranks */
    const { data: ranks } = useGetRanks();
    /** apiCall for banks */
    const { data: banks } = useGetBanks();

    const { CreatePensioner, isCreatingPensioner } = useCreatePensioner({
        onSuccess: async (res) => {
            setSuccessMessage(res.data.responseMessage);
            runDispatch({ type: ReducerActionType.OPEN_REG_SUCCESS_MODAL });
            await delay(4);
            navigate("/pensioners");
            // queryClient.invalidateQueries([queryKeys.GET_USERS]);
        },
        onError: (err) => {
            const { error, message, responseMessage } = err.response.data;
            toast({
                title: error,
                description: message || responseMessage,
                variant: "error",
            });
        },
    });

    const handleCreatePensioner = (values: FormValues) => {
        const requestPayload = values?.dataFields?.map((item) => ({
            ...item,
            bankCode: item?.bankCode?.value,
            rankCode: item?.rankCode?.value,
        }));
        CreatePensioner(requestPayload);
    };

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
                            You can add a maximum of{" "}
                            <span className="text-base text-green-700">
                                {appConfig?.maxLimitForManualPensionerForm}
                            </span>{" "}
                            pensioners manually or click here to
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
                    <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                    <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
                    <form>
                        {fields.map((field, index, arr) => {
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
                                        {arr.length > 1 && (
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
                                            />{" "}
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
                                                options={banks}
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
                                            />{" "}
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="flex  gap-3">
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
                                                name={`dataFields.${index}.rankCode`}
                                                options={ranks}
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
                        <div className="flex w-full justify-end py-3">
                            <MpbButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
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
                                type="submit"
                                onClick={handleSubmit(handleCreatePensioner)}
                                title="Submit"
                                className="my-5 w-3/5"
                                isLoading={isCreatingPensioner}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <RegistraionSuccessModal
                onConfirm={() => navigate("/pensioners")}
                isOpen={isRegSuccess}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_REG_SUCCESS_MODAL })
                }
                message={successMessage}
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
