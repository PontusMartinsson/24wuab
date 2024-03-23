var expandableItems = document.querySelectorAll(".expandable .clickable");

for (var i = 0; i < expandableItems.length; i++) {
    expandableItems[i].addEventListener("click", expand);
}

function expand() {
    this.parentElement.classList.toggle("expanded");
}


var minimizeButton = document.querySelector("#minimize_button");

minimizeButton.addEventListener("click", minimizeMenu);

function minimizeMenu() {
    var wrapper = document.querySelector("#wrapper")
    var menu = document.querySelector("#menu")
    menu.classList.toggle("minimized")
    wrapper.classList.toggle("minimized")
}