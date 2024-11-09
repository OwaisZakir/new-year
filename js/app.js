// ================ Dom Elements ===========
let domCounterDays = document.querySelector("#days");
let domCounterHours = document.querySelector("#hours");
let domCounterMinutes = document.querySelector("#minutes");
let domCounterSeconds = document.querySelector("#Seconds");
let clockBody = document.querySelector(".clockBody");
// ================== Date Variables ==============
let countDownDate = new Date("January 01, 2025 00:00:00");
let counter = countDownDate;
let current = new Date();
// =================== Set Interval ===================
let running = setInterval(function () {
  let currentDate = new Date();
  let tootleDuration = countDownDate - currentDate;
  let days = Math.floor(tootleDuration / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (tootleDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((tootleDuration % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((tootleDuration % (1000 * 60)) / 1000);

  domCounterDays.innerHTML = days;
  domCounterHours.innerHTML = hours;
  domCounterMinutes.innerHTML = minutes;
  domCounterSeconds.innerHTML = seconds;
}, 1000);
// ================= Validations ===========================
if (current < counter) {
  document.getElementById("day").innerHTML = "Days";
  document.getElementById("hour").innerHTML = "Hours";
  document.getElementById("minute").innerHTML = "Minutes";
  document.getElementById("second").innerHTML = "Seconds";

  domCounterDays.innerHTML = "0";
  domCounterHours.innerHTML = "0";
  domCounterMinutes.innerHTML = "0";
  domCounterSeconds.innerHTML = "0";
} else {
  clearInterval(running);
  document.getElementById("timerClose").innerHTML = "Happy New Year";
  clockBody.style.display = "none";
}
