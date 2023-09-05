import { useForm } from "react-hook-form";
import MpbTextField from "@/components/@form/MpbTextField";
import { MpbButton } from "@/components/ui/button/MpbButton";
import ProfilePics from "@/assets/images/profilepics.png";

type FormValues = {
    oldPassword: string;
    password: string;
    confirmPassword: string;
};

export default function Profile() {
    const {
        control,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            oldpassword: "",
            newpassword: "",
            confirmpassword: "",
        },
    });

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
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="first-name"
                                >
                                    First name
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="first-name"
                                    type="text"
                                    placeholder="Jane"
                                />
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="last-name"
                                >
                                    Last name
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="last-name"
                                    type="text"
                                    placeholder="Joseph"
                                />
                            </div>
                        </div>
                        <div className="-mx-3 mb-1 flex flex-wrap">
                            <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
                                <label
                                    className="block pb-2 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="rank"
                                >
                                    Rank
                                </label>
                                <div className="relative">
                                    <select
                                        className="block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 pr-8 leading-tight text-gray-700 placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                        id="rank"
                                    >
                                        <option>Colonel</option>
                                        <option>Colonel</option>
                                        <option>Colonel</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="h-4 w-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            {/* <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> */}
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-2 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="phone-number"
                                >
                                    Phone number
                                </label>
                                <input
                                    className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-white placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="phone-number"
                                    type="text"
                                    placeholder="0905634289"
                                />
                            </div>
                        </div>
                        <div className="-mx-3 mb-1 flex flex-wrap">
                            <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
                                <label
                                    className="block pb-2 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="email-address"
                                >
                                    Email address
                                </label>
                                <input
                                    className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-white placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="email-address"
                                    type="text"
                                    placeholder="Susanjoseph@nigerianarmy.com.ng"
                                />
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-2 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="gender"
                                >
                                    Gender
                                </label>
                                <input
                                    className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-white placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="gender"
                                    type="text"
                                    placeholder="Female"
                                />
                            </div>
                        </div>
                        <div className="-mx-3 mb-1 flex flex-wrap">
                            <div className="w-full px-3">
                                <label
                                    className="block pb-2 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="address"
                                >
                                    Address
                                </label>
                                <input
                                    className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-white placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="address"
                                    type="password"
                                    placeholder="Military barracks Ikeja cantoment"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="mt-[50px] inline-flex h-[40px] w-64 items-center justify-center rounded-lg bg-[#00873D] px-10 py-6 text-[#ffffff]"
                            >
                                Save changes
                            </button>
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
                                    name="newpassword"
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
                    <div className="flex justify-center">
                        <div className="mt-8">
                            <MpbButton
                                type="submit"
                                title="Save changes"
                                size="sm"
                                fullWidth
                                // disabled={!isDirty || !isValid}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        // </div>
    );
}
