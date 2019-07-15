function sayHi(){
    alert("Whaddup")
}


// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

if (document.documentElement.clientWidth > 980){
    $(document).ready(function() {
        $("#hidden-navbar").hide(); //hide your div initially
        var topOfOthDiv = $("#navbar").offset().top;
        $(window).scroll(function() {
            if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
                $("#hidden-navbar").show(200); //reached the desired point -- show div
            } else {
                $("#hidden-navbar").hide(200);
            }
        });
    });
}

var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onload = showSlides(slideIndex);



  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.navbar-burger')) {
//         $('#myDropdown').hide(200);
//     //   var dropdowns = document.getElementsByClassName("dropdown-content");
//     //   var i;
//     //   for (i = 0; i < dropdowns.length; i++) {
//     //     var openDropdown = dropdowns[i];
//     //     if (openDropdown.classList.contains('show')) {
//     //       openDropdown.classList.remove('show');
//     //     }
//     //   }
//     }
//   }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
    /*document.getElementById("myDropdown").classList.toggle("show");*/
    elem = document.getElementById("myDropdown");
    if (window.getComputedStyle(elem).display == 'none'){
        $('#myDropdown').show(200);
    } else{
        $('#myDropdown').hide(200);
    }
  }