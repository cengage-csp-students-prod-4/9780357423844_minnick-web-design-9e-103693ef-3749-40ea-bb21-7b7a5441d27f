/*
Student Name: Michael Hitchcock
File Name: script.js
Date: 11/12/2026
*/
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
		} else {
		    menu.style.display = "block";
		}
}