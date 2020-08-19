var toonBtn = document.getElementById("toon");
var addBtn = document.getElementById("add");
var remBtn = document.getElementById("rem");
var sortBtn = document.getElementById("sort");
var colorBtn = document.getElementById("colors");

toonBtn.addEventListener("click", show);
addBtn.addEventListener("click", add);
remBtn.addEventListener("click", rem);
sortBtn.addEventListener("click", sorteer);
colorBtn.addEventListener("click", colors);

var array = [];

function show() {
  array.forEach(element => {
    var row = document.getElementById("row");
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(element));
    row.appendChild(td);
  });
}

function add() {
  var item = prompt("Add Item");
  array.push(item);
}

function rem() {
  var inputField = document.getElementById("input");
  var value = inputField.value;

  var index = array.indexOf(value);
  array.splice(index, 1);

  var tds = document.querySelectorAll("td");

  tds.forEach(element => {
    element.remove();
  });

  show();
}

function sorteer() {
  console.log(array);
  array.sort(function(a, b) {
    return a - b;
  });
  console.log(array);
  var tds = document.querySelectorAll("td");

  tds.forEach(element => {
    element.remove();
  });

  show();
}

function colors() {
  var tds = document.querySelectorAll("td");

  tds.forEach(element => {
    element.style.backgroundColor = getColor();
  });
}

function getColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
