// $(document).ready(function(){

//    //hamburger Toggle
//    $('.humbarger').click(function(event){
//    $('.menu-list').slideToggle(500);
//    event.preventDefault();
   
//    $('.menu-list li a').click(function(event) {
//        if ($(window).width() < 768) {
//          $('.menu-list').slideUp(500);
//          event.preventDefault(); 
//        }
//      });
// });

// });

function myFunction() {
   var x = document.getElementById("mnavbar");
   if (x.className === "naavbar") {
      x.className += " responsive";
   } else {
      x.className = "naavbar";
   }
}

let changeIcon = function (icon) {
   icon.classList.toggle("fa-times");
}

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function (el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function (el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function (el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");

   btnTarget.classList.add("active");
}