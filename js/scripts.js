const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

// current date
const currentDate = new Date();

// array of day by names
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//current day of the week
const currentDayIndex = currentDate.getDay();

//name of the current day
const currentDayName = daysOfWeek[currentDayIndex];

currentDayOfTheWeek.innerHTML = currentDayName;

function formatTwoDigits(number) {
  return (number < 10 ? "0" : "") + number;
}
// current UTC time in milliseconds
const currentUTCTimeMillis = Date.now();
const hours = formatTwoDigits(currentDate.getUTCHours());
const minutes = formatTwoDigits(currentDate.getUTCMinutes());
const seconds = formatTwoDigits(currentDate.getUTCSeconds());
// Create a string with the formatted time
const currentTimeString = `${hours}:${minutes}:${seconds}`;

currentUTCTime.innerHTML = currentTimeString;
