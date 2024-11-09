// ================ Dom Elements ===========
let domDays = document.querySelector("#days");
let domHours = document.querySelector("#hours");
let domMinutes = document.querySelector("#minutes");
let domSeconds = document.querySelector("#Seconds");
// ================== Date Variables ==============
let countDownDate = new Date("January 01, 2025 00:00:00");
// let currentDate = new Date();
// let tootleDuration = countDownDate - currentDate;
// let days = Math.floor(tootleDuration / (1000 * 60 * 60 * 24));
// let hours = Math.floor(
//   (tootleDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// );
// let minutes = Math.floor((tootleDuration % (1000 * 60 * 60)) / (1000 * 60));
// let seconds = Math.floor((tootleDuration % (1000 * 60)) / 1000);

setInterval(function () {
  let currentDate = new Date();
  let tootleDuration = countDownDate - currentDate;
  let days = Math.floor(tootleDuration / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (tootleDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((tootleDuration % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((tootleDuration % (1000 * 60)) / 1000);

  domDays.innerHTML = days;
  domHours.innerHTML = hours;
  domMinutes.innerHTML = minutes;
  domSeconds.innerHTML = seconds;
}, 1000);
