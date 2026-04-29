import { useContext } from "react";
import { Link, useParams } from "react-router";
import FriendInfoCard from "../../components/friendDetails/FriendInfoCard";
import QuickCheckInCard from "../../components/friendDetails/QuickCheckInCard";
import RelationshipGoalCard from "../../components/friendDetails/RelationshipGoalCard";
import StatsCards from "../../components/friendDetails/StatsCards";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { FriendContext } from "../../context/FriendContext";

const FriendDetails = () => {
  const { id } = useParams();
  const { addInteraction, friends, isFriendsLoading } = useContext(FriendContext);
  const friendId = Number(id);
  const friend = friends.find((currentFriend) => currentFriend.id === friendId);

  if (isFriendsLoading) {
    return <LoadingSpinner label="Loading friend details..." />;
  }

  if (!friend) {
    return (
      <div className="keen-container flex min-h-[639px] items-center justify-center py-20">
        <div className="keen-card max-w-md px-6 py-10 text-center">
          <p className="text-5xl font-bold text-[#244d3f]">404</p>
          <h1 className="mt-3 text-2xl font-semibold text-[#1f2937]">Friend not found</h1>
          <p className="mt-2 text-sm leading-6 text-[#64748b]">
            This friend profile does not exist or the link is no longer available.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex h-11 items-center rounded-lg bg-[#244d3f] px-5 text-sm font-semibold text-white transition hover:bg-[#1d3f34]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="keen-container min-h-[639px] py-20">
      <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
        <FriendInfoCard friend={friend} />

        <div>
          <StatsCards friend={friend} />
          <RelationshipGoalCard friend={friend} />
          <QuickCheckInCard friend={friend} onAddInteraction={addInteraction} />
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
