const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("secs");
const days2 = document.getElementById("days2");
const birthday = "22 Jan 2024";

function countdown() {
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);
  const totalSeconds = (birthdayDate - currentDate) / 1000;
  // console.log(totalSeconds);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  days2.innerHTML = days;
}

countdown();
setInterval(countdown, 1000);
