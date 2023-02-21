let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let searchicon = document.querySelector("#search-icon");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
}






function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
    searchicon.classList.toggle("fa-times");
  }
  else {
    x.style.display = "block";
    searchicon.classList.toggle("fa-times");
  }
}