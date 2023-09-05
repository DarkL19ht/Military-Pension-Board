import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import BannerImage from "@/assets/images/logo.png";
import securityIcon from "../../../../public/cardicons/icon-security.svg";
import MpbTextField from "@/components/@form/MpbTextField";
import { UserRequestPayload } from "@/types/user";

interface FormValues extends Pick<UserRequestPayload, "email"> {}

function RecoveryMail() {
    const { control } = useForm<FormValues>({
        defaultValues: {
            email: "",
        },
    });

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
                <div className="flex items-center justify-center lg:py-[3rem]">
                    <div className="mx-auto rounded-md bg-[#ffffff] p-4  sm:w-3/5 lg:w-3/5">
                        <div className="mb-[3rem] flex items-center justify-between py-6">
                            <Link to="/">
                                <IoIosArrowBack />
                            </Link>
                            <div className="flex-1  text-center text-[1.5rem] font-[600]">
                                Enter email to recover password
                            </div>
                        </div>
                        <form className="">
                            <div className="mb-20">
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
                            <Link to="/new-password">
                                <button className="w-full rounded-md bg-[#00873D] py-[0.7rem] text-[#ffffff]">
                                    Recover Password
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecoveryMail;
