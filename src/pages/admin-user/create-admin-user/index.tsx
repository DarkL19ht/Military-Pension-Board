import MpbBreadcrumb from "@/components/ui/MpbBreadcrumb";
import breadcrumb from "@/lib/breadcrumb";

export default function CreateAdminUser() {
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
                <form className="w-full">
                    <div className="mx-3 mb-1 mt-3 flex flex-wrap sm:mt-20">
                        <div className="mb-1 w-full px-3 md:mb-0 md:w-1/2">
                            <label
                                className="block pb-3 text-sm font-medium tracking-wide
                                 text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                htmlFor="first-name"
                            >
                                First name
                            </label>
                            <input
                                className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                id="first-name"
                                type="text"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="w-full px-3 md:w-1/2">
                            <label
                                className="block pb-3 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                htmlFor="last-name"
                            >
                                Last name
                            </label>
                            <input
                                className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                id="last-name"
                                type="text"
                                placeholder="Joseph"
                            />
                        </div>
                    </div>
                    <div className="mx-3 mb-1 flex flex-wrap">
                        <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
                            <label
                                className="block pb-3 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
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
                                className="block pb-3 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
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
                    <div className="mx-3 mb-1 flex flex-wrap">
                        <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
                            <label
                                className="block pb-3 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
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
                                className="block pb-3 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
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
                    <div className="mx-3 mb-1 flex flex-wrap">
                        <div className="w-full px-3">
                            <label
                                className="block pb-3 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                htmlFor="role"
                            >
                                Role
                            </label>
                            <input
                                className="mb-3 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-white placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                id="role"
                                type="password"
                                placeholder="Admin 1"
                            />
                        </div>
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
