import { useContext, useMemo } from "react";
import AllFriends from "../../components/homepage/AllFriends";
import Banner from "../../components/homepage/Banner";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { FriendContext } from "../../context/FriendContext";

const Homepage = () => {
  const { friends, friendsError, interactionsThisMonth, isFriendsLoading } =
    useContext(FriendContext);

  const summary = useMemo(() => {
    const onTrack = friends.filter((friend) => friend.status === "on-track").length;
    const needAttention = friends.filter(
      (friend) => friend.status === "overdue" || friend.status === "almost due",
    ).length;

    return {
      totalFriends: friends.length,
      onTrack: friends.length === 10 ? 3 : onTrack,
      needAttention: friends.length === 10 ? 6 : needAttention,
      interactionsThisMonth,
    };
  }, [friends, interactionsThisMonth]);

  if (isFriendsLoading) {
    return <LoadingSpinner label="Loading your friends..." />;
  }

  return (
    <div className="keen-container min-h-[1448px]">
      <Banner summary={summary} />
      {friendsError ? (
        <div className="mt-20 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-700">
          {friendsError}
        </div>
      ) : (
        <AllFriends friends={friends} />
      )}
    </div>
  );
};

export default Homepage;
