const start = document.getElementById("startbtn");
const end = document.getElementById("stopbtn");
const reset = document.getElementById("resetbtn");
const time = document.getElementById("stopwatch");

let watch = true;
let milisec, sec, min, hr;
milisec = 0;
sec = 0;
min = 0;
hr = 0;

function starttime() {
  if (watch == true) {
    watch = false;
    timerCycle();
  }
}
function stoptime() {
  if (watch == false) {
    watch = true;
  }
}
function resettime() {
  document.location.reload(true);
}
function timerCycle() {
  if (watch == false) {
    sec = Number(sec);
    milisec = Number(milisec);
    min = Number(min);
    hr = Number(hr);

    milisec += 1;

    if (milisec == 60) {
      sec += 1;
      milisec = 0;
    }

    if (sec == 60) {
      min += 1;
      sec = 0;
      milisec = 0;
    }
    if (min == 60) {
      hr += 1;
      min = 0;
      sec = 0;
      milisec = 0;
    }

    if (milisec < 10 || milisec == 0) {
      milisec = "0" + milisec;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    time.innerHTML = `${hr} : ${min} : ${sec} : ${milisec}`;

    setTimeout("timerCycle()", 16.6666666667);
  }
}

start.addEventListener("click", starttime);
end.addEventListener("click", stoptime);
reset.addEventListener("click", resettime);
