var icon = document.getElementById("icon");
var yazi = document.getElementById("yazi");
var header = document.getElementById("header");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/sun.png";
    yazi.style.color = "white";
    header.style.color = "white";
  } else {
    icon.src = "assets/moon.png";
    yazi.style.color = "#333";
    header.style.color = "#333";
  }
};
