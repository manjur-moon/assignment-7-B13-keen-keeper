import { FaPlus } from "react-icons/fa";
import SummaryCard from "./SummaryCard";

const Banner = ({ summary }) => {
  return (
    <section className="pt-20 text-center">
      <div className="mx-auto max-w-[1110px]">
        <h1 className="text-[32px] font-bold leading-tight text-[#1f2937] sm:text-[40px] lg:text-[48px]">
          Friends to keep close in your life
        </h1>
        <p className="mx-auto mt-4 max-w-[590px] text-sm leading-[1.45] text-[#64748b] sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <button className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#244d3f] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d3f34]">
          <FaPlus className="text-base" />
          Add a Friend
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 min-[520px]:grid-cols-2 lg:grid-cols-4">
        <SummaryCard label="Total Friends" value={summary.totalFriends} />
        <SummaryCard label="On Track" value={summary.onTrack} />
        <SummaryCard label="Need Attention" value={summary.needAttention} />
        <SummaryCard label="Interactions This Month" value={summary.interactionsThisMonth} />
      </div>
    </section>
  );
};

export default Banner;
