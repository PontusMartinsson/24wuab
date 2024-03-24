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
    var wrapper = document.querySelector("#wrapper");
    var menu = document.querySelector("#menu");
    menu.classList.remove("show_mobile");
    menu.classList.toggle("minimized");
    wrapper.classList.toggle("minimized");
}

var moreButton = document.querySelector("#mer");
var closeButton = document.querySelector("#close");
moreButton.addEventListener("click", showMobile);
closeButton.addEventListener("click", showMobile);

function showMobile() {
    var menu = document.querySelector("#menu");
    var wrapper = document.querySelector("#wrapper");
    menu.classList.remove("minimized");
    wrapper.classList.remove("minimized");
    menu.classList.toggle("show_mobile");
}