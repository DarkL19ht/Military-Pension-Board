import { useForm, SubmitHandler } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import useChangePassword from "@api/user-controller/useChangePassword";
// import MpbCheckbox from "@/components/@form/MpbCheckbox";
import { MpbButton, MpbTextField } from "@/components";
import ProfilePics from "@/assets/images/profilepics.png";

interface FormValues {
    confirmPassword: string;
    oldPassword: string;
    password: string;
}

export default function Profile() {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            confirmpassword: "",
            oldpassword: "",
            password: "",
        },
    });

    const { UpdatePassword } = useChangePassword();

    const handleChangePassword: SubmitHandler<FormValues> = async (values) => {
        UpdatePassword(values);
    };

    return (
        <div className="w-full overflow-auto ">
            <div className="mb-20 ml-20 mt-9 w-full rounded-md border border-gray-100 px-[3.81rem] py-5 pt-[2rem] shadow-md sm:w-[60%]">
                <div className="mt-1">
                    <img
                        src={ProfilePics}
                        alt="profile_picture"
                        className="rounded-full border-4 border-[#006C31]"
                    />
                </div>
                <div className="mb-14 mt-8">
                    <p className="pr-[1.25rem] text-3xl font-semibold text-[#239F5B]">
                        Profile Information
                    </p>
                </div>
                <div>
                    <form className="w-full max-w-2xl">
                        <div className="-mx-3 mb-1 flex flex-wrap">
                            <div className="mb-1 w-full px-3 md:mb-0 md:w-1/2">
                                <div className="mb-5">
                                    <MpbTextField
                                        label="First name"
                                        name="firstname"
                                        placeholder="Jane"
                                        type="text"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "First name is required",
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <div className="mb-5">
                                    <MpbTextField
                                        label="Last name"
                                        name="lastname"
                                        placeholder="Joseph"
                                        type="text"
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
                        </div>
                        <div className="-mx-3 mb-1 flex flex-wrap">
                            <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
                                <div className="mb-5">
                                    <MpbTextField
                                        label="Other name"
                                        name="othername"
                                        placeholder="David"
                                        type="text"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Other name is required",
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <div className="mb-5">
                                    <MpbTextField
                                        label="Username"
                                        name="username"
                                        placeholder="Joseph.Susan"
                                        type="text"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Username is required",
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="-mx-3 mb-1 flex flex-wrap">
                            <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
                                <div className="mb-5">
                                    <MpbTextField
                                        label="Email address"
                                        name="email"
                                        type="email"
                                        placeholder="Susanjoseph@nigerianarmy.com.ng"
                                        icon={<CiUser size={20} />}
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Email is required",
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <div className="mb-5">
                                    <MpbTextField
                                        label="Phone number"
                                        name="phone"
                                        placeholder="0905634289"
                                        type="number"
                                        icon={<CiUser size={20} />}
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Phone number is required",
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <MpbButton fullWidth title="Save Changes" variant="primary" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="mb-20 ml-20 mt-9 w-full rounded-md border border-gray-100 px-[3.81rem] py-5 pt-[2rem] shadow-md sm:w-[60%]">
                <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
                <form className="w-full max-w-2xl">
                    <p className="mb-10 mt-8 pr-[1.25rem] text-3xl font-semibold text-[#239F5B]">
                        Change password
                    </p>
                    <div className="mb-5 w-full md:mb-0 md:w-1/2">
                        <div className="mb-5">
                            <MpbTextField
                                label="Old password"
                                name="oldpassword"
                                placeholder="*********************"
                                type="text"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Old password is required",
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="-mx-3 mb-1 flex flex-wrap">
                        <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
                            <div className="mb-5">
                                <MpbTextField
                                    label="New password"
                                    name="password"
                                    placeholder="*********************"
                                    type="text"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "New password is required",
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 md:w-1/2">
                            <div className="mb-5">
                                <MpbTextField
                                    label="Confirm password"
                                    name="confirmpassword"
                                    placeholder="*********************"
                                    type="text"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Confirm password is required",
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <MpbCheckbox
                            control={control}
                            label="Must be 8 characters long"
                            name="charactersLond"
                        /> */}
                    </div>
                    <div className="mt-8">
                        <MpbButton
                            fullWidth
                            title="Save Changes"
                            variant="primary"
                            onClick={handleSubmit(handleChangePassword)}
                            // isLoading={isChangingPassword}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
