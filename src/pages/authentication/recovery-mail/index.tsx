import { useReducer, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BannerImage from "@/assets/images/logo.png";
import securityIcon from "../../../../public/cardicons/icon-security.svg";
import MpbTextField from "@/components/@form/MpbTextField";
import { MpbButton } from "@/components/ui/button/MpbButton";
import { UserEmailRequestPayload } from "@/types/recoveryEmail";
import useForgetPassword from "@/api/user-controller/useForgetPassword";
import { MpbSweetAlert as RecoveryEmailModal } from "@/components";
import { reducer, initialState, ReducerActionType } from "./reducer";
import { useToast } from "@/components/ui/toast/use-toast";

interface FormValues extends Pick<UserEmailRequestPayload, "email"> {}

export default function RecoveryMail() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [displayMessage, setDisplayMessage] = useState("");
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { isRecoverySuccess } = state;
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        mode: "all",
    });

    const { initiateForgetPassword, isInitiatingForgetPassword } = useForgetPassword({
        onSuccess: async (res) => {
            setDisplayMessage(res?.data?.responseMessage);
            toast({
                description: res.data.responseMessage,
            });
            reset();
            setTimeout(() => {
                navigate("/");
            }, 5000);
        },
        onError: (err) => {
            const { message, responseMessage } = err.response.data;
            toast({
                description: message || responseMessage,
                variant: "error",
            });
        },
    });

    const handleEmailRecovery = async (data: FormValues) => {
        const requestPayload: UserEmailRequestPayload = {
            email: data.email,
        };
        initiateForgetPassword(requestPayload);
    };

    return (
        <div className="grid h-screen grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 hidden h-screen items-center justify-center bg-[#00873D] md:col-span-1 md:flex ">
                <img src={securityIcon} alt="svg-img" className="h-full w-[300px]" />
            </div>
            <div className="col-span-1 h-screen bg-[#FFFFFF] md:col-span-2">
                <div className="flex justify-between p-6">
                    <div className="">
                        <div className="h-[2.2rem] w-[2.2rem]">
                            <img src={BannerImage} alt="logo_image" className="" />
                        </div>
                    </div>
                    <div className="">Having troubles? Get help</div>
                </div>
                <div className="flex h-[80%] items-center justify-center">
                    <div className="mx-auto rounded-md bg-[#ffffff] p-4  sm:w-3/5 lg:w-3/5">
                        <div className="mb-[3rem] flex items-center justify-between py-6">
                            <Link to="/">
                                <IoIosArrowBack />
                            </Link>
                            <div className="flex-1  text-center text-[1.5rem] font-[600]">
                                Enter email to recover password
                            </div>
                        </div>
                        <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                        <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
                        <div className="py-2 text-center text-sm font-[600] text-red-500">
                            {/* {errorMessage === null || errorMessage === undefined
                                ? ""
                                : errorMessage} */}
                        </div>
                        <form className="">
                            <div className="mb-10">
                                <MpbTextField
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    icon={<AiOutlineMail size={20} />}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Enter email Address",
                                        },
                                    }}
                                />
                            </div>
                            <MpbButton
                                type="submit"
                                title="Recover Password"
                                size="sm"
                                fullWidth
                                onClick={handleSubmit(handleEmailRecovery)}
                                isLoading={isInitiatingForgetPassword}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <RecoveryEmailModal
                onConfirm={() => undefined}
                isOpen={isRecoverySuccess}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_RECOVERY_SUCCESS_MODAL })
                }
                message={displayMessage}
                icon="success_icon"
                confirmText="Done"
                showDivider={false}
            />
        </div>
    );
}
