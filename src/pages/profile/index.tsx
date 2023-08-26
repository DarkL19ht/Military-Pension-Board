import { PiPencilSimpleLine } from "react-icons/pi";
import ProfilePics from "@/assets/images/profilepics.png";

function ProfileSettings() {
    return (
        <div className="h-[90vh] overflow-hidden">
            <div className="h-full overflow-y-scroll py-5 pl-[3.81rem] pt-[2rem]">
                <h4 className="text-xl font-bold text-[#00873D]">Profile Settings</h4>
                <div className="mt-1">
                    <img
                        src={ProfilePics}
                        alt="profile_picture"
                        className="rounded-full border-4 border-[#006C31]"
                    />
                </div>
                <div className="mb-[1.3rem] mt-[1rem] flex">
                    <p className="pr-[1.25rem] text-base font-semibold text-[#239F5B] underline">
                        Profile Information
                    </p>
                    <p className="flex cursor-pointer">
                        Edit{" "}
                        <span>
                            <PiPencilSimpleLine className="mt-[0.3rem]" />
                        </span>
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
                        <p className="mb-1 mt-[1.4rem] pr-[1.25rem] text-base font-semibold text-[#239F5B] underline">
                            Change password
                        </p>
                        <div className="mb-3 w-full md:mb-0 md:w-1/2">
                            <label
                                className="block pb-2 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                htmlFor="old-password"
                            >
                                Old password
                            </label>
                            <input
                                className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                id="old password"
                                type="password"
                                placeholder="*********************"
                            />
                        </div>
                        <div className="-mx-3 mb-1 flex flex-wrap">
                            <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
                                <label
                                    className="block pb-2 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="new password"
                                >
                                    New password
                                </label>
                                <input
                                    className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="new-password"
                                    type="password"
                                    placeholder="*****************"
                                />
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-2 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="confirm-password"
                                >
                                    Confirm password
                                </label>
                                <input
                                    className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="confirm-password"
                                    type="password"
                                    placeholder="*****************"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="mt-[50px] inline-flex h-[40px] w-64 items-center justify-center rounded-lg bg-[#00873D] px-10 py-6 text-[#ffffff]"
                            >
                                Submit password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfileSettings;
