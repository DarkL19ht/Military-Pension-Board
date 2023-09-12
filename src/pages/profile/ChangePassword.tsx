import { useForm, SubmitHandler } from "react-hook-form";
import useChangePassword from "@api/user-controller/useChangePassword";
import { MpbButton, MpbTextField } from "@/components";
import { useToast } from "@/components/ui/toast/use-toast";
import { VALIDATE_PASSWORD } from "@/lib/validators";
import { useAuth } from "@/hooks";

interface FormValues {
    confirmPassword: string;
    oldPassword: string;
    password: string;
}

export default function ChangePassword({ userId }: { userId: number }) {
    const { toast } = useToast();
    const { logout, dispatch } = useAuth();

    const {
        control,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            oldPassword: "",
            password: "",
            confirmPassword: "",
        },
    });

    const { UpdatePassword, isChangingPassword } = useChangePassword({
        onSuccess: (res) => {
            toast({
                description: res.data.responseMessage,
            });
            // logout the user
            dispatch(logout());
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

    const handleChangePassword: SubmitHandler<FormValues> = async (values) => {
        UpdatePassword({ requestPayload: values, id: userId });
    };

    const validateConfirmPassword = (value: string) => {
        return value === getValues("password") || "Password do not match";
    };

    return (
        <div className="mb-20 ml-20 mt-9 w-full rounded-md border border-gray-100 px-[3.81rem] py-5 pt-[2rem] shadow-md sm:w-[60%]">
            {/* TODO: remove line below */}
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
                            name="oldPassword"
                            placeholder="Enter your old password"
                            autoComplete="new-password"
                            type="password"
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
                                placeholder="Enter your password"
                                autoComplete="new-password"
                                type="password"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    pattern: VALIDATE_PASSWORD,
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                        <div className="mb-5">
                            <MpbTextField
                                label="Confirm password"
                                name="confirmPassword"
                                autoComplete="new-password"
                                placeholder="Enter confirm password"
                                type="password"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "⚠️ Confirm password is required",
                                    },
                                    validate: validateConfirmPassword,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <MpbButton
                        fullWidth
                        title="Save Changes"
                        variant="primary"
                        onClick={handleSubmit(handleChangePassword)}
                        isLoading={isChangingPassword}
                    />
                </div>
            </form>
        </div>
    );
}
