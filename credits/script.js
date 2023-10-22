const toggleBtn= document.querySelector(".toggle_btn")
const toggleBtnIcon= document.querySelector(".toggle_btn i")
const dropDownMenu= document.querySelector(".dropdown_menu")

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle("open")
const isOpen = dropDownMenu.classList.contains("open")

toggleBtnIcon.classList = isOpen
? "fa-solid fa-xmark"
: "fa-solid fa-bars"
}

//Sticky Scroll Bar 
window.onscroll = function() {myFunction()};

var navbar = document.getElementByClass("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Nab Bar End









//top button 
let mybutton = document.getElementById("top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}









