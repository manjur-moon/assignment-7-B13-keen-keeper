const statusStyles = {
  overdue: {
    label: "Overdue",
    badge: "bg-[#ef4444] text-white border-[#ef4444]",
    soft: "bg-red-50 text-[#ef4444]",
  },
  "almost due": {
    label: "Almost Due",
    badge: "bg-[#efad44] text-white border-[#efad44]",
    soft: "bg-amber-50 text-[#b8750a]",
  },
  "on-track": {
    label: "On-Track",
    badge: "bg-[#244d3f] text-white border-[#244d3f]",
    soft: "bg-emerald-50 text-[#244d3f]",
  },
};

const tagStyle = "bg-[#cbfadb] text-[#244d3f]";

const getStatusStyle = (status) => statusStyles[status] || statusStyles.overdue;

export { getStatusStyle, statusStyles, tagStyle };
