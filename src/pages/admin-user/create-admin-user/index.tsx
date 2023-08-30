import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import MpbBreadcrumb from "@/components/ui/MpbBreadcrumb";
import breadcrumb from "@/lib/breadcrumb";
import { MpbTextField } from "@/components";
import MpbSelectField from "@/components/@form/MpbSelectField";
import MpbReactSelectField from "@/components/@form/MpbReactSelectField";

type FormValues = {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender: string;
    roles: number[];
    username: string;
    rank: string;
};

const ranks = [
    {
        label: "First Sergeant",
        value: "First Sergeant",
    },
    {
        label: "Captain (Air Force)",
        value: "Captain (Air Force)",
    },
    {
        label: "Lieutenant General",
        value: "Lieutenant General",
    },
    {
        label: "Brigadier General",
        value: "Brigadier General",
    },
    {
        label: "Command Sergeant Major",
        value: "Chief Master Sergeant ",
    },
];

export default function CreateAdminUser() {
    const {
        control,
        //  handleSubmit,
        watch,
        // formState: { errors, isValid, isDirty },
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            gender: "",
            roles: [],
            username: "",
            rank: "",
        },
    });

    return (
        <div className="mx-auto w-4/5">
            <div className="mb-2 flex w-full justify-between py-3">
                {/* Breacrumb */}
                <MpbBreadcrumb data={breadcrumb?.create_admin_user} />
            </div>
            <p className="mb-5 mt-3 text-center text-lg font-semibold md:w-[75%]">
                Create Admin User
            </p>
            <div
                className="mb-20 w-full overflow-auto rounded-md border
                border-gray-100 p-5  shadow-md sm:w-[75%]"
            >
                <form className="w-full space-y-5">
                    {/* TODO: remove below */}
                    <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                    <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <MpbTextField
                                label="First name"
                                name="firstName"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "first name is required",
                                    },
                                }}
                            />
                        </div>
                        <div className="w-1/2">
                            <MpbTextField
                                label="Last name"
                                name="lastName"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "last name is required",
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <MpbSelectField
                                control={control}
                                label="Rank"
                                name="rank"
                                icon={<CiUser size={20} />}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please, select a rank",
                                    },
                                }}
                                options={ranks}
                            />
                        </div>
                        <div className="w-1/2">
                            <MpbTextField
                                label="Phone number"
                                name="phoneNumber"
                                placeholder="Enter Phone Number"
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
                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <MpbTextField
                                label="Email address"
                                name="email"
                                type="email"
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
                        <div className="w-1/2">
                            <MpbSelectField
                                control={control}
                                label="Gender"
                                name="gender"
                                icon={<CiUser size={20} />}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please, select a gender",
                                    },
                                }}
                                options={[]}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col">
                        <MpbReactSelectField
                            label="Roles"
                            control={control}
                            name="role"
                            options={ranks}
                            asterik
                            isMulti
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please choose a role",
                                },
                            }}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="mb-10 mt-10 inline-flex h-[40px] w-64 items-center justify-center rounded-lg bg-[#00873D] px-10 py-6 text-[#ffffff]"
                        >
                            Create new user
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
