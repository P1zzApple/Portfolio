var nob = document.querySelectorAll(".s").length;
for (var i = 0; i < nob; i++) {
	document.querySelectorAll(".s")[i].addEventListener("click", function(){
		var bih = this.innerHTML;
		switch(bih) {
			case "q":
				var audio = new Audio('sounds/erro.mp3'); 
				audio.play();
				break;
			case "w":
				var audio = new Audio('sounds/crash.mp3');
				audio.play();
				break;
			case "e":
				var audio = new Audio('sounds/kick-bass.mp3');
				audio.play();
				break;
			case "r":
				var audio = new Audio('sounds/snare.mp3');
		}
	})
}
$(document).ready(function() {
	$(".k-sliva").mouseover(function() {
 		$(".k-sliva").css("background-color", "#b8c6e0");
    });
    $(".k-sliva").mouseout(function(){
  		$(".k-sliva").css("background-color", "#DBE2EF");
	});
});

