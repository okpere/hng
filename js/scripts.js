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

// current UTC time in milliseconds
const currentUTCTimeMillis = Date.now();

currentUTCTime.innerHTML = currentUTCTimeMillis;
