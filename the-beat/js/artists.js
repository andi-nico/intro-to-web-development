//This file includes functions that allow the user to switch from grid view to list view and vice versa using an event listener
const list = document.getElementById('list');
const grid = document.getElementById('grid');
var button = document.querySelectorAll(".toggle");


list.addEventListener('click', listView); //clicking on "list" button triggers list view  using the below function

function listView() {
  document.getElementById('column-1').style.width = "100%"; //event listener changes width to 100%, making cards appear in "list view"
  document.getElementById('column-2').style.width = "100%"; //event listener changes width to 100%, making cards appear in "list view"
}

grid.addEventListener('click', gridView); //clicking on "grid" button trigger grid view using the below function

function gridView() {
  document.getElementById('column-1').style.width = "50%"; //event listener changes width to 50%, making cards appear in "list view"
  document.getElementById('column-2').style.width = "50%"; //event listener changes width to 50%, making cards appear in "list view"
}

function active() { //function toggles "list" button to active state
  var listActive = document.getElementById("list");
  listActive.classList.toggle("active");
}

function active() { //function toggles "grid" button to active state
  var gridActive = document.getElementById("grid");
  gridActive.classList.toggle("active");
}
