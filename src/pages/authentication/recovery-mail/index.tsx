import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import BannerImage from "@/assets/images/logo.png";
import securityIcon from "../../../../public/cardicons/icon-security.svg";
import MpbTextField from "@/components/@form/MpbTextField";
import { MpbButton } from "@/components/ui/button/MpbButton";
import { UserEmailRequestPayload } from "@/types/recoveryEmail";
import useForgetPassword from "@/api/user-controller/useForgetPassword";
import { MpbSweetAlert as RecoveryEmailModal } from "@/components";

interface FormValues extends Pick<UserEmailRequestPayload, "email"> {}

export default function RecoveryMail() {
    const [successModal, setSuccessModal] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");
    const [closeModal] = useState(false);
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        data: {
            email: "",
        },
    });

    const { initiateForgetPassword, isInitiatingForgetPassword } = useForgetPassword({
        onSuccess: (res) => {
            // console.log({ res });
            setDisplayMessage(res?.data?.responseMessage);
            setSuccessModal(true);
        },
        // onError: (err) => {
        //     // console.log(err);

        //     setSuccessModal(true);
        // },
    });

    const handleEmailRecovery = async (data: FormValues) => {
        initiateForgetPassword(data);
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
                isOpen={successModal}
                message="Success"
                description={displayMessage}
                icon="success_icon"
                showDivider={false}
                closeModal={closeModal}
                confirmText="Done"
                // onConfirm={handleCloseModal}
            />
        </div>
    );
}
