import EmptyState from "../ui/EmptyState";
import FriendCard from "./FriendCard";

const AllFriends = ({ friends }) => {
  if (!friends.length) {
    return (
      <EmptyState
        title="No friends found"
        description="Friend data could not be found. Please check the friends.json file and try again."
      />
    );
  }

  return (
    <section className="mt-20 pb-20">
      <h2 className="mb-6 text-2xl font-semibold leading-none text-[#1f2937]">Your Friends</h2>
      <div className="grid grid-cols-1 gap-6 min-[520px]:grid-cols-2 lg:grid-cols-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default AllFriends;
