//This file includes functions that allow the user to switch from grid view to list view and vice versa using an event listener
const list = document.getElementById('list');
const grid = document.getElementById('grid');
var button = document.querySelectorAll(".toggle");


list.addEventListener('click', listView); //clicking on "list" button triggers list view  using the below function

function listView() {
  document.getElementById('column-1').style.width = "100%"; //event listener changes width to 100%, making cards appear in "list view"
  document.getElementById('column-2').style.width = "100%"; //event listener changes width to 100%, making cards appear in "list view"
	list.classList.add("active")
}

grid.addEventListener('click', gridView); //clicking on "grid" button trigger grid view using the below function

function gridView() {
  document.getElementById('column-1').style.width = "50%"; //event listener changes width to 50%, making cards appear in "list view"
  document.getElementById('column-2').style.width = "50%"; //event listener changes width to 50%, making cards appear in "list view"
	grid.classList.add("active")

}
