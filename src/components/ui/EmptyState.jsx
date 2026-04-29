const EmptyState = ({ title, description }) => {
  return (
    <div className="keen-card flex min-h-44 flex-col items-center justify-center px-6 py-10 text-center">
      <h3 className="text-xl font-semibold text-[#1f2937]">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-[#64748b]">{description}</p>
    </div>
  );
};

export default EmptyState;
