import { useContext, useMemo, useState } from "react";
import TimelineItem from "../../components/timeline/TimelineItem";
import EmptyState from "../../components/ui/EmptyState";
import { FriendContext } from "../../context/FriendContext";

const filterOptions = [
  { value: "all", label: "Filter timeline" },
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "video", label: "Video" },
];

const Timeline = () => {
  const { interactions } = useContext(FriendContext);
  const [filterType, setFilterType] = useState("all");

  const filteredInteractions = useMemo(() => {
    const visibleInteractions = interactions.filter(
      (interaction) => filterType === "all" || interaction.type === filterType,
    );

    return [...visibleInteractions].sort((firstInteraction, secondInteraction) => {
      const firstDate = new Date(firstInteraction.createdAt || firstInteraction.date).getTime();
      const secondDate = new Date(secondInteraction.createdAt || secondInteraction.date).getTime();
      return secondDate - firstDate;
    });
  }, [filterType, interactions]);

  return (
    <div className="keen-container min-h-[1532px] py-20">
      <div className="mb-6">
        <h1 className="text-[40px] font-bold leading-tight text-[#1f2937] sm:text-[48px]">
          Timeline
        </h1>
        <select
          value={filterType}
          onChange={(event) => setFilterType(event.target.value)}
          className="mt-6 h-[54px] w-full max-w-[347px] rounded-lg border border-white bg-white px-4 text-sm text-[#9696a2] shadow-sm outline-none focus:border-[#244d3f]"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {filteredInteractions.length ? (
        <div className="space-y-6 pb-20">
          {filteredInteractions.map((interaction) => (
            <TimelineItem key={interaction.id} interaction={interaction} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No interactions yet"
          description="Open a friend profile and use Call, Text, or Video to add your first timeline entry."
        />
      )}
    </div>
  );
};

export default Timeline;
