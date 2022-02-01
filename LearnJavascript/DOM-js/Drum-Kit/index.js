var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var button = this.textContent;
    makeSound(button)
    buttonAnimation(button)
  });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
          var file = "crash.mp3";
          break;
        case "a":
          var file = "kick-bass.mp3";
          break;
        case "s":
          var file = "snare.mp3";
          break;
        case "d":
          var file = "tom-1.mp3";
          break;
        case "j":
          var file = "tom-2.mp3";
          break;
        case "k":
          var file = "tom-3.mp3";
          break;
        case "l":
          var file = "tom-4.mp3";
          break;
        default:
            console.log(key)
      }
      var audio = new Audio(`./sounds/${file}`);
      audio.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function (){
        activeButton.classList.remove("pressed")
    }, 100)
}