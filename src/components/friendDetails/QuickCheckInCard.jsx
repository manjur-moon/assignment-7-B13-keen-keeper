import { assetPaths } from "../../utils/assets";

const actions = [
  { type: "call", label: "Call", icon: assetPaths.interactions.call },
  { type: "text", label: "Text", icon: assetPaths.interactions.text },
  { type: "video", label: "Video", icon: assetPaths.interactions.video },
];

const QuickCheckInCard = ({ friend, onAddInteraction }) => {
  return (
    <section className="keen-card mt-6 min-h-[182px] p-6">
      <h2 className="text-xl font-semibold leading-6 text-[#1f2937]">Quick Check-In</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {actions.map(({ type, label, icon }) => (
          <button
            key={type}
            onClick={() => onAddInteraction(friend, type)}
            className="keen-card-soft flex min-h-[94px] flex-col items-center justify-center gap-2 px-4 text-sm font-medium text-[#1f2937] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            <img src={icon} alt="" className="h-8 w-8 object-contain" />
            {label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickCheckInCard;
