var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var popup = document.getElementById("popup");

openBtn.addEventListener("click", function() {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});