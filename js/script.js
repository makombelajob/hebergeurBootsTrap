const burger = document.querySelector(".burger");
const open = document.querySelector(".open");
const close = document.querySelector("#close");

burger.addEventListener("click", function () {
   open.style.display = "block";
});

close.addEventListener("click", function() {
    open.style.display = "none";
});

document.addEventListener("click", function(e) {
   if(!burger.contains(e.target) && !close.contains(e.target) && !open.contains(e.target)){
       open.style.display = "none";
   }
});