export const formatDate = (date) => {
  const publishedAt = new Date(date);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - publishedAt;

  // Convert milliseconds to seconds
  const secondsDifference = Math.floor(timeDifference / 1000);

  // Calculate the number of seconds, minutes, hours, and days
  const seconds = secondsDifference % 60;
  const minutes = Math.floor(secondsDifference / 60) % 60;
  const hours = Math.floor(secondsDifference / 3600) % 24;
  const days = Math.floor(secondsDifference / 86400); // 86400 seconds in a day

  // Function to format the time difference
  function formatTimeDifference(days, hours, minutes, seconds) {
    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
  }

  // Format and display the time difference
  const formattedTimeDifference = formatTimeDifference(
    days,
    hours,
    minutes,
    seconds
  );
  return formattedTimeDifference;
};
