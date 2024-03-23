var expandableItems = document.querySelectorAll(".expandable .clickable");

for (var i = 0; i < expandableItems.length; i++) {
    expandableItems[i].addEventListener("click", expand, false);
}

function expand(gre) {
    this.parentElement.classList.toggle("expanded");
}


var minimizeButton = document.querySelector("#minimize_box .nav_item");

minimizeButton.addEventListener("click", minimizeMenu);

function minimizeMenu() {
    var menu = document.querySelector("#menu")
    menu.classList.toggle("minimized")
}