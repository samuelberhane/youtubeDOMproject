// Variables for buttons
let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");

//Variables for  time values
let second = 0;
let minute = 0;
let hour = 0;

//Variable for leading zero
let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour = 0;

//Variables for set interval and timer status
let timertStatus = "stopped";
let setInterval = null;

function Watch() {
  second++;
  if (second / 60 == 1) {
    second = 0;
    minute++;
  }

  if (minute / 60 == 1) {
    minute = 0;
    hour++;
  }

  if (second < 10) {
    leadingSecond = `0${second}`;
  } else {
    leadingSecond = second;
  }
  if (minute < 10) {
    leadingMinute = `0${minute}`;
  } else {
    leadingMinute = minute;
  }
  if (hour < 10) {
    leadingHour = `0${hour}`;
  } else {
    leadingHour = hour;
  }

  document.querySelector(".time").textContent =
    leadingHour + ":" + leadingMinute + ":" + leadingSecond;
}

startStopBtn.addEventListener("click", () => {
  if (timertStatus == "stopped") {
    time = window.setInterval(Watch, 1000);
    timertStatus = "started";
    startStopBtn.innerHTML = "<i class='fa-solid fa-pause' id='pause'></i>";
  } else {
    window.clearInterval(time);
    timertStatus = "stopped";
    startStopBtn.innerHTML = "<i class='fa-solid fa-play' id='start'></i>";
  }
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(time);
  second = 0;
  minute = 0;
  hour = 0;
  document.querySelector(".time").innerHTML = "00:00:00";
  if ((timertStatus = "started")) {
    startStopBtn.innerHTML = "<i class='fa-solid fa-play' id='start'></i>";
  }
});
