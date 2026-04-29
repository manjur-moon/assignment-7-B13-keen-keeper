import { getInteractionIcon } from "../../utils/assets";
import { formatLongDate } from "../../utils/dateFormat";

const typeIcons = {
  call: { kind: "image" },
  text: { kind: "image" },
  video: { kind: "image" },
  meetup: { kind: "emoji", value: "🤝" },
};

const TimelineIcon = ({ type }) => {
  const icon = typeIcons[type] || typeIcons.call;

  if (icon.kind === "image") {
    return <img src={getInteractionIcon(type)} alt="" className="h-8 w-8 object-contain" />;
  }

  return <span className="text-[32px] leading-none">{icon.value}</span>;
};

const TimelineItem = ({ interaction }) => {
  return (
    <article className="keen-card flex min-h-20 items-center gap-4 px-4 py-4 sm:gap-6">
      <div className="grid h-12 w-[55px] shrink-0 place-items-center">
        <TimelineIcon type={interaction.type} />
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-base font-semibold leading-6 text-[#1f2937]">
          {interaction.title}
        </h3>
        <p className="mt-1 text-sm leading-5 text-[#64748b]">{formatLongDate(interaction.date)}</p>
      </div>
    </article>
  );
};

export default TimelineItem;
