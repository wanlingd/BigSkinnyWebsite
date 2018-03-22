// adapted from https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_app_launch&stacked=h

// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


function changeHover(id) {
    $('#womens-link').removeClass("w3-light-grey");
    $('#mens-link').removeClass("w3-light-grey");
    $('#cards-link').removeClass("w3-light-grey");
    $(id).addClass("w3-light-grey");
    $('#everyday-link').addClass("w3-white");
    $('#travel-link').removeClass("w3-white");
    $('#rfid-link').removeClass("w3-white");
    // $(id).append("<i class="fa fa-caret-right w3-margin-right"></i>");
}

function changeBigHover(id) {
    $('#womens-link').removeClass("w3-light-grey");
    $('#mens-link').removeClass("w3-light-grey");
    $('#cards-link').removeClass("w3-light-grey");
    $('#everyday-link').removeClass("w3-white");
    $('#travel-link').removeClass("w3-white");
    $('#rfid-link').removeClass("w3-white");
    $(id).addClass("w3-white");
}


// adapted from https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_clothing_store&stacked=h

function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("myBtn").click();


// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}