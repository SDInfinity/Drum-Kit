for (var i = 0; i < document.querySelectorAll(".drum").length; i++) //traversing through all the buttons
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() //whenever buttons are pressed event detected
    {
      var buttonInnerHTML = this.innerHTML; //accessing each button as the loop goes on
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML); //calling the function for playing audio
    });
}
document.addEventListener("keypress", function(event) //whenever keys are pressed event detected
  {
    makeSound(event.key);
    buttonAnimation(event.key); //calling the function for plaing audio
  });

function makeSound(key) {
  switch (key) //designating the audio files corresponding to each button
  {
    case "w":
      new Audio('sounds/tom-1.mp3').play();
      break;
    case "a":
      new Audio('sounds/tom-2.mp3').play();
      break;

    case "s":
      new Audio('sounds/tom-3.mp3').play();
      break;

    case "d":
      new Audio('sounds/tom-4.mp3').play();
      break;

    case "j":
      new Audio('sounds/snare.mp3').play();
      break;

    case "k":
      new Audio('sounds/kick-bass.mp3').play();
      break;

    case "l":
      new Audio('sounds/crash.mp3').play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
