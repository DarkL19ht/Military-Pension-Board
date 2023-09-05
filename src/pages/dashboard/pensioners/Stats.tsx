function Stats() {
    return (
        <div className="grid w-full grid-cols-3 gap-8 space-y-1 rounded border-s-8 border-amber-400 bg-neutral-50 p-1 px-0 text-xs text-gray-400 sm:grid-cols-4">
            <div className="space-y-1 px-5 pt-1">
                <div className=" font-medium text-slate-700">Name</div>
                <div>Joseph Aminu</div>
            </div>
            <div className="space-y-1 border-s-2 px-2">
                <div className=" font-medium text-slate-700">Verification status</div>
                <button className="ml-2 rounded-lg bg-green-100 px-1 py-1 text-center font-medium text-green-400">
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
    );
}

export default Stats;
