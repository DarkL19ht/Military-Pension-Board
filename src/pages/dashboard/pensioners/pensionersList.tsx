import Stats from "./Stats";

function Pensionerslist() {
    return (
        <div className="mb-20 w-full overflow-auto rounded-md border border-gray-100 py-2 shadow-md">
            <div className="mx-auto max-w-xl space-y-2 px-2">
                <h1 className="mb-3 text-sm font-medium text-green-500">
                    The last 5 Pensioners
                </h1>
                <Stats />
                <div className="grid w-full grid-cols-3 gap-8 space-y-1 rounded border-s-8 border-amber-400 bg-neutral-50 p-1 px-0 text-xs text-gray-400 sm:grid-cols-4">
                    <div className="space-y-1 px-5 pt-1">
                        <div className=" font-medium text-slate-700">Name</div>
                        <div>Joseph Aminu</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-1">
                        <div className=" font-medium text-slate-700">
                            Verification status
                        </div>
                        <button className="ml-2 rounded-lg bg-amber-100 px-1 py-1 text-center font-medium text-amber-400">
                            Pending
                        </button>
                    </div>
                    <div className="space-y-1 border-s-2 px-1">
                        <div className=" font-medium text-slate-700">Service ID</div>
                        <div>20NA/62/2913</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-2">
                        <div className=" font-medium text-slate-700">Rank</div>
                        <div>Staff sergent</div>
                    </div>
                </div>

                <div className="grid w-full grid-cols-3 gap-8 space-y-1 rounded border-s-8 border-red-600 bg-neutral-50 p-1 px-0 text-xs text-gray-400 sm:grid-cols-4">
                    <div className="space-y-1 px-5 pt-1">
                        <div className=" font-medium text-slate-700">Name</div>
                        <div>Joseph Aminu</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-2">
                        <div className=" font-medium text-slate-700">
                            Verification status
                        </div>
                        <button className="ml-2 rounded-lg bg-red-100 px-1 py-1 text-center font-medium text-red-400">
                            Pending
                        </button>
                    </div>
                    <div className="space-y-1 border-s-2 px-1">
                        <div className=" font-medium text-slate-700">Service ID</div>
                        <div>20NA/62/2913</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-2">
                        <div className=" font-medium text-slate-700">Rank</div>
                        <div>Staff sergent</div>
                    </div>
                </div>

                <div className="grid w-full grid-cols-3 gap-8 space-y-1 rounded border-s-8 border-amber-400 bg-neutral-50 p-1 px-0 text-xs text-gray-400 sm:grid-cols-4">
                    <div className="space-y-1 px-5 pt-1">
                        <div className=" font-medium text-slate-700">Name</div>
                        <div>Joseph Aminu</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-2">
                        <div className=" font-medium text-slate-700">
                            Verification status
                        </div>
                        <button className="ml-2 rounded-lg bg-amber-100 px-1 py-1 text-center font-medium text-amber-400">
                            Pending
                        </button>
                    </div>
                    <div className="space-y-1 border-s-2 px-1">
                        <div className=" font-medium text-slate-700">Service ID</div>
                        <div>20NA/62/2913</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-2">
                        <div className=" font-medium text-slate-700">Rank</div>
                        <div>Staff sergent</div>
                    </div>
                </div>

                <Stats />
            </div>
        </div>
    );
}

export default Pensionerslist;
