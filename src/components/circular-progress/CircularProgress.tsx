interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const degree = (percentage / 100) * 360;

  return (
    <div
      className="w-[40px] h-[40px] rounded-full relative flex items-center justify-center text-[10px] font-medium text-black"
      style={{
        background: `conic-gradient(#64748b ${degree}deg, #f3f3f3 0deg)`,
      }}
    >
      <div className="absolute w-[28px] h-[28px] rounded-full z-10"></div>
      <span className="absolute z-20">{percentage}%</span>
    </div>
  );
};

export default CircularProgress;
