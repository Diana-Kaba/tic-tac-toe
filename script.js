"use strict";
let arr = [
  ["X", "O", "X", ""],
  ["O", "X", "", "O"],
];
let crosses = 0;
let zeros = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] == "X") {
      crosses++;
    } else if (arr[i][j] == "O") {
      zeros++;
    }
  }
}
document.write("Количество крестиков: " + crosses + "<br>");
document.write("Количество ноликов: " + zeros + "<br>");
if (crosses > zeros) {
  document.write("Количество крестиков больше, чем количество ноликов.");
} else if (crosses < zeros) {
  document.write("Количество ноликов больше, чем количество крестиков.");
} else {
  document.write("Количество крестиков и количество ноликов одинаковое.");
}
