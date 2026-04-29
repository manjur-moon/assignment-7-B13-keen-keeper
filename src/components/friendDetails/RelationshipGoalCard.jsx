const RelationshipGoalCard = ({ friend }) => {
  return (
    <section className="keen-card mt-6 min-h-[119px] p-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold leading-6 text-[#1f2937]">Relationship Goal</h2>
        <button className="h-[33px] rounded-lg border border-white bg-[#f8fafc] px-4 text-xs font-medium text-[#1f2937] shadow-sm transition hover:text-[#244d3f]">
          Edit
        </button>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#64748b]">Connect every {friend.goal} days</p>
    </section>
  );
};

export default RelationshipGoalCard;
