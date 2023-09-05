import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import BannerImage from "@/assets/images/logo.png";
import securityIcon from "../../../../public/cardicons/icon-security.svg";
import MpbTextField from "@/components/@form/MpbTextField";
import { UserRequestPayload } from "@/types/user";
import MpbSweetAlert from "@/components/ui/sweetalert/MpbSweetAlert";
// import { reducer, initialState } from "../../../redux/reducers";

interface FormValues
    extends Pick<
        UserRequestPayload,
        "defaultPassword" | "newPassword" | "confirmPassword"
    > {}

function NewPassword() {
    const [open, setOpen] = useState(false);
    const { control } = useForm<FormValues>({
        defaultValues: {
            defaultPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setOpen(true);
    };

    return (
        <div className="grid h-screen grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 flex h-screen items-center justify-center bg-[#00873D] md:col-span-1">
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
                <div className="flex items-center justify-center ">
                    <div className="mx-auto rounded-md p-4  sm:w-3/5 lg:w-3/5">
                        <div className="my-6 ">
                            <div className="flex items-center justify-between">
                                <Link to="/recovery-mail">
                                    <IoIosArrowBack />
                                </Link>
                                <div className="flex-1  text-center text-[1.5rem] font-[600]">
                                    Create New Password
                                </div>
                            </div>
                            <div className="w-full text-center">
                                The default password has been sent to
                                <span className="px-1 text-[#00873D]">
                                    Josephsusan@gmail.com
                                </span>
                            </div>
                        </div>
                        <form className="" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <MpbTextField
                                    label="Default Password"
                                    name="password"
                                    type="password"
                                    icon={<CiLock size={20} />}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Enter Default Password",
                                        },
                                    }}
                                />
                            </div>
                            <div className="mb-6">
                                <MpbTextField
                                    label="New Password"
                                    name="newPassword"
                                    type="password"
                                    icon={<CiLock size={20} />}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Enter New Password",
                                        },
                                    }}
                                />
                            </div>
                            <div className="mb-6">
                                <MpbTextField
                                    label="Confirm New Password"
                                    name="confirmPassword"
                                    type="password"
                                    icon={<CiLock size={20} />}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Confirm New Password",
                                        },
                                    }}
                                />
                            </div>
                            <div className="pt-[3rem]">
                                <button
                                    className="w-full rounded-md bg-[#00873D] py-[0.7rem] text-[#ffffff]"
                                    type="submit"
                                >
                                    Create New Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <MpbSweetAlert
                onConfirm={() => undefined}
                isOpen={open}
                // closeModal={}
                message="New Password Created "
                description="You have successfully created your new password"
                icon="success_icon"
                confirmText="Sign In"
                showDivider={false}
            />
        </div>
    );
}

export default NewPassword;
