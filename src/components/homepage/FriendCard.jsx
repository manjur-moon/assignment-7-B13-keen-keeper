import { Link } from "react-router";
import { getStatusStyle, tagStyle } from "../../utils/statusStyles";

const FriendCard = ({ friend }) => {
  const statusStyle = getStatusStyle(friend.status);

  return (
    <Link
      to={`/friend/${friend.id}`}
      className="keen-card group flex min-h-[251px] flex-col items-center justify-start px-6 py-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="h-20 w-20 rounded-full object-cover"
      />

      <div className="mt-4 w-full">
        <h3 className="truncate text-xl font-semibold leading-[1.2] text-[#1f2937] group-hover:text-[#244d3f]">
          {friend.name}
        </h3>
        <p className="mt-2 text-xs leading-none text-[#64748b]">
          {friend.days_since_contact}d ago
        </p>
      </div>

      <div className="mt-4 flex min-h-6 max-w-full flex-wrap items-center justify-center gap-2">
        {friend.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className={`inline-flex h-6 items-center rounded-md px-2 text-xs font-medium capitalize ${tagStyle}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`mt-3 inline-flex h-6 items-center rounded-md border px-2 text-xs font-medium ${statusStyle.badge}`}
      >
        {statusStyle.label}
      </span>
    </Link>
  );
};

export default FriendCard;
