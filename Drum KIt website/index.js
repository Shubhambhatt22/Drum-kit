/*document.querySelector(".drum").addEventListener("click",func);
document.querySelectorAll(".drum")[1].addEventListener("click",func);
document.querySelectorAll(".drum")[2].addEventListener("click",func);
document.querySelectorAll(".drum")[3].addEventListener("click",func);
document.querySelectorAll(".drum")[4].addEventListener("click",func);
document.querySelectorAll(".drum")[5].addEventListener("click",func);
document.querySelectorAll(".drum")[6].addEventListener("click",func);
*/


for (var i = 0; i <= 6; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonSelect = this.innerHTML;
    sound(buttonSelect);
    buttonAnimation(buttonSelect);
  });
}

document.addEventListener("keydown", function (event) {
    sound(event.key);
    buttonAnimation(event.key);
});


function sound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case 'j':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case 'k':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case 'l':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
  }
}

function buttonAnimation(currentKey){
  var animation =  document.querySelector("." + currentKey);
   
  animation.classList.add("press");

  setTimeout(function(){
    animation.classList.remove("press");
  },100);
}