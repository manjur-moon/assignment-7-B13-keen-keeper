const parseDate = (dateValue) => {
  if (!dateValue) return null;
  const date = new Date(`${dateValue}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
};

const formatDate = (dateValue) => {
  const date = parseDate(dateValue);
  if (!date) return dateValue || "Not set";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const formatLongDate = (dateValue) => {
  const date = parseDate(dateValue);
  if (!date) return dateValue || "Not set";

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export { formatDate, formatLongDate };
