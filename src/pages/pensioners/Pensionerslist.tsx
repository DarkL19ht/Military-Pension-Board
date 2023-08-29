import Stats from "./Stats";

function Pensionerslist() {
    return (
        <div className="mt-10 flex items-center justify-center">
            <div className="mx-auto w-5/6 max-w-7xl space-y-3">
                <h1 className="mb-5 font-medium text-green-500">The last 5 Pensioners</h1>
                <Stats />
                <div className="grid grid-cols-3 gap-8 space-y-1 rounded border-s-8 border-amber-400 bg-neutral-50 p-1 px-4 text-sm text-gray-400 lg:grid-cols-4">
                    <div className="space-y-1 px-5">
                        <div className="text-lg font-medium text-slate-700">Name</div>
                        <div>Joseph Aminu</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">
                            Verification status
                        </div>
                        <button className="ml-2 rounded-lg bg-amber-100 px-5 py-1 text-center font-medium text-amber-400">
                            Pending
                        </button>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">
                            Service ID
                        </div>
                        <div>20NA/62/2913</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">Rank</div>
                        <div>Staff sergent</div>
                    </div>
                </div>

                <div
                    className="grid grid-cols-3 gap-8 space-y-1 rounded border-s-8
                        border-red-600 bg-neutral-50 p-1 px-4 text-sm text-gray-400 lg:grid-cols-4"
                >
                    <div className="space-y-1 px-5">
                        <div className="text-lg font-medium text-slate-700">Name</div>
                        <div>Joseph Aminu</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">
                            Verification status
                        </div>
                        <button className="ml-2 rounded-lg bg-red-100 px-5 py-1 text-center font-medium text-red-400">
                            Pending
                        </button>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">
                            Service ID
                        </div>
                        <div>20NA/62/2913</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">Rank</div>
                        <div>Staff sergent</div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8 space-y-1 rounded border-s-8 border-amber-400 bg-neutral-50 p-1 px-4 text-sm text-gray-400 lg:grid-cols-4">
                    <div className="space-y-1 px-5">
                        <div className="text-lg font-medium text-slate-700">Name</div>
                        <div>Joseph Aminu</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">
                            Verification status
                        </div>
                        <button className="ml-2 rounded-lg bg-amber-100 px-5 py-1 text-center font-medium text-amber-400">
                            Pending
                        </button>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">
                            Service ID
                        </div>
                        <div>20NA/62/2913</div>
                    </div>
                    <div className="space-y-1 border-s-2 px-5">
                        <div className="text-lg font-medium text-slate-700">Rank</div>
                        <div>Staff sergent</div>
                    </div>
                </div>

                <Stats />
            </div>
        </div>
    );
}

export default Pensionerslist;
