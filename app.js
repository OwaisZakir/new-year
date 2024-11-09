let countDownDate = new Date("January 01, 2025 00:00:00");
let currentDate = new Date();

let days = Math.floor((countDownDate - currentDate) / (1000 * 60 * 60 * 24));
let hours = Math.floor((countDownDate - currentDate) / (1000 * 60 * 60));
let minutes = Math.floor((countDownDate - currentDate) / (1000 * 60));
let seconds = Math.floor((countDownDate - currentDate) / 1000);
