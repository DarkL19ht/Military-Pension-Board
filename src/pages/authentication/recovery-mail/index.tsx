import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import BannerImage from "@/assets/images/logo.png";
import securityIcon from "../../../../public/cardicons/icon-security.svg";
import MpbTextField from "@/components/@form/MpbTextField";
import { MpbButton } from "@/components/ui/button/MpbButton";
import { UserEmailRequestPayload } from "@/types/recoveryEmail";
import HTTP from "@/lib/httpClient";
import { setEmail } from "@/redux/reducers/app-slice";

interface FormValues extends Pick<UserEmailRequestPayload, "email"> {}

export default function RecoveryMail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleEmailRecovery = async (data: FormValues) => {
        try {
            const response = await HTTP.post(`/apis/password/reset`, {
                email: data.email,
            });

            if (response.status === 200) {
                dispatch(setEmail(data.email));
                navigate("/new-password");
            } else {
                // eslint-disable-next-line no-console
                console.error("Failed to send password recovery email.");
            }
        } catch (error) {
            // Handle any network or other errors
            // eslint-disable-next-line no-console
            console.error("An error occurred:", error);
        }
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
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
