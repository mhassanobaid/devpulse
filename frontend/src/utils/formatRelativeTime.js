export function formatRelativeTime(dateString) {
  const now = new Date();
  const date = new Date(dateString);

  const seconds = Math.floor((date - now) / 1000);

  const formatter = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  const intervals = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "week", seconds: 604800 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const value = Math.trunc(seconds / interval.seconds);

    if (Math.abs(value) >= 1) {
      return formatter.format(value, interval.unit);
    }
  }

  return "Just now";
}
