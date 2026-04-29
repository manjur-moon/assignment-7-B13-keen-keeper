const TIMELINE_STORAGE_KEY = "keenkeeper-timeline";

const isBrowser = () => typeof window !== "undefined" && Boolean(window.localStorage);

const getTimelineFromLocalDB = () => {
  if (!isBrowser()) return [];

  try {
    const storedTimeline = localStorage.getItem(TIMELINE_STORAGE_KEY);
    if (!storedTimeline) return [];

    const parsedTimeline = JSON.parse(storedTimeline);
    return Array.isArray(parsedTimeline) ? parsedTimeline : [];
  } catch {
    return [];
  }
};

const saveTimelineToLocalDB = (timeline) => {
  if (!isBrowser()) return;
  localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(timeline));
};

const addTimelineToLocalDB = (entry) => {
  const currentTimeline = getTimelineFromLocalDB();
  const updatedTimeline = [entry, ...currentTimeline];
  saveTimelineToLocalDB(updatedTimeline);
  return updatedTimeline;
};

export { addTimelineToLocalDB, getTimelineFromLocalDB, saveTimelineToLocalDB };
