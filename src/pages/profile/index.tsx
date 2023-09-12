import { useForm } from "react-hook-form";
import { useState, useMemo } from "react";
import { CiUser } from "react-icons/ci";
import { FolderEdit, X } from "lucide-react";
import useUpdateUser from "@api/user-controller/useUpdateUser";
import { MpbButton, MpbTextField } from "@/components";
import ChangePassword from "./ChangePassword";
import { UserRequestPayload as FormValues } from "@/types/user";
import { useAppSelector } from "@/hooks/useRedux";
import { STATUS, RequestMethod } from "@/types/enum";
import { useToast } from "@/components/ui/toast/use-toast";

export default function Profile() {
    const { toast } = useToast();
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const user = useAppSelector((state) => state.authReducer.user);
    const userObj = useMemo(() => {
        return {
            email: user?.email,
            firstName: user?.firstname,
            lastName: user?.lastname,
            phone: user?.mobile,
            roles: [],
            username: user?.username,
            status: STATUS.ENABLED,
        };
    }, [user?.email, user?.firstname, user?.lastname, user?.mobile, user?.username]);

    const { control, handleSubmit, watch, reset } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            ...userObj,
        },
    });

    const { UpdateUser, isUpdatingUser } = useUpdateUser({
        onSuccess: (res) => {
            toast({
                description: res.data.responseMessage,
            });
            // queryClient.invalidateQueries([queryKeys.GET_USERS]);
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

    const handleProfileUpdate = (values: FormValues) => {
        UpdateUser({
            requestMethod: RequestMethod.PUT,
            requestPayload: values,
            id: user.id,
        });
    };

    return (
        <div className="w-full overflow-auto ">
            {/* TODO: remove line below */}
            <pre className="hidden">{JSON.stringify(user, null, 2)}</pre>
            <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
            <div className="mb-20 ml-20 mt-9 w-full rounded-md border border-gray-100 px-[3.81rem] py-5 pt-[2rem] shadow-md sm:w-[60%]">
                <div className="mb-14 mt-8 flex justify-between">
                    <p className="pr-[1.25rem] text-3xl font-semibold text-[#239F5B]">
                        Profile Information
                    </p>
                    {isDisabled ? (
                        <button
                            className="flex items-center gap-1
                        rounded-lg border border-green-500 px-8 py-1.5 text-sm text-green-400"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsDisabled(false);
                            }}
                        >
                            <span>Edit</span>
                            <FolderEdit size={15} />
                        </button>
                    ) : (
                        <button
                            className="flex items-center gap-1
                        rounded-lg border border-red-500 px-8 py-1.5 text-sm text-red-400"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsDisabled(true);
                                reset({
                                    ...userObj,
                                });
                            }}
                        >
                            <span>Cancel</span>
                            <X size={15} />
                        </button>
                    )}
                </div>
                <div>
                    <form className="flex w-full max-w-2xl flex-col gap-8 pb-6">
                        <div className="flex gap-5">
                            <div className="w-full md:w-1/2">
                                <MpbTextField
                                    label="First name"
                                    name="firstName"
                                    placeholder="Jane"
                                    type="text"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "First name is required",
                                        },
                                    }}
                                    disabled={isDisabled}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <MpbTextField
                                    label="Last name"
                                    name="lastName"
                                    placeholder="Joseph"
                                    type="text"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Last name is required",
                                        },
                                    }}
                                    disabled={isDisabled}
                                />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-full md:w-1/2">
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
                                    disabled={isDisabled}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <MpbTextField
                                    label="Username"
                                    name="username"
                                    placeholder="Joseph.Susan"
                                    type="text"
                                    control={control}
                                    // readOnly
                                    disabled={isDisabled}
                                />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className=" w-full">
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
                                    disabled={isDisabled}
                                />
                            </div>
                        </div>
                        {!isDisabled && (
                            <div className="mt-8 flex w-full gap-4">
                                <MpbButton
                                    onClick={handleSubmit(handleProfileUpdate)}
                                    fullWidth
                                    title="Save Changes"
                                    variant="primary"
                                    isLoading={isUpdatingUser}
                                />
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <ChangePassword userId={user?.id} />
        </div>
    );
}
