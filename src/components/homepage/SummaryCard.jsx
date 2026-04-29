const SummaryCard = ({ label, value }) => {
  return (
    <div className="keen-card flex min-h-[133px] flex-col items-center justify-center px-5 py-6 text-center">
      <p className="text-[32px] font-semibold leading-none text-[#244d3f]">{value}</p>
      <p className="mt-3 text-sm font-medium leading-none text-[#64748b]">{label}</p>
    </div>
  );
};

export default SummaryCard;
