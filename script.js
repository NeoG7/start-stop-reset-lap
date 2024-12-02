let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let lapButton = document.getElementById("lap");
let lapsList = document.getElementById("laps");

let interval;
let startTime;
let elapsedTime = 0;

function updateTime() {
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000).toString().padStart(2, "0");
  const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, "0");
  const milliseconds = (elapsedTime % 1000).toString().padStart(3, "0");
  timerDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

startButton.addEventListener("click", () => {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateTime, 10);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});


lapButton.addEventListener("click", () => {
    if (interval) {
      const lapTime = timerDisplay.textContent;
      const lapItem = document.createElement("li");
      lapItem.textContent = `Lap: ${lapTime}`;
      lapsList.appendChild(lapItem);
    }
  });
  

resetButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    startTime = null;
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:000";
    lapsList.innerHTML = "";
  });

