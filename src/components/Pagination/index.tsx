// import { Link } from "react-router-dom";

export default function pagination() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:justify-between md:gap-y-0">
            <div className="flex flex-col lg:flex-row">
                <span className="self-center px-[5px] text-[14px] font-[600] text-[#000000]">
                    Show
                </span>
                <div className="cursor-pointer rounded-[4px] border-2 border-[#C9C9C9] ">
                    <select className="border-0 focus:outline-0">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>
            </div>
            <div>
                <span className="text-sm text-gray-400"> 10 of 30</span>
            </div>
            <nav aria-label="Pagination">
                <ul className="inline-flex items-center space-x-2 rounded-md text-sm">
                    <li>
                        <button
                            type="button"
                            className="inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            {/* <span>Previous</span> */}
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            aria-current="page"
                            className="z-10 inline-flex items-center rounded-md bg-gray-100 px-4 py-2 font-medium text-gray-700"
                        >
                            1
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
                        >
                            2
                        </button>
                    </li>
                    <li>
                        <span className="inline-flex items-center rounded-md bg-white px-4 py-2 text-gray-700">
                            ...
                        </span>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
                        >
                            9
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
                        >
                            10
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50"
                        >
                            {/* <span>Next</span> */}
                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}