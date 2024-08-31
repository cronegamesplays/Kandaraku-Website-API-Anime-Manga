function formatInitials(name: string): string {
  const names = name.trim().split(/\s+/);
  if (names.length === 1) {
    return names[0].slice(0, 2);
  }

  const firstInitial = names[0][0].toUpperCase();
  const lastInitial = names[names.length - 1][0].toUpperCase();

  return `${firstInitial}${lastInitial}`;
}

function formatShortNumber(num: number): string {
  const units = ["", "K", "M", "B", "T"];
  const magnitude = Math.floor(Math.log10(Math.abs(num)) / 3);

  if (magnitude === 0) {
    return num.toString();
  }

  const shortened = num / Math.pow(10, magnitude * 3);
  return `${shortened.toFixed(1).replace(/\.0$/, "")}${units[magnitude]}`;
}

function formatMilliseconds(ms: number): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
  };
}

function formatBannerDate(date: Date): string {
  const year = date.getFullYear();
  const months = [
    "Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.",
    "Oct.", "Nov.", "Dec.",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${year} ${month} ${day}`;
}

export {
  formatInitials,
  formatBannerDate,
  formatShortNumber,
  formatMilliseconds,
};
