import { formatDate } from "../../utils/dateFormat";

const stats = (friend) => [
  {
    label: "Days Since Contact",
    value: friend.days_since_contact,
  },
  {
    label: "Goal (Days)",
    value: friend.goal,
  },
  {
    label: "Next Due",
    value: formatDate(friend.next_due_date),
  },
];

const StatsCards = ({ friend }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats(friend).map((item) => (
        <div key={item.label} className="keen-card flex min-h-[130px] flex-col items-center justify-center px-4 py-6 text-center">
          <p className="text-[28px] font-semibold leading-none text-[#244d3f] sm:text-[32px]">
            {item.value}
          </p>
          <p className="mt-3 text-sm font-medium leading-none text-[#64748b]">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
