const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const milli = document.querySelector(".milliseconds");
const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");
var i = 0;
var s = 0;
var m = 0;
let myinterval;
start.addEventListener("click", () => {
  if (!myinterval) {
    myinterval = setInterval(() => {
      console.log(myinterval);
      milli.innerHTML = i + 1;
      i = i + 1;
      if (i < 10) {
        milli.innerHTML = "0" + i;
      } else {
        milli.innerHTML = i;
      }
      if (i > 90) {
        s = s + 1;
        if (s < 10) {
          sec.innerHTML = "0" + s;
        } else {
          sec.innerHTML = s;
        }
        i = 0;
      }
      if (s > 60) {
        m = m + 1;
        if (m < 10) {
          min.innerHTML = "0" + m;
        } else {
          min.innerHTML = m;
        }
        s = 0;
      }
    }, 0.01);
  }
});

stop.addEventListener("click", () => {
  clearInterval(myinterval);
  myinterval = null;
});
reset.addEventListener("click", () => {
  milli.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = "00";
  i = 0;
  s = 0;
  m = 0;
  clearInterval(myinterval);
  myinterval = null;
});
