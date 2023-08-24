const Stats = () => {
  return (
    <div className="p-5 bg-neutral-50 text-gray-400 grid grid-cols-3 lg:grid-cols-4 gap-8 rounded text-sm space-y-1 border-s-8 border-emerald-500 px-4">
      <div className="space-y-1 px-5">
        <div className="text-lg font-medium text-slate-700">Name</div>
        <div>Joseph Aminu</div>
      </div>
      <div className="space-y-1 border-s-2 px-5">
        <div className="text-lg font-medium text-slate-700">
          Verification status
        </div>
        <button className="rounded-lg text-green-400 bg-green-100 font-medium text-center py-1 px-5 ml-2">
          Pending
        </button>
      </div>
      <div className="space-y-1 border-s-2 px-5">
        <div className="text-lg font-medium text-slate-700">Service ID</div>
        <div>20NA/62/2913</div>
      </div>
      <div className="space-y-1 border-s-2 px-5">
        <div className="text-lg font-medium text-slate-700">Rank</div>
        <div>Staff sergent</div>
      </div>
    </div>
  );
};

export default Stats;
