import { FaArchive, FaBellSlash, FaEnvelope, FaTrash } from "react-icons/fa";
import { getStatusStyle, tagStyle } from "../../utils/statusStyles";

const actionButtons = [
  { label: "Snooze 2 Weeks", icon: FaBellSlash, className: "text-[#1f2937]" },
  { label: "Archive", icon: FaArchive, className: "text-[#1f2937]" },
  { label: "Delete", icon: FaTrash, className: "text-[#ef4444]" },
];

const FriendInfoCard = ({ friend }) => {
  const statusStyle = getStatusStyle(friend.status);

  return (
    <aside>
      <section className="keen-card flex min-h-[282px] flex-col items-center px-6 py-6 text-center">
        <img
          src={friend.picture}
          alt={friend.name}
          className="h-20 w-20 rounded-full object-cover"
        />

        <div className="mt-4 w-full">
          <h1 className="truncate text-xl font-semibold leading-[1.2] text-[#1f2937]">
            {friend.name}
          </h1>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <span
              className={`inline-flex h-6 items-center rounded-md border px-2 text-xs font-medium ${statusStyle.badge}`}
            >
              {statusStyle.label}
            </span>
            {friend.tags.slice(0, 1).map((tag) => (
              <span
                key={tag}
                className={`inline-flex h-6 items-center rounded-md px-2 text-xs font-medium capitalize ${tagStyle}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-5 text-sm leading-5 text-[#64748b]">&quot;{friend.bio}&quot;</p>
        <a
          href={`mailto:${friend.email}`}
          className="mt-4 inline-flex max-w-full items-center gap-2 truncate text-xs font-medium leading-none text-[#244d3f] hover:underline"
        >
          <FaEnvelope className="shrink-0 text-[11px]" />
          <span className="truncate">{friend.email}</span>
        </a>
        <p className="mt-3 text-xs leading-none text-[#64748b]">
          Preferred: {friend.contactPreference || "email"}
        </p>
      </section>

      <section className="mt-4 space-y-2">
        {actionButtons.map(({ label, icon: Icon, className }) => (
          <button
            key={label}
            className={`keen-card flex h-[52px] w-full items-center justify-center gap-3 text-sm font-medium transition hover:bg-[#f8fafc] ${className}`}
          >
            <Icon className="text-base" />
            {label}
          </button>
        ))}
      </section>
    </aside>
  );
};

export default FriendInfoCard;
