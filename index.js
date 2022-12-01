var numberofbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        myfunction(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });
}
document.addEventListener("keypress",function(event){
     myfunction(event.key);
     buttonAnimation(event.key);
})

function myfunction(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;

        default:
            break;
    }

}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 200);
}