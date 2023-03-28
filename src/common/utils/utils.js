import jwt_decode from "jwt-decode";

export const sliceString = (text, length) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

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

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const suffix = getOrdinalSuffix(day);
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day}${suffix} ${month} ${year}`;
}

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
