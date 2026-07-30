
const Stats = ({ stats }) => {
  return (
    <div>
      {/* Stat Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-slate-200 pb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center min-h-30"
          >
            <span className="text-3xl md:text-4xl font-bold text-green-950 mb-2">
              {stat.value}
            </span>
            <span className="text-slate-500 text-sm font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;