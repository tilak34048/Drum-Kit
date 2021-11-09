//Detecting key clicked on the screen via mouse
var numberofDrumButton= document.querySelectorAll(".drum").length;

for(var i=0; i<numberofDrumButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });
}

//Detecting the key pressed on the keyboard
document.addEventListener("keypress", function() {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Function to manipulate between different sounds
function makeSound(key){
  switch(key){
    case "w":
    case "W":
    var crash= new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "a":
    case "A":
    var kick= new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "s":
    case "S":
    var snare= new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "d":
    case "D":
    var audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "j":
    case "J":
    var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "k":
    case "K":
    var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "l":
    case "L":
    var audio= new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    default:console.log(key);

  }
}

function buttonAnimation(currentKey){
  var aButton=document.querySelector("."+currentKey); //concatination of the ""."" is used to denote the class
  aButton.classList.add("pressed"); //add the class pressed from the style.css

  setTimeout(function(){
    aButton.classList.remove("pressed");
  }, 100);
}
