/* fancy intro */
let message = ["Aydar Amangeldy"];
let pos = 0;
let speed = 200;
typewriter = () =>{
    document.querySelector(".tptp").innerHTML = message[0].substring(0,pos);
    if(pos++ != message[0].length)
    {
        setTimeout(typewriter, speed);
    }
}
window.addEventListener("load",typewriter);

/* scroll up Button */
const btnScrollTop = document.querySelector(".scroll_down");

btnScrollTop.addEventListener("click", function (){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });

});
/* scroll sound */
function soundTrack() {
    var audio = new Audio("sounds/scroll.mp3");
    audio.play();
}
