var myStr = window.prompt("Enter a word:");
const original = document.getElementById("original");
original.innerHTML = myStr;
const output = document.getElementById("output");

// let myStr = "candy";

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function shiftVal(num) {
  let spreadstr = [...myStr];
  let newString = [];

  for (var i = 0; i < spreadstr.length; i++) {
    let myIndex = alphabet.indexOf(spreadstr[i].toString());
    let newIndex = myIndex + num;
    console.log(newIndex);

    if (newIndex > 25) {
      newIndex = newIndex - 25 - 1;
      console.log("new index:" + newIndex);
    }

    let newVal = alphabet[newIndex];
    // console.log(newIndex)
    // console.log(newVal)

    newString.push(newVal);
    finalStr = newString.join("");
    console.log(finalStr);
    output.innerHTML = finalStr;
  }
}

function shiftStr() {
  switch (event.keyCode) {
    case 49:
      shiftVal(1);
      break;
    case 50:
      shiftVal(2);
      break;
    case 51:
      shiftVal(3);
      break;
  }
}

document.addEventListener("keydown", shiftStr);
