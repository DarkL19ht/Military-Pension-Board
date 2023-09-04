import { Link } from "react-router-dom";
import { useReducer } from "react";
import MpbSweetAlert from "@/components/ui/sweetalert/MpbSweetAlert";
import UploadCsvFileModal from "./UploadCsvFileModal";
import { reducer, initialState } from "./reducer";

export default function Pensioner() {
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { isRegSuccess, isUploadCsv } = state;

    return (
        <div className="mx-auto w-[95%] md:w-[90%]">
            <div className="mb-2 flex w-full items-center justify-between py-3">
                {/* Breacrumb */}
                <nav aria-label="breadcrumb">
                    <ol className="inline-flex items-center space-x-2 py-2 text-xs font-medium">
                        <li className="inline-flex items-center">
                            <Link
                                to="/"
                                className="text-secondary-500 hover:text-secondary-600"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <span className="text-secondary-400">/</span>
                            <Link
                                to="/"
                                className="text-secondary-500 hover:text-secondary-600 text-xs text-[#00873D]"
                            >
                                Onboarding Pensioners
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="w-full text-center font-latoBold text-[1.5rem] font-[600]">
                Onboarding Pensioners form
            </div>
            <div className="flex w-full justify-end py-2.5">
                <button
                    type="button"
                    className="rounded-md bg-green-700 px-4 py-1.5 text-xs text-white"
                    onClick={() => runDispatch({ type: "openUploadCsvModal" })}
                >
                    Upload csv files
                </button>
            </div>
            <div className="mb-20 w-full overflow-auto rounded-md border border-gray-100 p-5 shadow-md">
                <div className="py-6 text-base text-[#006C31]">
                    You can manually fill only 3 forms
                </div>
                <div>
                    <form className="w-full">
                        <div className=" mb-4 flex w-full flex-wrap justify-between">
                            <div className="w-full px-3 md:w-1/2">
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
                                    placeholder="first name"
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
                                    placeholder="last name"
                                />
                            </div>
                        </div>
                        <div className=" mb-4 flex w-full flex-wrap justify-between">
                            <div className=" w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="first-name"
                                >
                                    Date of Birth
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="date"
                                    type="date"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="last-name"
                                >
                                    Phone Number
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="phone-number"
                                    type="text"
                                    placeholder="phone-number"
                                />
                            </div>
                        </div>
                        <div className=" mb-4 flex w-full flex-wrap justify-between">
                            <div className="w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="first-name"
                                >
                                    Service ID
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="service-id"
                                    type="text"
                                    placeholder="Enter service ID "
                                />
                            </div>
                            <div className="w-full px-3 md:w-1/2">
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
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mb-4 flex w-full flex-wrap justify-between">
                            <div className="w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="first-name"
                                >
                                    Account Number
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="service-id"
                                    type="text"
                                    placeholder="Enter account number"
                                />
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="last-name"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="email"
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>
                        <div className=" mb-4 flex w-full flex-wrap justify-between">
                            <div className="w-full px-3  md:w-full">
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="first-name"
                                >
                                    Bank Verification Number(BVN)
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="service-id"
                                    type="text"
                                    placeholder="Enter BVN"
                                />
                            </div>
                        </div>
                        <div className=" mb-4 flex w-full flex-wrap justify-between">
                            <div className=" w-full px-3  md:w-full">
                                <label
                                    className="block pb-1 text-sm font-medium tracking-wide text-slate-700 before:ml-0.5 before:text-red-500 before:content-['*']"
                                    htmlFor="first-name"
                                >
                                    Addresss
                                </label>
                                <input
                                    className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none"
                                    id="service-id"
                                    type="text"
                                    placeholder="Enter residential address"
                                />
                            </div>
                        </div>
                        <div className="flex w-full justify-end py-2.5">
                            <button
                                type="button"
                                className="rounded-md bg-green-700 px-4 py-1.5 text-xs text-white"
                            >
                                Add
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="mt-[50px] inline-flex h-[40px] w-[70%] items-center justify-center 
                                rounded-lg border-2 border-[#00873D] bg-[#ffffff] px-8 py-5 text-[#00873D]"
                                onClick={() =>
                                    runDispatch({ type: "openRegSuccessModal" })
                                }
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* success modal */}
            <MpbSweetAlert
                onConfirm={() => undefined}
                isOpen={isRegSuccess}
                closeModal={() => runDispatch({ type: "closeRegSuccessModal" })}
                message="Registration Successful"
                description="Your registration has been sent to the super admin"
                icon="success_icon"
                confirmText="Done"
                showDivider={false}
            />
            <UploadCsvFileModal
                isOpen={isUploadCsv}
                closeModal={() => runDispatch({ type: "closeUploadCsvModal" })}
            />
        </div>
    );
}
