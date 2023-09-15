import { useEffect, useState, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronLeft, FileEdit, DownloadCloud } from "lucide-react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import PensionerPics from "@/assets/images/pensionerpics.png";
import {
    MpbTextField,
    MpbReactSelectField,
    MpbSelectField,
    MpbButton,
} from "@/components";
import useGetRanks from "@/api/rank-controller/useGetRanks";
import useGetBanks from "@/api/bank-controller/useGetBanks";
import useGetPensionerById from "@/api/pensioner-controller/useGetPensionerById";
import useUpdatePensioner from "@/api/pensioner-controller/useUpdatePensioner";
import { STATUS, VerificationStatus } from "@/types/enum";
import { STATUS_OPTIONS, VERIFICATION_STATUS_OPTIONS } from "./constant";
import { useToast } from "@/components/ui/toast/use-toast";
import queryKeys from "@/api/queryKeys";

interface FormValues {
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
    status: STATUS | "";
    verificationStatus: VerificationStatus | "";
}

export default function ViewPensionersProfile() {
    const params: any = useParams();
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isDisabled, setIsDisabled] = useState(true);
    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { isDirty },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            accountNo: "",
            bankCode: "",
            bvn: "",
            email: "",
            firstName: "",
            lastName: "", //
            otherName: "", //
            phone: "", //
            rankCode: "", //
            serviceNo: "", //
            status: "",
            verificationStatus: "",
        },
    });
    /** apiCall for ranks */
    const { data: rankOptions } = useGetRanks();
    /** apiCall for banks */
    const { data: bankOptions } = useGetBanks();
    /** apiCall to get pensioner by ID */
    const data = useGetPensionerById(params?.id);
    const [pensionerDetail] = data.content;
    const pensionerInfo = useMemo(() => {
        return {
            accountNo: pensionerDetail.accountNo,
            bankCode: {
                value: pensionerDetail.banks.code,
                label: pensionerDetail.banks.name,
            }, //
            bvn: pensionerDetail.bvn,
            email: pensionerDetail.email,
            firstName: pensionerDetail.firstName,
            lastName: pensionerDetail.lastName,
            otherName: pensionerDetail.otherName,
            phone: pensionerDetail.phone,
            rankCode: {
                value: pensionerDetail.rank.code,
                label: pensionerDetail.rank.name,
            },
            serviceNo: pensionerDetail.serviceNo,
            status: pensionerDetail.status,
            verificationStatus: pensionerDetail.verificationStatus,
            // ... (rest of the properties)
        };
    }, [pensionerDetail]);

    useEffect(() => {
        reset({
            ...pensionerInfo,
        });
    }, [pensionerInfo, reset]);

    const { UpdatePensioner, isupdatingPensioner } = useUpdatePensioner({
        onSuccess: (res) => {
            toast({
                description: res?.data?.responseMessage,
            });
            queryClient.invalidateQueries([queryKeys.GET_PENSIONER, params?.id]);
            setIsDisabled(true);
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

    const handleUpdatePensioner = (values: FormValues) => {
        const requestPayload = {
            ...values,
            rankCode: values.rankCode.value,
            bankCode: values.bankCode.value,
        };
        UpdatePensioner({
            requestPayload,
            id: params?.id,
        });
    };

    return (
        <div className="mx-auto w-[70%]">
            <div className="mb-5 flex w-full justify-between py-3">
                {/* Breacrumb */}
                <button className="flex gap-1">
                    <ChevronLeft />
                    <span>Back to Pensioners Verification</span>
                </button>
                <div className="flex gap-2 ">
                    <button
                        className="flex items-center gap-1 rounded-md 
                    border border-green-500 px-4 py-1 text-green-500"
                        onClick={() => setIsDisabled(false)}
                    >
                        <span>Edit</span>
                        <FileEdit size={15} />
                    </button>
                    <button className="flex items-center gap-1 rounded-md bg-green-500 px-4 py-1 text-white">
                        <span>Download report</span>
                        <DownloadCloud size={15} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-2  rounded-lg bg-gray-100 p-5 shadow-md">
                    <img
                        src={PensionerPics}
                        alt="Pensioner_pics"
                        className="h-24 w-24 rounded-full border-4 border-green-400"
                    />
                    <div className="mt-3 flex flex-col gap-y-2">
                        <h4 className="text-green-500">National Identification Number</h4>
                        <h2 className="font-bold">Ibrahim Olayinka</h2>
                    </div>
                </div>
                <div className="flex gap-2  rounded-lg bg-gray-100 p-5 shadow-md">
                    <img
                        src={PensionerPics}
                        alt="Pensioner_pics"
                        className="h-24 w-24 rounded-full border-4 border-green-400"
                    />
                    <div className="mt-3 flex flex-col gap-y-2">
                        <h4 className="text-green-500">National Identification Number</h4>
                        <h2 className="font-bold">Ibrahim Olayinka</h2>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                {/* TODO: remove below line */}
                <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                <form action="" className="flex flex-col gap-y-6">
                    <section className="flex gap-3">
                        <div className="w-full md:w-1/2">
                            <MpbTextField
                                label="First name"
                                name="firstName"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "First name is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />{" "}
                        </div>
                        <div className="w-full md:w-1/2">
                            <MpbTextField
                                label="Last name"
                                name="lastName"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Last name is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                    </section>
                    <section className="flex gap-3">
                        <div className=" w-full md:w-1/2">
                            <MpbTextField
                                label="Other Name"
                                name="otherName"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Other name is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <MpbTextField
                                label="Phone number"
                                name="phone"
                                placeholder="Enter Phone Number"
                                type="number"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Phone number is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                    </section>
                    <section className="flex gap-3">
                        <div className=" w-full md:w-1/2">
                            <MpbTextField
                                label="Email"
                                name="email"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Email address is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <MpbTextField
                                label="Bank Verification Number (BVN)"
                                name="bvn"
                                placeholder="Enter BVN"
                                type="number"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "BVN is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                    </section>
                    <section className="flex gap-3">
                        <div className="w-full md:w-1/2">
                            <MpbReactSelectField
                                label="Bank"
                                control={control}
                                name="bankCode"
                                options={bankOptions}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please select a bank",
                                    },
                                }}
                                asterik={false}
                                isDisabled={isDisabled}
                            />
                        </div>
                        <div className=" w-full md:w-1/2">
                            <MpbTextField
                                label="Account Number"
                                name="accountNo"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Account number is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                    </section>
                    <section className="flex gap-3">
                        <div className="w-full md:w-1/2">
                            <MpbReactSelectField
                                label="Rank"
                                control={control}
                                name="rankCode"
                                options={rankOptions}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please select a rank",
                                    },
                                }}
                                asterik={false}
                                isDisabled={isDisabled}
                            />
                        </div>
                        <div className=" w-full md:w-1/2">
                            <MpbTextField
                                label="Service ID"
                                name="serviceNo"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Service ID is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                    </section>
                    <section className="flex gap-3">
                        <div className="w-full md:w-1/2">
                            <MpbSelectField
                                label="Status"
                                control={control}
                                name="status"
                                options={STATUS_OPTIONS}
                                icon={<CiUser size={20} />}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please select a status",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className=" w-full md:w-1/2">
                            <MpbSelectField
                                label="Verification Status"
                                name="verificationStatus"
                                icon={<CiUser size={20} />}
                                control={control}
                                options={VERIFICATION_STATUS_OPTIONS}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Service ID is required",
                                    },
                                }}
                                asterik={false}
                                disabled={isDisabled}
                            />
                        </div>
                    </section>
                    <section className="mt-5 flex items-center justify-center gap-16">
                        <MpbButton
                            onClick={(e) => {
                                e.preventDefault();
                                setIsDisabled(true);
                                reset({ ...pensionerInfo });
                            }}
                            title="Cancel"
                            variant="cancel"
                            className="px-10"
                            disabled={isDisabled}
                        />
                        <MpbButton
                            onClick={handleSubmit(handleUpdatePensioner)}
                            title="Save changes"
                            isLoading={isupdatingPensioner}
                            className="px-10"
                            disabled={!isDirty}
                        />
                    </section>
                </form>
            </div>
        </div>
    );
}
