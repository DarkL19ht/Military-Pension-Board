import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AlertCircle, ChevronLeft, Mail } from "lucide-react";
import BannerImage from "@/assets/images/logo.png";
import securityIcon from "../../../../public/cardicons/icon-security.svg";
import MpbTextField from "@/components/@form/MpbTextField";
import { MpbButton } from "@/components/ui/button/MpbButton";
import useForgetPassword from "@/api/user-controller/useForgetPassword";
import { MpbSweetAlert as ForgetPasswordModal } from "@/components";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface FormValues {
    email: string;
}

export default function RecoveryMail() {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const { control, handleSubmit, reset } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            email: "",
        },
    });

    const { initiateForgetPassword, isInitiatingForgetPassword, isError } =
        useForgetPassword({
            onSuccess: async (res) => {
                setSuccessMessage(res?.data?.responseMessage);
                setIsOpen(true);
                reset();
                setTimeout(() => {
                    navigate("/");
                }, 5000);
            },
            onError: (err) => {
                const { message } = err.response.data;
                setErrorMessage(message);
            },
        });

    const handleForgetPassword = async (data: FormValues) => {
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
                                <ChevronLeft />
                            </Link>
                            <div className="flex-1  text-center text-[1.5rem] font-[600]">
                                Enter email to recover password
                            </div>
                        </div>
                        {isError && (
                            <Alert variant="secondary" className="my-5">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{errorMessage}</AlertDescription>
                            </Alert>
                        )}
                        <form className="">
                            <div className="mb-10">
                                <MpbTextField
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    icon={<Mail />}
                                    className="py-2"
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
                                onClick={handleSubmit(handleForgetPassword)}
                                isLoading={isInitiatingForgetPassword}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <ForgetPasswordModal
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                message={successMessage}
                onConfirm={() => navigate("/")}
                backdrop={false}
                confirmText="Login"
                icon="success_icon"
                showDivider={false}
                animation
                messageClassName="px-10"
            />
        </div>
    );
}
