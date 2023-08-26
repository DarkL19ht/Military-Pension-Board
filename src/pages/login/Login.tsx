import { CiUser, CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import useAuthentication from "@api/user-controller/useAuthentication";
import Logo from "@/assets/images/logo.png";
import MpbTextField from "@/components/@form/MpbTextField";
import { MbpButton } from "@/components/ui/MpbButton";
import BannerImage from "@/assets/images/soldierimage.jpg";

type FormValues = {
    username: string;
    password: string;
};

function Login() {
    const {
        control,
        handleSubmit,
        watch,
        // formState: { errors, isValid, isDirty },
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const { LoginUser, isLoginUser } = useAuthentication({
        onSuccess: () => {},
        onError: () => {},
    });

    const handleAuthentication = (values: FormValues) => {
        LoginUser(values);
    };

    return (
        <div className="flex h-screen w-full items-start overflow-hidden bg-[#ffffff]">
            <div className="relative h-full w-1/3">
                <img src={BannerImage} alt="soldier_image" className="h-full w-full" />
            </div>
            <div className="relative h-full w-2/3 bg-[#ffffff] font-latoRegular">
                <div className="mx-[21px] mb-[70px] mt-[37px] flex items-center justify-between">
                    <img src={Logo} alt="logo_image" width={35} height={35} />
                    <h1 className="font-latoRegular">Having troubles? Get help</h1>
                </div>
                <div className="text-center font-latoRegular text-[25px] font-[600] leading-normal text-[#000000]">
                    Login to Military Pension Board
                </div>
                <div className="mx-[215px]">
                    {/* TODO: remove line below */}
                    <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                    <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
                    <form className="mt-[40px]">
                        <div className="mb-5">
                            <MpbTextField
                                label="Username"
                                name="username"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Username is required",
                                    },
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <MpbTextField
                                label="Password"
                                name="password"
                                type="text"
                                icon={<CiLock size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex cursor-pointer items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="h-[20px] w-[20px]"
                                />
                                <span className="text-[#00873D]">Remember me</span>
                            </div>
                            <div className="">
                                Forgot password?{" "}
                                <span className="text-[#00873D]">Reset here</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <MbpButton
                                type="submit"
                                title="Login"
                                isLoading={isLoginUser}
                                variant="default"
                                size="sm"
                                fullWidth
                                onClick={handleSubmit(handleAuthentication)}
                                // disabled={!isDirty || !isValid}
                                disabled={isLoginUser}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
