import { CiUser, CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuthentication from "@api/user-controller/useAuthentication";
import { MpbButton } from "@/components/ui/button/MpbButton";
import MpbTextField from "@/components/@form/MpbTextField";
import BannerImage from "@/assets/images/soldierimage.jpg";
import Logo from "@/assets/images/logo.png";
import MpbCheckbox from "@/components/@form/MpbCheckbox";
import { UserRequestPayload } from "@/types";
// import { useAuth } from "@/hooks";

interface FormValues extends Pick<UserRequestPayload, "username" | "password"> {}

export default function Login() {
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

    const { LoginUser, isLoginUser, loginErrorResponse: errorObj } = useAuthentication();

    const handleAuthentication = (values: FormValues) => {
        const formData = new URLSearchParams();
        formData.append("username", values.username);
        formData.append("password", values.password);
        formData.append("grant_type", "password");
        LoginUser(formData);
    };

    return (
        <section>
            <div
                className="relative flex min-h-screen w-full flex-col
                 bg-red-500 bg-gradient-to-bl from-gray-400 to-green-500 
                 bg-cover bg-center "
            >
                <img
                    src={BannerImage}
                    alt=""
                    className="absolute h-full w-full object-cover object-right-bottom mix-blend-multiply"
                />
                <div className="z-10">
                    <h1 className="flex justify-end gap-2 pr-3 pt-10 text-base font-light text-white">
                        <span>Having troubles ?</span>{" "}
                        <span className="text-green-400">Get help</span>
                    </h1>
                </div>
                <div
                    className="z-10 mx-auto mt-40 flex w-full flex-1 items-start 
                    justify-center px-6 sm:w-[80%] sm:justify-end sm:px-0 "
                >
                    <div className="w-full rounded-md bg-white p-4 sm:w-3/5  lg:w-2/5">
                        {/* TODO: remove line below */}
                        <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                        <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
                        <div className="mb-10 flex items-center justify-between">
                            <img src={Logo} alt="logo_image" className="h-12 w-12" />
                            <h1 className="text-center">Military Pension Portal</h1>
                        </div>
                        {errorObj?.error && (
                            <h4 className="mb-3 text-center text-red-600">
                                {errorObj.error_description}
                            </h4>
                        )}
                        <form className="">
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
                                {/* <div className="flex cursor-pointer items-center gap-x-2">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        className="h-[20px] w-[20px]"
                                    />
                                    <span className="text-sm text-[#00873D]">
                                        Remember me
                                    </span>
                                </div> */}
                                <div>
                                    <MpbCheckbox
                                        control={control}
                                        label="Remember me"
                                        name="rememberMe"
                                    />
                                </div>
                                {/* TODO: change the Link to div */}
                                <Link to="/dashboard" className="text-sm">
                                    Forgot password?{" "}
                                    <span className="text-[#00873D]">Reset here</span>
                                </Link>
                            </div>
                            <div className="my-8">
                                <MpbButton
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
        </section>
    );
}
