const GradeCircular = () => {
  const percentage = 92;
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="absolute top-0 left-0" width="128" height="128" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#55657E30"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#55657E"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-gray-700 text-sm mb-1 text-[11px]">Середній бал</span>
        <span className="text-gray-800 text-4xl font-bold text-[24px]">{percentage}</span>
      </div>
    </div>
  );
};

export default GradeCircular;