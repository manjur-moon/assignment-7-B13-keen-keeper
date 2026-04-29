import { useContext, useMemo } from "react";
import StatsChart from "../../components/stats/StatsChart";
import EmptyState from "../../components/ui/EmptyState";
import { FriendContext } from "../../context/FriendContext";

const Stats = () => {
  const { interactions } = useContext(FriendContext);

  const chartData = useMemo(() => {
    const counts = interactions.reduce(
      (total, interaction) => {
        if (!Object.prototype.hasOwnProperty.call(total, interaction.type)) {
          return total;
        }

        return {
          ...total,
          [interaction.type]: total[interaction.type] + 1,
        };
      },
      { text: 0, call: 0, video: 0 },
    );

    return [
      { name: "Text", value: counts.text },
      { name: "Call", value: counts.call },
      { name: "Video", value: counts.video },
    ];
  }, [interactions]);

  const totalInteractions = chartData.reduce((total, item) => total + item.value, 0);

  return (
    <div className="keen-container min-h-[650px] py-20">
      <h1 className="text-[40px] font-bold leading-tight text-[#1f2937] sm:text-[48px]">
        Friendship Analytics
      </h1>

      <section className="keen-card mt-6 min-h-[408px] p-8">
        <h2 className="text-base font-semibold leading-6 text-[#1f2937]">By Interaction Type</h2>

        {totalInteractions ? (
          <StatsChart data={chartData} />
        ) : (
          <EmptyState
            title="No interactions yet"
            description="Check in with a friend to see your call, text, and video analytics here."
          />
        )}
      </section>
    </div>
  );
};

export default Stats;
