function getTime() {
  const currentTime = new Date();
  let currentHour;
  if (currentTime.getHours() < 10) {
    currentHour = "0" + currentTime.getHours();
  }
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();
  return `${currentHour}:${currentMinute}:${currentSecond}`;
}
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const hour = document.querySelector(".hour");
const date = document.querySelector(".date");
function showTime() {
  hour.textContent = getTime();
}
setInterval(showTime, 1000);

function showDate(weekDays, monthNames) {
  const weekDay = weekDays[new Date().getDay()];
  const currentDate = new Date().getDate();
  const currentMonth = monthNames[new Date().getMonth()];
  return `${weekDay}, ${currentDate} ${currentMonth}`;
}
console.log(showDate(weekDays, monthNames));
