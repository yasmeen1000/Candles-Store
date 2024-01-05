var dropdowns = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdowns.length; i++) {
 dropdowns[i].addEventListener("mouseover", function () {
    this.getElementsByClassName("dropdown-content")[0].style.display = "block";
});

dropdowns[i].addEventListener("mouseout", function () {
    this.getElementsByClassName("dropdown-content")[0].style.display = "none";
});

dropdowns[i].addEventListener("click", function () {
    this.getElementsByClassName("dropdown-content")[0].style.display = "none";
});
}

var clients = document.getElementsByClassName("opacity");
for (var i = 0; i < clients.length; i++) {
clients[i].addEventListener("mouseover", function () {
    this.style.opacity = 1;
});
clients[i].addEventListener("mouseout", function () {
    this.style.opacity = 0.4;
});

}