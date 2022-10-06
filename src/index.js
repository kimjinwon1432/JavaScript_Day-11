const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const body = document.querySelector("body");
const giveBtn = document.querySelector("button");

function giveRandom() {
  const random = Math.floor(Math.random() * colors.length);
  return random;
}
/*
function checkOverlap(leftColor, rightColor) {
  while (leftColor === rightColor) {
    console.log("the colors matched!!");
    return giveRandom();
  }
  return rightColor;
}*/

function giveColor(event) {
  event.preventDefault();

  //random number for left color, right color
  const leftColor = colors[giveRandom()];
  let rightColor = colors[giveRandom()];

  body.style.background = `linear-gradient( 90deg, ${leftColor}, ${rightColor})`;

  //If the colors are same? -> i will change one of them...
  //Recursive function
  if (leftColor === rightColor) {
    console.log("Same Color!");
    giveColor(event);
  }
}

giveBtn.addEventListener("click", giveColor);
