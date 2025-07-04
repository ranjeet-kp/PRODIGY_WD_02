let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const lapsList = document.getElementById("laps");

function timeToString(time) {
  let date = new Date(time);
  let minutes = String(date.getUTCMinutes()).padStart(2, "0");
  let seconds = String(date.getUTCSeconds()).padStart(2, "0");
  let milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");
  return `${minutes}:${seconds}.${milliseconds}`;
}

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 10);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  display.textContent = "00:00:00.000";
  lapsList.innerHTML = "";
}

function lap() {
  if (running) {
    const li = document.createElement("li");
    li.textContent = timeToString(elapsedTime);
    lapsList.appendChild(li);
  }
}