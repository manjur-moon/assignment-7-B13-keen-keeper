const LoadingSpinner = ({ label = "Loading..." }) => {
  return (
    <div className="flex min-h-[650px] flex-col items-center justify-center gap-4 bg-[#f8fafc] text-[#64748b]">
      <span className="loading loading-spinner loading-lg text-[#244d3f]"></span>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default LoadingSpinner;
