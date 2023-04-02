var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var white = document.getElementById("white");

function handleKeyDown(evt) {
  var key = evt.keyCode;

  if (key === 74) {
    red.classList.remove("off");
    red.classList.add("on");
  }
  if (key === 75) {
    blue.classList.remove("off");
    blue.classList.add("on");
  }
  if (key === 68) {
    yellow.classList.remove("off");
    yellow.classList.add("on");
  }
  if (key === 70) {
    green.classList.remove("off");
    green.classList.add("on");
  }
  if (key === 32) {
    white.classList.remove("off");
    white.classList.add("on");
  }
}

function handleKeyUp(evt) {
  var key = evt.keyCode;

  if (key === 74) {
    red.classList.remove("on");
    red.classList.add("off");
  }
  if (key === 75) {
    blue.classList.remove("on");
    blue.classList.add("off");
  }
  if (key === 68) {
    yellow.classList.remove("on");
    yellow.classList.add("off");
  }
  if (key === 70) {
    green.classList.remove("on");
    green.classList.add("off");
  }
  if (key === 32) {
    white.classList.remove("on");
    white.classList.add("off");
  }
}

function handleMouseDown(evt) {
  evt.target.classList.add("on");
}

function handleMouseUp(evt) {
  evt.target.classList.remove("on");
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("mousedown", handleMouseDown);
  btn.addEventListener("mouseup", handleMouseUp);
});
