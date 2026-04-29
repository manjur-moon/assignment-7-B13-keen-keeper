import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import defaultInteractions from "../data/defaultInteractions";
import { getTimelineFromLocalDB, saveTimelineToLocalDB } from "../utils/localDB";

export const FriendContext = createContext(null);

const interactionLabels = {
  call: "Call",
  text: "Text",
  video: "Video",
};

const getLocalDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const createId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const getInitialInteractions = () => {
  const savedTimeline = getTimelineFromLocalDB();
  return savedTimeline.length ? savedTimeline : defaultInteractions;
};

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [isFriendsLoading, setIsFriendsLoading] = useState(true);
  const [friendsError, setFriendsError] = useState("");
  const [interactions, setInteractions] = useState(getInitialInteractions);

  useEffect(() => {
    let isMounted = true;

    const loadFriends = async () => {
      try {
        setIsFriendsLoading(true);
        const response = await fetch("/friends.json");

        if (!response.ok) {
          throw new Error("Unable to load friend data.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Friend data is not valid.");
        }

        if (isMounted) {
          setFriends(data);
          setFriendsError("");
        }
      } catch (error) {
        if (isMounted) {
          setFriends([]);
          setFriendsError(error.message || "Something went wrong while loading friends.");
        }
      } finally {
        if (isMounted) {
          setIsFriendsLoading(false);
        }
      }
    };

    loadFriends();

    return () => {
      isMounted = false;
    };
  }, []);

  const addInteraction = useCallback((friend, type) => {
    const normalizedType = type.toLowerCase();
    const label = interactionLabels[normalizedType];

    if (!friend || !label) {
      toast.error("Unable to add this interaction.");
      return null;
    }

    const entry = {
      id: createId(),
      friendId: friend.id,
      friendName: friend.name,
      type: normalizedType,
      title: `${label} with ${friend.name}`,
      date: getLocalDate(),
      createdAt: new Date().toISOString(),
    };

    setInteractions((currentInteractions) => {
      const updatedInteractions = [entry, ...currentInteractions];
      saveTimelineToLocalDB(updatedInteractions);
      return updatedInteractions;
    });

    toast.success(`${label} check-in added for ${friend.name}`);
    return entry;
  }, []);

  const interactionsThisMonth = useMemo(() => interactions.length, [interactions]);

  const value = useMemo(
    () => ({
      addInteraction,
      friends,
      friendsError,
      interactions,
      interactionsThisMonth,
      isFriendsLoading,
    }),
    [addInteraction, friends, friendsError, interactions, interactionsThisMonth, isFriendsLoading],
  );

  return <FriendContext.Provider value={value}>{children}</FriendContext.Provider>;
};

export default FriendProvider;
