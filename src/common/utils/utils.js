import jwt_decode from "jwt-decode";

export const sliceString = (text, length) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

export const smoothScroll = (section) => {
  section?.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

export const isTokenExpired = (token) => {
  const decodedToken = jwt_decode(token);
  const currentTime = Date.now() / 1000; // Convert current time to seconds
  return decodedToken.exp < currentTime;
};

export const getDayjsDate = (props) => {
  const date = new Date(props.date);
  const formattedDate = date.toISOString().substring(0, 10);
  return formattedDate;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const suffix = getOrdinalSuffix(day);
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day}${suffix} ${month} ${year}`;
};
export const getDateAndMonth = (dateString) => {
  const date = new Date(dateString);
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  return {
    dayOfMonth,
    month,
  };
};

export const formatTime = (time) => {
  const [hours, minutes] = time.split(":");
  let convertedHours = parseInt(hours, 10) % 12;
  if (convertedHours === 0) {
    convertedHours = 12;
  }
  const period = parseInt(hours, 10) < 12 ? "AM" : "PM";
  const convertedTime = `${convertedHours}:${minutes} ${period}`;
  return convertedTime;
};

export const formatBlogDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};

export const formatEventDate = (startdate, startTime, endTime) => {
  const dateObj = new Date(startdate);
  const date = dateObj.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // format the start and end times
  const startHour = parseInt(startTime.split(":")[0]);
  const endHour = parseInt(endTime.split(":")[0]);
  const startMin = startTime.split(":")[1];
  const endMin = endTime.split(":")[1];
  const startAmPm = startHour >= 12 ? "PM" : "AM";
  const endAmPm = endHour >= 12 ? "PM" : "AM";
  const formattedStartTime =
    (startHour % 12) + ":" + startMin + " " + startAmPm;
  const formattedEndTime = (endHour % 12) + ":" + endMin + " " + endAmPm;

  // display the formatted date and time
  const formattedDate = `${date}, ${formattedStartTime} - ${formattedEndTime}`;
  return formattedDate;
};

function getOrdinalSuffix(day) {
  const j = day % 10;
  const k = day % 100;
  if (j == 1 && k != 11) {
    return "st";
  }
  if (j == 2 && k != 12) {
    return "nd";
  }
  if (j == 3 && k != 13) {
    return "rd";
  }
  return "th";
}

export const tabProps = (link, component) => {
  return {
    id: `simple-tab-${link}`,
    "aria-controls": `simple-tabpanel-${link}`,
    component: component,
    href: `${link}`,
    underline: "none",
  };
};

export function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.round((now - date) / 1000 / 60); // difference in minutes

  if (diff < 1) {
    return "Just now";
  } else if (diff === 1) {
    return "1 min ago";
  } else if (diff < 60) {
    return diff + " mins ago";
  } else if (diff < 24 * 60) {
    const hours = Math.round(diff / 60);
    return hours + " " + (hours === 1 ? "hr" : "hrs") + " ago";
  } else {
    const days = Math.round(diff / 60 / 24);
    return days + " " + (days === 1 ? "day" : "days") + " ago";
  }
}
