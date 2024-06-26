// document.querySelectorAll("button")[0].addEventListener("click", function (){
//     alert("I got clicked!");
// });
// document.querySelectorAll("button")[1].addEventListener("click", function (){
//     alert("I got clicked!");
// });
// document.querySelectorAll("button")[2].addEventListener("click", function (){
//     alert("I got clicked!");
// });
// document.querySelectorAll("button")[3].addEventListener("click", function (){
//     alert("I got clicked!");
// });
// document.querySelectorAll("button")[4].addEventListener("click", function (){
//     alert("I got clicked!");
// });
// document.querySelectorAll("button")[5].addEventListener("click", function (){
//     alert("I got clicked!");
// });
// document.querySelectorAll("button")[6].addEventListener("click", function (){
//     alert("I got clicked!");
// });

//Detecting button press
for(i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        
        var letter = this.innerHTML;

        playAudio(letter);

        buttonAnimation(letter);

    });
}

//Detecting key press
document.addEventListener("keydown", function(event){

    var letter = event.key;

    playAudio(letter);

    buttonAnimation(letter);

});

//Playing sound
function playAudio(letter){
    switch(letter){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(letter);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

    setTimeout(
        () => {
            activeButton.classList.remove("pressed");
        }, 100
    );
}
